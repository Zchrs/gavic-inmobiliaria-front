/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { getImg } from "../../../../globalActions";

export const Mision = () => {
  return (
    <div className="sectionsabout">
      <div className="sectionsabout-container">
        <div className="sectionsabout-contain flex-reverse">
          <div className="sectionsabout-contain-grid">
        <h2>Misión</h2>
        <p>
        Proporcionar un servicio personalizado de asesoría y
        acompañamiento en inversiones y administración de propiedad
        raíz. Nuestra prioridad es cuidar el patrimonio de nuestros
        clientes mediante soluciones justas, responsables y
        transparentes, construyendo relaciones duraderas que nos
        conviertan en su primera opción para proyectos inmobiliarios.
                </p>
      </div>
      <img loading="lazy" className="sectionsabout-img" src={getImg("svg", "mission", "svg")} alt="" />
    </div>
    </div>
    </div>
  );
};
