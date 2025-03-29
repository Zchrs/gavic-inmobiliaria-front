/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from "styled-components";
import { BaseInputSelect, BaseInput, MultiDropZone, BaseButton } from "../../../../index";
import { useState } from "react";
import { initialPropertyForm, useForm } from "../../../hooks/useForm";
import { DropZone } from "../../../components/DropZone";
import { values } from "../../../sectors/dataSectors";

export const CreateProperty = () => {
  const [selectedBedRoom, setSelectedBedRoom] = useState("");
  const [selectedBathRoom, setSelectedBathRoom] = useState("");
  const [selectedDiningRoom, setSelectedDiningRoom] = useState("");
  const [selectedLivingRoom, setSelectedLivingRoom] = useState("");
  const [selectedClothingZone, setSelectedClothingZone] = useState("");
  const [selectedKitchen, setSelectedKitchen] = useState("");
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedStratum, setSelectedStratum] = useState("");



  const validationsForm = (form, data) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexPrice = /^(0\.([1-9]\d*|[0-9]))$|^[1-9]\d*(\.\d{1,2})?$/;
    let regexTextArea = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s.,:'"?¡¿!/;%]+$/;
    let regexOnlyNumbers = /^[0-9]+$/;
    let name = document.getElementById("name");
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
    let image = document.getElementById("image");
    let img_url = document.getElementById("images");

    if (!form.name) {
      name.style.cssText = "border: red 1px solid;";
      errors.name = "Escribe un nombre de producto";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "Nombre de producto debe contener solo letras";
    } else {
      name.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.price) {
      price.style.cssText = "border: red 1px solid";
      errors.price = "Escribe un precio";
    } else if (!regexPrice.test(form.price.trim())) {
      errors.price = "Precio debe contener solo números ej: 0.1";
    } else {
      price.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.district) {
      district.style.cssText = "border: red 1px solid";
      errors.district = "Escribe una categoría";
    } else {
      district.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.category) {
      category.style.cssText = "border: red 1px solid";
      errors.category = "Escribe una categoría";
    } else {
      category.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.description) {
      description.style.cssText = "border: red 1px solid";
      errors.description = "Debes escribir una descripción";
    } else {
      description.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.bedRoom) {
      bedRoom.style.cssText = "border: red 1px solid";
      errors.bedRoom = "Escribe un precio anterior";
    } else if (!regexOnlyNumbers.test(form.bedRoom.trim())) {
      errors.bedRoom = "Baños debe contener solo números ej: 1";
    } else {
      bedRoom.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.diningRoom) {
      diningRoom.style.cssText = "border: red 1px solid";
      errors.diningRoom = "Escribe un precio anterior";
    } else if (!regexOnlyNumbers.test(form.diningRoom.trim())) {
      errors.diningRoom = "Baños debe contener solo números ej: 1";
    } else {
      diningRoom.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.kitchen) {
      kitchen.style.cssText = "border: red 1px solid";
      errors.kitchen = "Debes seleccionar una opción";
    } else {
      kitchen.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.bathRoom) {
      bathRoom.style.cssText = "border: red 1px solid";
      errors.bathRoom = "Escribe una cantidad";
    } else if (!regexOnlyNumbers.test(form.bathRoom.trim())) {
      errors.bathRoom = "Baños debe contener solo números ej: 1; ";
    } else {
      bathRoom.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.closets) {
      closets.style.cssText = "border: red 1px solid";
      errors.closets = "Escribe una cantidad";
    } else if (!regexOnlyNumbers.test(form.closets.trim())) {
      errors.closets = "Baños debe contener solo números ej: 1; ";
    } else {
      closets.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.floor) {
      floor.style.cssText = "border: red 1px solid";
      errors.floor = "Debes seleccionar una opción";
    } else {
      floor.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.stratum) {
      stratum.style.cssText = "border: red 1px solid";
      errors.stratum = "Debes seleccionar una opción";
    } else {
      stratum.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.clothing) {
      clothing.style.cssText = "border: red 1px solid";
      errors.clothing = "Debes seleccionar una opción";
    } else {
      clothing.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.image) {
      image.style.cssText = "border: red 1px solid";
      errors.image = "Selecciona al menos una imagen";
    } else {
      image.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.img_url) {
      img_url.style.cssText = "border: red 1px solid";
      errors.img_url = "Selecciona al menos una imagen";
    } else {
      img_url.style.cssText = "border: #34B0BE 1px solid;";
    }

    return errors;
  };

  const {
    form,
    errors,
    loading,
    response,
    setForm,
    handleChange,
    handleImageChange,
    handleSetImage,
    handleBlur,
    handleSubmitProperty,
  } = useForm(initialPropertyForm, validationsForm);

  const handleBedRoom = (e) => {
    console.log("Sector seleccionado:", e.target.value);
    setSelectedBedRoom(e.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleBathRoom = (p) => {
    setSelectedBathRoom(p.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleDiningRoom = (b) => {
    setSelectedDiningRoom(b.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleLivingRoom = (b) => {
    setSelectedLivingRoom(b.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleClothingZone = (b) => {
    setSelectedClothingZone(b.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleKitchen = (c) => {
    setSelectedKitchen(c.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleFloor = (c) => {
    setSelectedFloor(c.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleStratum = (c) => {
    setSelectedStratum(c.target.value); // Actualizar el estado con la opción seleccionada
  };

  return (
    <Create>
      <div className="create" id="create-property">
        <form className="form"  action="" >
          <div className="grid">
            <BaseInput
              id="name"
              name="name"
              placeholder={"Título"}
              classs={"inputs normal"}
              type="text"
            />
            <div className="flex-k">
              <BaseInput
                placeholder={"Precio"}
                isNumber
                classs={"inputs normal"}
                id="price"
                name="price"
              />
              <BaseInputSelect
                placeholder={"Sector"}
                options={values}
                isSmallSelect={true}
                id="district"
                name="district"
              />
            </div>
            <BaseInput
              placeholder={"Categoría"}
              classs={"inputs normal"}
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
            />
            <div className="flex-k">
              <BaseInputSelect
                options={[
                  { value: "option1", label: "1" },
                  { value: "option2", label: "2" },
                  { value: "option3", label: "3" },
                  { value: "option4", label: "4" },
                  { value: "option5", label: "5" },
                  { value: "option6", label: "6" },
                  { value: "option7", label: "7" },
                ]}
                placeholder={"Alcobas"}
                isSmallSelect={true}
                value={selectedBedRoom}
                onChange={handleBedRoom}
                id={"bedroom"}
                name={"bedroom"}
              />
              <BaseInputSelect
                options={[
                  { value: "option1", label: "1" },
                  { value: "option2", label: "2" },
                  { value: "option3", label: "3" },
                  { value: "option4", label: "4" },
                  { value: "option5", label: "5" },
                  { value: "option6", label: "6" },
                  { value: "option7", label: "7" },
                ]}
                placeholder={"Baños"}
                isSmallSelect={true}
                value={selectedBathRoom}
                onChange={handleBathRoom}
                id={"bathroom"}
                name={"bathroom"}
              />
            </div>
            <div className="flex-k">
              <BaseInputSelect
                options={[
                  { value: "option1", label: "Sí" },
                  { value: "option2", label: "No" },
                ]}
                placeholder={"Sala comedor"}
                isSmallSelect={true}
                value={selectedLivingRoom}
                onChange={handleLivingRoom}
                id={"diningRoom"}
                name={"diningRoom"}
              />
              <BaseInputSelect
                options={[
                  { value: "option1", label: "1" },
                  { value: "option2", label: "2" },
                  { value: "option3", label: "3" },
                  { value: "option4", label: "4" },
                  { value: "option5", label: "5" },
                  { value: "option6", label: "6" },
                  { value: "option7", label: "7" },
                ]}
                placeholder={"Closets"}
                isSmallSelect={true}
                value={selectedDiningRoom}
                onChange={handleDiningRoom}
                id={"diningRoom"}
                name={"diningRoom"}
              />
            </div>
            <div className="flex-k">
              <BaseInputSelect
                options={[
                  { value: "option1", label: "Integral" },
                  { value: "option1", label: "En línea" },
                  { value: "option2", label: "En paralelo" },
                  { value: "option3", label: "En L" },
                  { value: "option4", label: "En U" },
                  { value: "option5", label: "Con isla" },
                  { value: "option6", label: "Con barra" },
                  {
                    value: "option7",
                    label: "Cocina abierta a la zona de día",
                  },
                ]}
                placeholder={"Cocina"}
                classs={"inputs normal"}
                isSmallSelect={true}
                value={selectedKitchen}
                onChange={handleKitchen}
                id={"kitchen"}
                name={"kitchen"}
              />
              <BaseInputSelect
                options={[
                  { value: "option1", label: "Baldosa" },
                  { value: "option2", label: "Cerámica" },
                  { value: "option3", label: "Porcelanato" },
                  { value: "option4", label: "Piedra natural" },
                ]}
                placeholder={"Piso"}
                isSmallSelect={true}
                value={selectedFloor}
                onChange={handleFloor}
                id={"floor"}
                name={"floor"}
              />
            </div>
            <div className="flex-k">
              <BaseInputSelect
                options={[
                  { value: "option1", label: "1" },
                  { value: "option2", label: "2" },
                  { value: "option3", label: "3" },
                  { value: "option4", label: "4" },
                  { value: "option4", label: "5" },
                  { value: "option4", label: "6" },
                ]}
                width={"100%"}
                placeholder={"Estrato"}
                isSmallSelect={true}
                value={selectedStratum}
                onChange={handleStratum}
                id="stratum"
                name="stratum"
              />
              <BaseInputSelect
                options={[
                  { value: "option1", label: "1" },
                  { value: "option2", label: "2" },
                  { value: "option2", label: "No" },
                ]}
                width={"100%"}
                placeholder={"Zona de ropa"}
                isSmallSelect={true}
                value={selectedClothingZone}
                onChange={handleClothingZone}
                id="clothing"
                name="clothing"
              />
            </div>
          </div>
          <div className="images">
            <div>
              <h4>Imagen principal</h4>
              <DropZone id="image" name="image" type="file" />
            </div>
            <div>
              <h4>Imágenes alternativas</h4>
              <MultiDropZone
                onBlur={handleBlur}
                id="img_url"
                name="img_url"
                type="file"
                onChange={handleImageChange}
                setImages={handleSetImage}
              />
            </div>
        <BaseButton classs={"button full-primary"} textLabel={true} label={"Enviar"} />
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
  .flex-k{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* border: 1px solid var(--text-primary); */
    width: 100%;
    gap: 8px;
  }
`;
