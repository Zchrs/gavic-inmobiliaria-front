import styled from "styled-components";
import PropTypes from "prop-types";
import { BaseButton } from "./BaseButton";
import { useRef } from "react";

// export const CardUsers = ({ columns, data }) => {
//   return (
//     <UsersCard>
//         <div className="container">

//             <div className="container-header">
//                 {columns.map((column, index) => (
//                     <div className="container-contain-inside" key={index}>{column}</div>
//                   ))}
//                   <div className="container-contain-inside">Eliminar</div>
//             </div>
//             <div className="container-grid">
//             {data.map((row, rowIndex) => (
//               <div  className="container-contain" key={rowIndex}>
//                 {columns.map((column, colIndex) => (
//                   <div className="container-contain-inside" key={colIndex}>{row[column]}</div>
//                 ))}
//                 <div className="container-inside">
//                 <BaseButton
//                   textLabel={true}
//                   label="Eliminar"
//                   classs={"button little-secondary-gradient"}
//                 />
//                 </div>
//               </div>
//             ))}
//             </div>
//         </div>
//     </UsersCard>
//   )
// }

export const CardUsers = ({ columns, data, approve, message }) => {
  const containerRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
    containerRef.current.classList.add("dragging");
    document.body.style.userSelect = "none"; // Desactiva la selección de texto
  };

  const handleMouseLeave = () => {
    isDragging = false;
    containerRef.current?.classList.remove("dragging");
    document.body.style.userSelect = ""; // Reactiva la selección de texto
  };

  const handleMouseUp = () => {
    isDragging = false;
    containerRef.current?.classList.remove("dragging");
    document.body.style.userSelect = ""; // Reactiva la selección de texto
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la velocidad
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <UsersCard>
      <div
        className="container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
                <div className="container-header">
          {columns.map((column, index) => (
            <div
              className={`container-contain-inside 
                ${column === "Rol" ? "column-role" : ""}
                ${column === "Estado" ? "column-status" : ""}`}
              key={index}
            >
              {column}
            </div>
          ))}
          <div className="container-contain-inside">Acción</div>
        </div>
        <div className="container-grid">
          {data.map((row, rowIndex) => (
            <div className="container-contain" key={rowIndex}>
              {columns.map((column, colIndex) => (
                <div
                  className={`container-contain-inside 
                    ${column === "Rol" ? "column-role" : ""}
                    ${column === "Estado" ? "column-status" : ""}`}
                  key={colIndex}
                >
                  {row[column]}
                </div>
              ))}
              <div className="container-inside">
                {message && (
                  <BaseButton
                    textLabel={true}
                    label="Mensaje"
                    classs={"button little-primary-gradient"}
                  />
                )}
                {approve && (
                  <BaseButton
                    textLabel={true}
                    label="Aprobar"
                    classs={"button little-primary-gradient"}
                  />
                )}
                <BaseButton
                  textLabel={true}
                  label="Eliminar"
                  classs={"button little-secondary-gradient"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </UsersCard>
  );
};

CardUsers.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  approve: PropTypes.bool,
  message: PropTypes.bool,
};

const UsersCard = styled.div`
  display: grid;
  .container {
    display: grid;
    align-content: start;
    width: 100%;
    border-radius: 5px;
    gap: 2px;
    overflow: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 800px) {
      width: 100%;
      overflow: auto;
      overflow-y: hidden;
    }
    &-header {
      display: flex;
      width: 100%;
      min-width: 700px;
      height: fit-content;
      align-content: start;
      background-color: #d4d4d4;
      border-radius: 5px 5px 0 0;
      font-size: 16px;
      font-weight: 600;
      padding: 15px 0;

      @media (max-width: 826px) {
        margin-top: 40px;
      }
      @media (max-width: 520px) {
        margin-top: 0px;
      }
    }
    &-grid {
      display: grid;
      align-content: start;
      gap: 1px;
    }
    &-contain {
      display: flex;
      align-items: center;
      align-content: start;
      height: fit-content;
      background-color: #f1f1f1;
      width: 100%;

      &-inside {
        height: fit-content;
        position: relative;
        align-items: center;
        display: grid;
        justify-content: left;
        
        width: 100%;
        padding: 8px;

        &:nth-child(1) {
            word-break: break-all;
          &::before {
            display: none;
          }
        }
        &:nth-child(2) {
            word-break: break-all;
        }
        &:last-child {
          justify-content: center;
        }
        &::before {
          content: "";
          position: absolute;
          background: #d8d7d7;
          width: 1px;
          height: 250%;
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
        }
      }
    }
    &-inside {
      position: relative;
      align-items: center;
      justify-content: center;
      display: flex;
      gap: 5px;
      width: 100%;
      padding: 8px;
      @media (max-width: 1295px) {
          display: grid;
        }
        @media (max-width: 900px) {
            font-size: 10px;
        }
      &::before {
        content: "";
        position: absolute;
        background: #d8d7d7;
        width: 1px;
        height: 300%;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
  
  /* .column-role {
    min-width: 55px; 
    max-width: 55px; 
    background: transparent;
    
  }
  .column-status {
    min-width: 60px; 
    max-width: 60px; 
    background: transparent;
    
  } */
`;
