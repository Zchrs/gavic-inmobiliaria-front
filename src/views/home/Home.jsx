/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { getImg } from "../../../globalActions";
import { BaseInput } from "../../components/BaseInput";
import { BaseButton } from "../../components/BaseButton";
import { useState } from "react";
import { RecentAdded, Services } from "../../../index";
import { values } from "../../sectors/dataSectors";
import { useValidations } from "../../hooks/useValidations";

export const Home = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const [selectedCode, setSelectedCode] = useState("");
  const { formRefs, validateForm } = useValidations();

  const handleSector = (e) => {
    console.log("Sector seleccionado:", e.target.value);
    setSelectedSector(e.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleProperty = (p) => {
    setSelectedProperty(p.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleBudget = (b) => {
    setSelectedBudget(b.target.value); // Actualizar el estado con la opción seleccionada
  };
  const handleCode = (c) => {
    setSelectedCode(c.target.value); // Actualizar el estado con la opción seleccionada
  };

  return (
    <HoMe>
      <div className="home">
        <div className="home-banner">

          <img
          loading="lazy"
            className="home-banner-img"
            src={getImg("jpg", "casa", "webp")}
            alt="banner"
          />

          <div className="home-banner-group">
          <div className="home-banner-title">
            <h2 className="h2-extra">Encuentra tu hogar</h2>
          </div>
            
              
                <BaseInput
                id={"sector"}
                isSelect
                inputRef={false}
                classs={"inputs normal"}
                height={"40px"}
                placeholder="Sector"
                options={values}
                name="budget"
                    value={selectedSector}
                    onChange={handleSector}
                />
                  <div className="home-banner-group-flex">
                    <BaseInput
                    id={"propeerty"}
                    isSelect
                    inputRef={false}
                    classs={"inputs normal"}
                    height={"40px"}
                      placeholder="Tipo de inmueble"
                      name="property"
                      value={selectedProperty}
                      onChange={handleProperty}
                      options={[
                        { value: "Casa", label: "Casa" },
                        { value: "Apartamento", label: "Apartamento" },
                        { value: "Apartaestudio", label: "Apartaestudio" },
                        { value: "Local", label: "Local" },
                        { value: "Casa Local", label: "Casa Local" },
                        { value: "Finca", label: "Finca" },
                        { value: "Casa Finca", label: "Casa Finca" },
                        { value: "Oficina", label: "Oficina" },
                      ]}
                    />
                    <BaseInput
                    id={"action"}
                    isSelect
                    inputRef={false}
                    classs={"inputs normal"}
                    height={"40px"}
                      placeholder="Quiero"
                      name="property"
                      value={selectedProperty}
                      onChange={handleProperty}
                      options={[
                        { value: "Comprar", label: "Comprar" },
                        { value: "Arrendar", label: "Arrendar" },
                      ]}
                    />

                  </div>             
                <div className="home-banner-group-flex">
                    <BaseInput
                    id={"budget"}
                    inputRef={false}
                    classs={"inputs normal"}
                    height={"40px"}
                      placeholder="Presupuesto"
                      name="budget"
                      value={selectedBudget}
                      onChange={handleBudget}
                    />             
                    <BaseInput
                    inputRef={false}
                    height={"40px"}
                      placeholder="Código"
                      classs={"inputs normal"}
                      name="code"
                      id="code"
                      value={selectedCode}
                      onChange={handleCode}

                    />
                </div>
                <div>
                  <BaseButton
                    classs={"button secondary"}
                    textLabel={true}
                    label={"Buscar"}
                    colorbtn={"var(--bg-secondary)"}
                    colortextbtnsecondary={"black"}
                    colorbtnhoversecondary={"var(--bg-primary)"}
                    hovercolorbtntextsecondary={"var(--bg-secondary)"}
                  />
                
              </div>
            </div>
      

        </div>
        <RecentAdded />
      </div>
    </HoMe>
  );
};

const HoMe = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: var(--bg-tertiary);

  .home {
    display: grid;
    width: 100%;
    height: 100%;
    gap: 50px;
    background: var(--bg-tertiary);
    &-banner {
      position: relative;
      display: grid;
      align-items: center;
      width: 100%;
      height: 550px;
      margin-bottom: 50px;
      @media (max-width: 680px) {
        padding: 0 12px;
      }
      
      &-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media (max-width: 800px) {
          height: 100%;
          object-fit: cover;
        }
      }
      &-title {
        z-index: 20;
        width: 100%;
        /* word-break: break-all; */
      }
      &-group {
        z-index: 10;
        padding: 25px;
        width: 35%;
        height: fit-content;
        background-color: #00000060;
        border-radius: 15px;
        display: grid;
        gap: 15px;
        margin: 25px;
        @media (max-width: 820px) {
              width: 100%;
              margin: auto;
              padding: 12px;
         }
         &-flex{
           display: grid;
           grid-template-columns: repeat(2, 1fr);
           width: 100%;
           gap: 5px;
           
         }
      }

    }
  }
`;
