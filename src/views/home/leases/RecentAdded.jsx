/* eslint-disable no-unused-vars */
import styled from "styled-components"
import { leases } from "../../../../apiEmulated"
import { Loader, CardLeases, Pagination, Empty } from "../../../../index"
import { selectedProperty, fetchRecentProperties } from "../../../actions/propertyActions";

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../../types/types";



export const RecentAdded = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recentProperties = useSelector((state) => state.properties.propertiesInfo);
console.log(recentProperties)
  
  // Configuración de paginación
  const itemsPerPage = 12;
  const totalPages = Math.ceil(recentProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProperties = recentProperties.slice(startIndex, startIndex + itemsPerPage);

  const handleSetProductClick = (property) => {
    dispatch(selectedProperty(property));
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await dispatch(fetchRecentProperties());
  //       const properties = response.payload || response || [];
  
  //       setRecentProperties(properties);
  
  //       // Guardar en localStorage
  //       localStorage.setItem("propertiesRecent", JSON.stringify(properties));
  //     } catch (error) {
  //       console.error("Error fetching recent properties:", error);
  //       setRecentProperties([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   // Revisar si hay datos guardados en localStorage
  //   const localData = localStorage.getItem("propertiesRecent");
  //   if (localData) {
  //     try {
  //       const parsedData = JSON.parse(localData);
  //       setRecentProperties(parsedData);
  //     } catch (e) {
  //       console.error("Error al parsear recentProperties desde localStorage:", e.message);
  //       fetchData(); // si el parse falla, traemos de la API
  //     }
  //   } else {
  //     fetchData(); // si no hay datos, traemos de la API
  //   }
  // }, [dispatch]);

  // Resetear a página 1 cuando cambian las propiedades
  
  useEffect(() => {
    const init = async () => {
      if (recentProperties.length > 0) return; // ya cargado en Redux

      setLoading(true);
      try {
        const localData = localStorage.getItem("propertiesRecent");
        if (localData) {
          const parsedData = JSON.parse(localData);
          dispatch({
            type: types.propertyView, // o types.propertyView
            payload: parsedData,
          });
        } else {
          const response = await dispatch(fetchRecentProperties());
          localStorage.setItem("propertiesRecent", JSON.stringify(response.payload));
        }
      } catch (error) {
        console.error("Error fetching recent properties:", error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [dispatch]); // solo se ejecuta una ve
  
  useEffect(() => {
    setCurrentPage(1);
  }, [recentProperties]);

  return (
    <AddedRecent>
      <div className="addrecent">
        <h2 className="addrecent-h2 h2-extra-medium">Añadidos recientemente</h2>
        <div className="addrecent-contain">
          <div className="recently pd-top-bottom">
            {loading ? (
              <Loader />
            ) : recentProperties.length === 0 ? (
              <div className="addrecent-empty">
                <Empty message="No hay propiedades recientes disponibles" />
                </div>
            ) : (
              paginatedProperties.map((property) => (
                <CardLeases
                  key={property.id}
                  quantityBathrooms={property.bathRoom}
                  quantityCloset={property.closets}
                  quantityRooms={property.bedRoom}
                  location={property.district || "Ubicación no disponible"}
                  productLink={`/properties/${property.id}`}
                  addToWish="addwishlist-red"
                  img={property.image || '/default-property.jpg'}
                  sellingsText={true}
                  priceText={true}
                  price={property.price || "Consultar"}
                  productInfo={property}
                  boxFlex={true}
                  classs="productcard background"
                  onClick={() => handleSetProductClick(property)}
                  prodHover={() => handleSetProductClick(property)}
                  jpg="true"
                  title={property.title || "Propiedad sin título"}
                  thumbnails={property.images || []}
                  showToAddWish={true}
                  property_id={property.id}
                  propertyRef={property.ref}
                />
              ))
            )}
          </div>
          
          {recentProperties.length > itemsPerPage && (
            <div className="addrecent-contain-pagination">
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
      </div>
    </AddedRecent>
  );
};

const AddedRecent = styled.div`
    display: grid;
    width: 100%;
    height: fit-content;
    position: relative;
    
    .addrecent{
      position: relative;
      display: grid;
      align-items: start;
      width: 100%;
      height: 100%;

      &-h2{
        margin: auto;
        left: 0;
        right: 0;
          text-align: center;
          font-weight: 600;
          position: absolute;
          width: fit-content;
          top: -35px;
        }

        &-empty{
          grid-column: 1 / 5;
          display: grid;
          width: 100%;
          height: 100%;
          
          place-items: center;
          place-content: center;
          justify-content: center;
        }

      
      &-contain{
        position: relative;
      display: grid;
      width: 100%;
      height: 100%;
      padding: 25px;
      clip-path: polygon(0 0, 26% 0, 28% 3%, 72% 3%, 74% 0, 100% 0, 100% 100%, 65% 100%, 63% 96%, 37% 96%, 35% 100%, 0 100%);
      background: #eae8e8;
      
      @media (max-width: 1024px) {
          clip-path: polygon(0 0, 20% 0, 23% 1.8%, 77% 1.8%, 80% 0, 100% 0, 100% 100%, 65% 100%, 63% 98%, 37% 98%, 35% 100%, 0 100%);
              
            }
        @media (max-width: 920px) {
              clip-path: polygon(0 0, 8% 0, 12% 1%, 88% 1%, 93% 0, 100% 0, 100% 100%, 75% 100%, 72% 98.5%, 28% 98.5%, 25% 100%, 0 100%);
            }
        @media (max-width: 380px) {
              clip-path: polygon(0 0, 5% 0, 9% 1%, 91% 1%, 95% 0, 100% 0, 100% 100%, 75% 100%, 72% 98.5%, 28% 98.5%, 25% 100%, 0 100%);
            }

      .recently{
      position: relative;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        width: 100%;
        height: 100%;
        
        @media (max-width: 1024px) {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 820px) {
          grid-template-columns: 1fr;
          padding:30px 15px;
        }
    }
    &-pagination{
      position: absolute;
      display: grid;
      width: fit-content;
      margin: auto;
      height: fit-content;  
      bottom: 60px;
      left: 0;
      right: 0;

      &-text{
        color: var(--text-tertiary);
      }
    }
  }}
`
