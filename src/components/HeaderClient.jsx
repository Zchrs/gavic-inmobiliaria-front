/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Avatar } from "./Avatar";
import { startLogout } from "../actions/authActions";
import { useDispatch } from "react-redux";


export const HeaderClient = () => {

      const navigate = useNavigate();
      const dispatch = useDispatch();

        useEffect(() => {
          document.title = "Gavic Inmobiliaria - Panel asesores";
        }, []);

            const handleLogout = () => {
                dispatch(startLogout());
                navigate("/auth/client/login");
            };

  return (
    <ClientHeader>
        <div className="headerclient">
            <div className="headerclient-avatar">
                <Avatar 
                   img={"default-avatar"} 
                   avtMedium={true} 
                   clas={"avatar"} 
                   userClient={true}
                   classWhite={"avatar white"} 
                />
            </div>
            <div className="headerclient-menu">
                <NavLink to="/client/dashboard">Panel</NavLink>
                <NavLink to="documents">Documentos</NavLink>
                <NavLink to="profile">Perfil</NavLink>
                <NavLink to="properties">Inmuebles</NavLink>
                <NavLink to="settings">Configuración</NavLink>
                <NavLink to="issues">Reportar problemas</NavLink>
                <NavLink onClick={handleLogout}>Cerrar Sesión</NavLink>
            </div>
        </div>
    </ClientHeader>
  )
}

const ClientHeader = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  z-index: 1000;
   background: var(--bg-primary);

  .headerclient{
    display: grid;
    width: 100%;
    padding: 10px;
    height: fit-content;
    gap: 20px;

    @media (max-width: 860px) {
      
    }

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