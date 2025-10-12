

import { useState } from "react";
import styled from "styled-components";

export const FaQ = () => {
  const faqs = [
    {
      category: "COMPRA Y VENTA",
      questions: [
        {
          q: "¿Cuáles son los pasos para vender mi inmueble o propiedad?",
          a: "Primero debes solicitar una valoración, luego firmar un contrato de corretaje y finalmente publicar tu inmueble para atraer compradores."
        },
        {
          q: "¿Qué documentos o requisitos necesito para comprar un inmueble?",
          a: "Debes tener tu documento de identidad, prueba de ingresos, y en algunos casos, certificado de libertad del inmueble."
        },
        {
          q: "¿Cómo puedo agendar una visita a una propiedad?",
          a: "Puedes agendarla directamente desde nuestro sitio web o contactando a uno de nuestros asesores."
        },
        {
          q: "¿Cuál es el proceso para hacer una oferta?",
          a: "Debes registrar tu oferta formalmente con nuestro equipo comercial, quien la presentará al propietario."
        }
      ]
    },
    {
      category: "ARRENDAMIENTO",
      questions: [
        {
          q: "¿Qué requisitos se necesitan para arrendar una propiedad?",
          a: "Debes presentar tu documento de identidad, comprobante de ingresos y referencias personales o laborales."
        },
        {
          q: "¿Qué documentación adicional se puede solicitar a un arrendatario?",
          a: "Dependiendo del caso, puede requerirse un codeudor o póliza de arrendamiento."
        },
        {
          q: "¿Qué servicios incluye el valor del arriendo?",
          a: "El valor del arriendo incluye el uso del inmueble, pero no servicios públicos ni administración, salvo acuerdo contrario."
        },
        {
          q: "¿Cómo se debe realizar el pago del arriendo?",
          a: "Se puede realizar por transferencia bancaria o a través de nuestros medios digitales autorizados."
        }
      ]
    },
    {
      category: "SERVICIOS DE LA INMOBILIARIA",
      questions: [
        {
          q: "¿Qué tipo de propiedades manejan?",
          a: "Manejamos viviendas, locales comerciales, lotes y propiedades rurales."
        },
        {
          q: "¿En qué zonas tienen cobertura?",
          a: "Tenemos cobertura en todo el departamento y algunas zonas del país."
        },
        {
          q: "¿Cobran comisión por sus servicios?",
          a: "Sí, cobramos una comisión que varía según el tipo de servicio contratado."
        },
        {
          q: "¿Cómo pueden ayudarme a valorar mi propiedad?",
          a: "Nuestro equipo realiza una evaluación profesional basada en el mercado actual y características del inmueble."
        },
        {
          q: "¿Si tengo problemas con la infraestructura de mi propiedad que debo hacer?",
          a: "Debes comunicarte con nuestro departamento de mantenimiento o con el propietario según tu tipo de contrato."
        },
        {
          q: "¿Tienen servicio de representación jurídica?",
          a: "Sí, contamos con asesoría legal para la gestión y defensa de tus bienes raíces."
        }
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let counter = 0; // contador para índices únicos

  return (
    <FaQs>
      <div className="faq-container">
        <h2 className="faq-title">Preguntas Frecuentes</h2>
        {faqs.map((section, i) => (
          <div key={i} className="faq-section">
            <h3 className="faq-category">{section.category}</h3>
            {section.questions.map((item) => {
              const index = counter++;
              return (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-question ${
                      openIndex === index ? "active" : ""
                    }`}
                    onClick={() => toggleQuestion(index)}
                  >
                    {item.q}
                  </button>
                  <div
                    className={`faq-answer ${
                      openIndex === index ? "open" : ""
                    }`}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </FaQs>
  );
};

const FaQs = styled.div`
  .faq-container {
  max-width: 800px;
  margin: 50px auto;
  border-radius: 20px;
  padding: 40px;
}

.faq-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  letter-spacing: 1px;
  border-bottom: 2px solid var(--bg-secondary);
  padding-bottom: 10px;
}

.faq-category {
  font-size: 1.7rem;
  margin-top: 30px;
}

.faq-item {
  margin: 10px 0;
  border-bottom: 1px solid var(--bg-secondary);
}

.faq-question {
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  text-align: left;
  width: 100%;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.faq-question:hover {
  color: var(--bg-secondary);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
  border-radius: 10px;
  margin: 5px 0;
}

.faq-answer.open {
  max-height: 200px;
  padding: 10px 15px;
}

.faq-answer p {
  margin: 0;
  line-height: 1.5;
}

.faq-question.active {
  color: var(--bg-secondary);
}
`
