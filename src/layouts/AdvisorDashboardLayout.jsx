/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { DashboardAdvisorRouter } from "../router/AppRouter"
import { HeaderAdvisor } from "../components/HeaderAdvisor"
import styled from "styled-components"
import { useLocation } from "react-router-dom";


export const AdvisorDashboardLayout = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    let menuRef = useRef(false);
    let btnRef = useRef(false);

const toggleMenu = () => {
    const menu = menuRef.current;
    const btn = btnRef.current;

    if (!menu || !btn) return;

    if (menuVisible) {
      // Ocultar menú
      menu.style.cssText = `
        transition: all .5s ease;
        margin-left: -15%;
        `;
        btn.style.cssText = `
        transition: all .5s ease;
        transform: rotateZ(0deg);
        right: -215px;
        z-index: 1000;
        background: var(--bg-primary);
      `;
    } else {
      // Mostrar menú
      menu.style.cssText = `
        transition: all .5s ease;
        margin-left: 0%;
      `;
      btn.style.cssText = `
        transition: all .5s ease;
        transform: rotateZ(-180deg);
      `;

      // Pantallas pequeñas
      if (window.innerWidth < 680) {
        menu.style.cssText += `
          width: 100%;
          z-index: 10;
        `;
      }
    }

    // Cambiar el estado para el siguiente toggle
    setMenuVisible(!menuVisible);
  };

    const location = useLocation();

  const routeTitles = {
    "/advisor/dashboard": "Panel de asesor",
    "/advisor/dashboard/profile": "Perfil",
    "/advisor/dashboard/finances": "Finanzas",
    "/advisor/dashboard/sales": "Ventas",
    "/advisor/dashboard/clients": "Clientes",
    "/advisor/dashboard/settings": "Configuración",
  };
  
  const activeTitle = routeTitles[location.pathname];


  return (
    <AdVisor>
      <section className="advisordashboard">
        <header ref={menuRef}  className="advisordashboard-header">
          <HeaderAdvisor />
          <div 
            ref={btnRef} 
            className={`switch ${menuVisible ? "open" : "blue"}`} 
            onClick={toggleMenu}>
          </div>
        </header>
        <div className="advisordashboard-content">
          <nav  className="advisordashboard-content-nav">
            <h1>{ activeTitle }</h1>
          </nav>
          <DashboardAdvisorRouter />
        </div>
      </section>
    </AdVisor>
  )
}

const AdVisor = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 1920px;
  margin: auto;
  padding: 20px;
  align-items: start;
  background: var(--bg-tertiary);
  
  .advisordashboard{
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 1px solid var(--bg-primary-semi);
    background: var(--trans-primary);
    overflow: hidden;
    
    &-header{
      display: grid;
      position: relative;
      width: 15%;
      height: 100%;
    }
    &-content{
      display: grid;
      width: 100%;
      height: 100%;
      padding: 25px;
      gap: 15px;
      background: var(--deg-tertiary);
            &-nav{
          display: grid;
          width: 100%;
          height: fit-content;
          padding: 25px;
          background: var(--bg-tertiary);
          border-radius: 0 15px 0 0;
            h1{
    font-weight: 500;
    font-size: 30px;
  }
    }
    }
  }
  .switch{
    position: absolute;
    transform: rotateZ(180deg);
    cursor: pointer;
    right: -155px;
    width: 10%;
    height: 5%;
    margin: auto;
    z-index: 1000;
    left: 0;
    top: 0;
    bottom: 0;
    background: var(--bg-primary);
    clip-path: polygon(0 0, 0% 100%, 100% 50%);

  }
    .switch.open {
    background: var(--bg-tertiary); /* Aquí cambia el color */
  }
    .switch.blue {
    background: var(--bg-tertiary); /* Aquí cambia el color */
  }
`
