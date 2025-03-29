/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { helpHttp } from "../helpers/helperHttp";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  startLogin,
  startLoginAdmin,
  loginSuccess,
} from "../actions/authActions";
import { fetchWithoutToken } from "../helpers/fetch";
import Swal from "sweetalert2";

export const initialFormAdmin = {
  fullname: "",
  email: "",
  pass: "",
  codeAccess: "",
};

export const initialForm = {
  country: "",
  name: "",
  lastname: "",
  state: "",
  city: "",
  phone: "",
  email: "",
  password: "",
};
export const initialFormAdvisor = {
  country: "",
  name: "",
  lastname: "",
  state: "",
  city: "",
  expeditionDate: "",
  phone: "",
  email: "",
  password: "",
};

export const initialPropertyForm = {
  name: "",
  price: "",
  category: "",
  description: "",
  bedroom: "",
  bathroom: "",
  dinigRoom: "",
  closet: "",
  kitchen: "",
  floor: "",
  stratum: "",
  image: "",
  img_url: [],
};

export const initialAddCartForm = {
  user_id: "",
  product_id: "",
  price: "",
  quantity: "1",
};

export const useForm = (initialForm, validateForm) => {
  // ---------------- variables de estado -----------------------
  const [form, setForm] = useState(initialForm);
  const [formProduct, setFormProduct] = useState(initialPropertyForm);
  const [formAdmin, setFormAdmin] = useState(initialFormAdmin);
  const [formCart, setFormCart] = useState(initialAddCartForm);
  const [errors, setErrors] = useState({});
  const [errorsCart, setErrorsCart] = useState({});
  // const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [response, setResponse] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const user = useSelector((state) => state.auth.user);
  
  // ----------------- funciones form -------------------------

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadingActive = (email, password) => {
    setLoading(true);
    return async (dispatch) => {
      const res = await fetchWithoutToken(
        "auth/login",
        { email, password },
        "POST"
      );
      const body = await res.json();
      if (body.ok) {
        dispatch(
          loginSuccess({
            name: body.user.name,
          })
        );
      }
      setLoading(false);
    };
  };

  const handleCountryChange = (options) => {
    if (!options) {
      setSelectedCountry(options.target.value); // Llama a la función proporcionada con el país seleccionado
    } else {
      setForm({
        ...form,
        country: options.target.value,
      });
    }
  };

  const handleClearCountry = (label, value) => {
    if (label) {
      setSelectedCountry(null);
      setSelected(null);
      console.log(value);
    }
    setForm({
      ...form,
      country: "",
      countryCode: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(value)
    setForm({
      ...form,
      [name]: value,
    });

    if (value === "email") {
      validateEmails(name);
      debugger;
    } else {
      return;
    }
  };

  const handleChangeAdmin = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormAdmin({
      ...formAdmin,
      [name]: value,
    });

    if (value === "email") {
      validateEmails(name);
    } else {
      return;
    }
  };

  const handleChecked = (e, checked) => {
    setChecked(e.target.checked);
  };

  const openModal = () => {
    setModal(true);
    console.log("click");
  };

  const handleSetImage = (imageUrls) => {
    setForm({
      ...form,
      img_url: imageUrls,
    });
  };

  // formularios y estados del producto
  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    // console.log(value)
    setFormProduct({
      ...formProduct,
      [name]: value,
    });
  };

  const handleUpdateProduct = async (id) => {
    
    setLoading(true);
    
    Swal.fire({
      title: 'Estás actualizando un producto',
      text: '¿Deseas continuar actualizando este producto?',
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
      },
    }).then((result) => {
      if (result.isConfirmed) {

    try {
      const formData = new FormData();
      formData.append('name', formProduct.name);
      formData.append('price', formProduct.price);
      formData.append('previousPrice', formProduct.previousPrice);
      formData.append('category', formProduct.category);
      formData.append('quantity', formProduct.quantity);
      formData.append('description', formProduct.description);
      formData.append('img_url', formProduct.img_url);
      const response = axios.put(
        `${import.meta.env.VITE_APP_API_UPDATE_PRODUCT_URL}/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          title: '¡Éxito!',
          text: 'Producto actualizado correctamente.',
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: 'Volver',
          background: '#f0f0f0',
          customClass: {
            popup: 'custom-popup',
            title: 'custom-title',
            content: 'custom-content',
            confirmButton: 'custom-confirm-button',
          },
        })
        console.log("Product updated successfully", response.data);
      } else {
        console.log("Failed to update product", response.data);
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al intentar actualizar este producto.',
        icon: 'error',
        background: '#f0f0f0',
        customClass: {
            popup: 'custom-popup',
            title: 'custom-title',
            content: 'custom-content',
            confirmButton: 'custom-confirm-button',
        },
    });
    setLoading(false);
    throw error.response?.data || error.message;
    }
  }else{
    return
  }
  });
  };

  const handleSubmitProperty = async (e) => {
    e.preventDefault();
  
    const formData = {
      name: form.name,
      price: form.price,
      category: form.category,
      description: form.description,
      bedRoom: form.bedRoom,
      bathRoom: form.bathRoom,
      diningRoom: form.diningRoom,
      closet: form.colset,
      kitchen: form.kitchen,
      floor: form.floor,
      stratum: form.stratum,
      image: form.image,
      img_url: form.img_url// Asumiendo que img_url es un array de objetos con una propiedad 'url'
    };
  
    if (!Array.isArray(formData.img_url) || formData.img_url.length === 0) {
      console.error("img_url debe ser un array de URLs");
      return;
    }
    
    setLoading(true);

    Swal.fire({
      title: 'Estás agregando un producto',
      text: '¿Deseas agregar este producto?',
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
      },
    }).then((result) => {
      if (result.isConfirmed) {
    try {
      const response = axios.post(
        import.meta.env.VITE_APP_API_UPLOAD_PRODUCT_URL,
        formData,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
  
      console.log(response);
      setLoading(false);
      setResponse(true);
      setForm(initialPropertyForm);
      
      Swal.fire({
        title: '¡Éxito!',
        text: 'Producto agregado correctamente.',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Volver',
        background: '#f0f0f0',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
        },
      })
          // Manejar acciones adicionales si es necesario
     
    } catch (error) {
      console.error('Error al enviar el producto:', error);
      setLoading(false);
      // Manejar el error de manera adecuada, como mostrar un mensaje al usuario
    }
  }else{
    return
  }
  });
};

  const deleteProduct = async (id) => {
    try {
        const result = await Swal.fire({
            title: 'Vas a eliminar un producto',
            text: '¡Estás seguro que deseas eliminar este producto?',
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
            const response = await axios.delete(`${import.meta.env.VITE_APP_API_DELETE_PRODUCT_URL}/${id}`);
            console.log(response.data); // Mensaje de éxito o información adicional
            Swal.fire({
                title: 'Eliminado!',
                text: 'El producto ha sido eliminado exitosamente.',
                icon: 'success',
                background: '#f0f0f0',
                customClass: {
                    popup: 'custom-popup',
                    title: 'custom-title',
                    content: 'custom-content',
                    confirmButton: 'custom-confirm-button',
                },
            });
            return response.data;
        } else {
            return;
        }
    } catch (error) {
        console.error('Error deleting product:', error.response?.data || error.message);
        Swal.fire({
            title: 'Error',
            text: 'Hubo un error al intentar eliminar el producto.',
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
// fin de funciones y estados del producto

  const validateEmails = async (email) => {
    const finalForm = {
      ...form,
    };
    try {
      const response = await axios.get(
        import.meta.env.VITE_APP_API_REGISTER,
        finalForm,
        {
          // const response = await axios.post("http://localhost:4000/api/auth/register", finalForm, {

          body: email,
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error, "error al verificar emails desde front");
      return;
    }
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm);

    if (Object.keys(errors).length === 0) {
      alert("Enviando...");
      setLoading(true);

      console.log("EJECUTANDO LA FUNCIÓN");

      helpHttp()
        .post("http://localhost:4000/api/auth/register", {
          body: Form,
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(
            () => setResponse(false, initialForm, window.location.reload()),
            500
          );
        });
    } else {
      return;
    }
  };

  const handleLogin = (e) => {
    if (!form.email) return;
    if (!form.password) return;
    e.preventDefault();
    dispatch(startLogin(form.email, form.password));
    loadingActive();
  };

  const handleSubmitAddCart = async (e) => {

  
    const finalFormAddCart = {
      ...formCart,
    };
    e.preventDefault();
    setLoading(true);

    try {
      const token = user.token;
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_POST_CART_URL}/${formCart.product_id}`,
        finalFormAddCart,
        {
          body: finalFormAddCart,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response);
      setLoading(false);
      setResponse(true);
      setFormCart(initialAddCartForm);
      // setTimeout(() => setResponse(false, initialForm, ));
      setTimeout(
        () =>
          setResponse(
            false,
            initialAddCartForm,
            Swal.fire({
              title: '¡Correcto!',
              text: `Agregaste un producto al carrito!`,
              icon: 'success',
              showCancelButton: false,
              confirmButtonText: 'Volver',
              cancelButtonText: 'Volver',
              background: '#f0f0f0',
              customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                content: 'custom-content',
                confirmButton: 'custom-confirm-button',
              },
            })
          ),
        200
      );
    } catch (error) {
      Swal.fire({
        title: 'No se pudo agregar al carrito',
        text: 'Regresa al producto e inténtalo de nuevo',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Volver',
        cancelButtonText: 'Volver',
        background: '#f0f0f0',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
        },
      })
      return;
    }
  };

  const handleSubmitAddWishlist = async (e) => {

  
    const finalFormAddWishlist = {
      ...formCart,
    };
    e.preventDefault();
    setLoading(true);

    try {
      const token = user.token;
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_POST_WISHLIST_URL}/${formCart.product_id}`,
        finalFormAddWishlist,
        {
          body: finalFormAddWishlist,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response);
      setLoading(false);
      setResponse(true);
      setFormCart(initialAddCartForm);
      // setTimeout(() => setResponse(false, initialForm, ));
      setTimeout(
        () =>
          setResponse(
            false,
            initialAddCartForm,
            Swal.fire({
              title: '¡Correcto!',
              text: `Agregaste un producto en la lista de deseos!`,
              icon: 'success',
              showCancelButton: false,
              confirmButtonText: 'Volver',
              cancelButtonText: 'Volver',
              background: '#f0f0f0',
              customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                content: 'custom-content',
                confirmButton: 'custom-confirm-button',
              },
            })
          ),
        200
      );
    } catch (error) {
      Swal.fire({
        title: 'No se pudo agregar al carrito',
        text: 'Regresa al producto e inténtalo de nuevo',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Volver',
        cancelButtonText: 'Volver',
        background: '#f0f0f0',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button',
        },
      })
      return;
    }
  };

  const handleBlurAdm = (e) => {
    handleChange(e);
    setErrors(validateForm(formAdmin));
  };

  const handleSubmitsAdmin = async (e, label) => {
    const finalForm = {
      ...formAdmin,
    };
    if (!finalForm.fullname) return;
    if (!finalForm.email) return;
    if (!finalForm.pass) return;
    if (!finalForm.codeAccess) return;

    e.preventDefault();
    setErrors(validateForm);
    setLoading(true);
    try {
      helpHttp();
      const response = await axios.post(
        import.meta.env.VITE_APP_API_REGISTER_ADMIN_URL,
        finalForm,
        {
          // const response = await axios.post("http://192.168.1.2:3000/api/auth/register", finalForm, {

          body: finalForm,
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      setLoading(false);
      setResponse(true);
      setFormAdmin(initialFormAdmin);
      setTimeout(
        () =>
          setResponse(
            false,
            initialForm,
            (window.location.href =
              import.meta.env.VITE_APP_API_LOGIN_ADMIN_FRONT)
          ),
        200
      );
    } catch (error) {
      console.log(error.response.data);
      alert(`${error.response.data}`);
      return;
    }
    setLoading(false);
    setModal(true);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imgUrls = files.map((file) => URL.createObjectURL(file));
    setForm((form) => ({
      ...form,
      img_url: imgUrls, // Guardar las URLs de las imágenes
    }));
  };

  const handleLoginAdmin = (e) => {
    debugger
    if (!formAdmin.email) return;
    if (!formAdmin.pass) return;
    
    e.preventDefault();
    dispatch(startLoginAdmin(formAdmin.email, formAdmin.pass));

    // console.log(form)
    loadingActive();
    navigate("/admin/dashboard");
   
  };

  const handleSubmits = async (e, label) => {
    const finalForm = {
      ...form,
    };
    if (!finalForm.country) return;
    if (!finalForm.name) return;
    if (!finalForm.lastname) return;
    if (!finalForm.state) return;
    if (!finalForm.city) return;
    if (!finalForm.phone) return;
    if (!finalForm.email) return;
    if (!finalForm.pass) return;

    e.preventDefault();
    setErrors(validateForm);
    setLoading(true);
    try {
      helpHttp();
      console.log("API URL:", import.meta.env.VITE_APP_API_REGISTER_URL);
      const response = await axios.post(
        import.meta.env.VITE_APP_API_REGISTER_URL,
        finalForm,
        {
          body: finalForm,
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response);
      setLoading(false);
      setResponse(true);
      setForm(initialForm);
      // setTimeout(() => setResponse(false, initialForm, ));
      setTimeout(
        () =>
          setResponse(
            false,
            initialForm,
            Swal.fire({
              title: '¡Hecho!',
              html: `Te has registrado correctamente`,
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
            })
          ),
        200
      );
    } catch (error) {
      console.log(error);
      return;
    }
    setLoading(false);
    setModal(true);
  };


  const handleSubscribeNewsletter = async (e) => {
    const finalForm = {
      ...form,
    };
    // if (!finalForm.email) return;
    if (!finalForm.email || !checked) {
      prompt("Debes aceptar los términos y condiciones");
      return;
    }
    e.preventDefault();
    setErrors(validateForm);
    setLoading(true);
    try {
      helpHttp();
      const response = await axios.post(
        import.meta.env.VITE_APP_API_NEWSLETTER_URL,
        finalForm,
        {
          body: finalForm,
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response);
      setLoading(false);
      setResponse(true);
      setForm(initialForm);
      prompt("Te has suscrito a nuestro boletín");
    } catch (error) {
      console.log(error);
      prompt(error);
      return;
    }
    setLoading(false);
    setModal(true);
  };


  return {
    form,
    formAdmin,
    formCart,
    errorsCart,
    errors,
    loading,
    response,
    modal,
    formProduct, 
    setFormProduct,
    deleteProduct,
    handleChangeProduct,
    setForm,
    setLoading,
    setFormCart,
    handleImageChange,
    handleChangeAdmin,
    handleBlurAdm,
    handleSubmitsAdmin,
    handleSubmitAddCart,
    handleSubmitProperty,
    handleSetImage,
    handleChecked,
    loadingActive,
    handleChange,
    handleBlur,
    handleSubmit,
    handleSubmits,
    handleLogin,
    handleLoginAdmin,
    handleSubscribeNewsletter,
    handleClearCountry,
    handleUpdateProduct,
    openModal,
    handleCountryChange,
    handleSubmitAddWishlist
  };
};
