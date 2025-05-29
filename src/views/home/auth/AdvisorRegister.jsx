/* eslint-disable no-unused-vars */
import { BaseButton, BaseInput } from "../../../../index"
import { countries } from "../../../../apiEmulated";
import  departamentos  from "../../../colombia/colombia.json";
import { useForm } from "../../../hooks/useForm";
import { useValidations } from "../../../hooks/useValidations";

import styled from "styled-components";

export const AdvisorRegister = () => {
const { formRefs, validateForm } = useValidations();

    const initialForm = {
      // country: "Colombia",
      // name: "john",
      // lastname: "doe",
      // typeDoc: "Cédula de ciudadanía",
      // dnaId: "1123589464",
      // expDate: "12/12/2022",
      // state: "Antioquia",
      // city: "Medellín",
      // address: "Calle 123 #45 67",
      // phone: "571234567895",
      // email: "john@doe.com",
      // password: "Perrito@123",

      country: "",
      name: "",
      lastname: "",
      typeDoc: "",
      dnaId: "",
      expDate: "",
      state: "",
      city: "",
      address: "",
      phone: "",
      email: "",
      password: "",
    }    

    const {
      form,
      cities, 
      errors,
      handleChange,
      handleBlur,
      handleSubmitsAdvisor,
      handleCountryChange,
      handleStateChange,
    } = useForm(initialForm, validateForm);

  return (
    <RegisterAdvisor>
            <div className="auth">
              <form className="form">
                <BaseInput
                  isSelect
                  inputRef={formRefs.country}
                  isLabel
                  height={"100%"}
                  width={"100%"}
                  classs={"inputs normal"}
                  id="country"
                  name="country"
                  placeholder="Seleccionar país"
                  isSmallSelect={true}
                  value={form.country}
                  onBlur={ handleBlur }
                  onChange={ handleCountryChange }
                  options={countries}
                  required
                />
                {/* {errors.country && <p className="warnings-form">{errors.country}</p>} */}
        
                <BaseInput
                  inputRef={formRefs.name}
                  classs={"inputs normal"}
                  placeholder="Nombre"
                  name="name"
                  id="name"
                  value={form.name}
                  onBlur={ handleBlur }
                  onChange={ handleChange }
                  required
                />
                {/* {errors.name && <p className="warnings-form">{errors.name}</p>} */}
        
                <BaseInput
                  inputRef={formRefs.lastname}
                  classs={"inputs normal"}
                  placeholder="Apellido"
                  name="lastname"
                  id="lastname"
                  value={form.lastname}
                  onBlur={ handleBlur }
                  onChange={ handleChange }
                  required
                />
                {/* {errors.lastname && <p className="warnings-form">{errors.lastname}</p>} */}
                <BaseInput
                isSelect
                  inputRef={formRefs.typeDoc}
                  isLabel
                    height={"100%"}
                    width={"100%"}
                    classs={"inputs normal"}
                    id="typeDoc"
                    name="typeDoc"
                    placeholder="Documento"
                    value={form.typeDoc}
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    options={[
                      { value: "Cédula de ciudadanía", label: "Cédula de ciudadanía" },
                      { value: "Cédula de extranjería", label: "Cédula de extranjería" },
                      { value: "Pasaporte", label: "Pasaporte"},
                    ]}
                    isSmallSelect={true}
                    required
                  />
                  {/* {errors.typeDoc && <p className="warnings-form">{errors.typeDoc}</p>} */}
                <div className="grid-l">

                  <div className="group">
                  <BaseInput
                    inputRef={formRefs.dnaId}
                    classs={"inputs normal"}
                    placeholder="Número de cédula"
                    name="dnaId"
                    id="dnaId"
                    value={form.dnaId}
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    required
                    isNumber
                  />
                  {/* {errors.dnaId && <p className="warnings-form">{errors.dnaId}</p>} */}
                  </div>
                  <BaseInput
                  inputRef={formRefs.expDate}
                  classs={"inputs normal"}
                  placeholder="Fecha de expedición"
                  name="expId"
                  id="expId"
                  value={form.expDate}
                  onBlur={ handleBlur }
                  onChange={ handleChange }
                  required
                  isDate
                />
                  {/* {errors.expDate && <p className="warnings-form">{errors.expDate}</p>} */}
                </div>
                <div className="grid-l">
                  <BaseInput
                  isSelect
                    inputRef={formRefs.state}
                    isLabel
                    height={"100%"}
                    width={"100%"}
                    classs={"inputs normal"}
                    id="state"
                    name="state"
                    placeholder="Departamento"
                    value={form.state}
                    onBlur={ handleBlur }
                    onChange={ handleStateChange }
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
                    inputRef={formRefs.city}
                    isLabel
                    height={"100%"}
                    width={"100%"}
                    classs={"inputs normal"}
                    id="city"
                    name="city"
                    placeholder="Ciudad"
                    value={form.city}
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    options={cities.map((city) => ({
                      value: city,
                      label: city,
                    }))}
                    isSmallSelect={true}
                    required
                  />
                  {/* {errors.city && <p className="warnings-form">{errors.city}</p>} */}
                </div>
                <BaseInput
                  inputRef={formRefs.address}
                  classs={"inputs normal"}
                  placeholder="Dirección de residencia"
                  name="address"
                  id="address"
                  onBlur={ handleBlur }
                  onChange={ handleChange }
                  value={form.address}
                  required
                />
                {/* {errors.address && <p className="warnings-form">{errors.address}</p>} */}
                <div className="grid-l">
                  <BaseInput
                    inputRef={formRefs.phone}
                    classs={"inputs normal"}
                    placeholder="Teléfono"
                    name="phone"
                    id="phone"
                    value={form.phone}
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    required
                    isNumber
                  />
        
                  <BaseInput
                    inputRef={formRefs.email}
                    classs={"inputs normal"}
                    placeholder="Correo electrónico"
                    name="email"
                    id="email"
                    value={form.email}
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    required
                    isEmail
                  />
                  {/* {errors.email && <p className="warnings-form">{errors.email}</p>} */}
                </div>
        
                <BaseInput
                  inputRef={formRefs.password}
                  classs={"inputs normal"}
                  placeholder="Contraseña"
                  name="password"
                  id="password"
                  onBlur={ handleBlur }
                  onChange={ handleChange }
                  value={form.password}
                  isPassword
                  required
                />
                {/* {errors.password && <p className="warnings-form">{errors.password}</p>} */}
        
                <BaseButton
                  type="submit"
                  classs={"button primary"}
                  colorbtnhoverprimary={"var(--bg-secondary-tr)"}
                  colorbtn={"var(--bg-secondary)"}
                  colortextbtnprimary={"var(--text-primary)"}
                  colortextbtnhoverprimary={"var(--text-primary)"}
                  handleClick={(e) => handleSubmitsAdvisor(e)}
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