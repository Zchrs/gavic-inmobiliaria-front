/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export const MultiDropZone = ({ id, setImages, name, type }) => {
  const [active, setActive] = useState(false);
  const [dropzoneFiles, setDropzoneFiles] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const MAX_FILES = 4;
  const MAX_FILE_SIZE_MB = 30;

  const toggleActive = () => {
    setActive(!active);
  };

  const validateFiles = (files) => {
    // Verificar cantidad máxima
    if (files.length > MAX_FILES) {
      setErrorMessage(`Solo puedes subir un máximo de ${MAX_FILES} imágenes`);
      return false;
    }

    // Verificar tamaño máximo por archivo
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setErrorMessage(
          `El archivo ${file.name} excede el tamaño máximo de ${MAX_FILE_SIZE_MB}MB`
        );
        return false;
      }
    }

    // Verificar tipo de archivo
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    for (const file of files) {
      if (!validTypes.includes(file.type)) {
        setErrorMessage(
          `El archivo ${file.name} no es una imagen válida (JPEG, PNG o WEBP)`
        );
        return false;
      }
    }

    return true;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setActive(false);
    setErrorMessage("");

    const files = Array.from(e.dataTransfer.files);

    if (!validateFiles(files)) return;

    // Combinar archivos existentes con nuevos (sin exceder el máximo)
    const combinedFiles = [...dropzoneFiles, ...files].slice(0, MAX_FILES);

    setDropzoneFiles(combinedFiles);
    setImages(combinedFiles);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const files = Array.from(e.target.files);

    if (!validateFiles(files)) return;

    // Combinar archivos existentes con nuevos (sin exceder el máximo)
    const combinedFiles = [...dropzoneFiles, ...files].slice(0, MAX_FILES);

    setDropzoneFiles(combinedFiles);

    if (combinedFiles.length > 0) {
      try {
        const formData = new FormData();
        combinedFiles.forEach((file, index) => {
          formData.append("img_url", file);
        });

        const response = await axios.post(
          import.meta.env.VITE_APP_API_UPDLAD_IMAGE_URL,
          formData
        );

        if (response.status === 200) {
          const data = response.data;
          setImages(data.imageUrls);
          setSuccessMessage("¡Imágenes enviadas correctamente!");
          setTimeout(() => setSuccessMessage(""), 3000);
        }
      } catch (error) {
        console.error("Error al subir las imágenes:", error);
        setErrorMessage("Error al subir las imágenes");
      }
    }
  };

  const removeImage = (index) => {
    const updatedFiles = [...dropzoneFiles];
    updatedFiles.splice(index, 1);
    setDropzoneFiles(updatedFiles);
    setImages(updatedFiles);
    setErrorMessage("");
  };

  return (
    <MultiDropzone>
      <div className={`dropzone ${active ? "dropzone-active" : ""}`}>
        <div>
          <label
            htmlFor={id}
            onDragEnter={toggleActive}
            onDragLeave={toggleActive}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="dropzone__border">
            <div className="dropzone__drag">
              <input
                type={type}
                className={`dropzoneFile dropzone__input ${id}`}
                id={id}
                name={name}
                onChange={handleFileUpload}
                multiple
                accept="image/jpeg, image/png, image/webp"
              />
              <div className="dropzone__title">
                <p className="dropzone__upload">
                  Arrastra y suelta los archivos aquí, o{" "}
                  <strong>Busca en tu computadora</strong>
                </p>
                <p className="dropzone__upload">
                  Máximo {MAX_FILES} imágenes (JPEG, PNG, WEBP) de hasta{" "}
                  <b>{MAX_FILE_SIZE_MB}MB</b> cada una
                </p>
                <p className="dropzone__upload">
                  Imágenes seleccionadas: {dropzoneFiles.length}/{MAX_FILES}
                </p>
              </div>

              {errorMessage && (
                <p className="error-message" style={{ color: "red" }}>
                  {errorMessage}
                </p>
              )}

              {successMessage && (
                <p className="success-message" style={{ color: "green" }}>
                  {successMessage}
                </p>
              )}
            </div>
          </label>
        </div>

        <div className={`dropzone-preview ${active ? "dropzone-active" : ""}`}>
          {dropzoneFiles.map((file, index) => (
            <div key={index} className="image-preview">
              <img
                src={URL.createObjectURL(file)}
                alt={`Preview ${index}`}
                className="preview-image"
              />
              <button
                type="button"
                className="remove-image-btn"
                onClick={() => removeImage(index)}>
                ×
              </button>
              {/* <span className="file-name">{file.name}</span> */}
            </div>
          ))}
        </div>
      </div>
    </MultiDropzone>
  );
};

const MultiDropzone = styled.div`
  display: grid;
  .dropzone {
    display: grid;
    align-items: start;
    background-color: rgb(254, 253, 250);
    border-radius: 8px;
    border: 1px dashed var(--bg-secondary);
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    &__drag {
      display: block;
      margin: 0 auto;
      padding: 16px;
      width: 100%;

      @media (max-width: 460px) {
        width: 90%;
      }
    }
    &__input {
      display: none;
    }
    &__title {
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      text-align: center;
    }
    &__upload {
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: center;
      color: black;

      strong {
        font-weight: 700;
      }
    }
    &-active {
      display: flex;
      background-color: rgba(51, 106, 179, 0.05);
      width: 100%;
    }
    img {
      width: 100%;
      object-fit: contain;
      border-radius: 10px;
    }
    
    &-preview {
      gap: 5px;
      display: grid;
      margin: auto;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
      width: 70%;
    }
  }
  .image-preview{
    position: relative;
    display: grid;
    align-items: start;
    overflow: hidden;
    width: 100%;
  }
  .file-info {
    display: flex;
    gap: 4px;
    text-align: center;
    margin-top: 6px;
    color: black;
  }
  .selected-image {
    margin: auto;
    width: 30%;
  }
  .remove-image-btn{
    position: absolute;
    top: 5px;
    right: 5px;
    background: transparent;
    border: 1px solid var(--bg-secondary);
    color: var(--bg-secondary);
    font-size: 18px;
    width: fit-content;
    height: fit-content;
    margin: 0;
    padding: 0px 5px;
  }
  .group {
    text-align: center;
    place-content: center;
    display: grid;
    gap: 10px;
    img {
      width: 100px;
    }
    p {
      color: green;
    }
  }
`;
