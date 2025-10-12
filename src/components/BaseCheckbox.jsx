/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import styled from "styled-components";



export const BaseCheckbox = ({ label, checked, valueChange, id }) => {
  return (
    <CheckBox htmlFor={id}>
      <input
        className="input"
        type="checkbox"
        checked={checked}
        onChange={valueChange}
        id={id}
      />
      <span className="checkmark"></span>
      <span className="label-text">{label}</span>
    </CheckBox>
  );
};

const CheckBox = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  color: var(--bg-primary);
  font-size: 0.95rem;
  transition: color 0.2s ease;

  .input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* ✅ Cuadro visual del checkbox */
  .checkmark {
    position: relative;
    padding: 10px;
    border: 1px solid var(--bg-primary);
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ✅ Icono de check (pseudo-elemento) */
  .checkmark::after {
    content: "";
    position: absolute;
    top: 0;
    width: 6px;
    height: 70%;
    border: solid var(--bg-primary);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: transform 0.2s ease;
  }

  /* ✅ Al pasar el mouse */
  &:hover .checkmark {
    border-color: var(--color-primary);
  }

  /* ✅ Cuando está marcado */
  .input:checked + .checkmark {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

  .input:checked + .checkmark::after {
    transform: rotate(45deg) scale(1);
  }

  /* ✅ Texto al lado */
  .label-text {
    line-height: 1;
  }
`;