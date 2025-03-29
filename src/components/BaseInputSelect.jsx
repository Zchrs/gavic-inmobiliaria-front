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
  height,
  width,
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
         width={width}
         placeholder={placeholder || "Seleccione una opción"}
         styles={{
           control: (base) => ({
             ...base,
             borderRadius: 10,
             fontSize: '14px',
             fontFamily: 'Montserrat, sans-serif',
             padding: '0',
             marginTop: '0',
             borderColor: 'var(--bg-secondary-semi-soft)',
             height: height,
             minHeight: height,
             maxHeight: height,
             width: width,
             display: 'flex',
             alignItems: 'center',
             textAlign: 'left',
             position: 'relative',
             justifyContent: 'space-between',
  
             '&:hover': {
               borderColor: 'none',
             },
             '&:focus': {
               borderColor: 'none',
               outline: 'none',
             },
             '&:focus-visible': {
               borderColor: 'none',
               outline: 'none',
             },
  
            //  '@media (min-width: 1280px) and (max-width: 1920px)': {
            //   fontSize: '14px',
            //   minWidth: '190px',
            // },
            //  '@media (min-width: 921px) and (max-width: 1279px)': {
            //   fontSize: '14px',
            //   minWidth: '100%',
            //   maxWidth: '200px',
            //   width: '200px',
            // },
            //  '@media (max-width: 920px)': {
            //    fontSize: '14px',
            //    height: '40px',
            //    width: '100%',
            //  },
           }),
           option: (base, state) => ({
             ...base,
             backgroundColor: state.isFocused ? '#f1f1f1' : '#fff',
             color: '#333',
             padding: '5px',
             fontSize: '15px',
             cursor: 'pointer',
             height: '30px',
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
             marginTop: '0px',
             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
             height: '250px',
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
             fontSize: '12px',
             fontFamily: '"Montserrat", sans-serif',
             color: '#BDBDBD',
             padding: '0',
           }),
           dropdownIndicator: (base) => ({
             ...base,
             color: 'var(--bg-primary)',
             position: 'absolute',
             right: '-5px',
             top: '0',
             bottom: '0',
             margin: 'auto',
             width: 'fit-content',
             height: 'fit-content',
  
             '&:hover': {
               color: 'var(--bg-secondary-semi-soft)',
             },
             '&:active': {
               color: 'var(--bg-secondary-semi-soft)',
               transform: 'rotate(9s0deg)',
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
          width={width}
          styles={{
            control: (base) => ({
              ...base,
              borderRadius: 10,
              fontSize: '12px',
              fontFamily: 'Montserrat, sans-serif',
              padding: '0',
              borderColor: '#DDE4ED',
              height: height,
              minHeight: height,
              maxHeight: height,
              width: width,
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
              // '@media (min-width: 1280px) and (max-width: 1920px)': {
              //   fontSize: '14px',
              //   minWidth: '230px',
              // },
              //  '@media (min-width: 1024px) and (max-width: 1279px)': {
              //   fontSize: '14px',
              //   minWidth: '200px',
              // },
              //  '@media (max-width: 980px)': {
              //    fontSize: '14px',
              //    height: '40px',
              //    width: '100%',
              //  },
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? '#f1f1f1' : '#fff',
              color: '#333',
              padding: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              height: 'fit-content',
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
              fontSize: '14px',
              fontFamily: 'Montserrat, sans-serif',
              color: '#BDBDBD',
              padding: '5px 0',
            }),
            dropdownIndicator: (base) => ({
              ...base,
              color: 'var(--bg-primary)',
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


`;
