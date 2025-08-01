import styled from "styled-components";
import PropTypes from "prop-types";
import { BaseButton } from "../../index";
import { useRef } from "react";


export const CardUsers = ({ columns, data, approve, message, erase, look, link, solved }) => {
  const tableRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - tableRef.current.offsetLeft;
    scrollLeft = tableRef.current.scrollLeft;
    tableRef.current.classList.add("dragging");
    document.body.style.userSelect = "none";
  };

  const handleMouseLeave = () => {
    isDragging = false;
    tableRef.current?.classList.remove("dragging");
    document.body.style.userSelect = "";
  };

  const handleMouseUp = () => {
    isDragging = false;
    tableRef.current?.classList.remove("dragging");
    document.body.style.userSelect = "";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - tableRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tableRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <UsersTable>
      <div
        className="table-wrapper"
        ref={tableRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <table>
          <thead className="thead">
            <tr>
              {columns.map((column, idx) => (
                <th 
                  key={idx}
                  className={`${column === "Problema" || column === "Rol" ? "column-role" : ""}
                              ${column === "Estado" ? "column-status" : ""}`}
                >
                  {column}
                </th>
              ))}
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`${column === "Problema" || column === "Rol" ? "column-role" : ""}
                                ${column === "Estado" ? "column-status" : ""}`}
                  >
                    {row[column]}
                  </td>
                ))}
                <td className="flex">
                  {message && (
                    <BaseButton textLabel label="Mensaje" classs="button little-primary-gradient" link={link} />
                  )}
                  {approve && (
                    <BaseButton textLabel label="Aprobar" classs="button little-primary-gradient" link={link} />
                  )}
                  {erase && (
                    <BaseButton textLabel label="Eliminar" classs="button primary" link={link} />
                  )}
                  {look && (
                    <BaseButton
                      textLabel
                      label="Revisar"
                      classs="button primary"
                      colorbtn="var(--bg-danger)"
                      colortextbtnprimary="var(--text-tertiary)"
                      link={link}
                    />
                  )}
                  {solved && (
                    <BaseButton
                      textLabel
                      label="Solucionado"
                      classs="button primary"
                      colorbtn="var(--bg-primary)"
                      colortextbtnprimary="var(--text-tertiary)"
                      link={link}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UsersTable>
  );
};
CardUsers.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  approve: PropTypes.bool,
  message: PropTypes.bool,
  erase: PropTypes.bool,
  look: PropTypes.bool,
  link: PropTypes.bool,
  solved: PropTypes.bool,
};

const UsersTable = styled.div`
display: grid;
width: 100%;
height: 100%;

.table-wrapper {
  max-width: 1920px;
  height: 100%;
  overflow-x: auto;
  border-radius: 10px;
  cursor: grab;
}

.table-wrapper.dragging {
  cursor: grabbing;
}

table {
    width: 100%;
    max-width: 1920px;
    overflow: hidden;
    border-collapse: collapse;
    background: var(--bg-tertiary);
    border-radius: 10px ;
  }


  tbody{
    max-width: 1920px;
    width: 100%;
  }
  thead{
    display: contents;
    border-radius: 10px 10px 0 0;
    padding: 15px ;
  }
  
  th, td {
    padding: 5px;
    text-align: left;
    white-space: nowrap;
    border-right: 1px solid #eae8e8;
    border-left: 1px solid #eae8e8;
    border-bottom: 1px solid #eae8e8;
  }
  th{
    background: var(--bg-secondary-soft);
    padding: 15px 10px ;
    &:first-child{
      border-top-left-radius: 10px;
      border-left: none;
    }
    &:last-child{
      border-top-right-radius: 10px;
      border-right: none;
    }
  }

  .column-role {
    min-width: 150px;
  }

  .column-status {
    min-width: 120px;
  }

  .button {
    margin-right: 0.5rem;
  }
.flex{
  display: flex;
  justify-content: center;
}
`;
