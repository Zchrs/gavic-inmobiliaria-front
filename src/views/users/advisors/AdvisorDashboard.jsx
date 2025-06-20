import styled from "styled-components"
import { GradientChart, SimpleChart } from "../../../components/MultiChart";
import { BaseButton } from "../../../components/BaseButton";


export const AdvisorDashboard = () => {

    const data = {
    series: {
      name: ["Enero", "Febrero", "Marzo"],
      data: [25, 56, 30],
    },
    sales: {
      names: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
      ],
      data: [44, 55, 41, 17, 15, 76, 23],
    },
    services: {
      names: [
        "Hipotecas",
        "Consultorías",
        "Avalúos",
        "Mejoras locativas",
      ],
      data: [44, 55, 41, 17],
    },
    finance: {
      names: ["Ventas", "Gastos"],
      data: [44, 55, 41, 17, 15, 35, 70],
    },
    users: {
      data: [0, 1000, 3000, 3600, 4700, 5800, 9000, 9100, 9200, 9400],
      dates: [
        "2024-01-01",
        "2024-01-02",
        "2024-01-03",
        "2024-01-04",
        "2024-01-05",
        "2024-01-06",
        "2024-01-07",
        "2024-01-08",
        "2024-01-09",
        "2024-01-10",
      ],
    },
    admins: {
      data: [0, 1000, 3000, 3600, 4700, 5800, 9000, 9100, 9200, 9400],
      dates: [
        "2024-01-01",
        "2024-01-02",
        "2024-01-03",
        "2024-01-04",
        "2024-01-05",
        "2024-01-06",
        "2024-01-07",
        "2024-01-08",
        "2024-01-09",
        "2024-01-10",
      ],
    },
    clients: {
      data: [0, 1000, 3000, 3600, 4700, 5800, 9000, 9100, 9200, 9400],
      dates: [
        "2024-01-01",
        "2024-01-02",
        "2024-01-03",
        "2024-01-04",
        "2024-01-05",
        "2024-01-06",
        "2024-01-07",
        "2024-01-08",
        "2024-01-09",
        "2024-01-10",
      ],
    },
  };


  return (
    <DashboardAdvisor>
      <div className="dashboardadvisor">

        <div className="dashboardadvisor-contain">
          <div className="dashboardadvisor-content-left">
            <div className="dashboardadvisor-container">
              <div className="dashboardadvisor-content-left-card">
                <div className="dashboardadvisor-content-left-card-info">
                  <h2>Propiedades</h2>
                </div>
                <div className="dashboardadvisor-content-left-card-info">
                  <h2>199</h2>
                </div>
              </div>
              <div className="dashboardadvisor-content-left-card-btns">
                <BaseButton
                  textLabel={true}
                  label={"Ver detalle"}
                  classs={"button primary"}
                  colorbtnhoverprimary={"var(--bg-primary-tr)"}
                  colortextbtnhoverprimary={"var(--text-tertiary)"}
                  colortextbtnprimary={"var(--text-tertiary)"}
                  colorbtn={"var(--bg-primary)"}
                />
                <BaseButton
                  textLabel={true}
                  label={"Crear propiedad"}
                  classs={"button primary"}
                  colorbtnhoverprimary={"var(--bg-secondary-semi-soft)"}
                  colortextbtnhoverprimary={"var(--text-tertiary)"}
                  colortextbtnprimary={"var(--text-primary)"}
                  colorbtn={"var(--bg-secondary-soft)"}
                />
              </div>
            </div>
                      <div className="dashboardadvisor-container">
              <div className="dashboardadvisor-content-left-card">
                <div className="dashboardadvisor-content-left-card-info">
                  <h2>Clientes</h2>
                </div>
                <div className="dashboardadvisor-content-left-card-info">
                  <h2>199</h2>
                </div>
              </div>
              <div className="dashboardadvisor-content-left-card-btns">
                <BaseButton
                  textLabel={true}
                  label={"Ver detalle"}
                  classs={"button primary"}
                  colorbtnhoverprimary={"var(--bg-primary-tr)"}
                  colortextbtnhoverprimary={"var(--text-tertiary)"}
                  colortextbtnprimary={"var(--text-tertiary)"}
                  colorbtn={"var(--bg-primary)"}
                />
                <BaseButton
                  textLabel={true}
                  label={"Añadir cliente"}
                  classs={"button primary"}
                  colorbtnhoverprimary={"var(--bg-secondary-semi-soft)"}
                  colortextbtnhoverprimary={"var(--text-tertiary)"}
                  colortextbtnprimary={"var(--text-primary)"}
                  colorbtn={"var(--bg-secondary-soft)"}
                />
              </div>
            </div>
                      <div className="dashboardadvisor-container">
              <div className="dashboardadvisor-content-left-card">
                <div className="dashboardadvisor-content-left-card-info">
                  <h2>Ventas Totales</h2>
                </div>
                <div className="dashboardadvisor-content-left-card-info">
                  <h2>199</h2>
                </div>
              </div>
              <div className="dashboardadvisor-content-left-card-btns">
                <BaseButton
                  textLabel={true}
                  label={"Ver detalle"}
                  classs={"button primary"}
                  colorbtnhoverprimary={"var(--bg-primary-tr)"}
                  colortextbtnhoverprimary={"var(--text-tertiary)"}
                  colortextbtnprimary={"var(--text-tertiary)"}
                  colorbtn={"var(--bg-primary)"}
                />
              </div>
            </div>
          </div>
          <div className="dashboardadvisor-content-right">
            <div className="dashboardadvisor-content-right-content">
              <h2>Servicios</h2>
              <div className="dashboardadvisor-content-right-content-card">
                  <GradientChart
                    series={data.services.data}
                    labels={data.services.names}
                    width={"90%"}
                  />
              </div>
            </div>
            <div className="dashboardadvisor-content-right-content">
              <h2>Tráfico</h2>
              <div className="dashboardadvisor-content-right-content-card">
                  <SimpleChart
                    width={"90%"}
                    series={data.sales.data}
                    labels={data.sales.names}
                  />
              </div>
            </div>
          </div>
                </div>
        </div>
    </DashboardAdvisor>
  )
}

