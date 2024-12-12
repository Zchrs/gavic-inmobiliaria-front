import { useState, useEffect } from 'react';
import styled from 'styled-components';

export const ScreenResolution = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
  
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      // Limpia el listener del evento al desmontar el componente
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // Este efecto se ejecutará solo al montar y desmontar el componente
  
    return (
      <ScrRes className='screen-resolution'>
        <h3 style={{color: "black"}}>Resolución de pantalla:</h3>
        <p style={{color: "black"}}>Ancho: {width}px</p>
        <p style={{color: "black"}}>Alto: {height}px</p>
      </ScrRes>
    );
  };
   const ScrRes = styled.div`
    display: flex;
    width: 550px;
    @media (max-width: 920px) {
      width: 350px;
    }
   `
