/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { getImg } from "../../../../globalActions";

export const Mision = () => {
  return (
    <div className="sectionsabout">
      <div className="sectionsabout-container">
        <div className="sectionsabout-contain">
          <div className="sectionsabout-contain-grid">
        <h2>Misión</h2>
        <p>
          Brindar un servicio personalizado de asesoría y acompañamiento en
          inversiones y administración de Propiedad Raíz, orientada a cuidar el
          patrimonio, correspondiéndole la confianza depositada por nuestros
          clientes convirtiéndonos en sus mejores aliados para los proyectos
          inmobiliarios.
        </p>
      </div>
      <img loading="lazy" className="sectionsabout-img" src={getImg("svg", "mission", "svg")} alt="" />
    </div>
    </div>
    </div>
  );
};
