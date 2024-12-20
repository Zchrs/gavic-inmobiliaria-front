import { getImg } from "../../../../globalActions";

export const QualityPolicy = () => {
  return (
    <div className="sectionsabout">
      <div className="sectionsabout-container">
        <div className="sectionsabout-contain flex-reverse">
          <div className="sectionsabout-contain-grid">
            <h2>POLÍTICA DE CALIDAD</h2>
            <p>
              Esta creada y orientada a
              suministrar con profesionalismo, ética y tecnología informática
              soluciones inmobiliarias oportunas y estratégicas a nuestros clientes,
              basadas en un mejoramiento continuo respondiendo así a sus
              requerimientos, contando con un excelente equipo profesional
              comprometido y atento a brindar soluciones agiles y oportunas.
            </p>
          </div>
                <img loading="lazy" className="sectionsabout-img" src={getImg("svg", "quality", "svg")} alt="" />
                </div>
        </div>
    </div>
  );
};
