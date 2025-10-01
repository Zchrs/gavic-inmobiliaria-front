import styled from "styled-components";
import { BaseButton, BaseInput, MultiDropZone } from "../../../../index";
// import { useSelector } from "react-redux";
import { useValidations } from "../../../hooks/useValidations";
import { useForm } from "../../../hooks/useForm";

export const Pqrs = () => {
  const { formRefs, validateForm } = useValidations();
  // const user = useSelector((state) => state.auth.user);

  const initialForm = {
    fullname: "",
    dnaId: "",
    email: "",
    title: "",
    description: "",
    img_url: [],
  };

  const {
    form,
    handleChange,
    handleBlur,
    handleImagesChange,
    handleSetImages,
    handleSubmitIssues,
  } = useForm(initialForm, validateForm);
  return (
    <PqRs>
      <div className="pqrs">
        <h2 className="h2-semi-small">¿Peticiones, quejas o reclamos?</h2>
        <p>
          <strong>Haznos un pqrs:</strong> <br />
          Si tienes alguna pregunta, duda o reclamo sobre tu vivienda, por
          favor, para nosotros es importante tu opinión. Por favor, completa el
          siguiente formulario para que podamos ayudarte en la mayor brevedad
          posible.
        </p>
        <form className="pqrs-form">
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

          <BaseInput
            inputRef={formRefs.dnaId}
            classs={"inputs normal"}
            placeholder="Número de cédula"
            name="dnaId"
            id="dnaId"
            value={form.dnaId}
            onBlur={handleBlur}
            onChange={handleChange}
            required
            isNumber
          />

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
          
          <BaseInput
            classs={"inputs normal"}
            placeholder="Petición, queja o reclamo"
            name="title"
            id="title"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.title}
            inputRef={formRefs.title}
            options={[
                  { value: "Petición", label: "Petición" },
                  { value: "Queja", label: "Queja" },
                  { value: "Reclamo", label: "Reclamo" },
                  { value: "Sugerencia", label: "Sugerencia" },
                  { value: "Otro", label: "Otro" },
                ]}
            isSelect
            required
          />
          <BaseInput
            classs={"inputs normal"}
            placeholder="Descripción/detalles"
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
            handleClick={handleSubmitIssues}
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
    </PqRs>
  );
};

const PqRs = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  align-items: start;
  .pqrs {
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
