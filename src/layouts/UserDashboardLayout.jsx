/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { DashboardClientsRouter } from "../router/AppRouter";
import { HeaderClient } from "../components/HeaderClient";

export const UserDashboardLayout = () => {
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

    if (innerWidth < 820) {
      if (menuVisible) {
      // Ocultar menú
      menu.style.cssText = `
        transition: all .5s ease;
        margin-left: 0%;
        `;
      btn.style.cssText = `
        transition: all .5s ease;
        transform: rotateZ(0deg);
        right: -316px;
        z-index: 1000;
        background: var(--bg-primary);
      `;
    } else {
      // Mostrar menú
      menu.style.cssText = `
        transition: all .5s ease;
        margin-left: -70%;
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
    }

    // Cambiar el estado para el siguiente toggle
    setMenuVisible(!menuVisible);
  };

  const hiddenMenu = () => {
    const menu = menuRef.current;
    const btn = btnRef.current;

    if (window.innerWidth < 820) {
      if (!menuVisible) {
        menu.style.cssText = `
            transition: all .5s ease;
            margin-left: -70%;
            `;
        btn.style.cssText = `
            transition: all .5s ease;
            transform: rotateZ(0deg);
            right: -316px;
            z-index: 1000;
            background: var(--bg-primary);
          `;
      }
    }
  }


  const location = useLocation();

  const routeTitles = {
    "/client/dashboard": "Panel",
    "/client/dashboard/profile": "Perfil",
    "/client/dashboard/documents": "Documentos",
    "/client/dashboard/statics": "Estadísticas",
    "/client/dashboard/properties": "Inmuebles",
    "/client/dashboard/settings": "Configuración",
  };

  const activeTitle = routeTitles[location.pathname];

  return (
    <CliEnt>
      <section onClick={hiddenMenu} className="clientdashboard">
        <header ref={menuRef} className="clientdashboard-header">
          <HeaderClient />
          <div
            ref={btnRef}
            className={`switch ${menuVisible ? "open" : "blue"}`}
            onClick={toggleMenu}></div>
        </header>
        <div className="clientdashboard-content">
          <nav className="clientdashboard-content-nav">
            <h1>{activeTitle}</h1>
          </nav>
          <DashboardClientsRouter />
        </div>
      </section>
    </CliEnt>
  );
};

const CliEnt = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 1920px;
  margin: auto;
  padding: 20px;
  align-items: start;
  background: var(--bg-tertiary);


  .clientdashboard {
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 1px solid var(--bg-primary-semi);
    background: var(--trans-primary);
    overflow: hidden;

    &-header {
      display: grid;
      position: relative;
      width: 15%;
      height: 100%;

      @media (max-width: 860px) {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 70%;
        height: 100%;
        padding: 0px;
        overflow: visible;
      }
    }
    &-content {
      display: grid;
      width: 100%;
      height: 100%;
      padding: 25px;
      gap: 15px;
      background: var(--deg-tertiary);
      
      &-nav {
        display: grid;
        width: 100%;
        height: fit-content;
        padding: 25px;
        background: var(--bg-tertiary);
        border-radius: 0 15px 0 0;
        h1 {
          font-weight: 500;
          font-size: 30px;
        }
      }
    }
  }
  .switch {
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

    @media (max-width: 860px) {
      right: -260px;
    }
  }
  .switch.open {
    background: var(--bg-tertiary); /* Aquí cambia el color */
  }
  .switch.blue {
    background: var(--bg-tertiary); /* Aquí cambia el color */
  }
`;
