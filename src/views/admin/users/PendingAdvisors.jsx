/* eslint-disable no-unused-vars */
// import { Table } from "../../../../index";
import styled from "styled-components";
import { CardUsers } from "../../../components/CardUsers";
import { useState } from "react";
import { advisors } from "../../../../apiEmulated";
import { Pagination } from "../../../components/Pagination";

export const PendingAdvisors = () => {
    const columns = ["Nombre", "Correo", "Rol", "Estado"];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    const totalPages = Math.ceil(advisors.length / itemsPerPage);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = advisors.slice(startIndex, startIndex + itemsPerPage); // Corregido
  
    return (
      <AdvisorsPending>
        <div className="pending">
          <CardUsers columns={columns} data={selectedData} approve />
          <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  colorText="dark"
                  arrowPrev="button bg-dark"
                  arrowNext="button bg-dark"
                />
        </div>
      </AdvisorsPending>
    );
  };
  
  const AdvisorsPending = styled.div`
    
    .pending{
      display: grid;
      width: 100%;
      height: fit-content;
      gap: 20px;
    }
  `