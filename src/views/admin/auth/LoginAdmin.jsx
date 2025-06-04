import styled from "styled-components";
import { BaseButton, BaseInput } from "../../../../index";
import { useForm, initialForm } from "../../../hooks/useForm";
import { useValidations } from "../../../hooks/useValidations";

export const LoginAdmin = () => {
  const { formRefs, validateForm } = useValidations();

  const { form, handleChange, handleBlur, handleLoginAdmin } = useForm(initialForm, validateForm);

  return (
    <AdminLogin>
      <div className="login">
        <form>
          <div>
            <BaseInput
              required
              width={"70%"}
              inputRef={formRefs.email}
              id="email"
              name="email"
              placeholder={"Correo electrónico"}
              classs={"inputs normal"}
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.email}
            />
          </div>
            <BaseInput
              required
              isPassword
              width={"70%"}
              inputRef={formRefs.password}
              id="password"
              name="password"
              placeholder={"Contraseña"}
              classs={"inputs normal"}
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.password}
            />
          <div>
          </div>
        </form>
          <BaseButton
            handleClick={handleLoginAdmin}
            classs={"button secondary"}
            textLabel={true}
            colorbtn={"var(--bg-secondary)"}
            colortextbtnsecondary={"--bg-primary"}
            colorbtnhoversecondary={"var(--bg-secondary-tr)"}
            hovercolorbtntextsecondary={"--bg-primary"}
            label="Iniciar sesión"
          />
      </div>
    </AdminLogin>
  );
};

const AdminLogin = styled.div`
display: grid;
width: 100%;
height: 100%;

.login{
  animation: smooth .5s ease;
  
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