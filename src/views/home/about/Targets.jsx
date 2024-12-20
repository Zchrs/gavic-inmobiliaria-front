import { getImg } from "../../../../globalActions";

export const Targets = () => {
  return (
    <div className="sectionsabout">
      <div className="sectionsabout-container bg-secondary">
        <div className="sectionsabout-contain">
        <img loading="lazy" className="sectionsabout-img" src={getImg("svg", "target", "svg")} alt="" />
          <div className="sectionsabout-contain-grid">
              <h2>OBJETIVOS GENERALES</h2>
              <p>
                
                    Lograr que nuestros clientes se sientan
                    tranquilos con el apoyo, tanto en la búsqueda del inmueble, en la
                    administración, como en la venta o renta del mismo. Buscamos que el
                    prospecto para la compra, venta y/o alquiler del inmueble cumpla con los
                    requisitos necesarios para que ésta pueda llevarse a cabo, consiguiendo
                    así una transacción segura y transparente, donde nos comprometemos a que
                    ambas partes queden completamente satisfechas. ESPECÍFICOS contar con un
                    plan de mercado inmobiliario de acuerdo a la situación actual del sector
                    inmobiliario que hoy se tiene, a efectos de diagnosticar la empresa
                    frente al entorno y la competencia, además de identificar necesidades
                    latentes y reales de los potenciales clientes que no están satisfechos y
                    que aspiran tener un buen servicio.
                
              </p>
          </div>
          </div>
        </div>
    </div>
  );
};
