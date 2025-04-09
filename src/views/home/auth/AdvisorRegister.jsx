/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BaseButton, BaseInput, BaseInputSelect } from "../../../../index"
import { countries } from "../../../../apiEmulated";
import  departamentos  from "../../../colombia/colombia.json";
import { initialFormAdvisor, useForm } from "../../../hooks/useForm";
import { getImg } from "../../../../globalActions";
import styled from "styled-components";

export const AdvisorRegister = () => {

    const [selectedDnaType, setSelectedDnaType] = useState("");
    const [cities, setCities] = useState([]);
  
    const handleStateChange = (e) => {
      const selectedState = e.target.value;
      const selectedDepartment = departamentos.find(dep => dep.departamento === selectedState);
      if (selectedDepartment) {
        setCities(selectedDepartment.ciudades);

      } else {
        setCities([]);
      }
      setFormAdvisor({
        ...formAdvisor,
      });
      handleChangeAdvisor(e); // Para actualizar el estado del formulario
    };

    const handleDnaType = (e) => {
      setSelectedDnaType(e.target.value); // Actualizar el estado con la opción seleccionada
      setFormAdvisor({
        ...formAdvisor,
      });
      handleChangeAdvisor(e); 
    };
  
    const validationsForm = (formAdvisor) => {
    
      let errors = {};
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
      let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]+$/;
      let regexDateExp = /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[0-2])[/]\d{4}$/;
      let regexMessage = /^.{1,300}$/;
      // let regexPhone = /^\+[0-9]{1,3}\s?[0-9]{10}$/;
      let regexPhone = /^\+?[\d\s-]{8,20}$/;
      let country = document.getElementById("country");
      let name = document.getElementById("name");
      let lastName = document.getElementById("lastname");
      let typeDoc = document.getElementById("dna-type");
      let dnaId = document.getElementById("dna-id");
      let expDate = document.getElementById("exp-date");
      let state = document.getElementById("state");
      let city = document.getElementById("city");
      let address = document.getElementById("address");
      let email = document.getElementById("email");
      let phone = document.getElementById("phone");
      let password = document.getElementById("password");

          
      if (!formAdvisor.country) {
        country.style.cssText = "border: red 1px solid; border-radius: 10px;";
        errors.country = "Debes seleccionar el país";
      } else {
        country.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
      }
    
      if (!formAdvisor.name) {
        name.style.cssText = "border: red 1px solid; border-radius: 10px;";
        errors.name = "Debes ingresar el nombre";
      } else if (!regexName.test(formAdvisor.name.trim())) {
        errors.name = "El nombre debe tener solo letras";
      } else {
        name.style.cssText = "border: #34B0BE 1px solid;";
      }
    
      if (!formAdvisor.lastname) {
        lastName.style.cssText = "border: red 1px solid; border-radius: 10px; ";
        errors.lastname = "Debes ingresar el apellido";
      } else if (!regexName.test(formAdvisor.lastname.trim())) {
        errors.lastname = "el apellido debe tener solo letras";
      } else {
        lastName.style.cssText = "border: #34B0BE 1px solid;";
      }
    
      if (!formAdvisor.email) {
        email.style.cssText = "border: red 1px solid; border-radius: 10px;";
        errors.email = "Debes ingresar el correo electrónico";
      } else if (!regexEmail.test(formAdvisor.email.trim())) {
        errors.email = "Formato de correo incorrecto";
      } else {
        email.style.cssText = "border: #34B0BE 1px solid; color: black;";
      }
      
      if (!formAdvisor.typeDoc) {
        typeDoc.style.cssText = "border: red 1px solid; border-radius: 10px;";
        errors.typeDoc = "Debes seleccionar el tipo de documento";
      }  else if (typeDoc.value.length <= '6') {
        errors.typeDoc = "Opción incorrecta";
      }else {
        expDate.style.cssText = "border: #34B0BE 1px solid;";
      }

      if (!formAdvisor.expDate) {
        expDate.style.cssText = "border: red 1px solid; border-radius: 10px;";
        errors.expDate = "Field expDate are required";
      } else if (expDate.value.length < '6') {
        errors.expDate = "Fecha de expedición incorrecta";
      }else {
        expDate.style.cssText = "border: #34B0BE 1px solid;";
      }

      if (!formAdvisor.dnaId) {
        dnaId.style.cssText = "border: red 1px solid; border-radius: 10px;";
        errors.dnaId = "Field dnaId are required";
      }  else if (dnaId.value.length < '6') {
        errors.dnaId = "Formato de cédula incorrecto";
      }else {
        dnaId.style.cssText = "border: #34B0BE 1px solid;";
      }

      if (!formAdvisor.city) {
        city.style.cssText = "border: red 1px solid; border-radius: 10px;";
        errors.city = "Debes seleccionar una ciudad";
      } else {
        city.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
      }
    
      if (!formAdvisor.state) {
        state.style.cssText = "border: red 1px solid; border-radius: 10px;";
        errors.state = "Debes seleccionar un departamento";
      } else {
        state.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
      }

      if (!formAdvisor.address) {
        address.style.cssText = "border: red 1px solid; border-radius: 10px;";
        errors.address = "Debes ingresar la dirección";
      } else if (!regexName.test(formAdvisor.address.trim())) {
        errors.address = "formato de dirección incorrecto";
      } else {
        address.style.cssText = "border: #34B0BE 1px solid;";
      }
    
      if (!formAdvisor.phone) {
        phone.style.cssText = "border: red 1px solid; border-radius: 10px;";
        errors.phone = "Nqecesitas ingresar el teléfono";
      } else if (!regexPhone.test(formAdvisor.phone.trim())) {
        errors.phone = "Formato de teléfono incorrecto";
      } else if (formAdvisor.phone.trim().length <= 11) { // mínimo: +57 3001234567
        errors.phone = "Número incorrecto";
      } else {
        phone.style.cssText = "border: #34B0BE 1px solid;";
      }
    
      if (!password.value ) {
        password.style.cssText = "border: red 1px solid";
        errors.password = "Debes ingresar una contraseña";
      } else if (password.value.length <= '6') {
        errors.password = "la contraseña debe tener al menos 6 caracteres";
      } else if (!regexPassword.test(password.value.trim())) {
        errors.password = "La contraseña debe tener letras y números";
      }
    
      else{
        password.style.cssText = "border: #34B0BE 1px solid;";
      }
    

      return errors;
    };
  
    const {
      formAdvisor,
      errors,
      handleChangeAdvisor,
      handleBlurAdvisor,
      handleSubmitsAdvisor,
      handleCountryChangeAdvisor,
      setFormAdvisor,
    } = useForm(initialFormAdvisor, validationsForm);
  

  return (
    <RegisterAdvisor>
            <div className="auth">
              <form className="form">
                <BaseInputSelect
                  height={"100%"}
                  width={"100%"}
                  classs={"inputs normal"}
                  id="country"
                  placeholder="Seleccionar país"
                  isSmallSelect={true}
                  name="country"
                  value={formAdvisor.country}
                  onChange={handleCountryChangeAdvisor}
                  handleBlur={handleBlurAdvisor}
                  options={countries}
                  required
                />
                {/* {errors.country && <p className="warnings-formAdvisor">{errors.country}</p>} */}
        
                <BaseInput
                  classs={"inputs normal"}
                  placeholder="Nombre"
                  name="name"
                  id="name"
                  value={formAdvisor.name}
                  onBlur={handleBlurAdvisor}
                  onChange={handleChangeAdvisor}
                  required
                />
                {/* {errors.name && <p className="warnings-formAdvisor">{errors.name}</p>} */}
        
                <BaseInput
                  classs={"inputs normal"}
                  placeholder="Apellido"
                  name="lastname"
                  id="lastname"
                  value={formAdvisor.lastname}
                  onBlur={handleBlurAdvisor}
                  onChange={handleChangeAdvisor}
                  required
                />
                {/* {errors.lastname && <p className="warnings-formAdvisor">{errors.lastname}</p>} */}
                <BaseInputSelect
                    height={"100%"}
                    width={"100%"}
                    classs={"inputs normal"}
                    id="dna-type"
                    name="dna-type"
                    placeholder="Documento"
                    value={formAdvisor.typeDoc}
                    onChange={handleDnaType}
                    handleBlur={handleBlurAdvisor}
                    options={[
                      { value: "Cédula de ciudadanía", label: "Cédula de ciudadanía" },
                      { value: "Cédula de extranjería", label: "Cédula de extranjería" },
                      { value: "Pasaporte", label: "Pasaporte"},
                    ]}
                    isSmallSelect={true}
                    required
                  />
                <div className="grid-l">

                  <div className="group">
                  <BaseInput
                    classs={"inputs normal"}
                    placeholder="Número de cédula"
                    name="dnaId"
                    id="dna-id"
                    value={formAdvisor.dnaId}
                    onBlur={handleBlurAdvisor}
                    onChange={handleChangeAdvisor}
                    required
                    isNumber
                  />
                  </div>
                  <BaseInput
                    classs={"inputs normal"}
                    name="expDate"
                    id="exp-date"
                    value={formAdvisor.expDate}
                    onBlur={handleBlurAdvisor}
                    onChange={handleChangeAdvisor}
                    required
                    isDate
                  />
                </div>
                <div className="grid-l">
                  <BaseInputSelect
                    height={"100%"}
                    width={"100%"}
                    classs={"inputs normal"}
                    id="state"
                    name="state"
                    placeholder="Departamento"
                    value={formAdvisor.state}
                    onChange={handleStateChange}
                    handleBlur={handleBlurAdvisor}
                    options={departamentos.map((dep) => ({
                      value: dep.departamento,
                      label: dep.departamento,
                    }))}
                    isSmallSelect={true}
                    required
                  />
                  {/* {errors.state && <p className="warnings-formAdvisor">{errors.state}</p>} */}
        
                  <BaseInputSelect
                    height={"100%"}
                    width={"100%"}
                    classs={"inputs normal"}
                    id="city"
                    name="city"
                    placeholder="Ciudad"
                    value={formAdvisor.city}
                    onChange={handleChangeAdvisor}
                    handleBlur={handleBlurAdvisor}
                    options={cities.map((city) => ({
                      value: city,
                      label: city,
                    }))}
                    isSmallSelect={true}
                    required
                  />
                  {/* {errors.city && <p className="warnings-formAdvisor">{errors.city}</p>} */}
                </div>
                <BaseInput
                  classs={"inputs normal"}
                  placeholder="Dirección de residencia"
                  name="address"
                  id="address"
                  onBlur={handleBlurAdvisor}
                  onChange={handleChangeAdvisor}
                  value={formAdvisor.address}
                  required
                />
                <div className="grid-l">
                  <BaseInput
                    classs={"inputs normal"}
                    placeholder="Teléfono"
                    name="phone"
                    id="phone"
                    value={formAdvisor.phone}
                    onBlur={handleBlurAdvisor}
                    onChange={handleChangeAdvisor}
                    required
                    isNumber
                  />
        
                  <BaseInput
                    classs={"inputs normal"}
                    placeholder="Correo electrónico"
                    name="email"
                    id="email"
                    value={formAdvisor.email}
                    onBlur={handleBlurAdvisor}
                    onChange={handleChangeAdvisor}
                    required
                    isEmail
                  />
                  {/* {errors.email && <p className="warnings-formAdvisor">{errors.email}</p>} */}
                </div>
        
                <BaseInput
                  classs={"inputs normal"}
                  placeholder="Contraseña"
                  name="password"
                  id="password"
                  onBlur={handleBlurAdvisor}
                  onChange={handleChangeAdvisor}
                  value={formAdvisor.password}
                  isPassword
                  required
                />
                {/* {errors.password && <p className="warnings-formAdvisor">{errors.password}</p>} */}
        
                <BaseButton
                  handleClick={handleSubmitsAdvisor}
                  classs={"button full-primary"}
                  textLabel={true}
                  label="Registrarme"
                />
              </form>
              <div className="auth-gruop2">
                <h3>Continuar con</h3>
              </div>
              <div className="auth-social">
                <img src={getImg("svg", "facebook", "svg")} alt="facebook-logo" />
                <img src={getImg("svg", "google-icon", "svg")} alt="google-logo" />
                <img src={getImg("svg", "twitter", "svg")} alt="twitter-logo" />
                <img src={getImg("svg", "linkedin", "svg")} alt="linkedin-linkedin" />
                <img src={getImg("svg", "apple-logo", "svg")} alt="apple-logo" />
              </div>
              <div className="auth-tyc">
                <p>{/* {t('globals.tycText')} */}</p>
              </div>
            </div>
    </RegisterAdvisor>
  )
}

const RegisterAdvisor = styled.div`
  .grid-l{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
  .grid-th{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
.flexs{
 display: grid;
  gap: 7px;
  height: 100%;
  width: 100%;
  /* border: 1px solid black; */
  grid-template-columns: 37% 1fr;
  align-items: center;
  label{
    width: fit-content;
    height: fit-content;
  }
}
.group{
  display: grid;
}
`