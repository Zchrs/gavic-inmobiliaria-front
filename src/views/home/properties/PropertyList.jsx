/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BaseButton, BaseInput, BaseInputSelect } from "../../../../index";
import styled from "styled-components";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { DropZone } from "../../../components/DropZone";
import { getImg } from "../../../../globalActions";
import { Link } from "react-router-dom";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0); // Estado para el paso actual
  const totalSteps = 6; // Número total de pasos

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleComplete = () => {
    alert("Formulario completado!");
  };

  return (
    <div className="multi-step-form">
      {/* Indicador de pasos */}
      <div className="step-indicator">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`step ${
              index < currentStep
                ? "completed"
                : index === currentStep
                ? "active"
                : ""
            }`}>
            
            {(index <= currentStep) && (
              <div className="locationicon">
                <i className={`fas fa-location-dot icon green-icon`}></i>
              </div>
            )}
            <i className={`fas ${index < currentStep ? 'fa-check' : 'fa-circle'} icon`}></i>
          </div>
        ))}
      </div>

      {/* Línea de progreso */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${(currentStep / (totalSteps - 1)) * 100}%`,
          }}
        />
      </div>

      {/* Contenido del paso actual */}
      <div className="step-content">
        {currentStep === 0 && (
          <div>
            <div className="listproperty-contain">
              <div className="listproperty-titles">
                <h2 className="h2-extra-medium">Consigna tu inmueble</h2>
                <h3 className="l-bold">
                  Gracias por confiar en nuestros servicios, para consignar tu
                  inmueble es necesario que tengas los siguientes documentos
                  escaneados o en formato digital.
                </h3>
                <ol className="listproperty-titles-ol">
                  <li>Fotocopia de tu cédula</li>
                  <li>Impuesto predial</li>
                  <li>Última cuenta de servicios públicos</li>
                </ol>
              </div>
                {/* Imagen debajo del contenido del paso 0 */}
            </div>
          </div>
        )}
        {currentStep === 1 && (
          <div className="listproperty-contain">
            <div className="listproperty-titles">
              <h2 className="h2-extra-medium">Información del propietario</h2>
              <h3>
                Primero debes ingresar algunos datos del propietario del
                inmueble.
              </h3>
            </div>
            <div className="listproperty-form">
              <div>
                <BaseInput
                  classs={"inputs outline"}
                  placeholder="Nombre"
                  name="name"
                  id="name"
                  // value={form.name}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // required
                />
                {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}
              </div>
              <div>
                <BaseInput
                  classs={"inputs outline"}
                  placeholder="Número de cédula"
                  name="docId"
                  id="docId"
                  // value={form.name}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // required
                  isNumber
                />
                {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}
              </div>
              <div>
                <BaseInput
                  classs={"inputs outline"}
                  placeholder="Correo electrónico"
                  id="email"
                  name="email"
                  // value={form.email}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  isEmail
                />
                {/* {errors.email && <p className="warnings-form">{errors.email}</p>} */}
              </div>
              <div>
                <BaseInput
                  classs={"inputs outline"}
                  placeholder="Número de teléfono"
                  name="phone"
                  id="phone"
                  // value={form.name}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // required
                  isNumber
                />
                {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}
              </div>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className="listproperty-contain">
            <div className="listproperty-titles">
              <h2 className="h2-extra-medium">Información del encargado</h2>
              <h3>
                Esta información es opcional en caso de que exista una persona
                encargada del inmueble.
              </h3>
            </div>
            <div className="listproperty-form">
              <div>
                <BaseInput
                  classs={"inputs outline"}
                  placeholder="Nombre completo"
                  name="name"
                  id="name"
                  // value={form.name}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // required
                />
                {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}
              </div>
              <div>
                <BaseInput
                  classs={"inputs outline"}
                  placeholder="Número de cédula"
                  name="docId"
                  id="docId"
                  // value={form.name}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // required
                  isNumber
                />
                {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}
              </div>
              <div>
                <BaseInput
                  classs={"inputs outline"}
                  placeholder="Correo electrónico"
                  id="email"
                  name="email"
                  // value={form.email}
                  // onBlur={handleBlur}
                  // onChange={handleChange}

                  isEmail
                />
                {/* {errors.email && <p className="warnings-form">{errors.email}</p>} */}
              </div>
              <div>
                <BaseInput
                  classs={"inputs outline"}
                  placeholder="Número de teléfono"
                  name="phone"
                  id="phone"
                  // value={form.name}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // required
                  isNumber
                />
                {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}
              </div>
            </div>
          </div>
        )}
        {currentStep === 3 && (
                    <div className="listproperty-contain">
                    <div className="listproperty-titles">
                      <h2 className="h2-extra-medium">Información del Inmueble</h2>
                      <h3>
                        Esta información es obligatria para la descripción del inmueble 
                        visible al público en la app web
                      </h3>
                    </div>
                    <div className="listproperty-form">
                        <div className="flex-s">
                          <BaseInputSelect 
                          classs={"inputs outline"}
                          id="typeOffer"
                          placeholder="Oferta"
                          isSmallSelect={true}
                          name="typeOffer"
                          // value={form.country}
                          // onChange={handleCountryChange}
                          // handleBlur={handleBlur}
                          options={[
                            { value: "Vender", label: "Vender" },
                            { value: "Arrendar", label: "Arrendar" },
                          ]}
                          textLabel={true}
                          required
                          />
                          <BaseInputSelect 
                          classs={"inputs outline"}
                          id="typeProperty"
                          placeholder="Tipo de propiedad"
                          isSelect={true}
                          name="typeProperty"
                          // value={form.country}
                          // onChange={handleCountryChange}
                          // handleBlur={handleBlur}
                          options={[
                            { value: "option1", label: "Apartamento" },
                            { value: "option1", label: "Apartaestudio" },
                            { value: "option3", label: "Bodega" },
                            { value: "option4", label: "Casa" },
                            { value: "option5", label: "Casa Finca" },
                            { value: "option6", label: "Casa Local" },
                            { value: "option7", label: "Finca" },
                            { value: "option8", label: "Local" },
                            { value: "option9", label: "Oficina" },
                            { value: "option10", label: "Terreno" },
                          ]}
                          textLabel={true}
                          required
                          />
                        </div>
                        <div className="flex-s">
                        <BaseInput
                  classs={"inputs outline"}
                  placeholder="Matrícula inmobiliaria"
                  name="registrationNumber"
                  id="registrationNumber"
                  isNumber
                  // value={form.name}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // required
                />
                                <BaseInput
                  classs={"inputs outline"}
                  placeholder="Municipio"
                  name="city"
                  id="city"
                  // value={form.name}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // required
                />
                        </div>
                        <div className="flex-s">
                        <BaseInput
                  classs={"inputs outline"}
                  placeholder="Barrio"
                  name="district"
                  id="district"
                  isNumber
                  // value={form.name}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // required
                />
                                <BaseInput
                  classs={"inputs outline"}
                  placeholder="Dirección"
                  name="address"
                  id="address"
                  // value={form.name}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // required
                />
                        </div>
                        <div className="flex-s">
                        <BaseInput
                  classs={"inputs outline"}
                  placeholder="Nombre del edificio o unidad"
                  name="nameBuilding"
                  id="nameBuilding"
                  isNumber
                  // value={form.name}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // required
                />
                                <BaseInput
                  classs={"inputs outline"}
                  placeholder="comodidades"
                  name="amenities"
                  id="amenities"
                  // value={form.name}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // required
                />
                        </div>
                      </div>
                    </div>
        )}
        {currentStep === 4 && (
          <div className="listproperty-contain">
          <div className="listproperty-titles">
            <h2 className="h2-extra-medium">Adjuntar documentos</h2>
          </div>
          <div className="listproperty-form">
            <div>
              <label className="l-light" htmlFor="img_url">Copia de la cédula</label>
               <DropZone
                  // onBlur={handleBlur}
                  id="nID_url"
                  name="nID_url"
                  type="file"
                  // onChange={handleImageChange}
                  // setImages={handleSetImage}
                />
            </div>
             <div>
             <label className="l-light" htmlFor="img_url">Copia de impuesto predial</label>
               <DropZone
                  // onBlur={handleBlur}
                  id="tax_url"
                  name="tax_url"
                  type="file"
                  // onChange={handleImageChange}
                  // setImages={handleSetImage}
                />
             </div>
             <div>
             <label className="l-light" htmlFor="img_url">Ultima cuenta de servicios públicos</label>
               <DropZone
                  // onBlur={handleBlur}
                  id="sPublic_url"
                  name="sPublic_url"
                  type="file"
                  // onChange={handleImageChange}
                  // setImages={handleSetImage}
                />
             </div>
            </div>
          </div>
        )}
        {currentStep === 5 && (
          <div className="listproperty-titles">
            <h2 className="h2-extra-medium">Finalización</h2>
            <h3>Todo listo! haz clic en completar para enviar los datos</h3>
          </div>
        )}
      </div>

      {/* Botones de navegación */}
      
        <div className="navigation-buttons">
          {currentStep > 0 && (
            <BaseButton
              handleClick={handlePrevious}
              classs={"button little-secondary"}
              textLabel={true}
              label={"Atrás"}
            />
          )}
          {currentStep < totalSteps - 1 && (
            <BaseButton
              handleClick={handleNext}
              classs={"button little-primary"}
              textLabel={true}
              label={"Siguiente"}
            />
          )}
          {currentStep === totalSteps - 1 && (
            <BaseButton
              handleClick={handleComplete}
              classs={"button little-primary"}
              textLabel={true}
              label={"completar"}
            />
          )}
      </div>
      {currentStep === 0 && (
  <Link className="whatsapp">

    <img
      src={getImg("svg","whatsapp", "svg")}
      alt="Descripción de la imagen"
    />
    <h3>O si prefieres, Contacta uno de nuestros agentes para consignar tu inmueble</h3>
  </Link>
)}
    </div>
  );
};

export const PropertyList = () => {
  return (
    <ListProperty>
      <div className="listproperty pd-laterals">
        <MultiStepForm />
      </div>
    </ListProperty>
  );
};
const ListProperty = styled.section`
  display: grid;
  width: 100%;
  height: fit-content;
  gap: 10px;
  .listproperty {
    padding-top: 50px;
    display: grid;
    width: 100%;
    height: fit-content;
    gap: 5px;

    &-titles {
      display: grid;
      text-align: center;
      width: 70%;
      margin: auto;
      gap: 10px;
      h2 {
        color: var(--text-primary);
        font-weight: 700;
      }
      h3 {
        color: var(--text-dark);
        font-weight: 600;
        font-size: 22px;
      }

      &-ol {
        margin: auto;
        display: grid;
        width: fit-content;
        text-align: left;
        font-weight: 500;
        font-size: 17px;
      }
    }
    &-contain {
      display: grid;
      width: 100%;
      height: fit-content;
      border: 1px solid var(--bg-black);
      gap: 10px;
    }
    &-form {
      margin: auto;
      display: grid;
      height: fit-content;
      width: 40%;
      gap: 10px;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
  .wizard-card-footer {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .base-button {
    z-index: 10;
    width: fit-content;
    height: fit-content;
    background-color: var(--bg-primary);
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 5px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
  }
  .base-button:hover {
    background-color: navy;
  }
  .base-button:focus {
    outline: none;
  }
  .base-button:active {
    transform: translateY(2px);
  }
  .finish-button {
    width: fit-content;
    height: fit-content;
    z-index: 10;
    background-color: green;
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 5px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
  }
  .finish-button:hover {
    background-color: darkgreen;
  }
  .finish-button:focus {
    outline: none;
  }
  .finish-button:active {
    transform: translateY(2px);
  }
  .react-form-wizard.md .wizard-icon-circle {
    padding: 10px;
    width: fit-content;
    height: fit-content;
    font-size: 24px;
  }
  .smooth-border-left-to-right {
    animation: slideIn 0.3s forwards;
    border-color: var(--bg-primary) !important;
    position: absolute;
    width: 100%;
    top: 32%;
  }
  .wizard-icon-circle {
    padding: 15px !important;
    width: fit-content;
    height: fit-content;
    font-size: 24px;
    background: var(--bg-dark) !important;
    border: none;
  }
  .wizard-icon-container {
    background: transparent !important;
    color: black !important;
  }
  [class^="ti-"],
  [class*=" ti-"] {
    font-family: "themify";
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    color: white;
  }
  .ti {
    span {
      background: transparent;
    }

    &-user,
    &-info,
    &-settings,
    &-check &::before {
      width: fit-content;
      height: fit-content;
      background: none !important;
      background-color: transparent !important;
    }
  }

  .stepTitle {
    color: var(--text-dark);
  }
  .checked {
    background: var(--bg-primary) !important;
    color: var(--text-primary) !important;
  }

  * {
    box-sizing: border-box;
    width: 100%;
    height: fit-content;
    background: transparent;
  }

  .step-indicator {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .step {
    position: relative;
    width: 40px;
    height: 35px;
    line-height: 40px;

    position: relative;
    background: transparent;
    color: var(--text-dark);
    font-weight: bold;
    text-align: center;
    z-index: 10;
     &::before {
      content: "";
      margin: auto;
      bottom: 0;
      right: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background: #ccc;
      clip-path: polygon(
        20% 0,
        80% 0,
        100% 20%,
        100% 80%,
        80% 100%,
        20% 100%,
        0 80%,
        0 20%
      );
      z-index: -1;
    } 
  }

  .step.completed {
     &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--bg-primary);
      clip-path: polygon(
        20% 0,
        80% 0,
        100% 20%,
        100% 80%,
        80% 100%,
        20% 100%,
        0 80%,
        0 20%
      );
      z-index: -1;
    } 
    background: transparent;
    z-index: 10;

  }
  .step.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: var(--text-tertiary);
}
.step.completed .icon {
  color: var(--text-tertiary);
}
  .step.active {
    color: var(--text-tertiary);
    background: transparent;
    z-index: 10;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--bg-primary-semi);
      clip-path: polygon(
        20% 0,
        80% 0,
        100% 20%,
        100% 80%,
        80% 100%,
        20% 100%,
        0 80%,
        0 20%
      );
      z-index: -1;
    }
  }

  /* Línea de progreso */
  .progress-bar-container {
    top: -40px;
    width: 100%;
    height: 6px;
    background-color: #ccc;
    position: relative;
    border-radius: 2px;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background-color: var(--bg-primary);
    transition: width 0.3s ease-in-out;
  }

  .step-content {
    margin-bottom: 20px;
  }

  .navigation-buttons {
    display: flex;
    width: fit-content;
    gap: 10px;
    margin: auto;
  }

  .navigation-buttons button:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  .whatsapp{
    border: 1px solid var(--bg-black);
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: auto;
    padding-top: 50px;
    line-height: 1.1;
    color: var(--text-black);
    img{
      width: 50px;
    }
  }
  .locationicon{
    z-index: 10;
    position: absolute;
    height: 40px; 
    top: -82%;
    color: var(--text-primary);
  }
 .green-icon {
  transition: all 0.3s ease;
    z-index: 10;
  color: var(--text-primary);
}
`;
