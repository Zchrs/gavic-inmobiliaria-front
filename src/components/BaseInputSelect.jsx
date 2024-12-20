/* eslint-disable react/prop-types */
import { useState } from "react";
import Select from "react-select"; // Importamos react-select
import { getFile } from "../../globalActions";
import styled from "styled-components";

export const BaseInputSelect = ({
  textLabel,
  label,
  placeholder,
  id,
  name,
  value,
  required,
  onChange,
  classs,
  onBlur,
  isTextarea,
  isNumber,
  isEmail,
  isPassword,
  isSmallSelect,
  // smallSelect,
  isSelect, // Nuevo prop para determinar si es un select
  options = [], // Lista de opciones para el select
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Función para el manejo del valor seleccionado en el select
  const handleSelectChange = (selectedOption) => {
    onChange({ target: { name, value: selectedOption.value } });
  };

  return (
<InputBaseSel>
  
     <div className={classs}>
       {textLabel &&<label htmlFor={id}>
         {required && <span>*</span>}
         {label}
       </label>}

        
       {isSelect ? (
         <Select
         id={id}
         name={name}
         value={options.find(option => option.value === value)} // Esto es para controlar el valor seleccionado
         onChange={handleSelectChange}
         onBlur={onBlur}
         options={options}
         placeholder={placeholder || "Seleccione una opción"}
         styles={{
           control: (base) => ({
             ...base,
             borderRadius: 5,
             fontSize: '16px',
             padding: '0',
             borderColor: 'var(--bg-secondary-semi-soft)',
             height: '100%',
             width: '100%',
             display: 'flex',
             alignItems: 'center',
             textAlign: 'left',
             position: 'relative',
             justifyContent: 'space-between',
  
             '&:hover': {
               borderColor: '#5E9CC8',
             },
             '&:focus': {
               borderColor: '#5E9CC8',
             },
  
             '@media (min-width: 1280px) and (max-width: 1920px)': {
              fontSize: '14px',
              minWidth: '230px',
            },
             '@media (min-width: 921px) and (max-width: 1279px)': {
              fontSize: '14px',
              minWidth: '100%',
              maxWidth: '200px',
              height: '40px',
              width: '200px',
            },
             '@media (max-width: 920px)': {
               fontSize: '14px',
               height: '40px',
               width: '100%',
             },
           }),
           option: (base, state) => ({
             ...base,
             backgroundColor: state.isFocused ? '#f1f1f1' : '#fff',
             color: '#333',
             padding: '5px',
             fontSize: '15px',
             cursor: 'pointer',
             height: '40px',
             width: '100%',
             display: 'grid',
             textAlign: 'left',
  
             '&:hover': {
               backgroundColor: '#F0F0F0',
             },
           }),
           menu: (base) => ({
             ...base,
             borderRadius: 8,
             marginTop: '5px',
             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
             height: '200px',
             overflow: 'hidden',
             zIndex: '200',
           }),
           singleValue: (base) => ({
             ...base,
             color: '#333',
             fontSize: '16px',
             padding: '5px 0',
  
             // Media query para pantallas pequeñas
             '@media (max-width: 600px)': {
               fontSize: '14px',
             },
           }),
           placeholder: (base) => ({
             ...base,
             fontSize: '16px',
             color: '#BDBDBD',
             padding: '5px 0',
           }),
           dropdownIndicator: (base) => ({
             ...base,
             color: '#618627',
             position: 'absolute',
             right: '-5px',
             top: '0',
             bottom: '0',
             margin: 'auto',
             width: 'fit-content',
             height: 'fit-content',
  
             '&:hover': {
               color: '#7bac2b',
             },
           }),
           indicatorSeparator: (base) => ({
             ...base,
             display: 'none',
           }),
         }}
       />
       ) : 
        isSmallSelect ? (
          <Select
          id={id}
          name={name}
          value={options.find(option => option.value === value)} // Esto es para controlar el valor seleccionado
          onChange={handleSelectChange}
          onBlur={onBlur}
          options={options}
          placeholder={placeholder || "Seleccione una opción"}
          styles={{
            control: (base) => ({
              ...base,
              borderRadius: 5,
              fontSize: '16px',
              padding: '0',
              borderColor: '#DDE4ED',
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'left',
              position: 'relative',
              justifyContent: 'space-between',
              '&:hover': {
                borderColor: '#5E9CC8',
              },
              '&:focus': {
                borderColor: '#5E9CC8',
              },
              '@media (min-width: 1280px) and (max-width: 1920px)': {
                fontSize: '14px',
                minWidth: '230px',
              },
               '@media (min-width: 1024px) and (max-width: 1279px)': {
                fontSize: '14px',
                minWidth: '200px',
              },
               '@media (max-width: 980px)': {
                 fontSize: '14px',
                 height: '40px',
                 width: '100%',
               },
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? '#f1f1f1' : '#fff',
              color: '#333',
              padding: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              height: '40px',
              width: '100%',
              display: 'grid',
              alignItems: 'center',
              '&:hover': {
                backgroundColor: '#F0F0F0',
              },
            }),
            menu: (base) => ({
              ...base,
              borderRadius: 8,
              marginTop: '5px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              height: 'fit-content',
              overflowY: 'hidden',
              overflowX: 'hidden',
              zIndex: '200',
            }),
            singleValue: (base) => ({
              ...base,
              color: '#333',
              fontSize: '16px',
              padding: '5px 0',
              // Media query para pantallas pequeñas
              '@media (max-width: 600px)': {
                fontSize: '14px',
              },
            }),
            placeholder: (base) => ({
              ...base,
              fontSize: '16px',
              color: '#BDBDBD',
              padding: '5px 0',
            }),
            dropdownIndicator: (base) => ({
              ...base,
              color: '#618627',
              position: 'absolute',
              right: '-5px',
              top: '0',
              bottom: '0',
              margin: 'auto',
              width: 'fit-content',
              height: 'fit-content',
              '&:hover': {
                color: '#7bac2b',
              },
            }),
            indicatorSeparator: (base) => ({
              ...base,
              display: 'none',
            }),
          }}
        />

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
                     ? getFile("svg", "hide-icon", "svg")
                     : getFile("svg", "show-icon", "svg")
                 }
                 alt={showPassword ? "Hide" : "Show"}
                 className="eye-icon"
               />
             </div>
           )}
         </>
       )}
     </div>
  
</InputBaseSel>
  );
};

const InputBaseSel = styled.div`
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
        border-radius: 7px;
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
        border-radius: 7px;
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
        border-radius: 7px;
        outline: none;
        color: black;
        font-weight: 400;
        position: relative;
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
      color: var(--text-dark);
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      align-items: center;
      display: grid;
      background: transparent;

      input {
        position: relative;
        background: var(--bg-tertiary);
        border: #818080 1px solid;
        padding: 12px 16px;
        color: black;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1px;
        width: 100%;
        height: 100%;
        transition: all ease 0.3s;
        border-radius: 5px;
      }
    }

    label {
      z-index: -1;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: #295170;
      margin-top: 10px;

      span {
        position: absolute;
        color: red;
        font-weight: 700;
        margin-left: -5px;
      }
    }

    input {
      position: relative;
      padding: 12px 16px;
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
