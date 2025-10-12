/* eslint-disable no-unused-vars */
import { useState } from "react";
import { getImg } from "../../../../globalActions";
import { BaseButton } from "../../../components/BaseButton";
import { BaseInput } from "../../../components/BaseInput";
import { initialForm, useForm } from "../../../hooks/useForm";
import { countries } from "../../../../apiEmulated";
import styled from "styled-components";

export const Register = () => {

  const validationsForm = (form) => {
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
    let role = document.getElementById("role");

    if (!form.country) {
      country.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.country = "Debes seleccionar el país";
    } else {
      country.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!form.name) {
      name.style.cssText = "border: red 1px solid; border-radius: 10px;";
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
      email.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.email = "Debes ingresar el correo electrónico";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "Formato de correo incorrecto";
    } else {
      email.style.cssText = "border: #34B0BE 1px solid; color: black;";
    }
    if (!form.phone) {
      phone.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.phone = "Nqecesitas ingresar el teléfono";
    } else if (!regexPhone.test(form.phone.trim())) {
      errors.phone = "Formato de teléfono incorrecto";
    } else if (form.phone.trim().length <= 11) { // mínimo: +57 3001234567
      errors.phone = "Número incorrecto";
    } else {
      phone.style.cssText = "border: #34B0BE 1px solid;";
    }

    if (!form.address) {
      address.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.address = "Debes ingresar tu dirección";
    }  else {
      address.style.cssText = "border: #34B0BE 1px solid;";
    }
    if (!form.role) {
      role.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.role = "Debes ingresar una opción";
    }  else {
      role.style.cssText = "border: #34B0BE 1px solid;";
    }


    if (!form.state) {
      state.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.state = "Debes seleccionar el país";
    } else {
      state.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!form.city) {
      city.style.cssText = "border: red 1px solid; border-radius: 10px;";
      errors.city = "Debes seleccionar el país";
    } else {
      city.style.cssText = "border: #34B0BE 1px solid; border-radius: 10px;";
    }

    if (!form.password) {
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
    form,
    departamentos,
    cities, 
    errors,
    handleStateChange,
    handleChange,
    handleBlur,
    handleSubmitClient,
    handleCountryChange,
  } = useForm(initialForm, validationsForm);

  return (
    <AuTh>
    <div className="auth">
      <form className="form">
        <BaseInput
         isSelect
          height={"100%"}
          width={"100%"}
          classs={"inputs normal"}
          id="country"
          placeholder="Seleccionar país"
          name="country"
          value={form.country}
          onChange={ handleCountryChange }
          onBlur={ handleBlur }
          options={countries}
          required
        />
        {/* {errors.country && <p className="warnings-form">{errors.country}</p>} */}

        <BaseInput
          classs={"inputs normal"}
          placeholder="Nombre"
          name="name"
          id="name"
          value={form.name}
          onBlur={ handleBlur }
          onChange={(e) => handleChange(e, 'client')}
          required
        />
        {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}

        <BaseInput
          classs={"inputs normal"}
          placeholder="Apellido"
          name="lastname"
          id="lastname"
          value={form.lastname}
          onBlur={ handleBlur }
          onChange={(e) => handleChange(e, 'client')}
          required
        />
        {/* {errors.lastname && <p className="warnings-form">{errors.lastname}</p>} */}

        <div className="grid-l">
          <BaseInput
           isSelect
            height={"100%"}
            width={"100%"}
            classs={"inputs normal"}
            id="state"
            name="state"
            placeholder="Departamento"
            value={form.state}
            onChange={(e) => handleStateChange(e, 'client')}
            onBlur={ handleBlur }
            options={departamentos.map((dep) => ({
              value: dep.departamento,
              label: dep.departamento,
            }))}
            isSmallSelect={true}
            required
          />
          {/* {errors.state && <p className="warnings-form">{errors.state}</p>} */}

          <BaseInput
           isSelect
            height={"100%"}
            width={"100%"}
            classs={"inputs normal"}
            id="city"
            name="city"
            placeholder="Ciudad"
            value={form.city}
            disabled={!form.state}
            onChange={(e) => handleChange(e, 'client')}
            onBlur={ handleBlur }
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
            value={form.phone}
            onChange={(e) => handleChange(e, 'client')}
            onBlur={ handleBlur }
            required
            isNumber
          />

          <BaseInput
            classs={"inputs normal"}
            placeholder="Correo electrónico"
            name="email"
            id="email"
            value={form.email}
            onBlur={ handleBlur }
            onChange={(e) => handleChange(e, 'client')}
            required
            isEmail
          />
          {/* {errors.email && <p className="warnings-form">{errors.email}</p>} */}
        </div>
        <div className="grid-l">
          <BaseInput
            classs={"inputs normal"}
            placeholder="Dirección de domicilio"
            name="address"
            id="address"
            value={form.address}
            onBlur={ handleBlur }
            onChange={(e) => handleChange(e, 'client')}
            required
          />
          <BaseInput
           isSelect
            height={"100%"}
            width={"100%"}
            classs={"inputs normal"}
            id="role"
            name="role"
            placeholder="Rol"
            value={form.role}
            onChange={(e) => handleChange(e, 'client')}
            onBlur={ handleBlur }
            options={[
                { value: "Arrendatario", label: "Arrendatario" },
                { value: "Inquilino", label: "Inquilino" },
              ]}
            isSmallSelect={true}
            required
          />
        </div>
        <BaseInput
          classs={"inputs normal"}
          placeholder="Contraseña"
          name="password"
          id="password"
          onBlur={ handleBlur }
          onChange={(e) => handleChange(e, 'client')}
          value={form.password}
          isPassword
          required
        />
        {/* {errors.password && <p className="warnings-form">{errors.password}</p>} */}

        <BaseButton
          handleClick={handleSubmitClient}
          classs={"button primary"}
          colorbtnhoverprimary={"var(--bg-primary-semi)"}
          colorbtn={"var(--bg-primary)"}
          width={"fit-content"}
          colortextbtnprimary={"var(--text-tertiary)"}
          colortextbtnhoverprimary={"var(--text-tertiary)"}
          textLabel={true}
          label="Registrarme"
        />
      </form>

      <div className="auth-tyc">
        <p>Al registrarte indicas que estás aceptando nustros 
          términos y condiciones y política de tratamiento de datos.
        </p>
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