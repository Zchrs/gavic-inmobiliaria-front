/* eslint-disable no-unused-vars */
import { BaseInput, BaseButton } from "../../../../index"
import { initialForm, useForm } from "../../../hooks/useForm";
import { useValidations } from "../../../hooks/useValidations";


export const RegisterAdmin = () => {

const { formRefs, validateForm } = useValidations();
  
    const {
      form,
      cities, 
      handleChange,
      handleBlur,
      handleSubmitClient,
    } = useForm(initialForm, validateForm);

  return (
        <div className="auth">
          <form className="form">
            <BaseInput
              classs={"inputs normal"}
              placeholder="Nombre completo"
              name="name"
              id="name"
              value={form.name}
              inputRef={formRefs.name}
              onBlur={ handleBlur }
              onChange={ handleChange}
              required
            />
            
            <div className="grid-l">
              <BaseInput
                classs={"inputs normal"}
                placeholder="Correo electrónico"
                name="email"
                id="email"
                value={form.email}
                inputRef={formRefs.email}
                onBlur={ handleBlur }
                onChange={ handleChange}
                required
                isEmail
              />
            </div>
            <BaseInput
              classs={"inputs normal"}
              placeholder="Código de acceso"
              name="codeaccess"
              id="codeaccess"
              onBlur={ handleBlur }
              onChange={ handleChange}
              value={form.codeAccess}
              inputRef={formRefs.codeAccess}
              required
            />
            <BaseInput
              classs={"inputs normal"}
              placeholder="Contraseña"
              name="password"
              id="password"
              onBlur={ handleBlur }
              onChange={ handleChange}
              value={form.password}
              inputRef={formRefs.password}
              isPassword
              required
            />
    
            <BaseButton
            // handleClick={handleLogin}
            classs={"button secondary"}
            textLabel={true}
            colorbtn={"var(--bg-secondary)"}
            colortextbtnsecondary={"--bg-primary"}
            colorbtnhoversecondary={"var(--bg-secondary-tr)"}
            hovercolorbtntextsecondary={"--bg-primary"}
            label="Registrarme"
          />
          </form>
    
          <div className="auth-tyc">
            <p>Al registrarte indicas que estás aceptando nustros 
              términos y condiciones y política de tratamiento de datos.
            </p>
          </div>
        </div>
  )
}
