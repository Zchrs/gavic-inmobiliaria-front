/* eslint-disable no-unused-vars */
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getImg, scrollTop } from "../../globalActions";
import { useRoutesHome } from "../routes/routes";
import { useEffect, useMemo, useState } from "react";
import { BaseButton } from "./BaseButton";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const location = useLocation();


  const showHideMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const isMobile = () => {
    return window.innerWidth <= 920; // Ajusta el valor según tus necesidades
  };

  useEffect(() => {
    let navMenu = document.getElementById("menu");

    if (navMenu && window.innerWidth < 920) {
      if (menuOpen) {
        navMenu.style.cssText = `
          opacity: 1;
          transform: translateX(0%);
          transition: all ease .5s;
        `;
      } else {
        navMenu.style.cssText = `
          opacity: 0;
          transform: translateX(-120%);
          transition: all ease .5s;
        `;
      }
    }
  }, [menuOpen]); // Se ejecuta cada vez que `menuOpen` cambia

  // Cerrar menú cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("menu");
      const menuButton = document.querySelector(".header-menu");

      if (menu && menuButton && !menu.contains(event.target) && !menuButton.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


    const hideSubMenu = () => {
      let subMenu = document.getElementById("submenu");
      // Buscar todos los submenús abiertos
      if (subMenu) {
        subMenu.style.cssText = `
        opacity: 0;
        transform: translateY(-120%);
        transition: all ease .5s;
        display: none;
      `;
      setTimeout(() => {
        subMenu.style.cssText = ""; // Resetear estilos después de la animación
      }, 500);
      setSubMenuOpen(false);
      }
    }
    const hideSubMenu1 = () => {
      let subMenu = document.getElementById("submenu1");
      // Buscar todos los submenús abiertos
      if (subMenu) {
        subMenu.style.cssText = `
        opacity: 0;
        transform: translateY(-120%);
        transition: all ease .5s;
        display: none;
      `;
      setTimeout(() => {
        subMenu.style.cssText = ""; // Resetear estilos después de la animación
      }, 500);
      setSubMenuOpen(false);
      }
    }
    const hideSubMenu2 = () => {
      let subMenu = document.getElementById("submenu2");
      // Buscar todos los submenús abiertos
      if (subMenu) {
        subMenu.style.cssText = `
        opacity: 0;
        transform: translateY(-120%);
        transition: all ease .5s;
        display: none;
      `;
      setTimeout(() => {
        subMenu.style.cssText = ""; // Resetear estilos después de la animación
      }, 500);
      setSubMenuOpen(false);
      }
    }
    
  
  useEffect(() => {
    let header = document.getElementById("header");
    const menuFixed = () => {
      if (window.scrollY > 50) {
        header.style.cssText = `
          background: var(--bg-tertiary);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
         position: fixed;
         z-index: 200;
         top: 0;
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
    hideSubMenu();
    hideSubMenu1();
    hideSubMenu2();
  };

  const routes = useRoutesHome();

  const hdrRoutes = useMemo(() => {
    const selectedNames = ["home"]; // Nombres a incluir
    return routes.filter((route) => selectedNames.includes(route.name));
  }, [routes]);

  const headerRoutes = hdrRoutes;

  const handleBlockClick = (e, submenuRoutes = []) => {

    if (isMobile()) {
      e.preventDefault(); // Evitar la navegación en móviles
    }

    if (!Array.isArray(submenuRoutes)) {
      console.error("submenuRoutes no es un array:", submenuRoutes);
      return;
    }

    if (!submenuRoutes.includes(location.pathname)) {
      e.preventDefault(); // Previene la navegación
    }
  };

  const isSubmenuActive = (routes) => {
    return routes.some((route) => location.pathname === route);
  };

  return (
    <HeaDer id="header">
      <div className="header">
        <div className="header-logo">
          <Link to={"/"}>
            <img
              loading="lazy"
              className="header-logo-img"
              src={getImg("svg", "logo", "svg")}
              onClick={scrollTop}
              alt="logo"
            />
          </Link>
        </div>
        <div className="header-menu" onClick={handleFunctions}>
          <Link to={"/"}>
            <img
              loading="lazy"
              className="header-logo-img"
              src={getImg("svg", "menu", "svg")}
              alt="logo"
            />
          </Link>
        </div>
        <div id="menu" className="header-links">
          {headerRoutes.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "header-links-a-active" : "header-links-a"}`
              }
              to={item.route}
              key={index}>
              {item.text}
            </NavLink>
          ))}

          <NavLink
            onClick={handleBlockClick}
            to={"/bloqueado"}
            className={({ isActive }) =>
              `${
                isActive ||
                isSubmenuActive(["/leases", "/sales", "/list-your-property"])
                  ? "header-links-a-active"
                  : "header-links-a"
              }`
            }>
            Propiedades
            <div id="submenu" className="submenu">
              <Link onClick={handleFunctions} to={"/leases"}>
                Arrendamiento
              </Link>
              <Link onClick={handleFunctions} to={"/sales"}>
                Venta
              </Link>
              <Link onClick={handleFunctions} to={"/list-your-property"}>
                Consigna tu inmueble
              </Link>
            </div>
          </NavLink>

          <NavLink
            onClick={handleBlockClick}
            to={"/bloqueado"}
            className={({ isActive }) =>
              `${
                isActive ||
                isSubmenuActive([
                  "/hipoteca",
                  "/consultorias",
                  "/avaluos",
                  "/mejoras-locativas",
                ])
                  ? "header-links-a-active"
                  : "header-links-a"
              }`
            }>
            Servicios
            <div id="submenu1" className="submenu">
              <Link onClick={handleFunctions} to={"/hipoteca"}>
                Hipotecas
              </Link>
              <Link onClick={handleFunctions} to={"/consultorias"}>
                Consultorías
              </Link>
              <Link onClick={handleFunctions} to={"/avaluos"}>
                Avalúos
              </Link>
              <Link onClick={handleFunctions} to={"/mejoras-locativas"}>
                Mejoras locativas
              </Link>
            </div>
          </NavLink>

          <NavLink
            onClick={handleBlockClick}
            to={"/bloqueado"}
            className={({ isActive }) =>
              `${
                isActive ||
                isSubmenuActive([
                  "/auth/client/register",
                  "/auth/advisor/register",
                ])
                  ? "header-links-a-active"
                  : "header-links-a"
              }`
            }>
            Registrarme
            <div id="submenu2" className="submenu">
              <Link onClick={handleFunctions} to={"/auth/client/register"}>
                Como Cliente
              </Link>
              <Link onClick={handleFunctions} to={"/auth/advisor/register"}>
                Como Asesor
              </Link>
            </div>
          </NavLink>

          <div className="header-btns">
            <BaseButton
              classs={"button little-secondary"}
              textLabel={true}
              label={"Iniciar sesión"}
              // handleClick={whatsapp}
            />
            <BaseButton
              classs={"button little-secondary"}
              textLabel={true}
              label={"Registrarse"}
              // handleClick={whatsapp}
            />
          </div>
        </div>
      </div>

      {/* <ScreenResolution /> */}
    </HeaDer>
  );
};

