import { Link } from "react-router-dom";
import { BaseButton, BaseInput } from "../../../../index";
import { initialForm, useForm } from "../../../hooks/useForm";
import { useValidations } from "../../../hooks/useValidations";

export const AdvisorLogin = () => {
const { formRefs, validateForm } = useValidations();

  const { form, errors, handleLoginAdvisor, handleChange, handleBlur } = useForm(
    initialForm,
    validateForm
  );

  return (
    <section className="auth">
      <form className="form">
        <div>
          <BaseInput
          formRefs={formRefs.email}
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
          formRefs={formRefs.password}
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
        <Link to={"/recovery-account"} className="a">Olvidé mi contraseña</Link>
        <BaseButton
          handleClick={handleLoginAdvisor}
          classs={"button secondary"}
          textLabel={true}
          colorbtn={"var(--bg-secondary)"}
          colortextbtnsecondary={"--bg-primary"}
          colorbtnhoversecondary={"var(--bg-secondary-tr)"}
          hovercolorbtntextsecondary={"--bg-primary"}
          label="Iniciar sesión"
        />
      </form>
    </section>
  );
};
