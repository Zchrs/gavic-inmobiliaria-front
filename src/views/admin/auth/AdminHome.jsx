/* eslint-disable no-unused-vars */
import styled from "styled-components";
import {
  AreaChart,
  CandlesChart,
  GradientChart,
  SimpleChart,
} from "../../../components/MultiChart";
import { BaseButton } from "../../../components/BaseButton";
import { getImg } from "../../../../globalActions";
import { useState } from "react";
import { VisitorsTracker } from "../../../components/VisitorsTracker";
import { useNavigate } from "react-router-dom";

export const AdminHome = () => {
  const data = {
    series: {
      name: ["Enero", "Febrero", "Marzo"],
      data: [25, 56, 30],
    },
    sales: {
      names: ["Vendidas", "Arrendadas", "Consignadas", "Canceladas", "Devueltas"],
      data: [44, 55, 41, 17, 15],
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
  

  const navigate = useNavigate();

  const handleScrollToSection = (route) => {
    const [path, hash] = route.split("#");
  
    if (path) {
      navigate(path); // Navega a la página base
    }
  
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          // Observador de cambios en el DOM por si el elemento no está cargado
          const observer = new MutationObserver(() => {
            const section = document.getElementById(hash);
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
              observer.disconnect();
            }
          });
  
          observer.observe(document.body, { childList: true, subtree: true });
        }
      }, 300); // Espera para asegurarse de que se cargue la vista
    }
  };


  return (
    <HomeAdmin>
      <div className="adminhome">
        <div className="adminhome-left">
          <div className="adminhome-left-container">
            <div className="adminhome-left-container-card">
              <h2>Usuarios</h2>
              <AreaChart
                dayColor={"#ffffff"}
                daysColor={"#ffffff"}
                theme={"light"}
                series={[{ data: data.users.data }]}
                labels={ data.users.dates }
               />
              <div className="adminhome-left-mediumcontainer-card-btn">
                <BaseButton
                  textLabel={true}
                  label={"Ver detalle"}
                  classs={"button little-primary-gradient"}
                />
              </div>
            </div>
            <div className="adminhome-left-container-card">
              <div className="adminhome-left-container-card-titles">
                <h2>Propiedades</h2>
              </div>
              <SimpleChart
                  series={data.sales.data}
                  labels={data.sales.names}
                />
              <div className="flex-s">
                <BaseButton
                  textLabel={true}
                  label={"Ver detalle"}
                  classs={"button little-primary-gradient"}
                  handleClick={() => handleScrollToSection("/admin/dashboard/properties#sold")}
                />
                <BaseButton
                  textLabel={true}
                  label={"Añadir propiedad"}
                  classs={"button little-primary-gradient"}
                  handleClick={() => handleScrollToSection("/admin/dashboard/properties#create-property")}
                />
              </div>
            </div>
            <div className="adminhome-left-container-card">
              <h2>Ventas</h2>
              <GradientChart series={data.series.data} labels={data.series.name} />
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button button little-primary-gradient"}
                
              />
            </div>
          </div>
          <div className="adminhome-left-mediumcontainer">
            <div className="adminhome-left-mediumcontainer-card">
              <h2>Asesores</h2>
              <AreaChart
                dayColor={"#000000"}
                daysColor={"#000000"}
                theme={"dark"}
                series={[{ data: data.admins.data }]}
                labels={ data.admins.dates }
               />
            </div>
            <div className="adminhome-left-mediumcontainer-card">
              <h2>Clientes</h2>
              <AreaChart
                dayColor={"#ffffff"}
                daysColor={"#ffffff"}
                theme={"light"}
                series={[{ data: data.clients.data }]}
                labels={ data.clients.dates }
               />
            </div>
            <div className="adminhome-left-mediumcontainer-card">
              <h2>Tráfico</h2>
              <VisitorsTracker />
            </div>
          </div>
          <div className="adminhome-left-footer">
            <div className="adminhome-left-footer-card"></div>
            <div className="adminhome-left-footer-card"></div>
            <div className="adminhome-left-footer-card"></div>
            <div className="adminhome-left-footer-card"></div>
            <div className="adminhome-left-footer-card"></div>
          </div>
        </div>
        <div className="adminhome-right">
          <div className="adminhome-right-card">
            <h2>Finanzas</h2>
            <CandlesChart series={data.finance.data} />
            <div className="flex-s z-index">
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button little-secondary-gradient"}
              />
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button little-secondary-gradient"}
              />
            </div>
          </div>
          <div className="adminhome-right-card-medium">
            <div className="adminhome-right-card-medium-card">
              <div className="flex-s">
                <img src="" alt="" />
                <p>title</p>
              </div>
              <div className="flex-s">
                <img src="" alt="" />
                <p>title</p>
              </div>
            </div>
            <div className="adminhome-right-card-medium-card">
              <div className="flex-s">
                <img src="" alt="" />
                <p>title</p>
              </div>
              <div className="flex-s">
                <img src="" alt="" />
                <p>title</p>
              </div>
            </div>
          </div>
          <div className="adminhome-right-content">
              <h2>Comunicaciones</h2>
            <div className="adminhome-right-content-inside">
                <div>
                  <img className="adminhome-right-content-img" src={getImg("svg", "sms", "svg")} alt="" />
                  <h3>Enviar sms</h3>
                </div>
                <div>
                  <img className="adminhome-right-content-img" src={getImg("svg", "email", "svg")} alt="" />
                  <h3>Enviar email</h3>
                </div>
            </div>
            <div className="flex-s z-index">
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button little-secondary-gradient"}
              />
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button little-secondary-gradient"}
              />
            </div>
          </div>
          <div className="adminhome-right-footer">
            <div className="adminhome-right-footer-card">
              <div></div>
            </div>
            <div className="adminhome-right-footer-card">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </HomeAdmin>
  );
};

