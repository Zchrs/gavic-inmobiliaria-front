/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { getImg } from '../../globalActions';
import styled from 'styled-components';

export const BaseInput = ({
  label,
  placeholder,
  classs,
  id,
  name,
  value,
  required,
  onChange,
  onBlur,
  isTextarea,
  isNumber,
  isEmail,
  isPassword,
  isSelect, // Nuevo prop para determinar si es un select
  options = [], // Lista de opciones para el select
  isDate, // Nuevo prop para determinar si es un input de fecha
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputBase>
      <div className={classs}>
        <label htmlFor={id}>
          {required && <span>*</span>}
          {label}
        </label>
        {isSelect ? (
          <select
            className='select'
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          >
            <option value="" disabled>
              {placeholder || "Seleccione una opción"}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : isTextarea ? (
          <textarea
            {...(placeholder && { placeholder })}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        ) : (
          <>
            <input
              {...(placeholder && { placeholder })}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              type={
                isPassword && !showPassword
                  ? "password"
                  : isEmail
                  ? "email"
                  : isNumber
                  ? "number"
                  : isDate
                  ? "date"
                  : "text"
              }
            />
            {isPassword && (
              <div
                type="button"
                className="inputs-show-hide-pass"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={
                    showPassword
                      ? getImg("svg", "hide-icon", "svg")
                      : getImg("svg", "show-icon", "svg")
                  }
                  alt={showPassword ? "Hide" : "Show"}
                  className="eye-icon"
                />
              </div>
            )}
          </>
        )}
      </div>
    </InputBase>
  );
};

BaseInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  classs: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  isTextarea: PropTypes.bool,
  isNumber: PropTypes.bool,
  isEmail: PropTypes.bool,
  isPassword: PropTypes.bool,
  isSelect: PropTypes.bool,
  options: PropTypes.array,
  isDate: PropTypes.bool,
};




const InputBase = styled.div`
  .inputs {
    display: grid;
    margin: 0;
    padding: 0;
    gap: 4px;

    &.nobg {
      background: transparent;
      position: relative;
      outline: none;
      input {
        border: 1px solid rgb(153, 0, 0);
        border-radius: 5px;
      }
      img {
        width: 70%;
      }
    }

    &.outline {
      position: relative;
      outline: none;
      

      textarea {
        border: 1px solid #ec333632;
        background: white;
        height: 130px;
        font-size: 14px;
        font-weight: 500;
        border-radius: 5px;
        outline: none;
        color: black;
        font-weight: 400;
        position: relative;
        padding: 5px 15px;

        &::placeholder {
          font-weight: 300;
          font-size: 14px;
          line-height: 140%;
          color: #bdbbbb;
        }
      }

      input {
        border: 1px solid #ec333632;
        background: white;
        font-size: 16px;
        font-weight: 500;
        border-radius: 5px;
        outline: none;
        color: black;
        font-weight: 400;
        position: relative;
        border: 1px solid var(--bg-secondary-semi-soft);
      }
      &:focus{
        padding: 10px 16px;
      }
    }

    &-show-hide-pass {
      display: grid;
      place-items: center;
      border: none;
      outline: none;
      position: absolute;
      right: 10px;
      bottom: 0px;
      width: 8%;
      height: 85%;
      border-radius: 0 7px 7px 0;
      cursor: pointer;
      font-size: 12px;

      img {
        width: 100%;
        filter: invert(70%);
      }
    }

    &.normal {
      position: relative;
      color: black;
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      align-items: center;
      display: grid;
      background: transparent;

      input {
        position: relative;
        background: white;
        border: #818080 1px solid;
        padding: 10px 16px;
        color: black;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1px;
        width: 100%;
        transition: all ease 0.3s;
      }
    }

    label {
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: #295170;

      span {
        position: absolute;
        color: red;
        font-weight: 700;
        margin-left: -5px;
      }
    }

    input {
      position: relative;
      padding: 10px 16px;
      background: transparent;
      border: 1px solid #dde4ed;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 700;

      &:focus {
        outline: none;
      }

      &::placeholder {
        font-weight: 300;
        font-size: 14px;
        line-height: 140%;
        color: #bdbbbb;
      }
    }
  }

  .select {
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 300;
    color: #00000078;
    outline: none;
  }
`;




