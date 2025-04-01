/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { fetchPropertiesCategory, setProperty, updateProperty } from "../actions/propertyActions";
import { Empty, CardProperty } from "../../index";
import styled from "styled-components";

export const ItemsCategory = ({ category, title }) => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.product.propertyInfo);
  const ratings = useSelector((state) => state.product.ratings);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_APP_API_WEBSOCKET_URL, {
      cors: true,
    });

    socket.on("connect", () => {
      console.log("Conectado al servidor de WebSocket");
    });

    socket.on("updateProperties", (updatedProperties) => {
      console.log("Productos actualizados:", updatedProperties);
      dispatch(updateProperty(updatedProperties));
      localStorage.setItem("products", JSON.stringify(updatedProperties));
      setLoading(false);
    });

    const storedProperties = localStorage.getItem("products");
    if (storedProperties) {
      const parsedProperties = JSON.parse(storedProperties);
      dispatch(setProperty(parsedProperties));
      setLoading(false);
      filterProperties(parsedProperties);
    } else {
      loadProducts();
    }

    return () => {
      socket.disconnect();
    };
  }, [dispatch, category]);

  const filterProperties = (properties) => {
    const categoryProperties = properties.filter((property) => property.category === category);
    if (categoryProperties.length > 0) {
      setFilteredProperties(categoryProperties);
    } else {
      loadProducts();
    }
  };

  const loadProducts = async () => {
    try {
      const result = await dispatch(fetchPropertiesCategory(category)).unwrap();
      setFilteredProperties(result);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CategoryItems>
    <section className="productsections padding">
      {loading ? (
        <p>Cargando productos...</p>
      ) : !Array.isArray(filteredProperties) || filteredProperties.length === 0 ? (
        <div className="empty">
            <Empty />
            <h2>{title}</h2>
        </div>
      ) : (
        filteredProperties.map((item) => (
          <CardProperty
            key={item.id}
            id={item.id}
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

.empty{
    display: grid;
    width: 100%;
    height: 100%;
    justify-content : center;
    h2{
        color: #00000052;
    }
}
`