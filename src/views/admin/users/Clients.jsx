

/* eslint-disable no-unused-vars */
// import { Table } from "../../../../index";
import styled from "styled-components";
import { CardUsers } from "../../../components/CardUsers";
import { useState } from "react";
import { clients } from "../../../../apiEmulated";
import { Pagination } from "../../../components/Pagination";


export const Clients = () => {
  const columns = ["Nombre", "Correo", "Rol", "Estado"];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = clients.slice(startIndex, startIndex + itemsPerPage); // Corregido

  return (
    <CliEnts>
      <div className="clients">
        <h2>Clientes</h2>
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
    </CliEnts>
  );
};

const CliEnts = styled.div`
  
  .clients{
    display: grid;
    align-content: start;
    width: 100%;
    height: fit-content;
    gap: 20px;
  }
`