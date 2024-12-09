/* eslint-disable react/prop-types */
import { useState } from 'react';
import Select from 'react-select'; // Importamos react-select
import { getFile } from '../../globalActions';

export const BaseInputSelect = ({
  label,
  placeholder,
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
   
      <div>
        <label htmlFor={id}>
          {required && <span>*</span>}
          {label}
        </label>
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
                  borderRadius: 5, // Bordes redondeados
                  fontSize: '16px', // Tamaño de fuente
                  padding: '5px', // Espaciado dentro del control
                  borderColor: '#DDE4ED', // Color del borde
                  height: '50px',
                  width: '220px',
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'left',
                  position: 'relative',
                  justifyContent: 'space-between',
                  
                  '&:hover': {
                    borderColor: '#5E9CC8', // Color del borde al pasar el ratón
                  },
                  '&:focus': {
                    borderColor: '#5E9CC8', // Color del borde al estar enfocado
                  },
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? '#f1f1f1' : '#fff', // Color de fondo al estar enfocado
                  color: '#333', // Color del texto
                  padding: '5px', // Espaciado dentro de las opciones
                  fontSize: '16px', // Tamaño de fuente
                  cursor: 'pointer',
                  height: '40px',
                  width: '100%',
                  display: 'grid',
                  alignItems: 'center',
                  
                  
                  
                  '&:hover': {
                    backgroundColor: '#F0F0F0', // Color al pasar el ratón
                  },
                }),
                menu: (base) => ({
                  ...base,
                  borderRadius: 8, // Bordes redondeados
                  marginTop: '5px', // Espaciado encima del menú
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Sombra alrededor del menú
                  height: '200px',
                  overflowY: 'hidden',
                  overflowX: 'hidden',
                  
                }),
                singleValue: (base) => ({
                  ...base,
                  color: '#333', // Color del valor seleccionado
                  fontSize: '16px', // Tamaño de fuente
                  padding: '5px 0',
                }),
                placeholder: (base) => ({
                  ...base,
                  fontSize: '16px', // Tamaño de fuente del placeholder
                  color: '#BDBDBD', // Color del placeholder
                  padding: '5px 0',
                }),
                dropdownIndicator: (base) => ({
                  ...base,
                  color: '#618627', // Color del icono del desplegable
                  position: 'absolute',
                  right: '-5px',
                    top: '0',
                    bottom: '0',
                    margin: 'auto',
                    width: 'fit-content',
                    height: 'fit-content',
                  '&:hover': {
                    color: '#7bac2b', // Color del icono al pasar el ratón
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
   
  );
};