const HeaDer = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;

  .header {
    position: relative;
    padding: 24px;
    border-bottom: 1px solid #e5e5e5;
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 100%;

    /* @media (max-width: 1024px) {
        display: none;
      } */

    &-btns {
      display: none;
      @media (max-width: 920px) {
        padding: 0 24px;
        display: flex;
        width: 100%;
        height: fit-content;
        justify-content: space-between;
      }
    }
    &-menu {
      display: none;
      @media (max-width: 920px) {
        display: grid;
        width: 35px;
      }
    }
    &-links {
      position: relative;
      width: fit-content;
      height: fit-content;
      align-items: start;
      display: flex;
      gap: 50px;

      &-a {
        position: relative;
        font-size: 18px;
        font-weight: 300;
        width: fit-content;
        transition: all ease 0.3s;
        color: var(--text-dark);
        &:hover {
          transition: all ease 0.3s;
          color: var(--text-primary);
          @media (max-width: 920px) {
            color: var(--text-tertiary);
            transform: translateX(-90%);
          }
        }
        &::before {
          transition: all ease 0.5s;
          content: "";
          height: 3px;
          width: 0%;
          background: var(--bg-primary);
          position: absolute;
          bottom: -3px;
          left: 0;
          @media (max-width: 920px) {
            background: var(--bg-tertiary);
          }
        }
        &:hover::before {
          width: 100%;
        }

        &-active {
          transition: all ease 0.3s;
          position: relative;
          font-size: 18px;
          font-weight: 500;
          width: fit-content;
          color: var(--text-primary);
          border-bottom: 3px solid var(--bg-primary);

          @media (max-width: 920px) {
            margin: auto;
            height: fit-content;
            margin-top: -50px;
            font-size: 25px;
            color: var(--text-tertiary);
            border-bottom: 3px solid var(--bg-tertiary);
          }
        }
        &:last-child {
          &:hover .submenu {
            transition: all ease 0.5s;
            top: 110%;
            height: fit-content;
            opacity: 1;
            border-radius: 0 0 5px 5px;
            transform: translateY(0%);
          }
        }
        &:nth-child(4) {
          &:hover .submenu {
            transition: all ease 0.5s;
            top: 110%;
            width: 150px;
            height: fit-content;
            opacity: 1;
            border-radius: 0 0 5px 5px;
            transform: translateY(0%);

            @media (max-width: 920px) {
              z-index: -1;
              right: -176%;
              top: -15%;
              border-radius: 0 5px 5px 0;
            }
          }
        }
        &:nth-child(3) {
          &:hover .submenu {
            transition: all ease 0.5s;
            top: 110%;
            transform: translateY(0%);
            width: 150px;
            height: fit-content;
            opacity: 1;
            border-radius: 0 0 5px 5px;

            @media (max-width: 920px) {
              z-index: -1;
              right: -196%;
              top: -110%;
              border-radius: 0 5px 5px 0;
            }
          }
        }
        &:nth-child(2) {
          &:hover .submenu {
            transition: all ease 0.5s;
            top: 110%;
            transform: translateY(0%);
            width: 150px;
            height: fit-content;
            opacity: 1;
            border-radius: 0 0 5px 5px;

            @media (max-width: 920px) {
              z-index: -1;
              right: -166%;
              top: -70%;
              border-radius: 0 5px 5px 0;
            }
          }
        }
      }

      @media (max-width: 1024px) {
        gap: 20px;
        &-a {
          font-size: 20px;
          font-weight: 600;
        }
      }

      @media (max-width: 920px) {
        width: 100%;
        height: 100%;
        background: var(--bg-secondary-semi);
        top: 90px;
        gap: 5px;
        left: 0;
        transform: translate(-100%);
        position: fixed;
        display: grid;
        padding: 150px 0 50px 0;
        z-index: 100;
        align-items: start;

        &-a {
          margin: -50px auto;
          font-size: 25px;
          font-weight: 300;
          width: fit-content;
          height: fit-content;
          padding: 0;
          color: var(--text-secondary-semi-soft);
          &:hover {
            color: var(--text-tertiary);
          }
        }
      }
    }
    &-mobile {
      display: none;
      @media (max-width: 1023px) {
        display: grid;
        width: 100%;
        height: 100vh;
        background: var(--bg-secondary-semi);
      }
    }
    &-logo {
      display: grid;
      width: 200px;
      &-img {
        width: 100%;
      }
      @media (max-width: 920px) {
        width: 130px;
        &-img {
          width: 100%;
        }
      }
    }
  }

  .submenu {
    transition: all ease 0.3s;
    opacity: 0;
    position: absolute;
    overflow: hidden;
    width: 150px;
    height: fit-content;
    z-index: -1;
    text-align: center;
    transform: translateY(-100%);
    top: 0%;
    right: 0;
    background: black;
    display: grid;
    padding: 0;
    z-index: 100;

    a {
      transition: all ease 0.3s;
      font-size: 14px;
      color: white;
      width: 100%;
      padding: 5px 0;
      &:hover {
        background: #ffffff47;
      }
    }
    @media (max-width: 920px) {
      transform: translateY(0%);
    }
  }

  .header-links-a-active .submenu {
    opacity: 0;
    right: 0;
    top: 100%;
    transform: translateY(-100%);
    height: fit-content;
    visibility: hidden;
    font-weight: 300;
  }

  .header-links-a-active:hover .submenu {
    top: 100%;
    opacity: 1;
    transform: translateY(0%);
    visibility: visible;
    border-radius: 0 0 5px 5px;
  }
  .submenu-hidden {
  opacity: 0;
  transform: translateY(-120%);
}
`;
