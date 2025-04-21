/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import {
  fetchPropertiesCategory,
  fetchPropertiesAction,
  setProperty,
  updateProperty,
  selectedProperty,
} from "../actions/propertyActions";
import { Empty, CardLeases } from "../../index";
import styled from "styled-components";

export const ItemsCategory = ({ category = null, action = null, showToAddWish = true}) => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.propertyInfo || []);
  const [loading, setLoading] = useState(true);

  // Usamos useMemo para optimizar el filtrado
  const filteredProperties = useMemo(() => {
    if (!Array.isArray(properties)) return [];
    
    if (category) {
      return properties.filter(property => property.category === category);
    }
    if (action) {
      return properties.filter(property => property.action === action);
    }
    return properties;
  }, [properties, category, action]);

  const handleSetProductClick = (property) => {
    dispatch(selectedProperty(property));
  };

  useEffect(() => {
    const socket = io(import.meta.env.VITE_APP_API_WEBSOCKET_URL, {
      cors: true,
    });

    socket.on("connect", () => {
      console.log("Conectado al servidor de WebSocket");
    });

    socket.on("updateProperties", (updatedProperties) => {
      console.log("Propiedades actualizadas:", updatedProperties);
      dispatch(updateProperty(updatedProperties));
      localStorage.setItem("properties", JSON.stringify(updatedProperties)); // Corregido de "products" a "properties"
      setLoading(false);
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Intenta cargar desde localStorage primero
        const storedProperties = localStorage.getItem("properties");
        if (storedProperties) {
          const parsedProperties = JSON.parse(storedProperties);
          dispatch(setProperty(parsedProperties));
        }

        // Luego carga desde la API si es necesario
        if (category) {
          await dispatch(fetchPropertiesCategory(category));
        } else if (action) {
          await dispatch(fetchPropertiesAction(action));
        } else {
          // Carga todas las propiedades si no hay filtro
          await dispatch(fetchPropertiesAction('all')); // Asume que tienes esta acción
        }
      } catch (error) {
        console.error("Error al cargar propiedades:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [dispatch, category, action]);

  // Función para obtener la imagen principal
  const getMainImage = (property) => {
    return property.image || 
           property.img || 
           (property.images?.[0]?.img_url) || 
           '/default-property.jpg';
  };

  return (
    <CategoryItems>
      <section className="productsections padding">
        {loading ? (
          <div className="loading-spinner">Cargando propiedades...</div>
        ) : filteredProperties.length === 0 ? (
          <div className="empty">
            <Empty />
            <h2>No hay propiedades disponibles en este momento</h2>
          </div>
        ) : (
          filteredProperties.map((item) => (
            <CardLeases
              key={item.id}
              quantityBathrooms={item.quantityBathrooms || 0}
              quantityCloset={item.quantityCloset || 0}
              quantityRooms={item.quantityRooms || 0}
              location={item.district || 'Ubicación no disponible'}
              productLink={`/properties/${item.id}`}
              addToWish={"addwishlist-red"}
              addTocart={"addcart-red"}
              img={getMainImage(item)}
              sellingsText={true}
              priceText={true}
              price={item.price || 'Consultar'}
              productInfo={item}
              boxFlex={true}
              classs={"productcard background"}
              onClick={() => handleSetProductClick(item)}
              prodHover={() => handleSetProductClick(item)}
              jpg="true"
              title={item.title || 'Propiedad sin título'}
              thumbnails={item.thumbnails || []}
              product_id={item.id}
              showToAddWish={showToAddWish}
              propertyRef={item.ref}
            />
          ))
        )}
      </section>
    </CategoryItems>
  );
};

const CategoryItems = styled.section`
  display: grid;
  width: 100%;
  height: 100%;

  .productsections{
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    height: 100%;
  }

  .empty {
    grid-column: 1 / 5;
    display: grid;
    width: 100%;
    height: 100%;
    justify-content: center;
    h2 {
      color: #00000052;
    }
  }
`;
