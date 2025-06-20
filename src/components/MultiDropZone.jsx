/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';

// export const MultiDropZone = ({ id, setImages, name, type, multiple }) => {
//   const [active, setActive] = useState(false);
//   const [dropzoneFiles, setDropzoneFiles] = useState([]);
//   const [successMessage, setSuccessMessage] = useState("");

//   const toggleActive = () => {
//     setActive(!active);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const files = Array.from(e.dataTransfer.files);
//     setDropzoneFiles(files);
//     setImages(files);
//   };

//   const handleFileUpload = async (e) => {
//     e.preventDefault();
//     const files = Array.from(e.target.files);
//     setDropzoneFiles(files);

//     if (files.length > 0) {
//       try {
//         const formData = new FormData();
//         files.forEach((file) => {
//           formData.append("img_url", file);
//         });

//         const response = await axios.post(
//           import.meta.env.VITE_APP_API_UPLOAD_IMAGES_PROPERTIES_URL,
//           formData
//         );

//         if (response.status === 200) {
//           const data = response.data;
//           setImages(data.imageUrls);
//           console.log("Imágenes enviadas correctamente");
//           setSuccessMessage("¡Imágenes enviadas correctamente!");
//         } else {
//           console.error("Error al subir las imágenes:", response.statusText);
//         }
//       } catch (error) {
//         console.error("Error al subir las imágenes:", error);
//       }
//     } else {
//       console.error("No se seleccionaron archivos.");
//       return;
//     }
//   };

//   const handleRemoveImage = (indexToRemove) => {
//     const updatedFiles = dropzoneFiles.filter((_, i) => i !== indexToRemove);
//     setDropzoneFiles(updatedFiles);
//     setImages(updatedFiles);
//   };

//   return (
//     <MultiDropzone>
//       <div className={`multidropzone ${active ? "active-dropzone" : ""}`}>
//         <label
//           htmlFor={id}
//           onDragEnter={toggleActive}
//           onDragLeave={toggleActive}
//           onDragOver={(e) => e.preventDefault()}
//           onDrop={handleDrop}
//           className="multidropzone__border"
//         >
//           <div className="multidropzone__drag">
//             <input
//               type={type}
//               className={`multidropzone__input ${id}`}
//               id={id}
//               name={name}
//               onChange={handleFileUpload}
//               multiple={multiple}
//             />
//             <div className="multidropzone__title">
//               <p className="multidropzone__upload">
//                 Arrastra y suelta los archivos, o{" "}
//                 <strong>Busca en tu computadora</strong>
//               </p>
//               <p className="multidropzone__upload">Sube archivos de hasta 30 MB</p>
//             </div>
//             <div className="multidropzone-group">
//             <div className="flex-l">
//             {dropzoneFiles.map((file, index) => (
//                 <div key={index} className="image-preview">
//                   <img
//                     src={URL.createObjectURL(file)}
//                     alt={`Selected ${index}`}
//                   />
//                   <button
//                     type="button"
//                     className="remove-button"
//                     onClick={() => handleRemoveImage(index)}
//                   >
//                     X
//                   </button>
//                 </div>
//               ))}
//             </div>
//               {successMessage && <p>{successMessage}</p>}
//             </div>
//           </div>
//         </label>
//       </div>
//     </MultiDropzone>
//   );
// };


