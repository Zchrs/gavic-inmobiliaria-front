import styled from "styled-components";
import { getImg } from "../../../../globalActions";
import {
  Mision,
  QualityPolicy,
  Targets,
  Values,
  Vision,
} from "../../../../index";

export const About = () => {
  return (
    <AbOut id="about">
      <div className="container">
        <div className="container-header">
          <div className="container-header-grid">
            <h2 className="h2-extra">¿Quiénes sómos?</h2>
            <p>
              <strong>GAVIC INMOBILIARIA S.A.S, </strong> Surge de la necesidad de conformar un
              equipo de trabajo que llegue más directo a las personas jurídicas y
              naturales con posibilidad de inversión o insuficiencias en todo lo
              relacionado con Propiedad Raíz en cualquiera que sea la modalidad,
              además de participar en el mercado interpretando los requerimientos
              de la incipiente economía solidaria, colaborativa y compartida.
              Somos una empresa de servicios integrales, especializada en el
              sector inmobiliario, en la comercialización, administración y
              asesorías en propiedad raíz para proyectos de inversión y afines.
            </p>
          </div>
          <img
          loading="lazy"
            className="container-header-img"
            src={getImg("jpg", "mision", "jpg")}
            alt=""
          />
        </div>

        <div className="container-text-overlay">
          <section id="mision">
            <Mision />
          </section>
          <section id="vision">
            <Vision />
          </section>
          <section id="values">
            <Values />
          </section>
          <section id="targets">
            <Targets />
          </section>
          <section id="qap">
            <QualityPolicy />
          </section>
        </div>
      </div>
    </AbOut>
  );
};

const AbOut = styled.div`
  .container {
    display: grid;
    position: relative;
    width: 100%;
    align-content: start;
    height: fit-content;
    color: white;
    padding: 0;

    &-header {
      display: grid;
      position: relative;
      background-color: var(--bg-secondary);
      width: 100%;
      height: fit-content;
      place-content: center;
      padding: 190px 250px;
      @media (max-width: 1024px) {
        padding: 190px 100px;
      }
      @media (max-width: 820px) {
        padding: 190px 20px;
      }
      &-img {
        position: absolute;
        top: 0px;
        left: 0;
        object-fit: cover;
        height: 100%;
        border-radius: 10px;
        filter: grayscale(100%);
        opacity: 0.09;
      }
      &-grid {
        display: grid;
        align-items: center;
        height: fit-content;
        gap: 30px;
      }
    }

    &-text-overlay {
      display: grid;
      border-radius: 10px;
      color: black;
      h1 {
        margin: 0;
        font-size: 24px;
      }

      p {
        margin: 8px 0 0;
        font-size: 18px;
        font-weight: 600;
      }
      strong{
        font-size: 22px;
      }
    }
  }

  .sectionsabout {
    display: grid;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: fit-content;
    gap: 10px;

    &-container {
      gap: 10px;
      display: grid;
      background: var(--bg-primary);
      align-items: center;
    }
    &-contain {
      height: 700px;
      gap: 50px;
      display: flex;
      align-items: center;
      padding: 200px 200px;
      color: var(--text-tertiary);
      @media (max-width: 1024px) {
        height: 900px;
        padding: 190px 100px;
      }
      @media (max-width: 820px) {
        height: 900px;
        padding: 190px 20px;
        flex-direction: column;
      }
      &-grid {
        display: grid;
        align-items: center;
        height: fit-content;
        p {
          font-weight: 300;
        }
        h2{
          font-size: 44px;
        }
      }
      &-overflow {
        display: grid;
        width: fit-content;
        align-items: center;
        height: 200px;
        overflow-x: hidden;
        margin: auto;
        padding: 10px 0;
      }
      &-border{
        display: grid;
        padding: 10px;
        border: 1px solid var(--bg-tertiary);
        border-radius: 50%;
      }
    }

    &-img {
      width: 50%;
      filter: invert(100%);
   
  }
  }
  .bg-primary{
    background: var(--bg-primary);
  }
  .bg-secondary{
    background: var(--bg-secondary);
  }
  .flex-reverse{
    display: flex;
    @media (max-width: 720px) {
      display: flex;
      flex-direction: column-reverse;
    }
    
  }
`;
