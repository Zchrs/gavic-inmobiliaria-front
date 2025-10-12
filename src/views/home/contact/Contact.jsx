import styled from "styled-components";
import { getImg } from "../../../../globalActions";
import { BaseInput, BaseButton } from "../../../../index";
import { initialForm, useForm } from "../../../hooks/useForm";
import { useValidations } from "../../../hooks/useValidations";

export const Contact = () => {
  const { formRefs, validateForm } = useValidations();

  const { form, handleChange, handleBlur } = useForm(initialForm, validateForm);
  return (
    <ConTact>
      <div>
        <h2 className="h1-light">Contáctenos</h2>
        <div className="contact">
          <div className="contact-box">
            <img
              className="contact-box-img"
              src={getImg("svg", "talk", "svg")}
              alt="message"
            />
            <h2>Líneas de atención.</h2>
            <div>
              <strong>
                <img src={getImg("svg", "whatsapp", "svg")} alt="whatsapp" />
                3152065382
              </strong>
              <p>
                Horario oficina 8:00 am – 6:00 pm lunes a viernes sábados 9:00
                am – 2:00 pm
              </p>
            </div>
            <div>
              <strong>
                <img src={getImg("svg", "whatsapp", "svg")} alt="whatsapp" />
                3507798814
              </strong>
              <p>
                Horario extendido de lunes a sábado de 8 am a 8:00 pm para
                novedades en el inmueble o búsqueda..
              </p>
            </div>
          </div>
          <div className="contact-box">
            <img
              className="contact-box-img"
              src={getImg("svg", "builds", "svg")}
              alt="sales"
            />
            <h2>Soporte</h2>
            <p>support@gavicinmobiliaria.com</p>
            <BaseInput
              inputRef={formRefs.name}
              classs={"inputs normal"}
              placeholder="Nombre"
              name="name"
              id="name"
              value={form.name}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
            <BaseInput
              inputRef={formRefs.email}
              classs={"inputs normal"}
              placeholder="Correo electrónico"
              name="email"
              id="email"
              value={form.email}
              onBlur={handleBlur}
              onChange={handleChange}
              required
              isEmail
            />
            <BaseInput
              required
              inputRef={formRefs.description}
              placeholder={"Mensaje"}
              isTextarea
              classs={"inputs normal"}
              id="description"
              name="description"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.description}
            />
            <BaseButton
              type="submit"
              classs={"button primary"}
              colorbtnhoverprimary={"var(--bg-secondary-tr)"}
              colorbtn={"var(--bg-secondary)"}
              colortextbtnprimary={"var(--text-primary)"}
              colortextbtnhoverprimary={"var(--text-primary)"}
              // handleClick={(e) => handleSubmitsAdvisor(e)}
              textLabel={true}
              label="Enviar"
            />
          </div>
        </div>
      </div>
    </ConTact>
  );
};

const ConTact = styled.div`
  display: grid;
  background: var(--bg-dark);
  color: white;
  align-items: center;
  height: fit-content;
  padding: 20px 200px;
  text-align: center;
  .contact {
    text-align: left;
    display: flex;
    padding: 24px;
    align-items: center;

    strong img {
      width: 8%;
    }
    strong {
      display: flex;
      gap: 10px;
      align-items: center;
      font-size: 24px;
    }

    @media (max-width: 680px) {
    }
    &-box {
      display: grid;
      padding: 24px;
      gap: 15px;
      border: 1px solid #ffffff3a;
      width: 100%;
      height: 100%;
      &-img {
        filter: invert(100%) brightness(300%);
        width: 10%;
      }
    }
  }
`;