const HomeAdmin = styled.section`
  display: grid;
  width: 100%;
  height: 100%;

  .adminhome {
    display: grid;
    grid-template-columns: 70.6% 29%;
    align-items: start;
    height: fit-content;
    gap: 15px;
    @media (max-width: 980px) {
      display: grid;
      grid-template-columns: 1fr;
    }

    &-left {
      align-content: start;
      display: grid;
      gap: 10px;
      &-container {
        width: 100%;
        height: 100%;
        display: flex;
        gap: 5px;

        @media (max-width: 820px) {
          display: grid;
          grid-template-columns: 1fr;
        }
        &-card {
          display: grid;
          height: 100%;
          padding: 24px;
          background: var(--deg-secondary);
          box-shadow: var(--ds-s);
          align-items: center;
          align-content: start;
          gap: 10px;
          color: white;
          &:nth-child(1) {
            border-radius: 15px 5px 15px 15px;
            @media (max-width: 820px) {
              border-radius: 25px 25px 0px 0px;
            }
          }
          &:nth-child(2) {
            display: grid;
            align-content: center;
            border-radius: 5px 5px 15px 15px;

            @media (max-width: 820px) {
              border-radius: 0;
            }
          }
          &:nth-child(3) {
            border-radius: 5px 15px 15px 15px;
            @media (max-width: 820px) {
              border-radius: 0px 0px 25px 25px;
            }
          }
          &-titles {
            width: fit-content;
            height: fit-content;
            margin: 0;
            padding: 0;
            h2,
            h3 {
              width: fit-content;
              height: fit-content;
            }
          }
        }
      }
      &-mediumcontainer {
        grid-template-columns: repeat(3, 1fr);
        display: grid;
        width: 100%;
        height: 100%;
        gap: 10px;
        @media (max-width: 820px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        &-card {
          width: 100%;
          display: grid;
          height: 100%;
          padding: 24px;
          color: black;
          border-radius: 15px;
          align-content: space-between;
          background: var(--deg-tertiary);
          box-shadow: var(--ds-s);

          &-btn {
            z-index: 100;
          }
          &:nth-child(1) {
            height: 100%;
            @media (max-width: 820px) {
              width: 100%;
            }
          }
          &:nth-child(2) {
            display: grid;
            gap: 20px;
            color: white;
            background: var(--deg-fourty);
            box-shadow: var(--ds-m);
          }
          &:nth-child(3) {
            
            @media (max-width: 820px) {
              margin: auto;
              width: 205%;
            }
          }
        }
      }
      &-footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: fit-content;
        padding: 24px;
        border-radius: 15px;
        background: var(--deg-secondary);
        box-shadow: var(--ds-m);

        @media (max-width: 820px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        &-card {
          display: grid;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: var(--deg-tertiary);
          box-shadow: var(--ds-m);
        }
      }
    }
    &-right {
      display: grid;
      gap: 10px;
      align-content: start;

      &-card {
        display: grid;
        height: fit-content;
        background: var(--deg-tertiary);
        box-shadow: var(--ds-s);
        align-content: space-between;
        border-radius: 15px;
        padding: 24px;
        gap: 10px;

        &-medium {
          display: flex;
          gap: 10px;
          @media (max-width: 820px) {
            display: grid;
          }
          &-card {
            display: grid;
            width: 100%;
            height: 100%;
            background: var(--deg-secondary);
            box-shadow: var(--ds-s);
            gap: 5px;
            padding: 24px;
            border-radius: 15px;
          }
        }
      }
      &-content {
        display: grid;
        width: 100%;
        height: 100%;
        padding: 24px;
        border-radius: 15px;
        background: var(--deg-tertiary);
        box-shadow: var(--ds-s);
        gap: 10px;
        
        &-img{
          display: grid;
          margin: auto;
          width: 80%;
          filter: invert(100%);
          height: fit-content;
        }
        &-inside{
          place-content: center;
          text-align: center;
          padding: 20px 0;
          display: flex;
          gap: 30px;
          height: fit-content;
          div{
            display: grid;
            gap: 5px;
            cursor: pointer;
            width: fit-content;
            height: fit-content;
            background: var(--deg-secondary);
            color: var(--text-tertiary);
            padding: 20px;
            border-radius: 14px;
            margin: 0;
            transition: all ease .5s;
            h3{
              font-weight: 400;
            }
            &:hover{
              background: var(--deg-fift);
              color: var(--text-tertiary);
              box-shadow: var(--ds-l);
/* 
              .adminhome-right-content-img{
                filter: invert(50%);
              } */
            }
          }
        }
      }
      &-footer {
        width: 100%;
        height: fit-content;
        gap: 10px;
        display: flex;

        &-card {
          border-radius: 15px;
          width: 100%;
          display: grid;
          padding: 24px;
          &:nth-child(1) {
            background: var(--deg-tertiary);
            box-shadow: var(--ds-s);
          }
          &:nth-child(2) {
            background: var(--deg-secondary);
            box-shadow: var(--ds-s);
          }
        }
      }
    }
  }
  .z-index{
    z-index: 100;
  }
`;
