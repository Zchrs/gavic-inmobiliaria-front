/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BaseButton, BaseInput, BaseInputSelect } from "../../../../index"
import { countries } from "../../../../apiEmulated";
import  departamentos  from "../../../colombia/colombia.json";
import { initialForm, useForm } from "../../../hooks/useForm";
import { getImg } from "../../../../globalActions";
import styled from "styled-components";

export const AdvisorRegister = () => {

    const [selectedCountry, setSelectedCountry] = useState("");
    const [cities, setCities] = useState([]);
  
    const handleStateChange = (e) => {
      const selectedState = e.target.value;
      const selectedDepartment = departamentos.find(dep => dep.departamento === selectedState);
      if (selectedDepartment) {
        setCities(selectedDepartment.ciudades);
      } else {
        setCities([]);
      }
      handleChange(e); // Para actualizar el estado del formulario
    };
  
    const validationsForm = (form) => {
    
      let errors = {};
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
      let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]+$/;
      let regexDateExp = /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[0-2])[/]\d{4}$/;
      let regexMessage = /^.{1,300}$/;
      let regexPhone = /^\+[0-9]{1,3}\s?[0-9]{10}$/;
      let name = document.getElementById("name");
      let lastName = document.getElementById("lastname");
      let country = document.getElementById("country");
      let expDate = document.getElementById("expeditionDate");
      let state = document.getElementById("state");
      let city = document.getElementById("city");
      let email = document.getElementById("email");
      let phone = document.getElementById("phone");
      let message = document.getElementById("message");
      let password = document.getElementById("password");
      let repassword = document.getElementById("repassword");
    
      if (!form.name) {
        name.style.cssText = "border: red 1px solid;";
        errors.name = "Debes ingresar el nombre";
      } else if (!regexName.test(form.name.trim())) {
        errors.name = "El nombre debe tener solo letras";
      } else {
        name.style.cssText = "border: #34B0BE 1px solid;";
      }
    
      if (!form.lastname) {
        lastName.style.cssText = "border: red 1px solid";
        errors.lastname = "Debes ingresar el apellido";
      } else if (!regexName.test(form.lastname.trim())) {
        errors.lastname = "el apellido debe tener solo letras";
      } else {
        lastName.style.cssText = "border: #34B0BE 1px solid;";
      }
    
      if (!form.email) {
        email.style.cssText = "border: red 1px solid";
        errors.email = "Debes ingresar el correo electrónico";
      } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "Formato de correo incorrecto";
      } else {
        email.style.cssText = "border: #34B0BE 1px solid; color: black;";
      }
    
      if (!form.phone) {
        phone.style.cssText = "border: red 1px solid";
        errors.phone = "Field phone are required";
      } else if (!regexPhone.test(form.phone.trim())) {
        errors.phone = "Phone field have must only numbers";
      } else if (phone.value.length <= '12') {
        errors.phone = "Phone format incorrect";
      }else {
        phone.style.cssText = "border: #34B0BE 1px solid;";
      }
      if (!form.expDate) {
        expDate.style.cssText = "border: red 1px solid";
        errors.expDate = "Field expDate are required";
      } else if (!regexDateExp.test(form.expDate.trim())) {
        errors.expDate = "expDate field have must only numbers";
      } else if (expDate.value.length <= '12') {
        errors.expDate = "expDate format incorrect";
      }else {
        expDate.style.cssText = "border: #34B0BE 1px solid;";
      }
    
    
      if (!form.country) {
        country.style.cssText = "border: red 1px solid; border-radius: 5px;";
        errors.country = "Debes seleccionar el país";
      } else {
        country.style.cssText = "border: #34B0BE 1px solid; border-radius: 5px;";
      }
      if (!form.state) {
        state.style.cssText = "border: red 1px solid; border-radius: 5px;";
        errors.state = "Debes seleccionar el país";
      } else {
        state.style.cssText = "border: #34B0BE 1px solid; border-radius: 5px;";
      }
      if (!form.city) {
        city.style.cssText = "border: red 1px solid; border-radius: 5px;";
        errors.city = "Debes seleccionar el país";
      } else {
        city.style.cssText = "border: #34B0BE 1px solid; border-radius: 5px;";
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
    
      // if (!form.repassword ) {
      //   repassword.style.cssText = "border: red 1px solid";
        
      // } else if (!regexPassword.test(form.password.trim())) {
      //   errors.repassword = "password field have must letters and numbers";
      // } else {
      //   repassword.style.cssText = "border: #34B0BE 1px solid;";
      // }
    
      // if (password.value !== repassword.value) {
      //   repassword.style.cssText = "border: red 1px solid";
      //   password.style.cssText = "border: red 1px solid";
      //   errors.password = "Passwordwords no matches"
      // }else if (password.value === '' && repassword.value === '') {
      //   repassword.style.cssText = "border: red 1px solid";
      //   password.style.cssText = "border: red 1px solid";
      //   errors.password = "Password password are required";
      //   errors.repassword = "Please confirm repassword";
      // } else if (password.value.length <= '6') {
      //   errors.password = "Passwordword must contain 7 or more characters";
      // }
      // else {
      //   password.style.cssText = "border: #34B0BE 1px solid;";
      //   repassword.style.cssText = "border: #34B0BE 1px solid;";
      // }
    
      // if (!form.message) {
      //   message.style.cssText = "border: red 1px solid";
      //   errors.message = "Field message are required";
      // } else if (!regexMessage.test(form.message.trim())) {
      //   errors.message = "Limit characters exceded 300 max";
      // } else {
      //   message.style.cssText = "border: #34B0BE 1px solid;";
      // }
    
      return errors;
    };
  
    const {
      form,
      errors,
      loading,
      response,
      modal,
      handleChange,
      handleBlur,
      handleSubmit,
      handleSubmits,
      handleCountryChange,
      handleClearCountry,
    } = useForm(initialForm, validationsForm);
  

  return (
    <RegisterAdvisor>
        <div className="auth">
        <form onSubmit={handleSubmits}>
          <div className="auth-input">
            <BaseInputSelect
              height={"30px"}
              classs={"inputs outline"}
              id="country"
              placeholder="Seleccionar país"
              isSelect={true}
              name="country"
              value={form.country}
              onChange={handleCountryChange}
              handleBlur={handleBlur}
              options={countries}
              textLabel={true}
              required
            />
          </div>
          <div  className="auth-input">
            <BaseInput
              classs={"inputs outline"}
              placeholder="Nombre"
              name="name"
              id="name"
              value={form.name}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </div>
          <div  className="auth-input">
            <BaseInput
              classs={"inputs outline"}
              placeholder="Apellido"
              name="lastname"
              id="lastname"
              value={form.lastname}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </div>
          <div  className="auth-input">
            <BaseInput
              classs={"inputs outline"}
              placeholder="Número de cédula"
              name="idNumber"
              id="idNumber"
              value={form.lastname}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-input flexs">
            
            
                    <label htmlFor="expeditionDate">Fecha de expedición</label>
                
            
                    <BaseInput
                      classs={"inputs outline"}
                      name="expeditionDate"
                      id="expeditionDate"
                      value={form.lastname}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isDate
                      required
                    />
                
          </div>
          <div  className="auth-input">
            <BaseInputSelect
              height={"30px"}
              classs={"inputs outline"}
              id="state"
              name="state"
              placeholder="Seleccionar departamento"
              value={form.state}
              onChange={handleStateChange}
              handleBlur={handleBlur}
              options={departamentos.map((dep) => ({
                value: dep.departamento,
                label: dep.departamento,
              }))}
              isSelect={true}
              textLabel={true}
              required
            />
          </div>
          <div  className="auth-input">
            <BaseInputSelect
              height={"30px"}
              classs={"inputs outline"}
              id="city"
              name="city"
              placeholder="Seleccionar ciudad"
              value={form.city}
              onChange={handleChange}
              handleBlur={handleBlur}
              options={cities.map(city => ({
                value: city,
                label: city,
              }))}
              isSelect={true}
              textLabel={true}
              required
            />
          </div>
          <div  className="auth-input">
            <BaseInput
              classs={"inputs outline"}
              placeholder="Teléfono"
              name="phone"
              id="phone"
              value={form.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              required
              isNumber
            />
          </div>
          <div  className="auth-input">
            <BaseInput
              classs={"inputs outline"}
              placeholder="Correo electrónico"
              name="email"
              id="email"
              value={form.email}
              onBlur={handleBlur}
              onChange={handleChange}
              required
              isEmail
            />
          </div>
          <div  className="auth-input">
            <BaseInput
              classs={"inputs outline"}
              placeholder="Contraseña"
              name="password"
              id="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.password}
              isPassword
              required
            />
            {/* {errors.password && <p className="warnings-form">{errors.password}</p>} */}
          </div>
          <BaseButton handleClick={handleSubmits} classs={"button full-primary"} textLabel={true} label="Registrarme" />
        </form>
        <div className="auth-tyc">
          <p>
            {/* {t('globals.tycText')} */}
          </p>
        </div>
          </div>
    </RegisterAdvisor>
  )
}

const RegisterAdvisor = styled.div`

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
`