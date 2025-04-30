/* eslint-disable no-debugger */
import styled from "styled-components"
import { getImg } from "../../globalActions"
import { BaseButton } from "./BaseButton"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { NotFound } from "./NotFound";


// export const VerifyCode = () => {
//     const { userId } = useParams(); // Asegúrate de tener una ruta como /verify/:userId
//     const [token, setToken] = useState(null);
   
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchToken = async () => {
//         try {
//           const res = await fetch(`${import.meta.env.VITE_APP_API_CLIENTS_GET_TOKEN__URL}/${userId}`);
//           const data = await res.json();
//           console.log(data)
//           if (data.token) {
//             setToken(data.token);
//           }
//         } catch (error) {
//           console.error("Error al obtener el token:", error);
//         } finally {
//           setLoading(false);
//         }
//       };


  
//       if (userId) fetchToken();
//     }, [userId]);
  
//     return (
//       <CodeVerify>
//         <div className="verify">
//         {token ? <div className="container">
//           <img className="container-logo" src={getImg("svg", "logo", "svg")} alt="logo" />
//           <h2>Confirma tu correo electrónico</h2>
  
//           <BaseButton 
//             classs={"button full-secondary"} 
//             width={"100%"}
//             height={"50px"}
//             textLabel={true} 
//             label={"Click para confirmar tu correo"} 
//             handleClick={() => {
//               if (token) window.location.href = `${import.meta.env.VITE_APP_API_CLIENTS_VERIFY_URL}/${token}`;
//             }}
//           />
  
//           <p>O</p>
//           <p>Copia y pega este link en tu navegador</p>
//           <strong>{token ? `${import.meta.env.VITE_APP_API_CLIENTS_VERIFY_URL}/${token}` : "Cargando..."}</strong>
          
//           <p>O</p>
//           <p>Haz clic en el siguiente enlace</p>
//           {token&& (
//             <Link to={`${import.meta.env.VITE_APP_API_CLIENTS_VERIFY_URL}/${token}`}>
//               Confirmar Correo
//             </Link>
//           )}
  
//           <strong>{loading ? "Cargando..." : ""}</strong>
          
//         </div> : <div className="notfound"><NotFound/></div> } 
//         </div>
//       </CodeVerify>
//     );
//   };

export const VerifyCode = () => {
  const { userId } = useParams();
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [apiResponse, setApiResponse] = useState(null); // Nuevo estado para la respuesta

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_APP_API_CLIENTS_GET_TOKEN__URL}/${userId}`);
        const data = await res.json();
        if (data.token) {
          setToken(data.token);
          
          // Verificar si ya está verificado al cargar el componente
          const verifyRes = await fetch(`${import.meta.env.VITE_APP_API_CLIENTS_VERIFY_STATUS_URL}/${userId}`);
          const verifyData = await verifyRes.json();
          if (verifyData.isVerified) {
            setVerificationStatus(true);
            setApiResponse({
              success: true,
              message: 'El correo ya está verificado'
            });
          }
        }
      } catch (error) {
        console.error("Error al obtener el token:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchToken();
  }, [userId]);

  const handleVerify = async () => {
    if (!token) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_CLIENTS_VERIFY_URL}/${token}`, {
        method: 'POST'
      });
      const data = await response.json();
      
      setApiResponse(data); // Guardar la respuesta del servidor
      setVerificationStatus(data.success);
      
      if (!response.ok) {
        throw new Error(data.error || 'Error al verificar el correo');
      }
    } catch (error) {
      console.error("Error al verificar:", error);
      setApiResponse({
        success: false,
        message: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <CodeVerify>
      <div className="verify">
        {token ? (
          <div className="container">
            <img className="container-logo" src={getImg("svg", "logo", "svg")} alt="logo" />
            <h2>Confirma tu correo electrónico</h2>

            {/* Mostrar respuesta del servidor si existe */}
            {apiResponse && (
              <div className={`response-message ${apiResponse.success ? 'success' : 'error'}`}>
                <p>¡{apiResponse.message}!</p>
                {apiResponse.success && (
                  <Link to="/login" className="button full-primary">
                    Ir al inicio de sesión
                  </Link>
                )}
              </div>
            )}

            {/* Mostrar opciones de verificación solo si no está verificado */}
            {(!verificationStatus && !apiResponse?.success) && (
              <>
                <BaseButton 
                  classs={"button full-secondary"} 
                  width={"100%"}
                  height={"50px"}
                  textLabel={true} 
                  label={loading ? "Verificando..." : "Click para confirmar tu correo"} 
                  handleClick={handleVerify}
                  disabled={loading}
                />

                <p>O</p>
                <p>Copia y pega este link en tu navegador</p>
                <strong>{`${import.meta.env.VITE_APP_API_CLIENTS_VERIFY_URL}/${token}`}</strong>
                
                <p>O</p>
                <p>Haz clic en el siguiente enlace</p>
                <Link to={`${import.meta.env.VITE_APP_API_CLIENTS_VERIFY_URL}/${token}`}>
                  Confirmar Correo
                </Link>
              </>
            )}
            
            <strong>{loading && !apiResponse ? "Cargando..." : ""}</strong>
          </div>
        ) : (
          <div className="notfound">
            <NotFound/>
            <p>No se encontró el token de verificación</p>
          </div>
        )} 
      </div>
    </CodeVerify>
  );
};

const CodeVerify = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;


    .verify{
      display: grid;
      width: 100%;
      height: 100%;
      place-items: center;
      padding: 50px;
    }

    .container{
        display: grid;
        width: 60%;
        height: fit-content;
       align-content: center;
        justify-content: center;
        text-align: center;
        background: var(--bg-primary);
        border-radius: 24px;
        gap: 24px;
        min-height: 100vh;
        padding: 24px;
        color: white;
        margin: 0;

        &-logo{
            margin: auto;
            filter: brightness(500%);
            width: 180px;
        }
        p, strong{
          word-break: break-all;
          width: 100%;
        }
    }
    .notfound{
        padding: 0;
        display: grid;
        color: white;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background: var(--bg-primary);
        place-content: center;
        text-align: center;
        h1{
            font-size: 30rem;
            font-weight: 700;
        }

    }
    .success{
      font-size : 2.2rem;
      a{
        font-size : 1.5rem;
      }
    }
`