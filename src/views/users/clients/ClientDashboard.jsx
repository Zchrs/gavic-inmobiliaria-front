import { useEffect } from "react";
import styled from "styled-components";


export const ClientDashboard = () => {
    useEffect(() => {
      document.title = "Gavic Inmobiliaria - Panel";
    }, []);

  return (
    <DashboardClient>
      <div className="clientdashboard">
        <div className="clientdashboard-content">
          <h1>left</h1>
        </div>
        <div className="clientdashboard-content">
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
`