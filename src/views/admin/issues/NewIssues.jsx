/* eslint-disable no-unused-vars */
import { Pagination } from "react-bootstrap";
import { Loader, CardUsers, Empty } from "../../../../index"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { clients } from "../../../../apiEmulated";


export const NewIssues = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
        const columns = ["Nombre", "Correo", "Problema", "Rol", "Estado"];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    const totalPages = Math.ceil(clients.length / itemsPerPage);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = clients.slice(startIndex, startIndex + itemsPerPage); // Corregido
  
    const getIssues = [];
  return (
    <div id="issues">
       {loading ? (
                    <Loader />
                  ) : getIssues.length === 0 ? (
                    <div className="addrecent-empty">
                      <Empty message="No hay propiedades añadidas recientemente" />
                      </div>
                  ) : (
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
                  )}
    </div>
  )
}
