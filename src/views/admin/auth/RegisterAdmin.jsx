/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { BaseInput, BaseButton } from "../../../../index"
import { initialForm, useForm } from "../../../hooks/useForm";
import { useValidations } from "../../../hooks/useValidations";


export const RegisterAdmin = () => {

const { formRefs, validateForm } = useValidations();

  

    const {
      form,
      handleChange,
      handleBlur,
      handleSubmitsAdmin,
    } = useForm(initialForm, validateForm);

  return (
        <AdminRegister>
          <div className="authadmin">
            <form className="form">
              <BaseInput
                classs={"inputs normal"}
                placeholder="Nombre completo"
                name="fullname"
                id="fullname"
                value={form.fullname}
                inputRef={formRefs.fullname}
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
                name="codeAccess"
                id="codeAccess"
                onBlur={ handleBlur }
                onChange={ handleChange}
                value={form.codeAccess}
                inputRef={formRefs.codeAccess}
                required
              />
              <BaseInput
                classs={"inputs normal"}
                placeholder="Contraseña"
                name="pass"
                id="pass"
                onBlur={ handleBlur }
                onChange={ handleChange}
                value={form.pass}
                inputRef={formRefs.pass}
                isPassword
                required
              />
              <BaseButton
              handleClick={handleSubmitsAdmin}
              classs={"button secondary"}
              textLabel={true}
              colorbtn={"var(--bg-secondary)"}
              colortextbtnsecondary={"--bg-primary"}
              colorbtnhoversecondary={"var(--bg-secondary-tr)"}
              hovercolorbtntextsecondary={"--bg-primary"}
              label="Registrarme"
            />
            </form>
            <div className="authadmin-tyc">
              <p>Al registrarte indicas que estás aceptando nuestros
                términos y condiciones y política de tratamiento de datos.
              </p>
            </div>
          </div>
        </AdminRegister>
  )
}


const AdminRegister = styled.div`
.authadmin{
  animation: smooth .5s ease;
  
    &-tyc{
      padding-top: 20px;
      text-align  : center;
      color: var(--text-tertiary);
    }
}
  @keyframes smooth {
    0% {
      opacity: 0;
      transform: translateX(50%);
    }
  
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`