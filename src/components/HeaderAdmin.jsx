/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getImg, scrollTop } from "../../globalActions";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";
import { useSelector, useDispatch } from "react-redux";
import { BaseButton } from "./BaseButton";
import { startLogoutAdmin } from "../actions/authActions";

export const HeaderAdmin = () => {
  const admin = useSelector((state) => state.authAdmin.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

    const handleLogout = () => {
        dispatch(startLogoutAdmin());
        navigate("/admin/auth/login");
    };


  return (
    <AdminHeader>
      <div className="headeradmin">
        <div className="headeradmin-group">
          {/* <NavLink className="headeradmin-group-a">
            <img  className="headeradmin-group-icons" src={getImg("svg", "think", "svg")} alt="" />
          </NavLink> */}
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
          }>Pqrs y problemas</NavLink>
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
                    <div className="headeradmin-mobile-header-avatar">
            <Avatar 
              clas={"avatar"} 
              classs={"avatar-dinamyc"}
              dropData={true} 
              avtsmall={true} 
              img={"default-avatar"}
              classWhite={"avatar black"} 
              userAdmin={true}
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
        </div>
        <div id="menu-admin" className="headeradmin-mobile-links">
          <Link onClick={handleFunctions} to={"/admin/dashboard"}>Inicio</Link>
          <Link onClick={handleFunctions} to={"properties"}>Propiedades</Link>
          <Link onClick={handleFunctions} to={"sales"} >Reportes</Link>
          <Link onClick={handleFunctions} to={"statics"}>Estadísticas</Link>
          <Link onClick={handleFunctions} to={"users"}>Usuarios</Link>
          <Link onClick={handleFunctions} to={"finances"}>Finanzas</Link>
          <Link onClick={handleFunctions} to={"comunications"}>Comunicaciones</Link>
          <Link onClick={handleLogout} to={""}>Cerrar sesión</Link>
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
          position: relative;
          background: var(--bg-tertiary);
          justify-content: space-between;
          align-items: center;
          display: flex;
          padding: 15px 10px;
          gap: 10px;
          height: fit-content;
          border-radius: 10px;
          z-index: 1000;
          color: black;

         &-btns{
            display: flex;
            position: absolute;
            bottom: 70px;
            padding: 0 50px;
            justify-content: space-between;
            gap: 10px;
            width: 100%;
            align-items: center;
            height: fit-content;
          }

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
          background: var(--bg-secondary-semi);
          place-content: center;
          transform: translateX(-100%);
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 80%;
            height: 90%;
            /* background: var(--bg-secondary-light); */
            border: 1px solid var(--bg-secondary-light);
            opacity: 0.5;
            z-index: -1;
          }
          a {
            display: grid;
            padding: 10px 0;
            font-size: 25px;
            color: var(--text-tertiary);
          }
        }
      }
    }
  }
`;
