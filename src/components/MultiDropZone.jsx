/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from "axios";
import styled from 'styled-components';

export const MultiDropZone = ({ id, setImages, name, type }) => {
  const [active, setActive] = useState(false);
  const [dropzoneFiles, setDropzoneFiles] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const toggleActive = () => {
    setActive(!active);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setDropzoneFiles(files);
    setImages(files);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    setDropzoneFiles(files);
    if (files.length > 0) {
      try {
        const formData = new FormData();
        files.forEach((file, index) => {
          formData.append('img_url', file);
        });

        const response = await axios.post(
          import.meta.env.VITE_APP_API_UPLOAD_IMAGES_PROPERTIES_URL,
          formData
        );

        if (response.status === 200) {
          const data = response.data;
          setImages(data.imageUrls); // Asumiendo que el servidor devuelve un array de URLs de imágenes
          console.log('Imágenes enviadas correctamente');
          setSuccessMessage("¡Imágenes enviadas correctamente!");
        } else {
          console.error('Error al subir las imágenes:', response.statusText);
        }
      } catch (error) {
        console.error('Error al subir las imágenes:', error);
      }
    } else {
      console.error('No se seleccionaron archivos.');
      return;
    }
  };

  return (
    <MultiDropzone>
      <div className={`multidropzone ${active ? 'active-dropzone' : ''}`}>
        <label
          htmlFor={id}
          onDragEnter={toggleActive}
          onDragLeave={toggleActive}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="multidropzone__border"
        >
          <div className="multidropzone__drag">
            <input
              type={type}
              className={`multidropzone__input ${id}`}
              id={id}
              name={name}
              onChange={handleFileUpload}
              multiple // Permite la selección de múltiples archivos
            />
            <div className="multidropzone__title">
              <p className="multidropzone__upload">Arrastra y suelta los archivos, o <strong>Busca en tu computadora</strong></p>
              <p className="multidropzone__upload">Sube archivos de hasta 30 MB</p>
            </div>
            <div className='group'>
              {dropzoneFiles.map((file, index) => (
                <div key={index}>
                  <span className="file-info">{file.name}</span>
                  <img src={URL.createObjectURL(file)} alt={`Selected ${index}`} className="selected-image" />
                </div>
              ))}
              {successMessage && <p>{successMessage}</p>}
            </div>
          </div>
        </label>
      </div>
    </MultiDropzone>
  );
};


  const MultiDropzone = styled.div`
  display: grid;
    .multidropzone {
    background-color: white;
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
      visibility: hidden;
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
    margin: auto;
    width: 30%;
  }
  .group{
    text-align: center;
    place-content: center;
    display: grid;
    gap: 10px;
    img{
      width: 100px;
    }
    p{
      color: green;
    }
  }
  `