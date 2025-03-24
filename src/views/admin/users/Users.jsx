import styled from "styled-components";
// import { GradientChart, SimpleChart } from "../../../components/MultiChart";
import { Tabs } from "../../../components/Tabs"
import { Advisors, Clients, PendingAdvisors, PendingClients } from "../../../../index";
import { useState } from "react";


export const Users = () => {
  const [activeTab, setActiveTab] = useState("Asesores activos");

  const tabs = [
    { label: 'Asesores activos', content: <Advisors /> },
    { label: 'Asesores pendientes por verificar', content: <PendingAdvisors /> },
    { label: 'Clientes activos', content: <Clients /> },
    { label: 'Clientes pendientes de verificación', content: <PendingClients /> },
  ];

  return (
    <CliEnts>
      <div className="clients">
        <h2 className="clients-h2">Usuarios: <br />{activeTab}</h2>
        <div>
          <Tabs tabs={tabs} onTabChange={setActiveTab} />
        </div>
      </div>
    </CliEnts>
  )
}

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
