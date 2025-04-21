/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import axios from "axios";
import { types } from "../types/types";
import { io } from "socket.io-client";


export const setProperty = (propertyInfo) => {
    return {
      type: types.propertyView,
      payload: Array.isArray(propertyInfo) ? propertyInfo : [],
    };
  };

export const clearProperty = (propertyInfo) => {
    return {
      type: types.REMOVE_PROPERTY,
      payload: Array.isArray(propertyInfo) ? propertyInfo : [],
    };
  };

  export const storagedProperty = (propertyInfo) => ({
    type: types.STORAGED_PROPERTY,
    payload: Array.isArray(propertyInfo) ? propertyInfo : [],
  });
  
  export const selectedProperty = (propertyInfo) => ({
    type: types.SELECTED_PROPERTY,
    payload: propertyInfo,
  });
  
  export const updateProperty = (propertyInfo) => ({
    type: types.UPDATE_PROPERTY,
    payload: Array.isArray(propertyInfo) ? propertyInfo : [],
  });

  export const setRatings = (ratings) => ({
    type: types.SET_RATINGS,
    payload: ratings,
  });


  export const fetchSoldProperties = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_APP_API_GET_SOLD_PROPERTIES_URL);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los productos vendidos:', error);
      throw error;
    }
  };

  export const fetchProperties = () => async (dispatch) => {
    try {

        // Consultar la base de datos si no hay productos en localStorage o si el array está vacío
        const response = await axios.get(import.meta.env.VITE_APP_API_GET_PROPERTIES_URL);
        const propertiesComplete = await Promise.all(response.data.map(async (propertyInfo) => {
            const imagesRes = await axios.get(`${import.meta.env.VITE_APP_API_GET_IMAGES_PROPERTIES_URL}/${propertyInfo.id}`);
            return {
                ...propertyInfo,
                images: imagesRes.data.images || [],
            };
        }));

        // Guardar los productos en localStorage después de la consulta
        localStorage.setItem('properties', JSON.stringify(propertiesComplete));
        dispatch(setProperty(propertiesComplete));
        return propertiesComplete;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        dispatch(setProperty([])); // Asegurarse de despachar un array vacío en caso de error
        throw error;
    }
};
  export const fetchRecentProperties = () => async (dispatch) => {
    try {

        // Consultar la base de datos si no hay productos en localStorage o si el array está vacío
        const response = await axios.get(import.meta.env.VITE_APP_API_GET_RECENT_PROPERTIES_URL);
        
        const propertiesComplete = await Promise.all(response.data.map(async (propertyInfo) => {
            const imagesRes = await axios.get(`${import.meta.env.VITE_APP_API_GET_IMAGES_PROPERTIES_URL}/${propertyInfo.id}`);
            return {
                ...propertyInfo,
                images: imagesRes.data.images || [],
            };
        }));

        // Guardar los productos en localStorage después de la consulta
        localStorage.setItem('properties', JSON.stringify(propertiesComplete));
        dispatch(setProperty(propertiesComplete));
        return propertiesComplete;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        dispatch(setProperty([])); // Asegurarse de despachar un array vacío en caso de error
        throw error;
    }
};


  // Función para escuchar actualizaciones de productos y actualizar localStorage
  export const listenForPropertyUpdates = () => (dispatch) => {
    const socket = io(import.meta.env.VITE_APP_API_WEBSOCKET_URL, {
      cors: true,
    });
  
    socket.on('connect', () => {
      console.log('Conectado al servidor de WebSocket');
    });
  
    socket.on('updateProperties', (updatedProperties) => {
      console.log('Productos actualizados:', updatedProperties);
      // Actualizar productos en el estado y localStorage
      localStorage.setItem('properties', JSON.stringify(updatedProperties));
      dispatch(setProperty(updatedProperties));
    });
  
    return () => {
      socket.disconnect();
    };
  };
  
  export const fetchPropertiesCategory = (category) => async (dispatch) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_GET_PROPERTIES_CATEGORY}?category=${category}`);
      const propertiesComplete = await Promise.all(response.data.map(async (propertyInfo) => {
        try {
          const imagesRes = await axios.get(`${import.meta.env.VITE_APP_API_GET_IMAGE_PROPERTIES_URL}/${propertyInfo.id}`);
          return {
            ...propertyInfo,
            images: imagesRes.data.images || [],
          };
        } catch (error) {
          console.error(`Error al obtener las imágenes para el producto ${propertyInfo.id}:`, error);
          return {
            ...propertyInfo,
            images: [],
          };
        }
      }));
      dispatch(setProperty(propertiesComplete));
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      dispatch(setProperty([])); // Asegurarse de despachar un array vacío en caso de error
    }
  };
  export const fetchPropertiesAction = (action) => async (dispatch) => {

    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_GET_PROPERTIES_ACTIONS_URL}/${action}`);
      const propertiesComplete = await Promise.all(response.data.map(async (propertyInfo) => {
        try {
          const imagesRes = await axios.get(`${import.meta.env.VITE_APP_API_GET_IMAGES_PROPERTIES_URL}/${propertyInfo.id}`);
          return {
            ...propertyInfo,
            images: imagesRes.data.images || [],
          };
        } catch (error) {
          console.error(`Error al obtener las imágenes para el producto ${propertyInfo.id}:`, error);
          return {
            ...propertyInfo,
            images: [],
          };
        }
      }));
      dispatch(setProperty(propertiesComplete));
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      dispatch(setProperty([])); // Asegurarse de despachar un array vacío en caso de error
    }
  };
  

  // export const fetchPropertiesCategory = (category) => async (dispatch) => {
  //   try {
  //     // Obtener los productos por categoría
  //     const response = await axios.get(`${import.meta.env.VITE_APP_API_GET_PROperties_CATEGORY}?category=${category}`);
  //     const properties = response.data;
  
  //     // Obtener imágenes y calificaciones para cada producto
  //     const propertiesComplete = await Promise.all(properties.map(async (propertyInfo) => {
  //       try {
  //         // Obtener las imágenes del producto
  //         const imagesRes = await axios.get(`${import.meta.env.VITE_APP_API_GET_IMAGE_PROperties_URL}/${propertyInfo.id}`);
          
  //         // Obtener las calificaciones del producto
  //         const ratingsRes = await axios.get(`${import.meta.env.VITE_APP_API_GET_PRODUCT_RATINGS_URL}/${propertyInfo.id}`);
          
          
  //         return {
  //           ...propertyInfo,
  //           images: imagesRes.data.images || [],
  //           ratings: ratingsRes.data || [], // Asegúrate de que la API devuelva las calificaciones en el formato esperado
  //         };
  //       } catch (error) {
  //         console.error(`Error al obtener las imágenes o calificaciones para el producto ${propertyInfo.id}:`, error);
  //         return {
  //           ...propertyInfo,
  //           images: [],
  //           ratings: [],
  //         };
  //       }
  //     }));
  //     console.log(propertiesComplete)
  //     // Despachar los productos completos con imágenes y calificaciones
  //     dispatch(setProperty(propertiesComplete, 'Fetch'));
  //     console.log('Productos completos con imágenes y calificaciones:', propertiesComplete);
  //   } catch (error) {
  //     console.error('Error al obtener los productos:', error);
  //     dispatch(setProperty([])); // Despachar un array vacío en caso de error
  //   }
  // };

  export const fetchPropertiesById = (id) => async (dispatch) => {
    try {
      // Fetch product details by ID
      const response = await axios.get(`${import.meta.env.VITE_APP_API_GET_PROPERTY_URL}/${id}`);
      const propertyInfo = response.data;
  
      try {
        // Fetch product images by ID
        const imagesRes = await axios.get(`${import.meta.env.VITE_APP_API_GET_IMAGE_PROPERTIES_URL}/${id}`);
        const productWithImages = {
          ...propertyInfo,
          images: imagesRes.data.images || [],
        };
  
        // Dispatch action to update product in Redux store
        dispatch(setProperty([productWithImages]));
      } catch (error) {
        console.error(`Error al obtener las imágenes para el producto ${id}:`, error);
  
        // Dispatch action to update product without images in case of error
        const productWithoutImages = {
          ...propertyInfo,
          images: [],
        };
        dispatch(setProperty([productWithoutImages]));
      }
    } catch (error) {
      console.error(`Error al obtener el producto con ID ${id}:`, error);
      dispatch(setProperty([])); // Asegurarse de despachar un array vacío en caso de error
    }
  };

  export const addRating = async (productId, userId, rating) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_ADD_RATING_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ product_id: productId, user_id: userId, rating }), // Aquí asegúrate de enviar product_id y user_id
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data.message);
      return data;
    } catch (error) {
      console.error('Error adding rating:', error);
      throw error;
    }
  };
  
  export const fetchPropertiesRatings = (productIds) => async (dispatch) => {
    try {
      const responses = await Promise.all(
        productIds.map((id) => axios.get(`${import.meta.env.VITE_APP_API_GET_RATING_URL}/${id}`))
      );
  
      const ratings = responses.reduce((acc, response, index) => {
        const productId = productIds[index];
        acc[productId] = response.data;
        return acc;
      }, {});
  
      dispatch(setRatings(ratings));
    } catch (error) {
      console.error('Error fetching product ratings:', error);
    }
  };