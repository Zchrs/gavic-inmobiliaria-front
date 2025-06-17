/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  CardLeases,
  Empty,
  Loader,
  Pagination,
} from "../../../../index";
import styled from "styled-components";
import { HeaderForm } from "../../../components/HeaderForm";
import { fetchPropertiesByFilter, fetchRentProperties, selectedProperty } from "../../../actions/propertyActions";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../../types/types";

export const Leases = () => {
  const rentProperties = useSelector((state) => state.properties.propertiesInfo);
 
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(null);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(rentProperties.length / itemsPerPage);

  
  const onlyRentProperties = rentProperties.filter(p => p.action === 'Arrendamiento');
  const currentProperties = onlyRentProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  useEffect(() => {
    const init = async () => {
      if (rentProperties.length > 0) return;
    
      setLoading(true);
      try {
        const localData = localStorage.getItem("rentProperties");
        if (localData) {
          dispatch({
            type: types.propertyView,
            payload: JSON.parse(localData),
          });
        } else {
          await dispatch(fetchRentProperties());
        }
      } catch (error) {
        console.error("Error fetching rent properties:", error);
      } finally {
        setLoading(false);
      }
    };
  
    init();
  }, [dispatch]);
  
    const handleSearch = async (filters) => {
      setLoading(true);
      try {
        await dispatch(fetchPropertiesByFilter(filters)); // Despacha la acción para obtener propiedades filtradas
        setFilters(filters); // Guarda los filtros actuales
        setCurrentPage(1); // reset a la primera página
      } catch (error) {
        console.error("Error al buscar propiedades:", error);
      }
      setLoading(false);
    };
  
    const handleClearFilters = async () => {
      setLoading(true);
      try {
        await dispatch(fetchRentProperties()); // Despacha la acción para obtener todas las propiedades
        setFilters(null); // Limpiar filtros
        setCurrentPage(1); // Reiniciar paginación
      } catch (err) {
        console.error("Error al limpiar filtros:", err);
      }
      setLoading(false);
    };
  
      const handleSetProductClick = (property) => {
        dispatch(selectedProperty(property));
      };


  return (
    <LeaSes>
      <div className="leases">
        <div className="leases-header">
          <HeaderForm 
          color={"var(--bg-primary)"}
          borderbtn={"white"}
          colortextbtnhoveroutline={"white"}
          colortextbtnoutline={"white"}
          filterhoveroutline="brightness(0%) invert(100%)"
          filteroutline={"brightness(0%) invert(100%)"}
          hovercolorbtnoutline={"#ffffff2e"}
          borderbtnhoveroutline={"var(--bg-tertiary)"}
          action={[{ value: "Arrendar", label: "Arrendar" }]}
          colorbtnhoverprimary={"white"}
          filterprimary="brightness(0%) invert(0%)"
          filterprimaryhover="brightness(0%) invert(0%)"
          colorbtn={"var(--bg-secondary)"}
          colortextbtnprimary={"var(--text-primary)"}
          colortextbtnhoverprimary={"var(--text-primary)"}
          onSearch={handleSearch}
          onClear={handleClearFilters}
          />
        </div>
        <div className="leases-content grid-4fr">
                    {loading ? (
                      <Loader />
                    ) : currentProperties.length === 0 ? (
                        <div className="leases-empty">
                          <Empty message="No hay propiedades" />
                        </div>
                    ) : (
                      currentProperties.map((property) => (
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
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          colorText="dark"
          arrowPrev="button bg-dark"
          arrowNext="button bg-dark"
        />
      </div>
    </LeaSes>
  );
};

const LeaSes = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: start;

  .leases {
    display: grid;
    align-items: start;
    width: 100%;
    height: 100%;
    padding: 25px;
    gap: 72px;
    @media (max-width: 1024px) {
      padding: 12px;
    }
    &-header{
      display: grid;
      width: 100%;
      height: fit-content;
    }
    &-content {
      display: grid;
      width: 100%;
    }
    &-empty{
      display: grid;
      width: fit-content;
      height: fit-content;
      margin  : auto;
      grid-column: 1 / 5;
    }
  }
`;
