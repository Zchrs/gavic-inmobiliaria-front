import { getImg } from "../../../../globalActions";

export const Values = () => {
  return (
    <div className="sectionsabout">
      <div className="sectionsabout-container">
        <div className="sectionsabout-contain flex-reverse">
          <div className="sectionsabout-contain-grid">
        <h2>Valores</h2>
          <div className="sectionsabout-contain-overflow">
        <p>
          <strong>SEGURIDAD:</strong> La información que es objeto de tratamiento por parte de la
          Inmobiliaria o sus encargados del tratamiento a que se refiere el
          presente principio, se manejará con las medidas técnicas, humanas,
          legales y administrativas que sean necesarias para otorgar seguridad a
          los registros evitando su adulteración, pérdida, consulta, uso o acceso
          no autorizado o fraudulento. Además de la tranquilidad que se les brinda
          a nuestros clientes porque respondemos por el pago oportuno del canon de
          arrendamiento y ofrecemos a través de la plataforma transaccional y
          comercial el pago de servicios públicos, administración e impuestos. <br />
          <strong>LIDERAZGO: </strong> Somos una agencia inmobiliaria con un grupo de asesores
          técnicos y profesionales en el sector inmobiliario, pendiente en atender
          cada uno de los requerimientos y necesidades de nuestros clientes. Con
          servicios complementarios que nos diferencia de las demás inmobiliarias,
          trabajo social, personal especializado para cada atención virtual y
          actualmente cubrimos todos los sectores del departamento de Antioquia. <br />
          <strong>DISCIPLINA:</strong> Como objeto principal de la agencia inmobiliaria, es la
          disciplina de las personas o colaboradores que ejercen con seriedad su
          labor encomendada donde se refleja en los resultados de su trabajo, con
          la puntualidad, siguiendo las normas, ser proactivo, proponerse alcanzar
          objetivos y ser exigente. <br /> <strong>RESPONSABILIDAD SOCIAL:</strong> Es el valor empresarial
          y social que se refiere al compromiso que tiene la agencia inmobiliaria
          en compañía de la Corporación Social “<b>CRISALIDA</b>” la cual hacemos parte
          como unidad productiva asociada. La finalidad es generar y poner en
          práctica diversas iniciativas y actividades que contribuyan a mejorar la
          vida en comunidad.
        </p>
          </div>
      </div>
      <img loading="lazy" className="sectionsabout-img" src={getImg("svg", "values", "svg")} alt="" />
    </div>
    </div>
    </div>
  );
};
