import styled from "styled-components";

export const Coverage = () => {
  return (
    <CoveRage>
      <div className="coverage">
        <div>
          <h2 className="h1-light">Cobertura.</h2>
          <p>
            Ofrecemos una cobertura Inmobiliaria Integral que abarca tanto el
            corazón del Área Metropolitana, como también las zonas y/o municipios
            aledaños ya sean zonas residenciales o urbanas y rurales en el
            departamento de Antioquia, extendiendo nuestra experiencia y capacidad
            instalada a todos nuestros posibles clientes con la intención de
            Inversión, desarrollo o búsqueda de propiedades y demás servicios
            inmobiliarios, brindando a nuestros clientes oportunidad, seguridad y
            un servicio personalizado.
          </p>
        </div>
      </div>
    </CoveRage>
  );
};

const CoveRage = styled.div`
  .coverage {
    display: grid;
    height: fit-content;
    padding: 200px 200px 200px 200px;
    background: var(--bg-secondary);
    align-items: center;
    @media (max-width: 680px) {
      padding: 100px 20px 0px 20px;
      
    }
  }
`;
