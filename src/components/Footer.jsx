import { useMemo } from "react";
import { useRoutesHome } from "../../index";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getImg } from "../../globalActions";

export const Footer = () => {

    const routes = useRoutesHome();

    const abtRoutes = useMemo(() => {
        const selectedNames = ["about us", "mision", "vision", "values"]; // Nombres a incluir
        return routes.filter((route) => selectedNames.includes(route.name));
      }, [routes]);

      const aboutRoutes = abtRoutes;

    const lglRoutes = useMemo(() => {
        const selectedNames = ["privacy policy", "data treathment", "quality policy", "tyc"]; // Nombres a incluir
        return routes.filter((route) => selectedNames.includes(route.name));
      }, [routes]);

      const legalRoutes = lglRoutes;
      
    const hlpRoutes = useMemo(() => {
        const selectedNames = [ "contact", "helpcenter", "pqrs", "coverage"]; // Nombres a incluir
        return routes.filter((route) => selectedNames.includes(route.name));
      }, [routes]);

      const helpRoutes = hlpRoutes;
      

  return (
    <FooTer>
      <div className="footer pd-full">
        <div>
          <img className="footer-logo" src={getImg('svg', 'logo', 'svg')} alt="logo" />
        </div>
        <div className="footer-links">
          <h2 className="footer-links-h2">Corporativo</h2>
          {aboutRoutes.map((route, index) => (
            <Link className="footer-links-a" to={route.route} key={index}>
              {route.text}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <h2 className="footer-links-h2">Legal</h2>
          {legalRoutes.map((route, index) => (
            <Link className="footer-links-a" to={route.route} key={index}>
              {route.text}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <h2 className="footer-links-h2">Ayuda</h2>
          {helpRoutes.map((route, index) => (
            <Link className="footer-links-a" to={route.route} key={index}>
              {route.text}
            </Link>
          ))}
        </div>
        <div className="flex">
          <Link className="footer-links-img"><img src={getImg('svg', 'instagram', 'svg')} alt="instagram-logo" /></Link>
          <Link className="footer-links-img"><img src={getImg('svg', 'facebook', 'svg')} alt="facebook-logo" /></Link>
          <Link className="footer-links-img"><img src={getImg('svg', 'linkedin', 'svg')} alt="linkedin-logo" /></Link>
          <Link className="footer-links-img"><img src={getImg('svg', 'twitter', 'svg')} alt="twitter-logo" /></Link>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2022 Gavic Inmobiliaria</p>
      </div>
    </FooTer>
  )
}

const FooTer = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  background: var(--bg-secondary);

  .footer{
    gap: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    &-logo{
      filter: brightness(1%) invert(50%) ;
    }
    &-links{
      display: grid;
      border-left: 1px solid var(--bg-secondary-semi);
      text-align: center;
      &-a{
        color: var(--text-secondary-light);
        font-weight: 300;
        &:hover{
          color: var(--text-secondary-soft);
        }
      }
      &-h2{
        color: var(--text-secondary-soft);
      }
      &-img{
        width: 40px;
      }
    }
    &-copyright{
      display: grid;
      text-align: center;
      align-items: center;
      border-top: 1px solid var(--bg-secondary-semi);
      p{
        padding: 20px;
        color: var(--text-secondary-light);
        font-weight: 300;
      }
    }
  }
`