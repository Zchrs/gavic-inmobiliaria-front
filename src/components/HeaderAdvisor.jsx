/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Avatar } from "./Avatar";
import { startLogoutAdvisor } from "../actions/authActions";
import { useDispatch } from "react-redux";


export const HeaderAdvisor = () => {

      const navigate = useNavigate();
      const dispatch = useDispatch();

        useEffect(() => {
          document.title = "Gavic Inmobiliaria - Panel asesores";
        }, []);

            const handleLogout = () => {
                dispatch(startLogoutAdvisor());
                navigate("/advisor/auth/login");
            };

  return (
    <AdvisorHeader>
        <div className="headeradvisor">
            <div className="headeradvisor-avatar">
                <Avatar 
                   img={"default-avatar"} 
                   avtMedium={true} 
                   clas={"avatar"} 
                   userAdvisor={true}
                   classWhite={"avatar white"} 
                />
            </div>
            <div className="headeradvisor-menu">
                <NavLink to="/advisor/dashboard">Panel</NavLink>
                <NavLink to="profile">Perfil</NavLink>
                <NavLink to="finances">Finanzas</NavLink>
                <NavLink to="sales">Ventas</NavLink>
                <NavLink to="clients">Clientes</NavLink>
                <NavLink to="settings">Configuración</NavLink>
                <NavLink onClick={handleLogout}>Cerrar Sesión</NavLink>
            </div>
        </div>
    </AdvisorHeader>
  )
}

const AdvisorHeader = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  z-index: 1000;
   background: var(--bg-primary);

  .headeradvisor{
    display: grid;
    width: 100%;
    padding: 10px;
    height: fit-content;
    gap: 20px;
/* 
        &::before{
          position : absolute;
          display: grid;
          content: "";
          z-index: -1;
          border: var(--bg-primary-semi) 1px solid;
          border-radius: 10px 0px 0px 10px;
          width: 88%;
          height: 97%;
          top: 10px;
          left : 10px;
        } */

    &-avatar{
        display: grid;
        padding : 30px;
    }
    &-menu{
        display: grid;
        gap: 10px;
        
        a{
          color: var(--bg-tertiary);
          font-weight: 300;
          font-size: 13px;
          padding: 8px 0;
          border-bottom: var(--bg-primary-semi) 1px solid;
        }

    }
  }
  `