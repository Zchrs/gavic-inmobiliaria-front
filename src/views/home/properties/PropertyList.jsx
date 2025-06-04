/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BaseButton, BaseInput, MultiDropZone } from "../../../../index";
import styled from "styled-components";
import { DropZone } from "../../../components/DropZone";
import { getImg } from "../../../../globalActions";
import { Link } from "react-router-dom";
import { values } from "../../../sectors/dataSectors";
import { initialForm, useForm } from "../../../hooks/useForm";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useValidations } from "../../../hooks/useValidations";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0); // Estado para el paso actual

  const { formRefs, validateFormListPropertyClient } = useValidations();
  const totalSteps = 6; // Número total de pasos

  const stepFields = {
    1: ["name", "lastname", "dnaId", "expDate", "email", "phone"],
    2: [
      "hasManager",
      "nameManager",
      "docIdManager",
      "emailManager",
      "phoneManager",
    ],
    3: [
      "title",
      "city",
      "price",
      "district",
      "category",
      "furnished",
      "admon",
      "description",
      "bedRoom",
      "bathRoom",
      "diningRoom",
      "closets",
      "kitchen",
      "floor",
      "parking",
      "stratum",
      "clothing",
      "action",
    ],
    4: [],
  };

  useEffect(() => {
    const selectedDepartment = departamentos.find(
      (dep) => dep.departamento === "Antioquia"
    );
    if (selectedDepartment) {
      setCities(selectedDepartment.ciudades);
    }
  }, []);

  const handleNext = () => {
    const currentFields = stepFields[currentStep];

    // Si el paso actual no requiere validación, avanzar normalmente
    if (!currentFields) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    // Paso 2: validar solo si hay encargado
    if (currentStep === 2 && !hasManager) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    // Filtrar solo los campos del formulario que corresponden a este paso
    const partialForm = {};
    currentFields.forEach((field) => {
      partialForm[field] = form[field];
    });

    const validationErrors = validateFormListPropertyClient(partialForm);

    if (Object.keys(validationErrors).length === 0) {
      setCurrentStep((prev) => prev + 1); // Si no hay errores, continuar
    } else {
      console.log("Errores de validación:", validationErrors);
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

  const {
    form,
    hasManager,
    departamentos,
    cities,
    setCities,
    handleSubmitProperty,
    setHasManager,
    handleChange,
    handleBlur,
    handleSetImage,
    handleImageChange,
    handleSetImages,
    handleImagesChange,
  } = useForm(initialForm, validateFormListPropertyClient);

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
            {index <= currentStep && (
              <div className="locationicon">
                <i className={`fas fa-location-dot icon green-icon`}></i>
              </div>
            )}
            <i
              className={`fas ${
                index < currentStep ? "fa-check" : "fa-circle"
              } icon`}></i>
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
                  inputRef={formRefs.name}
                  classs={"inputs normal"}
                  placeholder="Nombre"
                  name="name"
                  id="name"
                  value={form.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                />
                {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}
              </div>
              <div>
                <BaseInput
                  inputRef={formRefs.lastname}
                  classs={"inputs normal"}
                  placeholder="Apellido"
                  name="lastname"
                  id="lastname"
                  value={form.lastname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                />
                {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}
              </div>
              <div>
                <BaseInput
                  inputRef={formRefs.dnaId}
                  classs={"inputs normal"}
                  placeholder="Número de cédula"
                  name="dnaId"
                  id="dnaId"
                  value={form.dnaId}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  isNumber
                />
                {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}
              </div>
              <div>
                <BaseInput
                  inputRef={formRefs.expDate}
                  classs={"inputs normal"}
                  placeholder="Fecha de expedición"
                  name="expDate"
                  id="expDate"
                  value={form.expDate}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  isDate
                />
                {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}
              </div>
              <div>
                <BaseInput
                  inputRef={formRefs.email}
                  classs={"inputs normal"}
                  placeholder="Correo electrónico"
                  id="email"
                  name="email"
                  value={form.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isEmail
                />
                {/* {errors.email && <p className="warnings-form">{errors.email}</p>} */}
              </div>
              <div>
                <BaseInput
                  inputRef={formRefs.phone}
                  classs={"inputs normal"}
                  placeholder="Número de teléfono, ej: +57 000 000 0000"
                  name="phone"
                  id="phone"
                  value={form.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  isNumber
                />
                {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <>
            <div className="listproperty-info">
              <div className="listproperty-manager">
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    checked={hasManager}
                    onChange={(e) => setHasManager(e.target.checked)}
                  />
                  <span className="custom-checkbox"></span>
                  <span className="checkbox-label">
                    ¿Existe un encargado del inmueble?
                  </span>
                </label>
              </div>
              <span className="checkbox-label">
                Marca esta casilla si existe un encargado del inmueble
              </span>
            </div>

            {hasManager && (
              <div className="listproperty-contain">
                <div className="listproperty-titles">
                  <h2 className="h2-extra-medium">Información del encargado</h2>
                  <h3>
                    Esta información es opcional en caso de que exista una
                    persona encargada del inmueble.
                  </h3>
                </div>
                <div className="listproperty-form">
                  <div>
                    <BaseInput
                      inputRef={formRefs.nameManager}
                      classs={"inputs normal"}
                      placeholder="Nombre completo"
                      name="nameManager"
                      id="nameManager"
                      value={form.nameManager}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <BaseInput
                      inputRef={formRefs.docIdManager}
                      classs={"inputs normal"}
                      placeholder="Número de cédula"
                      name="docIdManager"
                      id="docIdManager"
                      value={form.docIdManager}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      isNumber
                    />
                  </div>
                  <div>
                    <BaseInput
                      inputRef={formRefs.emailManager}
                      classs={"inputs normal"}
                      placeholder="Correo electrónico"
                      id="emailManager"
                      name="emailManager"
                      value={form.emailManager}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isEmail
                    />
                  </div>
                  <div>
                    <BaseInput
                      inputRef={formRefs.phoneManager}
                      classs={"inputs normal"}
                      placeholder="Número de teléfono"
                      name="phoneManager"
                      id="phoneManager"
                      value={form.phoneManager}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      isNumber
                    />
                  </div>
                </div>
              </div>
            )}
          </>
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
              <div className="grid">
                <BaseInput
                  required
                  inputRef={formRefs.title}
                  id="title"
                  name="title"
                  placeholder={"Título"}
                  classs={"inputs normal"}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.title}
                />
                <BaseInput
                  required
                  inputRef={formRefs.city}
                  classs={"inputs normal"}
                  placeholder={"Ciudad"}
                  options={cities.map((ciudad) => ({
                    value: ciudad, // El valor que se guardará (puede ser el nombre o un ID si lo tienes)
                    label: ciudad, // Lo que se muestra en el dropdown
                  }))}
                  value={form.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isSelect
                  id="city"
                  name="city"
                />
                <div className="grid-k">
                  <BaseInput
                    required
                    inputRef={formRefs.price}
                    placeholder={"Precio"}
                    isNumber
                    classs={"inputs normal"}
                    id="price"
                    name="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.price}
                  />
                  <BaseInput
                    required
                    inputRef={formRefs.area}
                    placeholder={"Precio"}
                    isNumber
                    classs={"inputs normal"}
                    id="area"
                    name="area"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.area}
                  />
                </div>
                  <BaseInput
                    required
                    inputRef={formRefs.district}
                    classs={"inputs normal"}
                    placeholder={"Sector"}
                    options={values}
                    value={form.district}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isSelect
                    id="district"
                    name="district"
                  />
                <div className="grid-three">
                  <BaseInput
                    required
                    inputRef={formRefs.category}
                    options={[
                      { value: "Apartamento", label: "Apartamento" },
                      { value: "Apartaestudio", label: "Apartaestudio" },
                      { value: "Bodega", label: "Bodega" },
                      { value: "Casa", label: "Casa" },
                      { value: "Casa Finca", label: "Casa Finca" },
                      { value: "Casa Local", label: "Casa Local" },
                      { value: "Finca", label: "Finca" },
                      { value: "Local", label: "Local" },
                      { value: "Oficina", label: "Oficina" },
                    ]}
                    placeholder={"Categoría"}
                    value={form.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    classs={"inputs normal"}
                    isSelect
                    id="category"
                    name="category"
                    type="text"
                  />
                  <BaseInput
                    required
                    inputRef={formRefs.furnished}
                    options={[
                      { value: "Sí", label: "Sí" },
                      { value: "No", label: "No" },
                    ]}
                    placeholder={"Amoblado"}
                    value={form.furnished}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    classs={"inputs normal"}
                    isSelect
                    id="furnished"
                    name="furnished"
                    type="text"
                  />
                  <BaseInput
                    required
                    inputRef={formRefs.admon}
                    options={[
                      { value: "Sí", label: "Sí" },
                      { value: "No", label: "No" },
                    ]}
                    placeholder={"Administración"}
                    value={form.admon}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    classs={"inputs normal"}
                    isSelect
                    id="admon"
                    name="admon"
                    type="text"
                  />
                </div>
                <BaseInput
                  required
                  inputRef={formRefs.description}
                  placeholder={"Descripción"}
                  isTextarea
                  classs={"inputs normal"}
                  id="description"
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.description}
                />
                <div className="grid-k">
                  <BaseInput
                    required
                    inputRef={formRefs.bedRoom}
                    classs={"inputs normal"}
                    options={[
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                      { value: "4", label: "4" },
                      { value: "5", label: "5" },
                      { value: "6", label: "6" },
                      { value: "7", label: "7" },
                    ]}
                    placeholder={"Alcobas"}
                    isSelect={true}
                    value={form.bedRoom}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={"bedroom"}
                    name={"bedRoom"}
                  />
                  <BaseInput
                    required
                    inputRef={formRefs.bathRoom}
                    classs={"inputs normal"}
                    options={[
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                      { value: "4", label: "4" },
                      { value: "5", label: "5" },
                      { value: "6", label: "6" },
                      { value: "7", label: "7" },
                    ]}
                    placeholder={"Baños"}
                    isSelect
                    value={form.bathRoom}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={"bathroom"}
                    name={"bathRoom"}
                  />
                </div>
                <div className="grid-k">
                  <BaseInput
                    required
                    inputRef={formRefs.diningRoom}
                    classs={"inputs normal"}
                    options={[
                      { value: "Sí", label: "Sí" },
                      { value: "No", label: "No" },
                    ]}
                    placeholder={"Sala comedor"}
                    isSelect={true}
                    value={form.diningRoom}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={"diningroom"}
                    name={"diningRoom"}
                  />
                  <BaseInput
                    required
                    inputRef={formRefs.closets}
                    classs={"inputs normal"}
                    options={[
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                      { value: "4", label: "4" },
                      { value: "5", label: "5" },
                      { value: "6", label: "6" },
                      { value: "7", label: "7" },
                    ]}
                    placeholder={"Closets"}
                    isSelect={true}
                    value={form.closets}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={"closets"}
                    name={"closets"}
                  />
                </div>
                <div className="grid-three">
                  <BaseInput
                    required
                    inputRef={formRefs.kitchen}
                    classs={"inputs normal"}
                    options={[
                      { value: "Integral", label: "Integral" },
                      { value: "En línea", label: "En línea" },
                      { value: "En paralelo", label: "En paralelo" },
                      { value: "En L", label: "En L" },
                      { value: "En U", label: "En U" },
                      { value: "Con isla", label: "Con isla" },
                      { value: "Con barra", label: "Con barra" },
                      {
                        value: "Cocina abierta a la zona de día",
                        label: "Cocina abierta a la zona de día",
                      },
                    ]}
                    placeholder={"Cocina"}
                    isSelect={true}
                    value={form.kitchen}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={"kitchen"}
                    name={"kitchen"}
                  />
                  <BaseInput
                    required
                    inputRef={formRefs.floor}
                    classs={"inputs normal"}
                    options={[
                      { value: "Baldosa", label: "Baldosa" },
                      { value: "Cerámica", label: "Cerámica" },
                      { value: "Porcelanato", label: "Porcelanato" },
                      { value: "Piedra natural", label: "Piedra natural" },
                    ]}
                    placeholder={"Piso"}
                    isSelect={true}
                    value={form.floor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={"floor"}
                    name={"floor"}
                  />
                  <BaseInput
                    required
                    inputRef={formRefs.parking}
                    classs={"inputs normal"}
                    options={[
                      { value: "Sí", label: "Sí" },
                      { value: "No", label: "No" },
                      { value: "2 coches", label: "2 coches" },
                    ]}
                    placeholder={"Parqueadero"}
                    isSelect={true}
                    value={form.parking}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={"parking"}
                    name={"parking"}
                  />
                </div>
                <div className="grid-three">
                  <BaseInput
                    required
                    inputRef={formRefs.stratum}
                    classs={"inputs normal"}
                    options={[
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                      { value: "4", label: "4" },
                      { value: "5", label: "5" },
                      { value: "6", label: "6" },
                    ]}
                    width={"100%"}
                    placeholder={"Estrato"}
                    isSelect={true}
                    value={form.stratum}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="stratum"
                    name="stratum"
                  />
                  <BaseInput
                    required
                    inputRef={formRefs.clothing}
                    classs={"inputs normal"}
                    options={[
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "no", label: "No" },
                    ]}
                    width={"100%"}
                    placeholder={"Zona de ropa"}
                    isSelect
                    value={form.clothing}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="clothing"
                    name="clothing"
                  />
                  <BaseInput
                    required
                    inputRef={formRefs.action}
                    classs={"inputs normal"}
                    options={[
                      { value: "Venta", label: "Venta" },
                      { value: "Arrendamiento", label: "Arrendamiento" },
                    ]}
                    width={"100%"}
                    placeholder={"Opción"}
                    isSelect
                    value={form.action}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="action"
                    name="action"
                  />
                </div>
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
                <label className="l-light" htmlFor="img_url">
                  Copia de la cédula
                </label>
                <DropZone
                  id="image"
                  name="image"
                  type="file"
                  setImage={handleSetImage}
                  onChange={handleImageChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label className="l-light" htmlFor="img_url">
                  Copia de impuesto predial
                </label>
                <DropZone
                  id="image"
                  name="image"
                  type="file"
                  setImage={handleSetImage}
                  onChange={handleImageChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label className="l-light" htmlFor="image_url">
                  Ultima cuenta de servicios públicos
                </label>
                <DropZone
                  id="image"
                  name="image"
                  type="file"
                  setImage={handleSetImage}
                  onChange={handleImageChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="listproperty-contain">
            <div className="listproperty-titles">
              <h2 className="h2-extra-medium">Imágenes del inmueble</h2>
            </div>
            <div className="listproperty-form">
              <div>
                <label className="l-light" htmlFor="img_url">
                  Imagen principal
                </label>
                <DropZone
                  id="image"
                  name="image"
                  type="file"
                  setImage={handleSetImage}
                  onChange={handleImageChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label className="l-light" htmlFor="img_url">
                  Más imágenes
                </label>
                <MultiDropZone
                  id="images"
                  name="img_url"
                  type="file"
                  setImages={handleSetImages}
                  onChange={handleImagesChange}
                  onBlur={handleBlur}
                  multiple
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 6 && (
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
            classs={"button secondary"}
            colorbtn={"var(--bg-secondary)"}
            colorbtnhoversecondary={"#fdcf0457"}
            textLabel={true}
            label={"Atrás"}
          />
        )}
        {currentStep < totalSteps - 1 && (
          <BaseButton
            handleClick={handleNext}
            classs={"button primary"}
            colorbtnhoverprimary={"var(--bg-primary-semi)"}
            filterprimary="brightness(0%) invert(0%)"
            filterprimaryhover="brightness(0%) invert(0%)"
            colorbtn={"var(--bg-primary)"}
            width={"fit-content"}
            colortextbtnprimary={"var(--text-tertiary)"}
            colortextbtnhoverprimary={"var(--text-tertiary)"}
            textLabel={true}
            label={"Siguiente"}
          />
        )}
        {currentStep === totalSteps - 1 && (
          <BaseButton
            handleClick={(e) => {
              handleSubmitProperty(e, "client");
            }}
            classs={"button primary"}
            colorbtnhoverprimary={"var(--bg-primary-semi)"}
            filterprimary="brightness(0%) invert(0%)"
            filterprimaryhover="brightness(0%) invert(0%)"
            colorbtn={"var(--bg-primary)"}
            width={"fit-content"}
            colortextbtnprimary={"var(--text-tertiary)"}
            colortextbtnhoverprimary={"var(--text-tertiary)"}
            textLabel={true}
            label={"completar"}
          />
        )}
      </div>
      {currentStep === 0 && (
        <Link className="whatsapp">
          <img
            src={getImg("svg", "whatsapp", "svg")}
            alt="Descripción de la imagen"
          />
          <h3>
            O si prefieres, Contacta uno de nuestros agentes para consignar tu
            inmueble
          </h3>
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
    /* color: #fdcf0457; */

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
      gap: 5px;
      @media (max-width: 768px) {
        width: 100%;
      }
    }

    &-manager {
      margin: auto;
      display: flex;
      height: fit-content;
      width: fit-content;
      font-weight: 500;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    &-info {
      display: grid;
      margin: auto;
      width: fit-content;
      height: fit-content;
    }
    .grid-k {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      /* border: 1px solid var(--text-primary); */
      width: 100%;
      gap: 8px;
    }
    .grid-three {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      /* border: 1px solid var(--text-primary); */
      width: 100%;
      gap: 8px;
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
  .whatsapp {
    border: 1px solid var(--bg-black);
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: auto;
    padding-top: 50px;
    line-height: 1.1;
    color: var(--text-black);
    img {
      width: 50px;
    }
  }
  .locationicon {
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
  .fa-circle {
    transform: translateY(-2.5px);
  }

  /* checkbox */

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    cursor: pointer;
    user-select: none;
    font-size: 16px;
  }

  .checkbox-wrapper input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .custom-checkbox {
    display: grid;
    place-content: center;
    width: 20px;
    height: 20px;
    border: 2px solid var(--bg-secondary, #555);
    border-radius: 4px;
    padding: 10px;
    background-color: white;
    position: relative;
    transition: background-color 0.2s ease;
  }

  .checkbox-wrapper input[type="checkbox"]:checked + .custom-checkbox {
    background-color: var(--bg-secondary, #555);
    border-color: var(--bg-secondary, #555);
  }

  .custom-checkbox::after {
    content: "";
    position: absolute;
    display: none;
    margin: auto;
    left: 0;
    top: -3px;
    bottom: 0;
    right: 0;
    width: 6px;
    height: 12px;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .checkbox-wrapper input[type="checkbox"]:checked + .custom-checkbox::after {
    display: block;
  }

  .checkbox-label {
    color: var(--text-primary, #333);
  }
`;
