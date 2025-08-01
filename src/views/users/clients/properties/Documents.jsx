/* eslint-disable no-unused-vars */
import styled from "styled-components"
import { getImg } from "../../../../../globalActions"
import { Link } from "react-router-dom"


export const Documents = () => {
  return (
    <DocuMents>
        <div className="documents">
            <div className="documents-container">
                <h2>Documentación requerida para arrendamiento </h2>
                <div className="documents-contain">
                    <div className="documents-contain-cards">
                        <h4>Formulario para solicitud de arrendamiento</h4>
                        <img src={getImg("svg", "pdf", "svg")} alt="pdf" />
                        <a 
                        href="/solicitud.pdf" 
                        target="_blank"
                        download="solicitud.pdf"
                        className="documents-contain-cards-download"
                        // rel="noopener noreferrer"
                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     window.open("/solicitud.pdf", "_blank");
                        // }}
                        >Descargar</a>
                    </div>
                    <div className="documents-contain-cards"></div>
                    <div className="documents-contain-cards"></div>
                    <div className="documents-contain-cards"></div>
                </div>
            </div>
        </div>
    </DocuMents>
  )
}

const DocuMents = styled.section`

.documents{
 display: grid;
 width: 100%;
 height: fit-content;
 background: var(--bg-tertiary);
 border: 1px solid var(--bg-primary-semi);
 border-radius: 0 0 15px 0;
 padding: 15px;
&-container{
    display: grid;
     width: 100%;
 height: 100%;
 gap: 25px;
}
&-contain{
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    &-cards{
        display: grid;
        place-items: center;
        gap: 10px;
        width: 100%;
        height: 100%;
        text-align: center;
        img{
            width: 100%;
            filter: invert(70%);
        }
        &-download{
            border: var(--bg-danger) 2px solid;
            color: var(--bg-danger);
            padding: 5px 10px;
            border-radius: 50px;
            width: fit-content;
            height: fit-content;
            font-weight: 500;
            transition: all 0.3s ease;
            &:hover{
                background: var(--bg-danger);
                color: var(--text-tertiary);
            }
        }
    }
}
}
`