import styled from "styled-components";
// import { GradientChart, SimpleChart } from "../../../components/MultiChart";
import { Tabs } from "../../../components/Tabs"
import { Approved, CreateProperty, ForRentPropertiesw, PropertiesSold, PropertySale, Rejected, Rented } from "../../../../index";


import { useState } from "react";

export const Properties = () => {
  const [activeTab, setActiveTab] = useState("Crear Propiedad");

  const tabs = [
    { label: "Crear propiedad", content: <CreateProperty id="create-property" /> },
    { label: "Propiedades aprobadas", content: <Approved /> },
    { label: "Propiedades rechazadas", content: <Rejected /> },
    { label: "Propiedades en arrendamiento", content: <ForRentPropertiesw /> },
    { label: "Propiedades en venta", content: <PropertySale /> },
    { label: "Propiedades vendidas", content: <PropertiesSold id="sold" /> },
    { label: "Propiedades arrendadas", content: <Rented /> },
  ];

  

  return (
    <CliEnts>
      <div className="clients">
        <h2 className="clients-h2">{activeTab}</h2>
        <div>
          <Tabs tabs={tabs} onTabChange={setActiveTab} />
        </div>
      </div>
    </CliEnts>
  );
};

const CliEnts = styled.section`
  display: grid;
  gap: 12px;
  
  .clients{
    padding: 10px 0;
    gap: 12px;
    position: relative;
    display: grid;
    align-content: start;
    width: 100%;
    height: fit-content;

    &-h2{
      display: grid;
      background: var(--deg-secondary);
      color: var(--text-tertiary);
      padding: 50px 24px;
      font-size: 35px;
      border-radius: 10px;
    }
  }
`
