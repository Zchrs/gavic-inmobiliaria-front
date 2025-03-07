import styled from "styled-components";
import { getImg } from "../../../../globalActions";

export const Vision = () => {
  return (
    <ViSion>
      <div className="sectionsabout">
      <div className="sectionsabout-container bg-secondary">
        <div className="sectionsabout-contain">
        <img loading="lazy" className="sectionsabout-img img" src={getImg("svg", "vision", "svg")} alt="" />
          <div className="sectionsabout-contain-grid">
      
          <h2>Visión</h2>
          <p>
            En el 2026 GAVIC INMOBILIARIA S.A.S. es una compañía reconocida por los
            altos estándares de calidad en tecnología y recurso humano al servicio
            del mercado inmobiliario con la más alta gestión administrativa, para
            llegar como la marca líder en el sector inmobiliario.
          </p>
      
      </div>
      </div>
      </div>
      </div>
    </ViSion>
  );
};
 const ViSion = styled.section`
 p, h2 {
  color: black;
 }
 .img{
  filter: invert(100%) brightness(0%);
 }
 `

