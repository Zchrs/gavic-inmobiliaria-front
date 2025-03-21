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
          Entre el 2026 y 2027, GAVIC S.A.S. será reconocida como una
            marca líder en el sector inmobiliario, destacada por sus altos
            estándares en tecnología, gestión administrativa y talento
            humano. Aspiramos a ser una empresa que inspire confianza,
            innovación y solidez, posicionándonos como aliados clave para
            la administración y las inversiones inmobiliarias.
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

