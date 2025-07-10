import { useEffect } from "react";
import styled from "styled-components";


export const ClientDashboard = () => {
    useEffect(() => {
      document.title = "Gavic Inmobiliaria - Panel";
    }, []);

  return (
    <DashboardClient>
      <div className="clienhome">
        <div className="clienhome-content">
          <h1>left</h1>
        </div>
        <div className="clienhome-content">
          <h2>right</h2>
        </div>
      </div>
    </DashboardClient>
  )
}

const DashboardClient = styled.section`
display: grid;
width: 100%;
height: 100%;
align-items: start;
background: var(--bg-tertiary);
border-radius: 0 0 15px 0;
border: 1px solid var(--bg-primary-semi);
.clienhome{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 25px;
  align-items: start;
  width: 100%;
  height: 100%;

  &-content{
    display: grid;
}}
`