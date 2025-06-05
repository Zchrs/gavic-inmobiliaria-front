/* eslint-disable no-unused-vars */
import styled from "styled-components"
import { AreaChart, GradientChart, SimpleChart } from "../../../components/MultiChart";


export const DetailSales = () => {
    const data = {
    series: {
      name: ["Enero", "Febrero", "Marzo"],
      data: [25, 56, 30],
    },
    sales: {
      names: [
        "Apartamentos",
        "Apartaestudios",
        "Casas",
        "Fincas",
        "Casa fincas",
      ],
      data: [44, 55, 41, 17, 15],
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
    <RePorts>
      <div className="reports">
              <div className="reports-header">
                <h2 className="reports-header-h2">Reportes</h2>

              </div>
        <div className="reports-container">
          <div className="reports-container-card">
            <h2>Ventas de inmuebles</h2>
            <div className="reports-container-card-inside">
              <SimpleChart
                width={"100%"}
                series={data.sales.data}
                labels={data.sales.names}
              />
            </div>
          </div>
          <div className="reports-container-card">
            <h2>Arrendamientos</h2>
            <div className="reports-container-card-inside">
              <GradientChart
                series={data.sales.data}
                labels={data.sales.names}
                width={"100%"}
              />
            </div>
          </div>
        </div>
          
          <div className="reports-users">
            
              <div className="reports-users-inside">
                <div>
            <h2>Reporte de usuarios</h2>
                  <AreaChart
                    dayColor={"#000"}
                    daysColor={"#000"}
                    theme={"dark"}
                    series={[{ data: data.clients.data }]}
                    labels={data.clients.dates}
                    width={"300%"}
                    height={"300px"}
                    legendPosition={"right"}
                  />
                </div>
                
                          <div className="reports-services">
                            <div className="reports-services-inside">
                            <h2>Ventas de servicios</h2>
                <GradientChart
                  series={data.services.data}
                  labels={data.services.names}
                  width={"100%"}
                />
                            </div>
                          </div>
              </div>

          </div>
      </div>
    </RePorts>
  )
}

const RePorts = styled.section`
  display: grid;
  width: 100%;
  height: fit-content;
  padding: 0 0 100px 0;
  .reports{
    display: grid;
    width: 100%;
    height: 100%;
    gap: 20px;

    &-container{
      display: flex;
      width: 100%;
      height: 100%;
      gap: 14px;
      &-card{
        display: grid;
        align-items: start;
        width: 100%;
        height: fit-content;
        gap: 10px;
        background: var(--deg-tertiary);
        box-shadow: var(--ds-s);
        border-radius: 15px;
        padding: 25px;
        /* border: 1px solid black; */
        &-inside{
          display: grid;
          width: 60%;
          height: 100%;
          margin: auto;
        }
      }
    }
      &-header{
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
  &-services{
    display: grid;
    width: 100%;
    height: 100%;
    &-inside{
      display: grid;
      width: 100%;
      height: 100%;
      margin: auto;
      background: var(--deg-secondary);
      box-shadow: var(--ds-s);
      border-radius: 15px;
      padding: 25px;
      h2{
        color: white;
      }
    }
  }
  &-users{
    display: grid;
    width: 100%;
    height: 100%;
    background: var(--deg-tertiary);
    box-shadow: var(--ds-s);
    border-radius: 15px;
    padding: 25px;
    &-inside{
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
    }
  }

}
`