export const MultiDropZone = ({ id, setImages, name, type }) => {
  const [active, setActive] = useState(false);
  const [dropzoneFiles, setDropzoneFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('idle'); // 'idle', 'uploading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  // Configuración para Hostinger
  const HOSTINGER_UPLOAD_URL = 'https://gavicinmobiliaria.com/upload-multi.php';
  const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30MB
  const MAX_FILES = 4;

  const handleDragEvents = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files).slice(0, MAX_FILES);
      validateAndSetFiles(files);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files).slice(0, MAX_FILES);
      validateAndSetFiles(files);
    }
  };

  const validateAndSetFiles = (files) => {
    // Validar cantidad de archivos
    if (files.length > MAX_FILES) {
      setUploadStatus('error');
      setErrorMessage(`Máximo ${MAX_FILES} imágenes permitidas`);
      return;
    }

    // Validar tipos y tamaños
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    const invalidFiles = files.filter(file => 
      !validTypes.includes(file.type) || file.size > MAX_FILE_SIZE
    );

    if (invalidFiles.length > 0) {
      setUploadStatus('error');
      setErrorMessage('Algunos archivos no cumplen con los requisitos (JPEG/PNG/GIF/WEBP, máximo 30MB)');
      return;
    }

    setDropzoneFiles(files);
    setUploadStatus('idle');
    setErrorMessage('');
    uploadToHostinger(files);
  };

  const uploadToHostinger = async (files) => {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`images[${index}]`, file);
    });

    try {
      setUploadStatus('uploading');
      setUploadProgress(0);

      const response = await axios.post(
        HOSTINGER_UPLOAD_URL,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          }
        }
      );

      if (response.data && response.data.success && response.data.imageUrls) {
        setImages(response.data.imageUrls);
        setUploadStatus('success');
        console.log(response.data.imageUrls);
      } else {
        throw new Error(response.data.error || 'Error en la subida');
      }
    } catch (error) {
      console.error('Error al subir a Hostinger:', error);
      setUploadStatus('error');
      setErrorMessage(error.response?.data?.error || error.message || 'Error al subir las imágenes');
      setDropzoneFiles([]);
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    const updatedFiles = dropzoneFiles.filter((_, i) => i !== indexToRemove);
    setDropzoneFiles(updatedFiles);
    setImages(updatedFiles.map(file => URL.createObjectURL(file)));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
  <MultiDropzone>
    <div className={`multi-dropzone-container ${active ? 'active' : ''}`}>
      <div
        className="multi-dropzone-area"
        onDragEnter={handleDragEvents}
        onDragLeave={handleDragEvents}
        onDragOver={handleDragEvents}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <input
          ref={fileInputRef}
          type="file"
          id={id}
          name={name}
          className="file-input"
          onChange={handleFileChange}
          accept="image/*"
          multiple
          style={{ display: 'none' }}
        />

        {dropzoneFiles.length === 0 ? (
            <div className="dropzone-content">
              <div className="upload-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <p className="dropzone-text">
                Arrastra y suelta hasta {MAX_FILES} imágenes aquí o haz clic para seleccionarlas
              </p>
              <p className="dropzone-hint">
                Formatos soportados: JPEG, PNG, GIF, WEBP (hasta 30MB cada una)
              </p>
            </div>
                    ) : (
            <div className="preview-grid">
              {dropzoneFiles.map((file, index) => (
                <div key={index} className="image-preview-container">
                  <div className="image-preview">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index + 1}`}
                      className="preview-image"
                    />
                    <button
                      type="button"
                      className="remove-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage(index);
                      }}
                    >
                      ×
                    </button>
                  </div>
                  {/* <div className="file-info">
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div> */}
                </div>
              ))}
            </div>
                    )}
            
                    {uploadStatus === 'uploading' && (
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
              <span className="progress-text">{uploadProgress}%</span>
            </div>
                    )}
            
                    {uploadStatus === 'error' && (
            <div className="error-message">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>{errorMessage}</span>
            </div>
                    )}
            
                    {uploadStatus === 'success' && (
            <div className="success-message">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>¡Imágenes subidas correctamente!</span>
            </div>
                    )}
                  </div>
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
    &-group{
    position: relative;
    display: grid;
    width: 70%;
    gap: 10px;
    text-align  : center;
    place-items: center;
    margin: auto;

    p{
      color: green;
    }
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
  .image-preview{
    display: grid;
    position: relative;
    align-items: center;
    place-items: center;
    width: 100%;
    img{
      width: 100%;
    }
  }

  .flex-l{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    align-items: center;
    place-items: center;
    position: relative;
  }

  .remove-button{
    width: fit-content;
    height: fit-content;
    display: grid;
    z-index: 100a;
    position: absolute;
    place-content: center;
    border: 1px solid red;
    background-color: white;
    padding: 2px 5px;
    font-size: 10px;
    font-weight: 300;
   color: red;
    pad: 0;
    top: 5px;
    right: 5px;
  }

  // estilo de nuevo diseño

  .multi-dropzone-container {
    display: flex;
  width: 100%;
  margin: 20px 0;
}

.multi-dropzone-area {
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 25px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.multi-dropzone-area.active {
  border-color: #4CAF50;
  background-color: #f8f8f8;
}

.dropzone-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.upload-icon {
  color: #666;
  margin-bottom: 10px;
}

.dropzone-text {
  margin: 0;
  color: #333;
  font-size: 16px;
}

.dropzone-hint {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(70px, 1fr));
  gap: 15px;
  width: 100%;
}

.image-preview-container {
  position: relative;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
}

.image-preview {
  position: relative;
  padding-top: 100%; /* Aspect ratio 1:1 */
  background: #f5f5f5;
}

.preview-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-info {
  padding: 8px;
  background: #f9f9f9;
  font-size: 12px;
}

.file-name {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10px;
}

.file-size {
  color: #666;
}

.progress-container {
  width: 100%;
  background: #f0f0f0;
  border-radius: 4px;
  margin-top: 15px;
  overflow: hidden;
}

.progress-bar {
  height: 6px;
  background: #4CAF50;
  transition: width 0.3s ease;
}

.progress-text {
  display: block;
  margin-top: 5px;
  font-size: 12px;
  color: #666;
}

.success-message, .error-message {
  margin-top: 15px;
  padding: 8px 12px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.success-message {
  background: #e8f5e9;
  color: #2e7d32;
    font-size: 12px;
  svg{
    margin: auto;
  }
}

.error-message {
  background: #ffebee;
  color: #c62828;
}
  `