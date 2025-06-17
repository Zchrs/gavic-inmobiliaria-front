/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from "styled-components";
import { BaseInput, MultiDropZone, BaseButton } from "../../../../index";
import { useEffect, useState } from "react";
import { initialForm, useForm } from "../../../hooks/useForm";
import { DropZone } from "../../../components/DropZone";
import barrios from "../../../sectors/dataSectors.json";
import departamentos from "../../../colombia/colombia.json";
import { useValidations } from "../../../hooks/useValidations";



export const CreateProperty = () => {
  const [isFormComplete, setIsFormComplete] = useState(null);
  const { formRefs, validateForm } = useValidations();
  const [districtOptions, setDistrictOptions] = useState([]);

  
  const cities = departamentos.find(
    (dep) => dep.departamento === "Antioquia"
  )?.ciudades || [];

  const initialForm = {
    name: "",
    city: "",
    price: "1000000",
    area: "60",
    district: "",
    category: "Apartamento",
    furnished: "Sí",
    admon: "no",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore voluptatibus facere dolores ipsam ut praesentium voluptate aut est deserunt dolorum ducimus itaque amet, fugit quos asperiores maxime omnis eum!",
    bedRoom: "3",
    bathRoom: "1",
    diningRoom: "1",
    closets: "2",
    kitchen: "Integral",
    floor: "Cerámica",
    parking: "No",
    stratum: "3",
    clothing: "1",
    action: "",
    image: "",
    img_url: [],
  }

  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmitProperty,
    handleImageChange,
    handleImagesChange,
    handleSetImages,
    handleCityChange,
    handleSetImage,
  } = useForm(initialForm, validateForm);


  const formComplete = () => {
    // Verificar si todos los campos del formulario están llenos
    const isFormFilled = Object.values(form).every(value => value !== "");
    // Actualizar el estado de completitud del formulario
    // console.log("Formulario vacío:", form);
    setIsFormComplete(isFormFilled);
  };
useEffect(() => {
  const ciudadSeleccionada = barrios.find(item => item.ciudad === form.city);
  const barriosPorCiudad = ciudadSeleccionada?.barrios || [];

  const formatted = barriosPorCiudad.map(barrio => ({
    value: barrio,
    label: barrio,
  }));

  setDistrictOptions(formatted);
}, [form.city]);

  return (
    <Create>
      <div className="create" id="create-property">
        <form className="form">
          <div className="grid">
            <BaseInput
           required
           inputRef={formRefs.name}
              
              id="name"
              name="name"
              placeholder={"Título"}
              classs={"inputs normal"}
              type="text"
              onChange={ handleChange}
              onBlur={ handleBlur}
              value={form.name}
            />
                <BaseInput
               required
               inputRef={formRefs.city}
                  classs={"inputs normal"}
                placeholder={"Ciudad"}
                options={cities.map(ciudad => ({
                  value: ciudad,  // El valor que se guardará (puede ser el nombre o un ID si lo tienes)
                  label: ciudad   // Lo que se muestra en el dropdown
                }))}
                value={form.city}
                onChange={ handleChange}
                onBlur={ handleBlur}
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
                onChange={ handleChange}
                onBlur={ handleBlur}
                value={form.price}
              />
          <BaseInput
           inputRef={formRefs.area}
           isNumber
           id="area"
           name="area"
           placeholder={"Área"}
           classs={"inputs normal"}
           onChange={ handleChange}
           onBlur={ handleBlur}
           value={form.area}
           required
            />
            </div>

              <BaseInput
             required
             inputRef={formRefs.district}
                classs={"inputs normal"}
                placeholder={"Sector"}
                  options={districtOptions}
                value={form.district}
                onChange={ handleChange}
                onBlur={ handleBlur}
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
              onChange={ handleChange}
              onBlur={ handleBlur}
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
                onChange={ handleChange}
                onBlur={ handleBlur}
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
                onChange={ handleChange}
                onBlur={ handleBlur}
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
              setImage={ handleSetImage }
              onChange={ handleImageChange }
              onBlur={ handleBlur}
              />
            </div>
            <div>
              <h4>Imágenes alternativas</h4>
              <MultiDropZone
                id="images"
                name="img_url"
                type="file"
                setImages={ handleSetImages}
                onChange={ handleImagesChange }
                onBlur={ handleBlur}
                multiple
              />
            </div>
        <BaseButton 
            disabled={!formComplete} 
            handleClick={(e) => {handleSubmitProperty (e, "admin")}}
            classs={`button primary ${!isFormComplete ? 'button primary disabled' : ''}`} 
            textLabel={true}
            colorbtn={"var(--bg-primary)"}
            colortextbtnprimary={"white"}
            colorbtnhoverprimary={"var(--bg-primary-tr)"}
            colortextbtnhoverprimary={"white"}
            label={"Enviar"} 
         />
          </div>
        </form>
      </div>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore voluptatibus facere dolores ipsam ut praesentium voluptate aut est deserunt dolorum ducimus itaque amet, fugit quos asperiores maxime omnis eum!</p> */}
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
    width: 70%;
    
    
    @media (max-width: 680px) {
      grid-template-columns: 1fr;
    }
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