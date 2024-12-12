import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { getImg, scrollTop } from "../../globalActions";
import { useRoutesHome } from "../routes/routes";
import { useEffect, useMemo } from "react";
import { BaseButton } from "./BaseButton";
// import { ScreenResolution } from "./ScreenResolution";

export const Header = () => {
  let contador = 0;
  const showHideMenu = () => {
    let navMenu = document.getElementById("menu");
    if (window.innerWidth < 920) {
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
  }

  const routes = useRoutesHome();

  const hdrRoutes = useMemo(() => {
    const selectedNames = [
      "home",
      "list your property",
      "immovables",
      "leases",
      "sales",
      "register",
    ]; // Nombres a incluir
    return routes.filter((route) => selectedNames.includes(route.name));
  }, [routes]);

  const headerRoutes = hdrRoutes;

  return (
    <HeaDer id="header">
      <div className="header">
        <div className="header-logo">
          <Link to={"/"}>
            <img
              className="header-logo-img"
              src={getImg("svg", "logo", "svg")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="header-menu" onClick={handleFunctions}>
          <Link to={"/"}>
            <img
              className="header-logo-img"
              src={getImg("svg", "menu", "svg")}
              alt="logo"
            />
          </Link>
        </div>
        <div id="menu" className="header-links">
          {headerRoutes.map((item, index) => (
            <NavLink
              onClick={handleFunctions}
              className={({ isActive }) =>
                `${isActive ? "header-links-a-active" : "header-links-a"}`
              }
              to={item.route}
              key={index}>
              {item.text}
            </NavLink>
          ))}
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

    &-btns{
      display: none;
      @media (max-width: 920px) {
        padding: 0;
      display: flex;
      width: 100%;
      height: fit-content;
      justify-content: space-between;
              }
    }
      &-menu{
        display: none;
        @media (max-width: 920px) {
          display: grid;
          width: 35px;
        }
      }
    &-links{
      width: fit-content;
      height: fit-content;
      align-items: start;
      display: flex;
      gap: 50px;
      &-a{
        position: relative;
        font-size: 18px;
        font-weight: 300;
        width: fit-content;
        color: var(--text-dark);
        &:hover{
          color: var(--text-primary);
          @media (max-width: 920px) {
            color: var(--text-tertiary);
          }
        }
        &::before {
          transition: all ease .5s;
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
      }

      @media (max-width: 1024px) {
        gap: 20px;
        &-a{
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
        
        &-a{
        margin: -50px auto;
        font-size: 25px;
        font-weight: 300;
        width: fit-content;
        height: fit-content;
        padding: 0;
        color: var(--text-secondary-semi-soft);
        &:hover{
          color: var(--text-tertiary);
        }
      }
      }
    }
    &-logo{
      display: grid;
      width: 200px;
      &-img{
        width: 100%;
      }
      @media (max-width: 920px) {
        width: 100px;
        &-img{
          width: 100%;
        }
        
      }
    }

  }
`