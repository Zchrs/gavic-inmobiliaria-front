/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { getImg } from "../../../globalActions";
import { BaseInput } from "../../components/BaseInput";
import { BaseButton } from "../../components/BaseButton";
import Select from 'react-select'
import { useState } from "react";
import { BaseInputSelect } from "../../components/BaseInputSelect";
import { RecentAdded, Services } from "../../../index";
import { values } from "../../sectors/dataSectors";

export const Home = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const [selectedCode, setSelectedCode] = useState("");

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
            src={getImg("jpg", "interior", "jpeg")}
            alt="banner"
          />

          <div className="home-banner-group">
          <div className="home-banner-title">
            <h2 className="h2-extra">Encuéntralo a tu medida</h2>
          </div>
            <div className="home-banner-search">
              <div className="home-banner-search-inside">
              <div className="home-banner-search-inside-div">
                <BaseInputSelect
                height={"40px"}
                placeholder="Sector"
                isSelect={true}
                options={values}
                name="budget"
                    value={selectedSector}
                    onChange={handleSector}
                />
              </div>
                <div className="home-banner-search-inside-div">
                  <BaseInputSelect
                  height={"40px"}
                    placeholder="Tipo de inmueble"
                    isSelect={true}
                    name="property"
                    value={selectedProperty}
                    onChange={handleProperty}
                    options={[
                      { value: "option1", label: "Casa" },
                      { value: "option2", label: "Apartamento" },
                      { value: "option3", label: "Apartaestudio" },
                      { value: "option4", label: "Local" },
                      { value: "option5", label: "Casa Local" },
                      { value: "option6", label: "Finca" },
                      { value: "option7", label: "Casa Finca" },
                      { value: "option8", label: "Oficina" },
                    ]}
                  />
                </div>
                <div className="home-banner-search-inside-div">
                  <BaseInputSelect
                  height={"40px"}
                    placeholder="Presupuesto"
                    isSelect={true}
                    name="budget"
                    value={selectedBudget}
                    onChange={handleBudget}
                    options={[
                      { value: "option1", label: "$1000 - $5000" },
                      { value: "option2", label: "$5000 - $10,000" },
                      { value: "option3", label: "Más de $10,000" },
                      { value: "option4", label: "Más de $10,000" },
                      { value: "option5", label: "Más de $10,000" },
                      { value: "option6", label: "Más de $10,000" },
                      { value: "option7", label: "Más de $10,000" },
                    ]}
                  />
                </div>
                <div className="home-banner-search-inside-div">
                  <BaseInputSelect
                  height={"40px"}
                    placeholder="Código"
                    isSelect={true}
                    name="code"
                    value={selectedCode}
                    onChange={handleCode}
                    options={[
                      { value: "option1", label: "Código 1" },
                      { value: "option2", label: "Código 2" },
                      { value: "option3", label: "Código 3" },
                    ]}
                  />
                </div>
                <div>
                  <BaseButton
                    classs={"button small-gray"}
                    textLabel={true}
                    label={"Buscar"}
                    svg={true}
                    // handleClick={whatsapp}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
        <RecentAdded />
        <Services />
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
      &-search {
        display: grid;
        z-index: 10;
        height: fit-content;
        width: 100%;
        gap: 5px;
        align-items: center;
        padding: 0px 100px;
        margin: auto;
        @media (max-width: 1024px) {
          padding: 0px 10px;
          margin: 0;
        }
        @media (max-width: 820px) {
          padding: 0px 10px;
          margin: 0;
        }

        &-inside{
          height: 50px;
          border-radius: 5px;
        align-items: center;
          display: flex;
          background: var(--bg-primary);
          width: fit-content;
          margin: auto;
          gap: 5px;
          padding: 5px;
          &-div{
            width: 100%;
            height: 100%;
            display: grid;
            /* border: white 1px solid; */
            padding: 0;
          }

          @media (max-width: 820px) {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        }
      }
      &-title {
        z-index: 20;
        display: grid;
      }
      &-group {
        text-align: center;
        height: fit-content;
        display: grid;
        gap: 5px;
      }
    }
  }
`;
