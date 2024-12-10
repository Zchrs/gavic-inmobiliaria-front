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
              borderRadius: 5,
              fontSize: '16px',
              padding: '5px',
              borderColor: '#DDE4ED',
              height: '50px',
              width: '220px',
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
        
              // Media query para pantallas pequeñas
              '@media (max-width: 1024px)': {
                fontSize: '14px',
                height: '40px',
                width: '200px',
              },
              '@media (max-width: 800px)': {
                fontSize: '14px',
                height: '40px',
                width: '160px',
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
              height: '200px',
              overflowY: 'hidden',
              overflowX: 'hidden',
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
   
  );
};
