/* eslint-disable no-debugger */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import{ useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
export const DropZone = ({ name, type, id, setImage }) => {
  const [active, setActive] = useState(false);
  const [dropzoneFile, setDropzoneFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const toggleActive = () => {
    setActive(!active);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setDropzoneFile(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
      setImage(preview, id);
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      setDropzoneFile(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
      setImage(preview, id);

      try {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.post(
          import.meta.env.VITE_APP_API_UPLOAD_IMAGE_PROPERTIES_URL,
          formData
        );

        if (response.status === 200) {
          const data = response.data;
          setImage(data.imageUrl, id);
          setPreviewUrl(data.imageUrl);
          setSuccessMessage("¡Imagen enviada correctamente!");
        } else {
          console.error("Error uploading image:", response.statusText);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.error("No file selected.");
    }
  };

  const handleRemoveImage = () => {
    setDropzoneFile(null);
    setPreviewUrl(null);
    setSuccessMessage("");
    setImage(null, id); // limpiar en el padre también
  };

  return (
    <ZoneDrop>
      <div className={`card-profile ${active ? "active-dropzone" : ""}`}>
        <label
          htmlFor={id}
          onDragEnter={toggleActive}
          onDragLeave={toggleActive}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="dropzone card-profile__border"
        >
          <div className="card-profile__drag">
            <input
              type={type}
              className={`dropzoneFile card-profile__input ${id}`}
              id={id}
              name={name}
              onChange={handleFileUpload}
            />
            <div className="card-profile__title">
              <p className="card-profile__upload">
                Arrastra y suelta tu foto aquí, o{" "}
                <strong>buscala en tu computadora</strong>
              </p>
              <p className="card-profile__upload">
                Carga una foto de hasta <b>30MB.</b>
              </p>
            </div>

            <div className="group">
              {/* {dropzoneFile && (
                <span className="file-info">{dropzoneFile.name}</span>
              )} */}
              {previewUrl && (
                <>
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="selected-image"
                  />
                  <button type="button" onClick={handleRemoveImage} className="remove-btn">
                    X
                  </button>
                </>
              )}
              {successMessage && <p>{successMessage}</p>}
            </div>
          </div>
        </label>
      </div>
    </ZoneDrop>
  );
};

  const ZoneDrop = styled.div`
  .card-profile {
    display: grid;
    background-color: white;
    border-radius: 8px;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    &__border {
      display: grid;
      
      width: 100%;
      border: 1px dashed var(--bg-secondary);
      border-radius: 4px;
    }
    &__drag {
      display: grid;
      place-items: center;
      padding: 8px;
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

      strong{
        font-weight: 700;
      }
    }
  }
  
  .active-dropzone {
    background-color: rgba(51, 106, 179, 0.05);
  }
  
  .file-info {
    gap: 4px;
    display: grid;
    text-align: center;
    margin-top: 6px;
    color: black;
  }
  .selected-image{
    width: 100%;
  }
  .group{
    display: grid;
    position: relative;
    width: 30%;
    gap: 10px;

    p{
      color: green;
    }
  }
  .remove-btn{
    width: 10px;
    height: 30px;
    display: grid;
    position: absolute;
    place-content: center;
    border: 1px solid red;
    background-color: transparent;
    top: 5px;
    right: 5px;
  }
  `