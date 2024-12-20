import { getImg } from "../../../../globalActions";

export const Vision = () => {
  return (
    <div className="sectionsabout">
    <div className="sectionsabout-container bg-secondary">
      <div className="sectionsabout-contain">
      <img loading="lazy" className="sectionsabout-img" src={getImg("svg", "vision", "svg")} alt="" />
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
  );
};
