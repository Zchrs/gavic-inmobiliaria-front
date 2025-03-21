import styled from "styled-components";
import { getImg } from "../../../../globalActions";

export const Values = () => {
  return (
    <VaLues>
      <div className="sectionsabout">
        <div className="sectionsabout-container">
          <div className="sectionsabout-contain flex-reverse">
            <div className="sectionsabout-contain-grid">
              <h2>Valores</h2>
              <div className="sectionsabout-contain-overflow">
                <p>
                  <strong>Honestidad:</strong> Actuar con transparencia en todas
                  nuestras interacciones, garantizando decisiones éticas y
                  responsables. <br />
                  <strong>Respeto: </strong> Fomentar relaciones armónicas entre
                  clientes, colaboradores y aliados, promoviendo un trato digno
                  y equitativo. <br />
                  <strong>Responsabilidad:</strong> : Cumplir con los
                  compromisos adquiridos, priorizando el bienestar y la
                  satisfacción de nuestros clientes. <br />{" "}
                  <strong>Diligencia:</strong> Trabajar con eficiencia y
                  profesionalismo para alcanzar resultados de alta calidad.
                </p>
              </div>
            </div>
            <img
              loading="lazy"
              className="sectionsabout-img img"
              src={getImg("svg", "values", "svg")}
              alt=""
            />
          </div>
        </div>
      </div>
    </VaLues>
  );
};

const VaLues = styled.section`
  /* .img {
    transform: scale(1.5);
  } */
`;
