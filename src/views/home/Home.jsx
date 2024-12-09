/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { getImg } from "../../../globalActions";
import { BaseInput } from "../../components/BaseInput";
import { BaseButton } from "../../components/BaseButton";
import Select from 'react-select'
import { useState } from "react";
import { BaseInputSelect } from "../../components/BaseInputSelect";

export const Home = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const [selectedCode, setSelectedCode] = useState("");

  const options = [
    { value: 'Aranjuez', label: 'Aranjuez' },
    { value: 'Araucaria', label: 'Araucaria' },
    { value: 'Blanquizal', label: 'Blanquizal' },
    { value: 'Belén', label: 'Belén' },
    { value: 'Castilla', label: 'Castilla' },
    { value: 'Caicedo', label: 'Caicedo' },
    { value: 'El picacho', label: 'El picacho' },
    { value: 'El salvador', label: 'El salvador' }
  ]

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
              <div>
                <BaseInputSelect
                placeholder="Sector"
                isSelect={true}
                options={options}
                name="budget"
                    value={selectedSector}
                    onChange={handleSector}
                />
              </div>
                <div>
                  <BaseInputSelect
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
                <div>
                  <BaseInputSelect
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
                <div>
                  <BaseInputSelect
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
      </div>
    </HoMe>
  );
};

const HoMe = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  .home {
    display: grid;
    width: 100%;
    height: 100%;
    &-banner {
      position: relative;
      display: grid;
      align-items: center;
      width: 100%;
      height: 550px;
      
      &-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &-search {
        display: grid;
        z-index: 10;
        width: 100%;
        height: 50px;
        padding: 0px 100px;
        gap: 5px;
        align-items: center;
        margin: auto;

        &-inside{
        border-radius: 5px;
        align-items: center;
          display: flex;
          background: var(--bg-primary);
          width: fit-content;
          margin: auto;
          height: 100%;
          gap: 5px;
          padding: 5px;
          div{
            display: grid;
            align-items: center;
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
