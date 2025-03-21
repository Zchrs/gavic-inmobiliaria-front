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
              <strong>GAVIC INMOBILIARIA S.A.S, </strong> somos una empresa inmobiliaria dedicada a
                transformar la experiencia de nuestros clientes en la
                administración y comercialización de bienes raíces. Nuestro
                compromiso es mejorar la calidad de vida de las personas,
                ofreciendo confianza, seguridad y un servicio personalizado que
                protege su patrimonio. Nos caracterizamos por nuestra
                responsabilidad, transparencia y diligencia, lo que nos posiciona
                como aliados estratégicos en cada proyecto inmobiliario. Con
                un enfoque orientado a la innovación, trabajamos para innovar
                y promover la sostenibilidad, estableciendo relaciones sólidas
                con nuestros clientes, proveedores y colaboradores. GAVIC
                S.A.S., creemos en construir un legado basado en la excelencia,
                creando oportunidades de empleo y promoviendo el
                crecimiento personal mientras dejamos una huella positiva
                en la industria.
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
    padding: 0;

    &-header {
      display: grid;
      position: relative;
      background-color: var(--bg-primary-soft);
      width: 100%;
      height: fit-content;
      place-content: center;
      padding: 190px 250px;
      overflow: hidden;
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
        width: 100%;
        border-radius: 10px;
        filter: grayscale(100%);
        opacity: 0.09;
      }
      &-grid {
        display: grid;
        align-items: center;
        height: fit-content;
        gap: 30px;
        p{
          font-size: 1.9rem;
        }
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
