/* eslint-disable no-debugger */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import{ useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
export const DropZone = ({ title, text, name, type, id, setImage, onChange}) => {
    const [active, setActive] = useState(false);
    const [dropzoneFile, setDropzoneFile] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
  
    const toggleActive = () => {
      setActive(!active);
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      setSelectedFile(e.dataTransfer.files[0]);
      setDropzoneFile(e.dataTransfer.files[0]);
      setImage(e.dataTransfer.files[0], id);
    };

    // const handleOnchangeSelect = (e, ) => {
    //     e.preventDefault();
    //     const file = e.target.files[0];
    //     if (file) {
    //         setDropzoneFile(file);
    //         setSelectedFile(file);
    //         setImage(file);
    //     }
        
    // };

    // const handleFileUpload = async (e) => {
    //     e.preventDefault();
    //     if (selectedFile) { // Verificar si hay un archivo seleccionado

    //         try {
    //             const formData = new FormData();
    //             formData.append('image', selectedFile);

    //             const response = await axios.post(
    //                 import.meta.env.VITE_APP_API_UPDLAD_IMAGE_URL,
    //                 formData
    //             );

    //             if (response.status === 200) {
    //                 const data = response.data;
    //                 setImage(data.imageUrl);
    //                 console.log('Imagen Enviada correctamente', data.imageUrl)
                    
    //             } else {
    //                 console.error('Error uploading image:', response.statusText);
    //             }
    //         } catch (error) {
    //             console.error('Error uploading image:', error);
    //         }
    //     } else {
    //         console.error('No file selected.');
    //         return;
    //     }
    // };

    const handleFileUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setSelectedFile(file);
        setDropzoneFile(file);
        if (file) { // Verificar si hay un archivo seleccionado

            try {
                const formData = new FormData();
                formData.append('image', file);

                const response = await axios.post(
                    import.meta.env.VITE_APP_API_UPDLAD_IMAGE_URL,
                    formData
                );

                if (response.status === 200) {
                    const data = response.data;
                    setImage(data.imageUrl);
                    console.log('Imagen Enviada correctamente')
                    setSuccessMessage("¡Imagen enviada correctamente!");
                    
                } else {
                    console.error('Error uploading image:', response.statusText);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            console.error('No file selected.');
            return;
        }
    };
  

   //     e.preventDefault();
    //     const imageProduct = e.target.files[0];
        
    //     if (imageProduct) {
            
    //         try {
    //             debugger
    //             const response = await axios.post(
    //                 import.meta.env.VITE_APP_API_UPDLAD_IMAGE_URL,
    //                 ImageProduct
    //                 );
                    
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setImage(data.imageUrl);
    //             } else {
    //                 console.error('Error uploading image:', response.statusText);
    //             }
    //         } catch (error) {
    //             console.error('Error uploading image:', error);
    //         }
    //     }
    // };
    
    return (
      <ZoneDrop>
        <div className={`card-profile ${active ? 'active-dropzone' : ''}`}>
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
                <p className="card-profile__upload">Arrastra y suelta tu foto aquí, o <strong>buscala en tu computadora</strong></p>
                <p className="card-profile__upload">Carga un a foto de hasta <b>30MB.</b></p>
              </div>
              <div className='group'>
                  <span className="file-info">{dropzoneFile && dropzoneFile.name}</span>
                  {dropzoneFile && (
                    <img src={URL.createObjectURL(dropzoneFile)} alt="Selected" className="selected-image" />
                  )}
              {successMessage && <p>{successMessage}</p>}
              </div>
              {/* <button onClick={handleFileUpload} disabled={!selectedFile}>Cargar Imagen</button> */}
            </div>
          </label>
        </div>
      </ZoneDrop>
    );
  };

  const ZoneDrop = styled.div`
  .card-profile {
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
      display: block;
      margin: 0 auto;
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
    margin: auto;
    width: 30%;
  }
  .group{
    text-align: center;
    place-content: center;
    display: grid;
    gap: 10px;
    p{
      color: green;
    }
  }
  `