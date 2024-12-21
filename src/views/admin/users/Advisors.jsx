/* eslint-disable no-unused-vars */
// import { Table } from "../../../../index";
import styled from "styled-components";
import { CardUsers } from "../../../components/CardUsers";
import { useState } from "react";
import { advisors } from "../../../../apiEmulated";
import { Pagination } from "../../../components/Pagination";


export const Advisors = () => {
  const columns = ["Nombre", "Correo", "Rol", "Estado"];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(advisors.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = advisors.slice(startIndex, startIndex + itemsPerPage); // Corregido

  return (
    <AdVisors>
      <div className="advisors">
      <h2>Asesores</h2>
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
    </AdVisors>
  );
};

const AdVisors = styled.div`
  
  .advisors{
    display: grid;
    width: 100%;
    height: fit-content;
    gap: 20px;
  }
`
