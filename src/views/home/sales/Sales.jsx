/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { CardLeases, Empty, Loader, Pagination } from "../../../../index";
import styled from "styled-components";
import { HeaderForm } from "../../../components/HeaderForm";
import { fetchPropertiesByFilter, fetchSellProperties, selectedProperty } from "../../../actions/propertyActions";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../../types/types";

export const Sales = () => {
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(null); // Para almacenar los filtros activos
  const dispatch = useDispatch();
  const sellProperties = useSelector((state) => state.properties.propertiesInfo); // Propiedades desde Redux
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(sellProperties.length / itemsPerPage);
  
  const onlySellProperties = sellProperties.filter(p => p.action === 'Venta');
  const currentProperties = onlySellProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


    useEffect(() => {
      const init = async () => {
        if (sellProperties.length > 0) return; // ya cargado en Redux
    
        setLoading(true);
        try {
          const localData = localStorage.getItem("sellProperties");
          if (localData) {
            const parsedData = JSON.parse(localData);
            dispatch({
              type: types.propertyView,
              payload: parsedData.filter((prop) => prop.action === "Venta"),
            });
          } else {
            // Aquí aplicamos directamente el filtro para propiedades en venta
            await dispatch(fetchSellProperties("Venta"));
          }
        } catch (error) {
          console.error("Error fetching sale properties:", error);
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
      await dispatch(fetchSellProperties()); // Despacha la acción para obtener todas las propiedades
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
    <SaLes>
      <div className="sales">
        <div className="sales-header">
          <HeaderForm
            color={"var(--bg-secondary)"}
            colorbtn={"var(--bg-primary)"}
            colorbtnhoverprimary={"white"}
            colortextbtnprimary={"white"}
            colortextbtnhoverprimary={"var(--text-primary)"}
            filterprimary={"brightness(0%) invert(100%)"}
            filterprimaryhover={"brightness(0%) invert(0%)"}
            action={[{ value: "Vender", label: "Vender" }]}
            filteroutline={"brightness(0%) invert(0%)"}
            filterhoveroutline={"brightness(0%) invert(0%)"}
            colortextbtnoutline={"var(--text-primary)"}
            colortextbtnhoveroutline={"var(--text-primary)"}
            borderbtn={"var(--bg-primary)"}
            hovercolorbtnoutline={"#ffffff5d"}
            borderbtnhoveroutline={"var(--bg-primary)"}
            onSearch={handleSearch}
            onClear={handleClearFilters}
          />
        </div>

        <div className="sales grid-4fr">
          {loading ? (
            <Loader />
          ) : currentProperties.length === 0 ? (
              <div className="sales-empty">
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
    </SaLes>
  );
};

const SaLes = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: start;

  .sales {
    display: grid;
    align-items: start;
    width: 100%;
    height: 100%;
    padding: 25px;
    gap: 72px;

    @media (max-width: 1024px) {
      padding: 12px;
    }

    &-header {
      display: grid;
      width: 100%;
      height: fit-content;
    }

    &-empty{
      display: grid;
      width: fit-content;
      height: fit-content;
      margin  : auto;
      grid-column: 1 / 5;
    }

    &-content {
  display: grid;
  width: 100%;
}
  }
`;
