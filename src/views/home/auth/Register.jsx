/* eslint-disable no-unused-vars */
import { useState } from "react";
import { getImg } from "../../../../globalActions";
import { BaseButton } from "../../../components/BaseButton";
import { BaseInput } from "../../../components/BaseInput";
import { CountrySelect } from "../../../components/CountrySelect";
import { initialForm, useForm } from "../../../hooks/useForm";
import { BaseInputSelect } from "../../../components/BaseInputSelect";
import { countries } from "../../../../apiEmulated";


export const Register = () => {

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCounry = (e) => {
    setSelectedCountry(e.target.value); // Actualizar el estado con la opción seleccionada
    console.log(e.target.value)
  };


  const validationsForm = (form) => {
  
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]+$/;
    let regexMessage = /^.{1,300}$/;
    let regexPhone = /^\+[0-9]{1,3}\s?[0-9]{10}$/;
    let name = document.getElementById("name");
    let lastName = document.getElementById("lastname");
    let country = document.getElementById("country");
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
  
    // if (!form.phone) {
    //   phone.style.cssText = "border: red 1px solid";
    //   errors.phone = "Field phone are required";
    // } else if (!regexPhone.test(form.phone.trim())) {
    //   errors.phone = "Phone field have must only numbers";
    // } else if (phone.value.length <= '12') {
    //   errors.phone = "Phone format incorrect";
    // }else {
    //   phone.style.cssText = "border: #34B0BE 1px solid;";
    // }
  
  
    if (!form.country) {
      country.style.cssText = "border: red 1px solid;";
      errors.country = "Debes seleccionar el país";
    } else {
      country.style.cssText = "border: #34B0BE 1px solid; border-radius: 5px;";
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
      // onChangeValidation,
    } = useForm(initialForm, validationsForm);
    const [selected, setSelected] = useState(null);
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    const handleClearAll = () =>{
      handleClearCountry();
      setSelected(null);
      setShowPlaceholder(true); 
      
    }
    const handleCountrySelect = (label) =>{
      // debugger
      setSelectedCountry()
      
    }

  return (
    <div className="auth">

    <form onSubmit={handleSubmits}>
      <div>
      <BaseInputSelect
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
        {errors.country && <p className="warnings-form">{errors.country}</p>}
      </div>
      <div>
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
        {errors.name && <p className="warnings-form">{errors.name}</p>}
      </div>
      <div>
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
        {errors.lastname && <p className="warnings-form">{errors.lastname}</p>}
      </div>
      <div>
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
        {errors.email && <p className="warnings-form">{errors.email}</p>}
      </div>
      <div>
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
        {errors.password && <p className="warnings-form">{errors.password}</p>}
      </div>

      <BaseButton handleClick={handleSubmits} classs={"button full-primary"} textLabel={true} label="Registrarme" />
    </form>
    <div className="auth-gruop2">
      <h3>Continuar con</h3>
    </div>
    <div className="auth-social">
      <img src={getImg('svg', 'facebook', 'svg')} alt="facebook-logo" />
      <img src={getImg('svg', 'google-icon', 'svg')} alt="google-logo" />
      <img src={getImg('svg', 'twitter', 'svg')} alt="twitter-logo" />
      <img src={getImg('svg', 'linkedin', 'svg')} alt="linkedin-linkedin" />
      <img src={getImg('svg', 'apple-logo', 'svg')} alt="apple-logo" />
    </div>
    <div className="auth-tyc">
      <p>
      {/* {t('globals.tycText')} */}
      </p>
    </div>
  </div>
  )
}