const DashboardAdvisor = styled.section`
display: grid;
width: 100%;
height: 100%;

.dashboardadvisor{
  display: grid;
  width: 100%;
  height: 100%;
  gap: 15px;

  h2{
    font-weight: 500;
  }

  &-contain{
    display: flex;
    width: 100%;
    height: 100%;
    border: none;
    gap: 15px;

    @media (max-width: 860px) {
      display: grid;
    }
  }
  
  &-container{
    background: var(--bg-tertiary);
    display: grid;
    width: 100%;
    height: fit-content;
    padding: 15px;
  }

  &-content-left{
    display: grid;
    width: 100%;
    height: 100%;
    gap: 15px;
    
    &-card{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      border-bottom: 2px solid var(--bg-primary-semi);
      
      &-info{
        display: grid;
        &:last-child{
          padding-top: 50px;
          align-items: end;
          font-size: 30px;
        }
      }
      &-btns{
        display: flex;
        justify-content: space-between;
        padding-top: 16px;
      }
    }
  }

  &-content-right{
    display: grid;
    width: 100%;
    height: 100%;
    gap: 15px;

    &-content{
      display: grid;
      width: 100%;
      height: 100%;
      padding: 15px;
      background: var(--bg-tertiary);
      &:first-child{
        border-radius: 0 0 0 0;
      }
      &:last-child{
        border-radius: 0 0 15px 15px;
            @media (max-width: 860px) {
    }
      }
      
      &-card{
        display: grid;
        width: fit-content;
        height: fit-content;
        /* border: black 1px solid; */
        margin: auto;
      }
    }
  }
}
`