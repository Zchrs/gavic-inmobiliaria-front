/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getImg, scrollTop } from "../../globalActions";
import { useEffect } from "react";

export const HeaderAdmin = () => {
  let contador = 0;
  const showHideMenu = () => {
    let navMenu = document.getElementById("menu-admin");
    if (window.innerWidth < 820) {
      if (contador === 0) {
        contador = 1;
        navMenu.style.cssText = `
                opacity: 1;
                transform: translateX(0%);
                transition: all ease .5s;
              `;
      } else {
        contador = 0;
        navMenu.style.cssText = `
                opacity: 0;
                transform: translateX(-120%);
                transition: all ease .5s;
              `;
      }
    }
  };

  useEffect(() => {
    let header = document.getElementById("header-admin");
    const menuFixed = () => {
      if (window.scrollY > 50) {
        header.style.cssText = `
                background: var(--bg-tertiary);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
               position: fixed;
               z-index: 200;
               top: 0px;
              `;
      } else {
        header.style.cssText = `
              background: var(--bg-tertiary);
                position: relative;
              `;
      }
    };

    window.addEventListener("scroll", menuFixed);
    return () => {
      window.removeEventListener("scroll", menuFixed);
    };
  }, []);

  const handleFunctions = () => {
    scrollTop();
    showHideMenu();
  };

  return (
    <AdminHeader>
      <div className="headeradmin">
        <div className="headeradmin-group">
          <Link className="headeradmin-group-a">
            <img  className="headeradmin-group-icons" src={getImg("svg", "settings", "svg")} alt="" />
          </Link>
          <Link className="headeradmin-group-a">link</Link>
        </div>
        <div className="headeradmin-group">
          <Link className="headeradmin-group-a">Arrendamientos</Link>
          <Link className="headeradmin-group-a">Ventas</Link>
        </div>
        <div className="headeradmin-group">
          <Link className="headeradmin-group-a btnhead">Clientes</Link>
          <Link className="headeradmin-group-a">Asesores</Link>
        </div>
        <div className="headeradmin-group">
          <Link className="headeradmin-group-a">Finanzas</Link>
          <Link className="headeradmin-group-a">Comunicaciones</Link>
        </div>
      </div>
      <div className="headeradmin-mobile">
        <div id="header-admin" className="headeradmin-mobile-header">
          <div>
            <img
              className="headeradmin-mobile-header-logo"
              onClick={handleFunctions}
              src={getImg("svg", "logo", "svg")}
              alt=""
            />
          </div>
          <div>
            <img
              className="headeradmin-mobile-header-menu"
              onClick={handleFunctions}
              src={getImg("svg", "menu", "svg")}
              alt=""
            />
          </div>
          <div className="headeradmin-mobile-header-avatar">
            <p>Default name</p>
            <img
              className="headeradmin-mobile-header-avatarimg"
              onClick={handleFunctions}
              src={getImg("jpg", "default", "jpg")}
              alt=""
            />
          </div>
        </div>
        <div id="menu-admin" className="headeradmin-mobile-links">
          <Link>Propiedades por listar</Link>
          <Link>Propiedades arrendadas</Link>
          <Link>Propiedades recientes</Link>
          <Link>Propiedades vendidas</Link>
          <Link>Asesores nuevos</Link>
          <Link>Asesores pendientes de verificar</Link>
          <Link>Clientes nuevos</Link>
          <Link>Clientes pendientes de verificar</Link>
          <Link>Listar servicios</Link>
        </div>
      </div>
    </AdminHeader>
  );
};

const AdminHeader = styled.header`
  display: grid;

  .headeradmin {
    display: grid;
    width: 100%;
    height: fit-content;
    background: transparent;
    align-items: center;
    grid-template-columns: 10% 30% 30% 30%;
    border-radius: 50px;
    gap: 5px;
    @media (max-width: 980px) {
      display: none;
    }

    &-group {
      display: flex;
      border-radius: 50px;
      background: var(--bg-secondary);
      box-shadow: var(--ds-m);
      align-items: center;
      &:nth-child(1) {
        background: var(--deg-secondary);
        a {
          color: var(--text-tertiary);
        }
      }

      &:last-child {
        background: var(--deg-tertiary);
        a {
          color: var(--text-dark);
        }
      }
      &:nth-child(2) {
        background: var(--deg-tertiary);
        a {
          color: var(--text-dark);
        }
      }
      &:nth-child(3) {
        background: var(--deg-secondary);
        a {
          color: var(--text-tertiary);
        }
      }

      &-a {
        padding: 10px;
        align-items: center;
        text-align: center;
      }
      &-icons{
        width: 15px;
        filter: invert(100%);
      }
    }
    .btnhead {
      background: var(--deg-fourty);
      border-radius: 50px 20px 20px 50px;
      a {
        color: var(--text-tertiary);
      }
    }
    &-mobile {
      display: none;
      margin: 0;
      padding: 0;
      @media (max-width: 980px) {
        display: grid;

        &-header {
          width: 100%;
          background: var(--bg-tertiary);
          justify-content: space-between;
          align-items: center;
          display: flex;
          padding: 10px;
          gap: 10px;
          height: fit-content;
          border-radius: 10px;
          z-index: 100;
          color: black;

          &-menu {
            display: grid;
            align-items: center;
            height: fit-content;
            width: 30px;
          }
          &-logo {
            display: grid;
            align-items: center;
            height: fit-content;
            width: 100px;
          }
          &-avatar {
            align-items: center;
            display: flex;
            width: fit-content;
            /* border: #50574f 1px solid; */
            gap: 5px;
          }
          &-avatarimg {
            width: 40px;
          }
        }
        &-links {
          display: grid;
          position: fixed;
          width: 100%;
          height: 100%;
          top: 50px;
          left: 0;
          background: var(--bg-secondary);
          place-content: center;
          transform: translateX(-100%);
          a {
            font-size: 25px;
            color: var(--text-tertiary);
          }
        }
      }
    }
  }
`;
