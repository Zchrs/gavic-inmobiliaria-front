/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AreaChart, GradientChart, SimpleChart } from "./MultiChart";
import { BaseButton } from "./BaseButton";
import { CardUsers } from "./CardUsers";
import { Pagination } from "react-bootstrap";
import { clients } from "../../apiEmulated";
import { useState } from "react";

export const SectionsComponent = ({
  userAdmin,
  userAdvisor,
  userClient,
  finances,
  client,
  sales,
}) => {
  const user = useSelector((state) => state.auth.user);
  const advisor = useSelector((state) => state.authAdvisor.advisor);
  const admin = useSelector((state) => state.authAdmin.admin);

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
      names: ["Hipotecas", "Consultorías", "Avalúos", "Mejoras locativas"],
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

  const columns = ["Nombre", "Correo", "Rol", "Estado"];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = clients.slice(startIndex, startIndex + itemsPerPage); // Corregido

  return (
    <ComponentSections>
      {userAdvisor && (
        <div className={"sectionscomponent"}>
          {advisor ? (
            <div className="sectionscomponent-contain">
              <div className="sectionscomponent-contain-info">
                <strong>Nombre</strong>
                <hr /> <p>{advisor.name}</p>
              </div>
              <div className="sectionscomponent-contain-info">
                <strong>Apellido</strong>
                <hr />
                <p>{advisor.lastname}</p>
              </div>
              <div className="sectionscomponent-contain-info">
                <strong>Email</strong>
                <hr />
                <p>{advisor.email}</p>
              </div>
              <div className="sectionscomponent-contain-info">
                <strong>CC</strong>
                <hr />
                <p>{advisor.dnaId}</p>
              </div>
              <div className="sectionscomponent-contain-info">
                <strong>Dirección</strong>
                <hr />
                <p>{advisor.address}</p>
              </div>
              <div className="sectionscomponent-contain-info">
                <strong>Ciudad</strong>
                <hr />
                <p>{advisor.city}</p>
              </div>
              <div className="sectionscomponent-contain-info">
                <strong>Teléfono</strong>
                <hr />
                <p>{advisor.phone}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
      {advisor || admin ? (
        <div>
          {finances && (
            <div className="sectionscomponent">
              <div className="sectionscomponent-container">
                <div className="sectionscomponent-card">
                  <div className="sectionscomponent-content-left-card">
                    <div className="sectionscomponent-content-left-card-left">
                      <h2>Ingresos por venta de propiedades</h2>
                    </div>
                    <div className="sectionscomponent-content-left-card-right">
                      <h3>999,000</h3>
                    </div>
                  </div>
                  <div className="sectionscomponent-content-left-card-btns">
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
                <div className="sectionscomponent-card">
                  <div className="sectionscomponent-content-left-card">
                    <div className="sectionscomponent-content-left-card-left">
                      <h2>Ingresos por Arrendamiento</h2>
                    </div>
                    <div className="sectionscomponent-content-left-card-right">
                      <h3>999,000</h3>
                    </div>
                  </div>
                  <div className="sectionscomponent-content-left-card-btns">
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
              </div>

              <div className="sectionscomponent-users">
                <div className="sectionscomponent-users-inside">
                  <div>
                    <h2>Reporte de propiedades</h2>
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

                  <div className="sectionscomponent-services">
                    <div className="sectionscomponent-services-inside">
                      <h2>Ingresos por venta de servicios</h2>
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
          )}
        </div>
      ) : (
        ""
      )}
      {advisor || admin ? (
        <div>
          {client && (
            <div className="sectionscomponent">
              <div className="clients">
                <CardUsers columns={columns} data={selectedData} message />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  colorText="dark"
                  arrowPrev="button bg-dark"
                  arrowNext="button bg-dark"
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
      {advisor || admin ? (
        <div>
          {sales && (
            <div className="sectionscomponent">
                            <div className="sectionscomponent-users">
                <div className="sectionscomponent-users-inside">
                  <div>
                    <h2>Reporte de propiedades</h2>
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

                  <div className="sectionscomponent-services">
                    <div className="sectionscomponent-services-inside">
                      <h2>Venta de servicios</h2>
                      <GradientChart
                        series={data.services.data}
                        labels={data.services.names}
                        width={"100%"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sectionscomponent-container">
                <div className="sectionscomponent-card">
                  <div className="sectionscomponent-content-left-card">
                    <div className="sectionscomponent-content-left-card-left">
                      <h2>Propiedades Vendidas</h2>
                    </div>
                    <div className="sectionscomponent-content-left-card-right">
                      <h3>99</h3>
                    </div>
                  </div>
                  <div className="sectionscomponent-content-left-card-btns">
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
                <div className="sectionscomponent-card">
                  <div className="sectionscomponent-content-left-card">
                    <div className="sectionscomponent-content-left-card-left">
                      <h2>Propiedades arrendadas</h2>
                    </div>
                    <div className="sectionscomponent-content-left-card-right">
                      <h3>99</h3>
                    </div>
                  </div>
                  <div className="sectionscomponent-content-left-card-btns">
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
              </div>


            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </ComponentSections>
  );
};

const ComponentSections = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  .sectionscomponent {
    display: grid;
    width: 100%;
    height: 100%;
    gap: 15px;

    &-card {
      display: grid;
      width: 100%;
      height: 100%;
      background: var(--bg-tertiary);
      padding: 25px;
    }

    &-container {
      display: flex;
      width: 100%;
      height: fit-content;
      gap: 15px;

      &-card {
        display: grid;
        align-items: start;
        width: 100%;
        height: fit-content;
        gap: 10px;
        background: var(--bg-tertiary);
        padding: 25px;
        /* border: 1px solid black; */
        &-inside {
          display: grid;
          width: 60%;
          height: 100%;
          margin: auto;
        }
      }
    }

    &-contain {
      display: grid;
      align-items: start;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      height: fit-content;
      gap: 15px;
      &-info {
        display: grid;
        width: 100%;
        height: fit-content;
        border-bottom: 1px solid var(--bg-primary-semi);
        background: var(--bg-tertiary);
        gap: 5px;
        padding: 15px;
        strong {
          font-weight: 700;
          font-size: 15px;
        }
      }
    }

    &-services {
      display: grid;
      width: 100%;
      height: 100%;
      &-inside {
        display: grid;
        width: 100%;
        height: 100%;
        margin: auto;
        background: var(--deg-secondary);
        box-shadow: var(--ds-s);
        border-radius: 15px;
        padding: 25px;
        h2 {
          color: white;
        }
      }
    }
    &-users {
      display: grid;
      width: 100%;
      height: 100%;
      background: var(--bg-tertiary);
      border-radius: 0 0 15px 0;
      padding: 25px;
      &-inside {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
      }
    }
    &-content-left {
      display: grid;
      width: 100%;
      height: 100%;
      gap: 15px;

      &-card {
        display: grid;
        width: 100%;
        height: 100%;
        border-bottom: 2px solid var(--bg-primary-semi);

        &-left {
          display: flex;
          justify-content: space-between;
          h3 {
            font-weight: 500;
            font-size: 40px;
          }
          h2 {
            font-weight: 500;
          }
        }
        &-right {
          display: flex;
          justify-content: flex-end;
          h3 {
            font-weight: 500;
            font-size: 40px;
          }
          h2 {
            font-weight: 500;
          }
          align-items: flex-end;
          width: 100%;
        }

        &-btns {
          display: flex;
          justify-content: space-between;
          padding-top: 16px;
        }
      }
    }
  }
`;
