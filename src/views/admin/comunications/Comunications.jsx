/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NewIssues, SolvedIssues, PendingIssues, Tabs } from "../../../../index";
import styled from "styled-components"
import { Pqrs } from "../issues/Pqrs";


export const Comunications = () => {
      const tabs = [
      { label: "Nuevos", content: <NewIssues id="current-property" /> },
      { label: "En revisión", content: <PendingIssues /> },
      { label: "Solucionados", content: <SolvedIssues /> },
      { label: "Nuevos PQRS", content: <Pqrs id="current-pqrs" /> },
      { label: "PQRS en revisión", content: <PendingIssues /> },
      { label: "PQRS solucionados", content: <SolvedIssues /> },
    ];
    const [activeTab, setActiveTab] = useState("Nuevos");
  return (
    <ComuniCations>
      <div className="comunications">
        <h2 className="comunications-h2">PQRS y problemas : {activeTab}</h2>
      
         <Tabs tabs={tabs} onTabChange={setActiveTab} />
        
      </div>
    </ComuniCations>
  )
}

const ComuniCations = styled.div`
display: grid;
width: 100%;
height: 100%;
margin-top: 15px;

.comunications{
  display: grid;
  gap: 15px;
  width: 100%;
  height: 100%;

      &-h2{
      display: grid;
      background: var(--deg-secondary);
      color: var(--text-tertiary);
      padding: 50px 24px;
      font-size: 35px;
      border-radius: 10px;
      @media (max-width:808px) {
        word-break: break-all;
      }
    }
}
`
