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
  clearProperty,
  moveFromPropertiesToSold,
  fetchSellProperties,
  fetchRecentProperties,
  fetchRentProperties,
  fetchSoldProperties,
  fetchRentedProperties,
  moveFromPropertiesToRented,
} from "../actions/propertyActions";
import { CardLeasesAdmin, Empty } from "../../index";
import styled from "styled-components";
import { initialForm, useForm } from "../hooks/useForm";
import Swal from "sweetalert2";

export const ItemsCategory = ({  
  category = null, 
  action = null, 
  showRent = false, 
  showRented = false,
  showRentedText = false,
  showSold = false, 
  showSoldText = false, 
  showSell = false,
  }) => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.propertiesInfo || []);
  const [selProperty, setSelProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

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

    const {
      deleteProperty,
      setForm,
    } = useForm(initialForm, );

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
        } else if (action === "Venta") {
          await dispatch(fetchSellProperties(action));
        } else if (action === "Arrendamiento"){
          await dispatch(fetchRentProperties(action));
        } else if (action === "Vendido") {
          await dispatch(fetchSoldProperties(action));
        } else if (action === "Arrendado") {
          await dispatch(fetchRentedProperties(action));
        } 
        else {
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

  const handleClearProduct = (item) => {
    localStorage.removeItem("item", JSON.stringify(item));
    dispatch(clearProperty(item));
};

const handleUpdate = (property) => {
    const update = document.getElementById("update-content");
    const card = document.getElementById("card-products");

    update.style.cssText = `
        transition: all ease .5s;
        transform: translateX(50%);
        opacity: 1;
    `;
    card.style.cssText = `
        transition: all ease .5s;
        transform: translateX(-100%);
        opacity: 0;
    `;

    dispatch(setProperty(property));
    setSelProperty(property);
    console.log(property.id, 'desde handle update')
    setForm({
        id: property.id,
        name: property.name,
        price: property.price,
        previousPrice: property.previousPrice,
        category: property.category,
        quantity: property.quantity,
        description: property.description,
        img_url: property.images || [],
    });
};

const handleMoveToSold = async (property_Id, name) => {
  try {
    const result = await Swal.fire({
      title: '¿Vendiste esta propiedad?',
      html: `¿Estás seguro que deseas mover <strong>${name}</strong> a Vendidas?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Volver',
      background: '#f0f0f0',
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        content: 'custom-content',
        confirmButton: 'custom-confirm-button',
        cancelButton: 'custom-cancel-button',
      },
    });

    if (result.isConfirmed) {
      await dispatch(moveFromPropertiesToSold(property_Id));

      Swal.fire({
        title: '¡Hecho!',
        html: `¡<strong>${name}</strong>, !Movido a Vendidos!`,
        icon: 'success',
        showCancelButton: false,
        cancelButtonText: 'Volver',
        background: '#f0f0f0',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
          cancelButton: 'custom-cancel-button',
        },
      });

      // Después de mover el producto al wishlist, recargar los elementos del carrito
      const items = await fetchPropertiesAction();
      setProperty(items);
      calculateTotals(items);
    }
  } catch (error) {
    console.error('Error deleting product:', error.response?.data || error.message);
    Swal.fire({
      title: 'Error',
      text: 'Hubo un error al intentar mover el producto.',
      icon: 'error',
      background: '#f0f0f0',
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        content: 'custom-content',
        confirmButton: 'custom-confirm-button',
      },
    });
    throw error.response?.data || error.message;
  }
};

const handleMoveToRented = async (property_Id, name) => {
  try {
    const result = await Swal.fire({
      title: '¿Arrendaste esta propiedad?',
      html: `¿Estás seguro que arrendaste <strong>${name}</strong>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Volver',
      background: '#f0f0f0',
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        content: 'custom-content',
        confirmButton: 'custom-confirm-button',
        cancelButton: 'custom-cancel-button',
      },
    });

    if (result.isConfirmed) {
      await dispatch(moveFromPropertiesToRented(property_Id));

      Swal.fire({
        title: '¡Hecho!',
        html: `¡<strong>${name}</strong>, !Arrendada exitosamente!`,
        icon: 'success',
        showCancelButton: false,
        cancelButtonText: 'Volver',
        background: '#f0f0f0',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
          cancelButton: 'custom-cancel-button',
        },
      });

      // Después de mover el producto al wishlist, recargar los elementos del carrito
      const items = await fetchPropertiesAction();
      setProperty(items);
      calculateTotals(items);
    }
  } catch (error) {
    console.error('Error deleting product:', error.response?.data || error.message);
    Swal.fire({
      title: 'Error',
      text: 'Hubo un error al intentar mover el producto.',
      icon: 'error',
      background: '#f0f0f0',
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        content: 'custom-content',
        confirmButton: 'custom-confirm-button',
      },
    });
    throw error.response?.data || error.message;
  }
};

const calculateTotals = (items) => {
  const subtotalValue = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  // Puedes ajustar aquí si hay un costo de envío u otros costos adicionales
  setSubtotal(subtotalValue);
  setTotal(totalItemsCount);
};

  return (
    <CategoryItems>
      <section className="productsections pd-laterals-mini">
        {loading ? (
          <div className="loading-spinner">Cargando propiedades...</div>
        ) : filteredProperties.length === 0 ? (
          <div className="empty">
            <Empty message="No hay propiedades disponibles en este momento" />
          </div>
        ) : (
          filteredProperties.map((item) => (
            <CardLeasesAdmin
               key={item.id}
               id={item.id}
               prodpertyInfo={item}
               addToWish={"addwishlist-red"}
               addTocart={"addcart-red"}
               jpg={true}
               img={item.image}
               description={item.description}
               quantity={item.quantity}
               title={item.name}
               price={item.price}
               previousPrice={item.previousPrice}
               discount="10%"
               uptBtn={true}
               delBtn={true}
               onUpdate={() => handleUpdate(item)}
               onDelete={() => deleteProperty(item.id)}
               classs={"productcard background"}
               propertyRef={item.ref}
               sell={showSell}
               sold={showSold}
               rented={showRented}
               soldText={showSoldText}
               rentedText={showRentedText}
               rent={showRent}
               onMoveSold={() => handleMoveToSold(item.id, item.name)}
               onMoveRented={() => handleMoveToRented(item.id, item.name)}
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
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    width: 100%;
    height: 100%;

    @media (max-width: 680px) {
      grid-template-columns: 1fr;
    }
  }

  .empty {
    grid-column: 1 / 6;
    display: grid;
    width: 100%;
    height: 100%;
    justify-content: center;
    h2 {
      color: #00000052;
    }
  }
`;
