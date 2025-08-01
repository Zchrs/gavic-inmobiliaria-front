import { Pagination } from "react-bootstrap";
import { CardUsers } from "../../../components/CardUsers";
import { useState } from "react";
import { clients } from "../../../../apiEmulated";


export const NewIssues = () => {
        const columns = ["Nombre", "Correo", "Problema", "Rol", "Estado"];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    const totalPages = Math.ceil(clients.length / itemsPerPage);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = clients.slice(startIndex, startIndex + itemsPerPage); // Corregido
  
  return (
    <div>
        <CardUsers columns={columns} data={selectedData} look solved />
          <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  colorText="dark"
                  arrowPrev="button bg-dark"
                  arrowNext="button bg-dark"
                />
    </div>
  )
}
