/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { BaseInput } from "../../../components/BaseInput";
import { initialForm, useForm } from "../../../hooks/useForm";
import { BaseButton } from "../../../components/BaseButton";
import { getImg } from "../../../../globalActions";

export const Login = () => {

  const validationsLogin = (form) => {
    let errors = {};
   let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPass = /^@[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  
  if (!form.email) {
    email.style.cssText = "border: red 1px solid";
    errors.email = "Field email is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Email incorrect";
  } else {
    email.style.cssText = "border: #34B0BE 1px solid;";
  }
  
  
  if (!form.password) {
    password.style.cssText = "border: red 1px solid";
    errors.password = "Field Password is required";
  } 
  else if (!regexPass.test(form.password.trim())) {
    errors.password = "Password field have must letters and numbers";
  } else {
    password.style.cssText = "border: #34B0BE 1px solid;";
    console.log('entrando al else');
  }
  if (password.value !== '') {
    password.style.cssText = "border: #34B0BE 1px solid;";
    errors.password = false
  }
  
  
   return errors;
  };

  const {
    form,
    errors,
    loading,
    response,
    handleLogin,
    loadingActive,
    handleChange,
    handleBlur
  } = useForm(initialForm, validationsLogin);

  return (
    <section className="auth">
    <form className="form">
      <div>
        <BaseInput
        classs={"inputs normal"}
        placeholder="Correo electrónico"
        id="email"
        name="email"
        value={form.email}
        onBlur={handleBlur}
        onChange={handleChange}
        isEmail
        />
        {errors.email && <p className="warnings-form">{errors.email}</p>}
      </div>
      <div>
        <BaseInput
        classs={"inputs normal"}
        placeholder="Contraseña"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.password}
        id="password"
        name="password" 
        isPassword
        />
        {errors.email && <p className="warnings-form">{errors.password}</p>}
      </div>
      <Link className="a">Olvidé mi contraseña</Link>
      <BaseButton 
        handleClick={handleLogin} 
        classs={"button secondary"}
        textLabel={true}
        colorbtn={"var(--bg-primary)"}
        colorbtntextsecondary={"var(--bg-tertiary)"}
        colorbtnhoversecondary={"var(--bg-primary-semi)"}
        hovercolorbtntextsecondary={"var(--bg-tertiary)"}
        label="Iniciar sesión" />
    </form>


  </section>
  )
}


