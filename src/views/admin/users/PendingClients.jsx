// import { Table } from "../../../../index";
import styled from "styled-components";
import { CardUsers } from "../../../components/CardUsers";
import { useState } from "react";
import { clients } from "../../../../apiEmulated";
import { Pagination } from "../../../components/Pagination";

export const PendingClients = () => {
    const columns = ["Nombre", "Correo", "Rol", "Estado"];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    const totalPages = Math.ceil(clients.length / itemsPerPage);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = clients.slice(startIndex, startIndex + itemsPerPage); // Corregido
  
    return (
      <ClientsPending>
        <div className="pendingclients">
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
      </ClientsPending>
    );
  };
  
  const ClientsPending = styled.div`
    
    .pendingclients{
      display: grid;
      align-content: start;
      width: 100%;
      height: fit-content;
      gap: 20px;
    }
  `