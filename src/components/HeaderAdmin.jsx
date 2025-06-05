/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getImg, scrollTop } from "../../globalActions";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";
import { useSelector } from "react-redux";

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

  const hideMenu = () =>{
    let navMenu = document.getElementById("menu-admin");
    {
      contador = 0;
      navMenu.style.cssText = `
              opacity: 0;
              transform: translateX(-120%);
              transition: all ease .5s;
            `;
    }
  }

  useEffect(() => {
    let header = document.getElementById("header-admin");
    const menuFixed = () => {
      if (window.scrollY > 50) {
        header.style.cssText = `w
                background: var(--bg-tertiary);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                margin: auto;
               position: fixed;
               z-index: 10000;
               width: 90%;
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
          <NavLink className="headeradmin-group-a">
            <img  className="headeradmin-group-icons" src={getImg("svg", "settings", "svg")} alt="" />
          </NavLink>
          <NavLink 
          to={"/admin/dashboard"} 
          className={({ isActive }) =>
            `${isActive ? "headeradmin-group-a-active" : "headeradmin-group-a"}`
          }
          >Inicio</NavLink>
        </div>
        <div className="headeradmin-group">
          <NavLink to={"properties"} className={({ isActive }) =>
            `${isActive ? "headeradmin-group-a-active" : "headeradmin-group-a"}`
          }>Propiedades</NavLink>
          <NavLink to={"sales"} className={({ isActive }) =>
            `${isActive ? "headeradmin-group-a-active" : "headeradmin-group-a"}`
          }>Reportes</NavLink>
        </div>
        <div className="headeradmin-group">
          <NavLink to={"statics"} className={({ isActive }) =>
            `${isActive ? "headeradmin-group-a-active" : "headeradmin-group-a btnhead"}`
          }>Estadísticas</NavLink>
          <NavLink to={"users"} className={({ isActive }) =>
            `${isActive ? "headeradmin-group-a-active" : "headeradmin-group-a"}`
          }>Usuarios</NavLink>
        </div>
        <div className="headeradmin-group">
          <NavLink to={"finances"} className={({ isActive }) =>
            `${isActive ? "headeradmin-group-a-active" : "headeradmin-group-a"}`
          }>Finanzas</NavLink>
          <NavLink to={"comunications"} className={({ isActive }) =>
            `${isActive ? "headeradmin-group-a-active" : "headeradmin-group-a"}`
          }>Comunicaciones</NavLink>
        </div>
        <div className="headeradmin-group">
          <Avatar 
            clas={"avatar"} 
            classs={"avatar-dinamyc"}
            dropData={true} 
            avtsmall={true} 
            img={"default-avatar"}
            classWhite={"avatar white"} 
            userAdmin={true}
          />
        </div>
      </div>
      <div className="headeradmin-mobile">
        <div id="header-admin" className="headeradmin-mobile-header">
          <div>
            <Link to={"/admin/dashboard"}>
              <img
              onClick={hideMenu}
                className="headeradmin-mobile-header-logo"
                src={getImg("svg", "logo", "svg")}
                alt=""
              />
            </Link>
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
          <Link onClick={handleFunctions} to={"/admin/dashboard"}>Inicio</Link>
          <Link onClick={handleFunctions} to={"properties"}>Propiedades</Link>
          <Link onClick={handleFunctions}>Servicios</Link>
          <Link onClick={handleFunctions} to={"users"}>Clientes</Link>
          <Link onClick={handleFunctions} to={"statics"}>Estadísticas</Link>
          <Link to={"comunications"} onClick={handleFunctions}>Finanzas</Link>
          <Link onClick={handleFunctions} to={"comunications"}>Comunicaciones</Link>
          <Link onClick={handleFunctions}>Listar servicios</Link>
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
    grid-template-columns: 10% 1fr 1fr 1fr 10%;
    border-radius: 50px;
    z-index: 500;
    gap: 5px;
    @media (max-width: 980px) {
      display: none;
    }

    &-group {
      display: flex;
      width: 100%;
      border-radius: 50px;
      background: var(--bg-secondary);
      box-shadow: var(--ds-m);
      align-items: center;
      overflow: hidden;
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
      &:nth-child(4) {
        background: var(--deg-tertiary);
        a {
          color: var(--text-primary);
        }
      }
      &:nth-child(5) {
        background: var(--deg-secondary);
        display: grid;
        align-items: center;
        a {
          color: var(--text-primary);
        }
      }

      &-a {
        width: 100%;  
        padding: 10px;
        align-items: center;
        text-align: center;

        &-active{
          background: #0000003c;
          width: 100%;  
        padding: 10px;
        align-items: center;
        text-align: center;
        }
      }
      &-icons{
        width: 15px;
        filter: invert(100%);
      }
    }
    .btnhead {
      width: 100%;
      background: var(--deg-fourty);
      border-radius: 50px 20px 20px 50px;
      a {
        color: var(--text-tertiary);
        width: 100%;
      }
    }
    &-mobile {
      display: none;
      margin: 0;
      padding: 0;
      @media (max-width: 980px) {
        display: grid;
        z-index: 1000;
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
          z-index: 1000;
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
          z-index: 900;
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
