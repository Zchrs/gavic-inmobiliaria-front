/* eslint-disable no-unused-vars */
import { useState } from "react";
import { getImg } from "../../../../globalActions";
import { BaseButton } from "../../../components/BaseButton";
import { BaseInput } from "../../../components/BaseInput";
import { CountrySelect } from "../../../components/CountrySelect";
import { initialForm, initialFormClient, useForm } from "../../../hooks/useForm";
import { BaseInputSelect } from "../../../components/BaseInputSelect";
import { countries } from "../../../../apiEmulated";

import departamentos from "../../../colombia/colombia.json";
import styled from "styled-components";

export const Register = () => {
  //  const [cities, setCities] = useState([]);

  //  const handleStateChange = (e) => {
  //   const selectedState = e.target.value;
  //   const selectedDepartment = departamentos.find(dep => dep.departamento === selectedState);
  //   if (selectedDepartment) {
  //     setCities(selectedDepartment.ciudades);
  //   } else {
  //     setCities([]); // Set empty array instead of null
  //   }
  //   setFormClient({
  //     ...formClient,
  //     [e.target.name]: e.target.value,
  //     city: "" // Reset city when state changes
  //   });
  //   handleChangeClient(e);
  // };
      

  const validationsForm = (formClient) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]+$/;
    let regexMessage = /^.{1,300}$/;
    // let regexPhone = /^\+[0-9]{1,3}\s?[0-9]{12}$/;
    let regexPhone = /^\+?[\d\s-]{8,20}$/;
    let name = document.getElementById("name");
    let lastName = document.getElementById("lastname");
    let country = document.getElementById("country");
    let state = document.getElementById("state");
    let city = document.getElementById("city");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    let address = document.getElementById("address");

    if (!formClient.country) {
      country.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.country = "Debes seleccionar el país";
    } else {
      country.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formClient.name) {
      name.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.name = "Debes ingresar el nombre";
    } else if (!regexName.test(formClient.name.trim())) {
      errors.name = "El nombre debe tener solo letras";
    } else {
      name.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!formClient.lastname) {
      lastName.style.cssText = "border: red 1px solid";
      errors.lastname = "Debes ingresar el apellido";
    } else if (!regexName.test(formClient.lastname.trim())) {
      errors.lastname = "el apellido debe tener solo letras";
    } else {
      lastName.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!formClient.email) {
      email.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.email = "Debes ingresar el correo electrónico";
    } else if (!regexEmail.test(formClient.email.trim())) {
      errors.email = "Formato de correo incorrecto";
    } else {
      email.style.cssText = "border: #34B0BE 1px solid; color: black;";
    }
    if (!formClient.phone) {
      phone.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.phone = "Nqecesitas ingresar el teléfono";
    } else if (!regexPhone.test(formClient.phone.trim())) {
      errors.phone = "Formato de teléfono incorrecto";
    } else if (formClient.phone.trim().length <= 11) { // mínimo: +57 3001234567
      errors.phone = "Número incorrecto";
    } else {
      phone.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!formClient.address) {
      address.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.address = "Debes ingresar tu dirección";
    }  else {
      address.style.cssText = "border: #34B0BE 1px solid;";
    }


    if (!formClient.state) {
      state.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.state = "Debes seleccionar el país";
    } else {
      state.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formClient.city) {
      city.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.city = "Debes seleccionar el país";
    } else {
      city.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!formClient.password) {
      password.style.cssText = "border: red 1px solid";
      errors.password = "Debes ingresar una contraseña";
    } else if (password.value.length <= "6") {
      errors.password = "la contraseña debe tener al menos 6 caracteres";
    } else if (!regexPassword.test(password.value.trim())) {
      errors.password = "La contraseña debe tener letras y números";
    } else {
      password.style.cssText = "border: #34B0BE 1px solid;";
    }

    return errors;
  };

  const {
    formClient,
    departamentos,
    cities, 
    errors,
    setFormClient,
    handleStateChange,
    handleChange,
    handleBlur,
    handleSubmitClient,
    handleBlurClient,
    handleSubmits,
    handleCountryChange,
    handleClearCountry,
    handleChangeClient,
  } = useForm(initialFormClient, validationsForm);

  return (
    <AuTh>
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
          value={formClient.country}
          onChange={handleCountryChange}
          handleBlur={handleBlur}
          options={countries}
          required
        />
        {/* {errors.country && <p className="warnings-form">{errors.country}</p>} */}

        <BaseInput
          classs={"inputs normal"}
          placeholder="Nombre"
          name="name"
          id="name"
          value={formClient.name}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}

        <BaseInput
          classs={"inputs normal"}
          placeholder="Apellido"
          name="lastname"
          id="lastname"
          value={formClient.lastname}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        {/* {errors.lastname && <p className="warnings-form">{errors.lastname}</p>} */}

        <div className="grid-l">
          <BaseInputSelect
            height={"100%"}
            width={"100%"}
            classs={"inputs normal"}
            id="state"
            name="state"
            placeholder="Departamento"
            value={formClient.state}
            onChange={handleStateChange}
            handleBlur={handleBlurClient}
            options={departamentos.map((dep) => ({
              value: dep.departamento,
              label: dep.departamento,
            }))}
            isSmallSelect={true}
            required
          />
          {/* {errors.state && <p className="warnings-form">{errors.state}</p>} */}

          <BaseInputSelect
            height={"100%"}
            width={"100%"}
            classs={"inputs normal"}
            id="city"
            name="city"
            placeholder="Ciudad"
            value={formClient.city}
            disabled={!formClient.state}
            onChange={handleChangeClient}
            handleBlur={handleBlurClient}
            options={cities.map((city) => ({
              value: city,
              label: city,
            }))}
            isSmallSelect={true}
            required
          />
          {/* {errors.city && <p className="warnings-form">{errors.city}</p>} */}
        </div>
        <div className="grid-l">
          <BaseInput
            classs={"inputs normal"}
            placeholder="Teléfono ej: +57 000 000 0000"
            name="phone"
            id="phone"
            value={formClient.phone}
            onChange={handleChangeClient}
            onBlur={handleBlurClient}
            required
            isNumber
          />

          <BaseInput
            classs={"inputs normal"}
            placeholder="Correo electrónico"
            name="email"
            id="email"
            value={formClient.email}
            onBlur={handleBlurClient}
            onChange={handleChangeClient}
            required
            isEmail
          />
          {/* {errors.email && <p className="warnings-form">{errors.email}</p>} */}
        </div>
        <BaseInput
          classs={"inputs normal"}
          placeholder="Dirección de domicilio"
          name="address"
          id="address"
          value={formClient.address}
          onBlur={handleBlurClient}
          onChange={handleChangeClient}
          required
        />
        <BaseInput
          classs={"inputs normal"}
          placeholder="Contraseña"
          name="password"
          id="password"
          onBlur={handleBlurClient}
          onChange={handleChangeClient}
          value={formClient.password}
          isPassword
          required
        />
        {/* {errors.password && <p className="warnings-form">{errors.password}</p>} */}

        <BaseButton
          handleClick={handleSubmitClient}
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
    </AuTh>
  );
};

const AuTh = styled.div`
display: grid;
  .grid-l{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
`