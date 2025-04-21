/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from "styled-components";
import { BaseInputSelect, BaseInput, MultiDropZone, BaseButton } from "../../../../index";
import { useEffect, useState } from "react";
import { initialPropertyForm, useForm } from "../../../hooks/useForm";
import { DropZone } from "../../../components/DropZone";
import { values } from "../../../sectors/dataSectors";
import departamentos from "../../../colombia/colombia.json";



export const CreateProperty = () => {
  const [isFormComplete, setIsFormComplete] = useState(null);

  const cities = departamentos.find(
    (dep) => dep.departamento === "Antioquia"
  )?.ciudades || [];

  const validationsForm = (formProperty) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexPrice = /^(0\.([1-9]\d*|[0-9]))$|^[1-9]\d*(\.\d{1,2})?$/;
    let regexTextArea = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s.,:'"?¡¿!/;%]+$/;
    let regexOnlyNumbers = /^[0-9]+$/;
    let name = document.getElementById("name");
    let city = document.getElementById("city");
    let price = document.getElementById("price");
    let district = document.getElementById("district");
    let category = document.getElementById("category");
    let description = document.getElementById("description");
    let bedRoom = document.getElementById("bedroom");
    let diningRoom = document.getElementById("diningroom");
    let clothing = document.getElementById("clothing");
    let kitchen = document.getElementById("kitchen");
    let bathRoom = document.getElementById("bathroom");
    let closets = document.getElementById("closets");
    let floor = document.getElementById("floor");
    let stratum = document.getElementById("stratum");
    let action = document.getElementById("action");
    let image = document.getElementById("image");
    let img_url = document.getElementById("images");

    if (!formProperty.name) {
      name.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.name = "Escribe un nombre de producto";
    } else if (!regexName.test(formProperty.name.trim())) {
      errors.name = "Nombre de producto debe contener solo letras";
    } else {
      name.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.price) {
      price.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.price = "Escribe un precio";
    } else if (!regexPrice.test(formProperty.price.trim())) {
      errors.price = "Precio debe contener solo números ej: 0.1";
    } else {
      price.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.city) {
      city.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.city = "Escribe una categoría";
    } else {
      city.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }
    if (!formProperty.district) {
      district.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.district = "Escribe una categoría";
    } else {
      district.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.category) {
      category.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.category = "Escribe una categoría";
    } else {
      category.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.description) {
      description.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.description = "Debes escribir una descripción";
    } else {
      description.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.bedRoom) {
      bedRoom.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.bedRoom = "Escribe un precio anterior";
    } else if (!regexOnlyNumbers.test(formProperty.bedRoom.trim())) {
      errors.bedRoom = "Baños debe contener solo números ej: 1";
    } else {
      bedRoom.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.diningRoom) {
      diningRoom.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.diningRoom = "Escribe un precio anterior";
    } else {
      diningRoom.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.kitchen) {
      kitchen.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.kitchen = "Debes seleccionar una opción";
    } else {
      kitchen.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.bathRoom) {
      bathRoom.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.bathRoom = "Escribe una cantidad";
    } else if (!regexOnlyNumbers.test(formProperty.bathRoom.trim())) {
      errors.bathRoom = "Baños debe contener solo números ej: 1; ";
    } else {
      bathRoom.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.closets) {
      closets.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.closets = "Escribe una cantidad";
    } else {
      closets.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.floor) {
      floor.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.floor = "Debes seleccionar una opción";
    } else {
      floor.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.stratum) {
      stratum.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.stratum = "Debes seleccionar una opción";
    } else {
      stratum.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.clothing) {
      clothing.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.clothing = "Debes seleccionar una opción";
    } else {
      clothing.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.action) {
      action.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.action = "Debes seleccionar una opción";
    } else {
      action.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.image) {
      image.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.image = "Selecciona al menos una imagen";
    } else {
      image.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formProperty.img_url || formProperty.img_url.length === 0) {
      img_url.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.img_url = "Debes seleccionar 4 imágenes";
    } else {
      img_url.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    return errors;
  };


  const {
    formProperty,
    form,
    errors,
    handleChangeProperty,
    handleBlurProperty,
    handleSetImages,
    handleSetImageProperty,
    handleImageChangeProperty,
    handleImagesChangeProperty,
    handleSubmitProperty,
  } = useForm(initialPropertyForm, validationsForm);


  const formComplete = () => {
    // Verificar si todos los campos del formulario están llenos
    const isFormFilled = Object.values(form).every(value => value !== "");
    // Actualizar el estado de completitud del formulario
    // console.log("Formulario vacío:", form);
    setIsFormComplete(isFormFilled);
  };

  return (
    <Create>
      <div className="create" id="create-property">
        <form className="form">
          <div className="grid">
            <BaseInput
              id="name"
              name="name"
              placeholder={"Título"}
              classs={"inputs normal"}
              type="text"
              onChange={handleChangeProperty}
              onBlur={handleBlurProperty}
              value={formProperty.name}
            />
                <BaseInputSelect
                placeholder={"Ciudad"}
                options={cities.map(ciudad => ({
                  value: ciudad,  // El valor que se guardará (puede ser el nombre o un ID si lo tienes)
                  label: ciudad   // Lo que se muestra en el dropdown
                }))}
                value={formProperty.city}
                onChange={handleChangeProperty}
                onBlur={handleBlurProperty}
                isSmallSelect={true}
                id="city"
                name="city"
              />
            <div className="grid-k">
              <BaseInput
                placeholder={"Precio"}
                isNumber
                classs={"inputs normal"}
                id="price"
                name="price"
                onChange={handleChangeProperty}
                onBlur={handleBlurProperty}
                value={formProperty.price}
              />
              <BaseInputSelect
                placeholder={"Sector"}
                options={values}
                value={formProperty.district}
                onChange={handleChangeProperty}
                onBlur={handleBlurProperty}
                isSmallSelect={true}
                id="district"
                name="district"
              />
            </div>
            <BaseInputSelect
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
              value={formProperty.category}
              onChange={handleChangeProperty}
              onBlur={handleBlurProperty}
              classs={"inputs normal"}
              isSmallSelect
              id="category"
              name="category"
              type="text"
            />
            <BaseInput
              placeholder={"Descripción"}
              isTextarea
              classs={"inputs normal"}
              id="description"
              name="description"
              onBlur={handleBlurProperty}
              onChange={handleChangeProperty}
              value={formProperty.description}
            />
            <div className="grid-k">
              <BaseInputSelect
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
                isSmallSelect={true}
                value={formProperty.bedRoom}
                onChange={handleChangeProperty}
                onBlur={handleBlurProperty}
                id={"bedroom"}
                name={"bedRoom"}
              />
              <BaseInputSelect
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
                isSmallSelect={true}
                value={formProperty.bathRoom}
                onChange={handleChangeProperty}
                onBlur={handleBlurProperty}
                id={"bathroom"}
                name={"bathRoom"}
              />
            </div>
            <div className="grid-k">
              <BaseInputSelect
                options={[
                  { value: "Sí", label: "Sí" },
                  { value: "No", label: "No" },
                ]}
                placeholder={"Sala comedor"}
                isSmallSelect={true}
                value={formProperty.diningRoom}
                onChange={handleChangeProperty}
                onBlur={handleBlurProperty}
                id={"diningroom"}
                name={"diningRoom"}
              />
              <BaseInputSelect
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
                isSmallSelect={true}
                value={formProperty.closets}
                onChange={handleChangeProperty}
                onBlur={handleBlurProperty}
                id={"closets"}
                name={"closets"}
              />
            </div>
            <div className="grid-k">
              <BaseInputSelect
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
                classs={"inputs normal"}
                isSmallSelect={true}
                value={formProperty.kitchen}
                onChange={handleChangeProperty}
                onBlur={handleBlurProperty}
                id={"kitchen"}
                name={"kitchen"}
              />
              <BaseInputSelect
                options={[
                  { value: "Baldosa", label: "Baldosa" },
                  { value: "Cerámica", label: "Cerámica" },
                  { value: "Porcelanato", label: "Porcelanato" },
                  { value: "Piedra natural", label: "Piedra natural" },
                ]}
                placeholder={"Piso"}
                isSmallSelect={true}
                value={formProperty.floor}
                onChange={handleChangeProperty}
                onBlur={handleBlurProperty}
                id={"floor"}
                name={"floor"}
              />
            </div>
            <div className="grid-three">
              <BaseInputSelect
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
                isSmallSelect={true}
                value={formProperty.stratum}  
                onChange={handleChangeProperty}
                onBlur={handleBlurProperty}
                id="stratum"
                name="stratum"
              />
              <BaseInputSelect
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "no", label: "No" },
                ]}
                width={"100%"}
                placeholder={"Zona de ropa"}
                isSmallSelect={true}
                value={formProperty.clothing}
                onChange={handleChangeProperty}
                onBlur={handleBlurProperty}
                id="clothing"
                name="clothing"
              />
            <BaseInputSelect
                options={[
                  { value: "Venta", label: "Venta" },
                  { value: "Arrendamiento", label: "Arrendamiento" },
                ]}
                width={"100%"}
                placeholder={"Opción"}
                isSmallSelect={true}
                value={formProperty.action}
                onChange={handleChangeProperty}
                onBlur={handleBlurProperty}
                id="action"
                name="action"
              />
            </div>
          </div>
          <div className="images">
            <div>
              <h4>Imagen principal</h4>
              <DropZone
              id="image" 
              name="image" 
              type="file" 
              setImage={handleSetImageProperty}
              onChange={handleImageChangeProperty}
              onBlur={handleBlurProperty}
              />
            </div>
            <div>
              <h4>Imágenes alternativas</h4>
              <MultiDropZone
                id="images"
                name="img_url"
                type="file"
                setImages={handleSetImages}
                onChange={handleImagesChangeProperty}
                onBlur={handleBlurProperty}
                multiple
              />
            </div>
        <BaseButton disabled={!formComplete} handleClick={handleSubmitProperty} classs={`button full-primary ${!isFormComplete ? 'button full-primary disabled' : ''}`} textLabel={true} label={"Enviar"} />
          </div>
        </form>
      </div>
    </Create>
  );
};

const Create = styled.div`
  display: grid;
  min-height: 100vh;
  height: 100%;
  
  .create{
    place-items: center;
    display: grid;
    width: 100%;
    align-items: start;
    height: fit-content;
  }
  form {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .grid {
    display: grid;
    gap: 5px;
  }
  .form {
    border-radius: 15px;
    background: var(--trans-secondary);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
  }
  .images {
    display: grid;
    gap: 10px;
    div {
      display: grid;
      gap: 5px;
    }
  }
  .grid-k{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* border: 1px solid var(--text-primary); */
    width: 100%;
    gap: 8px;
  }
  .grid-three{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* border: 1px solid var(--text-primary); */
    width: 100%;
    gap: 8px;
  }
`;