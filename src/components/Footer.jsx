import { useEffect, useMemo } from "react";
import { useRoutesHome } from "../../index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getImg, scrollTop, scrollTopPadding } from "../../globalActions";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const routes = useRoutesHome();

   const location = useLocation();

  useEffect(() => {
    // Si hay un hash en la URL, hacer scroll al elemento
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const abtRoutes = useMemo(() => {
    const selectedNames = ["about", "targets", "mision", "vision", "values"]; // Nombres a incluir
    return routes.filter((route) => selectedNames.includes(route.name));
  }, [routes]);

  const aboutRoutes = abtRoutes;

  const lglRoutes = useMemo(() => {
    const selectedNames = [
      "legal",
      "privacy policy",
      "data treathment",
      "tyc",
    ]; // Nombres a incluir
    return routes.filter((route) => selectedNames.includes(route.name));
  }, [routes]);

  const legalRoutes = lglRoutes;

  const hlpRoutes = useMemo(() => {
    const selectedNames = ["coverage", "contact", "pqrs", "faq"]; // Nombres a incluir
    return routes.filter((route) => selectedNames.includes(route.name));
  }, [routes]);

  const helpRoutes = hlpRoutes;

  const navigate = useNavigate();

  const handleScrollToSection = (route) => {
    // Extrae el hash (#mision, #vision, etc.)
    const [path, hash] = route.split("#");

    // Navega al path base si es necesario
    if (path) {
      navigate(path);
    }

    // Desplázate a la sección especificada por el hash
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 0); // Delay necesario para asegurar que el DOM se haya cargado
    }
    scrollTop()
  };
  const handleScrollToSectionPadding = (route) => {
    // Extrae el hash (#mision, #vision, etc.)
    const [path, hash] = route.split("#");

    // Navega al path base si es necesario
    if (path) {
      navigate(path);
    }

    // Desplázate a la sección especificada por el hash
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 0); // Delay necesario para asegurar que el DOM se haya cargado
    }
    scrollTopPadding()
  };


  return (
    <FooTer>
      <div className="footer pd-full">
        <div className="footer-logo">
          <img loading="lazy" src={getImg("svg", "logo", "svg")} alt="logo" />
        </div>
        <div className="footer-links">
          <h2 className="footer-links-h2">Corporativo</h2>
          {aboutRoutes.map((route, index) => (
            <div
              className="footer-links-a"
              onClick={() => handleScrollToSection(route.route)}
              key={index}>
              {route.text}
            </div>
          ))}
        </div>
        <div className="footer-links">
          <h2 className="footer-links-h2">Legal</h2>
          {legalRoutes.map((route, index) => (
            <Link onClick={handleScrollToSectionPadding} className="footer-links-a" to={route.route} key={index}>
              {route.text}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <h2 className="footer-links-h2">Ayuda</h2>
          {helpRoutes.map((route, index) => (
            <Link onClick={scrollTop} className="footer-links-a" to={route.route} key={index}>
              {route.text}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <h2 className="footer-links-h2">Síguenos</h2>

          <div className="footer-flex">
            <Link className="footer-links-img" to={"https://www.instagram.com/gavicinmobiliaria/?hl=es"} target="_blank">
              <img
                loading="lazy"
                src={getImg("svg", "instagram", "svg")}
                alt="instagram-logo"
              />
            </Link>
            <Link className="footer-links-img" to={"https://www.facebook.com/share/16XNsfP1W5/"} target="_blank">
              <img
                loading="lazy"
                src={getImg("svg", "facebook", "svg")}
                alt="facebook-logo"
              />
            </Link>
            {/* <Link className="footer-links-img">
              <img
                loading="lazy"
                src={getImg("svg", "linkedin", "svg")}
                alt="linkedin-logo"
              />
            </Link>
            <Link className="footer-links-img">
              <img
                loading="lazy"
                src={getImg("svg", "twitter", "svg")}
                alt="twitter-logo"
              />
            </Link> */}
          </div>
        </div>
      </div>
      <div className="footer-copyright">
      <p>© {currentYear} Gavic Inmobiliaria</p>
      </div>
    </FooTer>
  );
};

const FooTer = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  background: transparent;
  margin-top: 100px;

  .footer {
    gap: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    background: var(--bg-primary);
    @media (max-width: 920px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
      grid-template-columns: 2fr;
    }

    &-logo {
      filter: brightness(1%) invert(50%);
      img {
        width: 100%;
      }
      @media (max-width: 1024px) {
        width: 150px;
      }
    }

    &-flex {
      padding: 10px;
      /* border: 1px solid var(--bg-secondary-semi); */
      align-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      display: flex;
      gap: 10px;
      img {
        width: 100%;
      }
    }

    &-links {
      height: 100%;
      display: grid;
      border-left: 1px solid var(--bg-secondary-semi);
      /* text-align: center; */
      justify-content: center;
      padding-left: 20px;
      align-content: start;
      align-items: start;
      @media (max-width: 820px) {
        width: fit-content;
      }
      &-a {
        cursor: pointer;
        color: var(--text-secondary-light);
        font-weight: 300;
        &:hover {
          color: var(--text-tertiary);
          font-weight: 500;
        }
      }
      &-h2 {
        color: var(--text-tertiary);
      }
      &-img {
        width: 40px;
        filter: grayscale(100%);
        transition: all ease 0.5s;
        &:hover {
          filter: grayscale(0%);
        }
      }
    }
    &-copyright {
      display: grid;
      text-align: center;
      align-items: center;
      border-top: 1px solid var(--bg-secondary-semi);
      background: var(--bg-secondary-tr);
      p {
        padding: 20px;
        color: var(--text-primary);
        font-weight: 300;
      }
    }
  }
`;
