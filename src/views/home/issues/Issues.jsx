import styled from "styled-components";
import { BaseInput, BaseButton, MultiDropZone } from "../../../../index";
import { useValidations } from "../../../hooks/useValidations";
import { initialForm, useForm } from "../../../hooks/useForm";

export const Issues = () => {
  const { formRefs, validateForm } = useValidations();
  const {
    form,
    handleChange,
    handleBlur,
    handleImagesChange,
    handleSetImages,
  } = useForm(initialForm, validateForm);
  return (
    <IssUes>
      <div className="issues">
        <h2 className="h2-semi-small">Problemas con el inmueble?</h2>
        <p>
          Estamos para ayudarte a resolver cualquier problema que tengas con tu
          inmueble. Por favor, completa el siguiente formulario para que podamos
          ayudarte en la mayor brevedad posible.
        </p>
        <form className="issues-form">
          <BaseInput
            classs={"inputs normal"}
            placeholder="Nombre completo"
            name="fullname"
            id="fullname"
            value={form.fullname}
            inputRef={formRefs.fullname}
            onBlur={handleBlur}
            onChange={handleChange}
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
              onBlur={handleBlur}
              onChange={handleChange}
              required
              isEmail
            />
          </div>
          <BaseInput
            classs={"inputs normal"}
            placeholder="Título"
            name="title"
            id="title"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.title}
            inputRef={formRefs.title}
            required
          />
          <BaseInput
            classs={"inputs normal"}
            placeholder="Descripción del problema"
            name="description"
            id="description"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.description}
            inputRef={formRefs.description}
            isTextarea
            required
          />
          <MultiDropZone
            id="images"
            name="img_url"
            type="file"
            setImages={handleSetImages}
            onChange={handleImagesChange}
            onBlur={handleBlur}
            multiple
          />
          <BaseButton
            //   handleClick={handleSubmitsAdmin}
            classs={"button secondary"}
            textLabel={true}
            colorbtn={"var(--bg-secondary)"}
            colortextbtnsecondary={"--bg-primary"}
            colorbtnhoversecondary={"var(--bg-secondary-tr)"}
            hovercolorbtntextsecondary={"--bg-primary"}
            label="Enviar"
          />
        </form>
      </div>
    </IssUes>
  );
};

const IssUes = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  align-items: start;
  .issues {
    display: grid;
    width: 100%;
    height: fit-content;
    align-items: start;
    background: var(--bg-tertiary);
    border: 1px solid var(--bg-primary-semi);
    padding: 25px;
    border-radius: 0 0 15px 0;
    gap: 20px;
    @media (max-width: 480px) {
      padding: 10px;
    }

    &-form {
      display: grid;
      gap: 15px;
      width: 100%;
      align-items: start;
      margin: auto;
      justify-content: center;
    }
  }
`;
