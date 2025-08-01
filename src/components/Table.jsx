import styled from "styled-components";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { BaseButton } from "./BaseButton";

export const Table = ({ columns, data }) => {
    const tableContainerRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleMouseDown = (e) => {
      setIsDown(true);
      setStartX(e.pageX - tableContainerRef.current.offsetLeft);
      setScrollLeft(tableContainerRef.current.scrollLeft);
    };
  
    const handleMouseUp = () => {
      setIsDown(false);
    };
  
    const handleMouseLeave = () => {
      setIsDown(false);
    };
  
    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - tableContainerRef.current.offsetLeft;
      const walk = (x - startX) * 3; // Velocidad de desplazamiento
      tableContainerRef.current.scrollLeft = scrollLeft - walk;
    };
  
    return (
      <TableContainer
        ref={tableContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
        <StyledTable>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{row[column]}</td>
                ))}
                <td colSpan={columns.length} style={{ textAlign: "center" }}>
                <BaseButton
                  textLabel={true}
                  label="Eliminar"
                  classs={"button little-secondary-gradient"}
                />
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    );
  };

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const TableContainer = styled.div`
  width: 100%;
  border-radius: 10px;

  border: 1px solid #ddd;
  `;

const StyledTable = styled.table`
  width: fit-content;
  border-collapse: collapse;
  overflow-x: auto;
  cursor: grab;
  &.active {
    cursor: grabbing;
  }

  @media (max-width: 960px) {
    width: 600px ;
  }
  
  th,
  td {
    padding: 8px 12px;
    text-align: left;
    border: 1px solid #ddd;
}

th {
      font-size: 17px;
      border: 1px solid #ddd;
      background-color: #f4f4f4;
    }
    
    tr {
        font-size: 15px;
        cursor: pointer;
        border: 1px solid #ddd;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;
