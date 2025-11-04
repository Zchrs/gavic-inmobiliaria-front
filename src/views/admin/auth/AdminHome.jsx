/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Swal from "sweetalert2";

import {
  AreaChart,
  CandlesChart,
  GradientChart,
  SimpleChart,
} from "../../../components/MultiChart";
import { BaseButton } from "../../../components/BaseButton";
import { getImg } from "../../../../globalActions";
import { VisitorsTracker } from "../../../components/VisitorsTracker";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useClipboard } from "../../../hooks/useClipboard";
import { Link } from "react-router-dom";

export const AdminHome = () => {
  const [registrationCode, setRegistrationCode] = useState(null);
  const { copied, copyToClipboard } = useClipboard();
  const admin = useSelector((state) => state.authAdmin.admin);

  useEffect(() => {
    document.title = "Gavic Inmobiliaria - Admin Panel v1.0";
    loadRegistrationCode();
  }, []);

  const loadRegistrationCode = async () => {
    // setLoading(true);
    // setError(null);

    try {
      const codeData = await fetchRegistrationCode();
      setRegistrationCode(codeData);
    } catch (err) {
      // setError(err.message);
      console.error("Error loading registration code:", err);
    } finally {
      // setLoading(false);
    }
  };

  const fetchRegistrationCode = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_REG_CODE_ADMIN}`,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
          timeout: 10000, // 10 segundos timeout
        }
      );

      // Verificar la estructura de la respuesta
      if (response.data && response.data.success) {
        return response.data.data; // Devuelve solo los datos
      } else {
        throw new Error(
          response.data?.message || "Invalid response format from server"
        );
      }
    } catch (error) {
      console.error("Error fetching registration code:", error);

      // Personalizar mensajes de error según el tipo
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // El servidor respondió con un código de error
          const serverMessage =
            error.response.data?.message || error.response.data?.error;
          throw new Error(
            serverMessage || `Server error: ${error.response.status}`
          );
        } else if (error.request) {
          // La solicitud fue hecha pero no se recibió respuesta
          throw new Error(
            "No response from server. Please check your connection."
          );
        } else {
          // Algo pasó en la configuración de la solicitud
          throw new Error(`Request configuration error: ${error.message}`);
        }
      } else {
        // Error no relacionado con axios
        throw error;
      }
    }
  };

const updateRegistrationCode = async () => {
  // Confirmación inicial
  const confirmation = await Swal.fire({
    title: "¿Generar nuevo código?",
    text: "Se creará un nuevo código de acceso único",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Generar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "var(--bg-primary)",
    cancelButtonColor: "#d33"
  });

  if (!confirmation.isConfirmed) return;

  try {
    // Llamada a la API
    const apiUrl = `${import.meta.env.VITE_APP_API_UPDATE_REG_CODE_ADMIN}`;
    const response = await axios.post(apiUrl, {
      created_by: admin.fullname,
    }, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 10000,
    });

    if (!response.data?.success) {
      throw new Error(response.data?.message || "Error en la respuesta del servidor");
    }

    const newCodeData = response.data.data;

    // Mostrar éxito con opción de copiar
    const result = await Swal.fire({
      title: "✅ Código Actualizado",
      html: `
        <div style="text-align: center;">
          <p>Nuevo código generado:</p>
          <div style="font-family: monospace; font-size: 16px; background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
            ${newCodeData.code}
          </div>
        </div>
      `,
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Copiar",
      cancelButtonText: "Cerrar",
      confirmButtonColor: "#28a745",
    });

    // Copiar si el usuario confirma
    if (result.isConfirmed) {
      await navigator.clipboard.writeText(newCodeData.code);
      Swal.fire({
        title: "¡Copiado!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    }

    return newCodeData;

  } catch (error) {
    console.error("❌ Error:", error);
    
    await Swal.fire({
      title: "Error",
      text: error.message || "No se pudo generar el código",
      icon: "error",
      confirmButtonText: "Entendido"
    });
    
    throw error;
  }
};

    const handleCopyCode = async () => {
    if (registrationCode?.code) {
      const success = await copyToClipboard(registrationCode.code);
      
      if (success) {
        // Opcional: Mostrar un toast de confirmación
        console.log('✅ Código copiado al portapapeles');
      }
    }
  };

  const data = {
    series: {
      name: ["Enero", "Febrero", "Marzo"],
      data: [25, 56, 30],
    },
    sales: {
      names: [
        "Vendidas",
        "Arrendadas",
        "Consignadas",
        "Eliminadas",
        "Canceladas",
      ],
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
              <div className="adminhome-left-container-card-inside">
                <h3>999</h3>
              </div>
              <div className="adminhome-left-mediumcontainer-card-btn">
                <BaseButton
                  textLabel={false}
                  label={"Ver detalle"}
                  classs={"button primary"}
                  colorbtnhoverprimary={"var(--deg-tertiary-semi)"}
                  colortextbtnhoverprimary={"var(--text-tertiary)"}
                  colortextbtnprimary={"var(--text-primary)"}
                  colorbtn={"var(--deg-tertiary)"}
                  link={"/admin/dashboard/users"}
                />
              </div>
            </div>
            <div className="adminhome-left-container-card">
              <div className="adminhome-left-container-card-titles">
                <h2>Propiedades</h2>
              </div>
              <div className="adminhome-left-container-card-inside">
                <h3>999</h3>
              </div>
              <div className="flex">
                <BaseButton
                  textLabel={true}
                  label={"Ver detalle"}
                  classs={"button primary"}
                  colorbtnhoverprimary={"var(--deg-tertiary-semi)"}
                  colortextbtnhoverprimary={"var(--text-tertiary)"}
                  colortextbtnprimary={"var(--text-primary)"}
                  colorbtn={"var(--deg-tertiary)"}
                  handleClick={() =>
                    handleScrollToSection("/admin/dashboard/properties#sold")
                  }
                />
                <BaseButton
                  textLabel={true}
                  label={"Añadir"}
                  classs={"button primary"}
                  colorbtnhoverprimary={"var(--deg-tertiary-semi)"}
                  colortextbtnhoverprimary={"var(--text-tertiary)"}
                  colortextbtnprimary={"var(--text-primary)"}
                  colorbtn={"var(--deg-tertiary)"}
                  handleClick={() =>
                    handleScrollToSection(
                      "/admin/dashboard/properties#create-property"
                    )
                  }
                />
              </div>
            </div>
            <div className="adminhome-left-container-card">
              <h2>Ventas</h2>
              <div className="adminhome-left-container-card-inside">
                <h3>999</h3>
              </div>
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button primary"}
                colorbtnhoverprimary={"var(--deg-tertiary-semi)"}
                colortextbtnhoverprimary={"var(--text-tertiary)"}
                colortextbtnprimary={"var(--text-primary)"}
                colorbtn={"var(--deg-tertiary)"}
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
                labels={data.admins.dates}
                height={"100%"}
                legendPosition={"right"}
              />
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button primary"}
                colorbtnhoverprimary={"var(--deg-six)"}
                colortextbtnhoverprimary={"var(--text-tertiary)"}
                colortextbtnprimary={"var(--text-tertiary)"}
                colorbtn={"var(--deg-secondary)"}
              />
            </div>
            <div className="adminhome-left-mediumcontainer-card">
              <h2>Clientes</h2>
              <AreaChart
                dayColor={"#ffffff"}
                daysColor={"#ffffff"}
                theme={"light"}
                series={[{ data: data.clients.data }]}
                labels={data.clients.dates}
                height={"100%"}
                legendPosition={"left"}
              />
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button primary"}
                colorbtnhoverprimary={"var(--deg-tertiary-semi)"}
                colortextbtnhoverprimary={"var(--text-tertiary)"}
                colortextbtnprimary={"var(--text-primary)"}
                colorbtn={"var(--deg-tertiary)"}
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
            <CandlesChart
              width={"100%"}
              height={"270%"}
              series={data.finance.data}
            />
            <div className="flex z-index">
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button primary"}
                colorbtnhoverprimary={"var(--deg-six)"}
                colortextbtnhoverprimary={"var(--text-tertiary)"}
                colortextbtnprimary={"var(--text-tertiary)"}
                colorbtn={"var(--deg-secondary)"}
              />
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button primary"}
                colorbtnhoverprimary={"var(--deg-six)"}
                colortextbtnhoverprimary={"var(--text-tertiary)"}
                colortextbtnprimary={"var(--text-tertiary)"}
                colorbtn={"var(--deg-secondary)"}
              />
            </div>
          </div>
          <div className="adminhome-right-card-medium">
            <div className="adminhome-right-card-medium-card">
              <h4>Código de acceso actual</h4>
                          {registrationCode ? (
              <div className="code-container">
                <p 
                  className={`adminhome-right-card-medium-card-p ${copied ? 'copied' : ''}`}
                  onClick={handleCopyCode}
                  title="Haz clic para copiar el código"
                > 
                  {registrationCode.code}
                  <br />
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.14926 4.02039C7.11194 4.02039 7.8798 4.02023 8.49594 4.07605C9.12125 4.13276 9.65789 4.25194 10.1414 4.53113C10.7201 4.86536 11.2008 5.34597 11.535 5.92468C11.8142 6.40824 11.9334 6.94488 11.9901 7.57019C12.0459 8.18631 12.0457 8.95426 12.0457 9.91687C12.0457 10.8795 12.0459 11.6474 11.9901 12.2635C11.9334 12.8889 11.8142 13.4255 11.535 13.9091C11.2008 14.4877 10.7201 14.9684 10.1414 15.3026C9.65789 15.5818 9.12125 15.701 8.49594 15.7577C7.87981 15.8135 7.11193 15.8134 6.14926 15.8134C5.18664 15.8134 4.41871 15.8135 3.80258 15.7577C3.17727 15.701 2.64063 15.5818 2.15707 15.3026C1.57837 14.9684 1.09775 14.4877 0.763519 13.9091C0.484335 13.4255 0.365153 12.8889 0.308441 12.2635C0.252618 11.6474 0.252777 10.8795 0.252777 9.91687C0.252777 8.95425 0.252634 8.18632 0.308441 7.57019C0.365153 6.94488 0.484335 6.40824 0.763519 5.92468C1.09774 5.34596 1.57836 4.86535 2.15707 4.53113C2.64063 4.25194 3.17727 4.13276 3.80258 4.07605C4.41871 4.02024 5.18663 4.02039 6.14926 4.02039ZM6.14926 5.37781C5.16178 5.37781 4.46631 5.37768 3.92563 5.42664C3.39431 5.47479 3.07856 5.5658 2.83578 5.70593C2.46317 5.92112 2.15351 6.23077 1.93832 6.60339C1.7982 6.84617 1.70718 7.16192 1.65903 7.69324C1.61007 8.23391 1.6102 8.9294 1.6102 9.91687C1.6102 10.9044 1.61006 11.5998 1.65903 12.1405C1.70718 12.6718 1.7982 12.9876 1.93832 13.2303C2.15352 13.6029 2.46318 13.9126 2.83578 14.1278C3.07856 14.2679 3.39431 14.3589 3.92563 14.4071C4.46631 14.4561 5.16179 14.4559 6.14926 14.4559C7.13679 14.4559 7.83221 14.4561 8.37289 14.4071C8.90422 14.3589 9.21996 14.2679 9.46274 14.1278C9.83532 13.9126 10.145 13.6029 10.3602 13.2303C10.5003 12.9876 10.5913 12.6718 10.6395 12.1405C10.6885 11.5998 10.6883 10.9044 10.6883 9.91687C10.6883 8.92941 10.6885 8.23391 10.6395 7.69324C10.5913 7.16192 10.5003 6.84617 10.3602 6.60339C10.145 6.23078 9.83533 5.92113 9.46274 5.70593C9.21996 5.5658 8.90421 5.47479 8.37289 5.42664C7.83221 5.37766 7.13679 5.37781 6.14926 5.37781ZM9.80161 0.368042C10.7638 0.368042 11.5314 0.367947 12.1473 0.423706C12.7725 0.480374 13.3093 0.598826 13.7928 0.877808C14.3716 1.21198 14.8521 1.69361 15.1864 2.27234C15.4655 2.75581 15.5857 3.29171 15.6424 3.91687C15.6983 4.53307 15.6971 5.30167 15.6971 6.26453V7.82996C15.6971 8.29271 15.6989 8.59 15.6649 8.84851C15.4668 10.3526 14.4009 11.5739 12.9832 11.9989V10.5468C13.6973 10.1904 14.2104 9.49669 14.3192 8.67175C14.3387 8.52354 14.3407 8.33586 14.3407 7.82996V6.26453C14.3407 5.27713 14.3398 4.58155 14.2909 4.04089C14.2427 3.50975 14.1526 3.19379 14.0125 2.95105C13.7974 2.57856 13.4875 2.26876 13.1151 2.05359C12.8723 1.91353 12.5564 1.82244 12.0252 1.77429C11.4847 1.72534 10.7888 1.72546 9.80161 1.72546H7.71469C6.75617 1.72565 5.92662 2.27704 5.52328 3.07898H4.07016C4.54218 1.51138 5.99317 0.368253 7.71469 0.368042H9.80161Z" fill="currentColor"></path></svg>
                </p>
                {copied && (
                  <div className="copy-feedback">
                    ¡Copiado al portapapeles!
                  </div>
                )}
              </div>
            ) : (
              <p style={{ color: "var(--text-secondary)" }}>
                Cargando código...
              </p>
            )}
            </div>
            <div className="adminhome-right-card-medium-card">
              <h4>Cambiar código de acceso</h4>
              <BaseButton
                textLabel={true}
                label={"Cambiar"}
                classs={"button primary"}
                colorbtnhoverprimary={"var(--deg-tertiary-semi)"}
                colortextbtnhoverprimary={"var(--text-tertiary)"}
                colortextbtnprimary={"var(--text-primary)"}
                colorbtn={"var(--deg-tertiary)"}
                handleClick={updateRegistrationCode}
              />
            </div>
          </div>
          <div className="adminhome-right-content">
            <h2>Comunicaciones</h2>
            <div className="adminhome-right-content-inside">
              <Link to={"/admin/dashboard/comunications/#issues"}>
                <img
                  className="adminhome-right-content-img"
                  src={getImg("svg", "settings", "svg")}
                  alt=""
                />
                <p>Reportes de problemas</p>
              </Link>
              <Link to={"/admin/dashboard/comunications/#pqrs"}>
                <img
                  className="adminhome-right-content-img"
                  src={getImg("svg", "message", "svg")}
                  alt=""
                />
                <p>Reportes de PQRS</p>
              </Link>
            </div>
            {/* <div className="flex-s z-index">
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button primary"}
                colorbtnhoverprimary={"var(--deg-six)"}
                colortextbtnhoverprimary={"var(--text-tertiary)"}
                colortextbtnprimary={"var(--text-tertiary)"}
                colorbtn={"var(--deg-secondary)"}
              />
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button primary"}
                colorbtnhoverprimary={"var(--deg-six)"}
                colortextbtnhoverprimary={"var(--text-tertiary)"}
                colortextbtnprimary={"var(--text-tertiary)"}
                colorbtn={"var(--deg-secondary)"}
              />
            </div> */}
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
          width: 100%;
          height: 100%;
          padding: 24px;
          background: var(--deg-secondary);
          box-shadow: var(--ds-s);
          align-items: center;
          align-content: space-between;
          gap: 10px;
          color: white;
          h3 {
            font-size: 70px;
            font-weight: 500;
            padding: 20px 0;
          }
          &-inside {
            margin: auto;
          }
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
            width: 130%;

            @media (max-width: 720px) {
              width: 100%;
              border-radius: 0;
            }
          }
          &:nth-child(3) {
            border-radius: 5px 15px 15px 15px;
            width: 100%;
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
        @media (max-width: 780px) {
          display: grid;
          grid-template-columns: 1fr;
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
              border-radius: 15px 15px 0 0;
            }
          }
          &:nth-child(2) {
            display: grid;
            gap: 20px;
            color: white;
            background: var(--deg-fourty);
            box-shadow: var(--ds-m);
            @media (max-width: 820px) {
              border-radius: 0px;
            }
          }
          &:nth-child(3) {
            @media (max-width: 820px) {
              margin: auto;
              width: 100%;
              border-radius: 0px 0px 15px 15px;
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
            h4 {
              color: var(--bg-tertiary);
            }
            p {
              display: grid;
              color: white;
              word-break: break-all;
              font-size: 10px;
              text-align: center;
              gap: 5px;
            }
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

        &-img {
          display: grid;
          margin: auto;
          width: 50%;
          filter: invert(100%) brightness(500%);
          height: fit-content;
        }
        &-inside {
          place-content: center;
          text-align: center;
          padding: 20px 0;
          display: flex;
          gap: 30px;
          height: fit-content;
          a {
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
            transition: all ease 0.5s;
            h3 {
              font-weight: 400;
            }
            &:hover {
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
  .z-index {
    display: flex;
    z-index: 100;
    justify-content: center;
    gap: 20px;
    margin: auto;
  }
  .flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .code-container{
    display: grid;
    width: 100%;
    place-items: center;
    svg{
      margin: auto;
      cursor: pointer;
      filter: invert(30%);
      &:hover{
        filter: invert(0);
      }
    }
  }
`;
