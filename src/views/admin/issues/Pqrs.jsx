/* eslint-disable no-unused-vars */
import { Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";
import { clients } from "../../../../apiEmulated";
import { Loader, CardUsers, Empty } from "../../../../index"
import { useDispatch } from "react-redux";


export const Pqrs = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
        const columns = ["Nombre", "Correo", "Problema", "Rol", "Estado"];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    const totalPages = Math.ceil(clients.length / itemsPerPage);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = clients.slice(startIndex, startIndex + itemsPerPage); // Corregido

      // useEffect(() => {
      //   const init = async () => {
      //     if (getPqrs.length > 0) return; // ya cargado en Redux
    
      //     setLoading(true);
      //     try {
      //       const localData = localStorage.getItem("properties");
      //       if (localData) {
      //         const parsedData = JSON.parse(localData);
      //         dispatch({
      //           type: types.propertyView, // o types.propertyView
      //           payload: parsedData,
      //         });
      //       } else {
      //         const response = await dispatch(fetchPqrs());
              
      //       }
      //     } catch (error) {
      //       console.error("Error fetching recent properties:", error);
      //     } finally {
      //       setLoading(false);
      //     }
      //   };
    
      //   init();
      // }, [dispatch]);
      const getPqrs = [];
  
  return (
    <div id="pqrs">
       {loading ? (
                    <Loader />
                  ) : getPqrs.length === 0 ? (
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
