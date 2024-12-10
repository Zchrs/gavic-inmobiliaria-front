import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import { getImg } from "../../globalActions"
import { useRoutesHome } from "../routes/routes";
import { useEffect, useMemo } from "react";


export const Header = () => {


  let contador = 0;
  const showHideMenu = () => {
    let navMenu = document.getElementById("menu");
    if (window.innerWidth < 1025) {
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
  }
  

  useEffect(() => {
    let header = document.getElementById("header");
    const menuFixed = () => {
      if (window.scrollY > 50 ) {
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

  const routes = useRoutesHome();

  const hdrRoutes = useMemo(() => {
      const selectedNames = ["leases", "immovables", "list your property", "sales", "register"]; // Nombres a incluir
      return routes.filter((route) => selectedNames.includes(route.name));
    }, [routes]);

    const headerRoutes = hdrRoutes;

  return (
    <HeaDer id="header">
      <div className="header">
        <div className="header-logo">
          <Link to={"/"}><img className="header-logo-img" src={getImg('svg', 'logo', 'svg')} alt="logo" /></Link>
        </div>
        <div className="header-menu" onClick={showHideMenu}>
        <Link to={"/"}><img className="header-logo-img" src={getImg('svg', 'menu', 'svg')} alt="logo" /></Link>
        </div>
        <div  id="menu" className="header-links">
        {headerRoutes.map((item, index) => (
            <NavLink onClick={showHideMenu} className="header-links-a" to={item.route} key={index}>
              {item.text}
            </NavLink>
          ))}
        </div>

      </div>
    </HeaDer>
  )
}

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
      &-menu{
        display: none;
        @media (max-width: 1024px) {
          display: grid;
          width: 45px;
        }
      }
    &-links{
      width: fit-content;
      height: fit-content;
      align-items: start;
      display: flex;
      gap: 50px;
      &-a{
        font-size: 18px;
        font-weight: 300;
        width: fit-content;
        color: var(--text-dark);
        &:hover{
          color: var(--text-primary);
        }
      }
      @media (max-width: 1024px) {
        width: 100%;
        height: 100%;
        background: var(--bg-secondary-semi);
        top: 100px;
        left: 0;
        transform: translate(-100%);
        position: fixed;
        display: grid;
        place-content: center;
        justify-content: center;
        z-index: 100;
        &-a{
        font-size: 18px;
        font-weight: 300;
        width: fit-content;
        color: var(--text-tertiary);
        &:hover{
          color: var(--text-primary);
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
      @media (max-width: 800px) {
        width: 100px;
        &-img{
          width: 100%;
        }
        
      }
    }
    &-mobile{
      display: none;
      @media (max-width: 1024px) {
        position: fixed;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
    }
  }
`