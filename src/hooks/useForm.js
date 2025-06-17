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
  startLoginAdvisor,
} from "../actions/authActions";
import { fetchWithoutToken } from "../helpers/fetch";
import departamentos from "../colombia/colombia.json";
import ciudades from "../sectors/dataSectors.json";
import Swal from "sweetalert2";

export const initialForm = {
  country: "",
  name: "",
  lastname: "",
  typeDoc: "",
  dnaId: "",
  expDate: "",
  state: "",
  city: "",
  address: "",
  phone: "",
  email: "",
  pass: "",
  password: "",

  fullname: "",
  codeAccess: "",

  title: "",
  price: "",
  area: "",
  district: "",
  category: "",
  furnished: "",
  admon: "",
  description: "",
  bedRoom: "",
  bathRoom: "",
  diningRoom: "",
  closets: "",
  kitchen: "",
  floor: "",
  parking: "",
  stratum: "",
  clothing: "",
  action: "",
  image: "",
  img_url: [],

  nameManager: "",
  idNumberManager: "",
  docIdManager: "",
  phoneManager: "",

  user_id: "",
  product_id: "",
  quantity: "1",

};



export const useForm = (initialForm, validateForm) => {
  // ---------------- variables de estado -----------------------
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [errorsCart, setErrorsCart] = useState({});
  // const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [response, setResponse] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [selected, setSelected] = useState(null);
  const [cities, setCities] = useState([]);
  const [sector, setSector] = useState([]);
  const [city, setCity] = useState([]);
  const [checked, setChecked] = useState(false);
  const [hasManager, setHasManager] = useState(false);
  const [message, setMessage] = useState("")
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
      setForm({
        ...form,
        [name]: value,
          ...(name === "city" ? { district: "" } : {}),
      });

    if (value === "email") {
      validateEmails(name);
    } else {
      return;
    }
  };

  const handleBlur = (e) => {
      handleChange(e);
      setErrors(validateForm(form));
  };

  const handleStateChange = (e) => {
    const { value } = e.target;
    const selectedDepartment = departamentos.find(dep => dep.departamento === value);
    
    if (selectedDepartment) {
      setCities(selectedDepartment.ciudades);
    } else {
      setCities([]);
    }

    setForm(prev => ({ 
      ...prev, 
      state: value,
      city: '' // Limpiar la ciudad cuando cambia el departamento
    }));
  
  };
  
  const handleCityChange = (e) => {
    const { value } = e.target;
    const selectedCity = ciudades.find(cit => cit.ciudad === value);
    
    if (selectedCity) {
      setSector(selectedCity.barrios);
    } else {
      setSector([]);
    }

    setForm(prev => ({ 
      ...prev, 
      state: value,
      city: '' // Limpiar la ciudad cuando cambia el departamento
    }));
  
  };


  const handleChecked = (e, checked) => {
    setChecked(e.target.checked);
  };

  const openModal = () => {
    setModal(true);
    console.log("click");
  };

  const handleSetImages = (imageUrls) => {
      setForm({
        ...form,
        img_url: imageUrls,
      });
  };

  const handleSetImage = (imageUrl) => {
      setForm({
        ...form,
        image: imageUrl,
      });
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const imgUrls = files.map((file) => URL.createObjectURL(file));
    setForm((form) => ({
      ...form,
      img_url: imgUrls, // Guardar las URLs de las imágenes
    }));
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files;
    const imageUrl =  URL.createObjectURL(file);
    setForm((form) => ({
      ...form,
      image: imageUrl, // Guardar las URLs de las imágenes
    }));
  };


  // formularios y estados del producto

  const handleUpdateProperty = async (id) => {
    setLoading(true);

    Swal.fire({
      title: "Estás actualizando un producto",
      text: "¿Deseas continuar actualizando este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Volver",
      background: "#f0f0f0",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
        confirmButton: "custom-confirm-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const formData = new FormData();
          formData.append("name", form.name);
          formData.append("price", form.price);
          formData.append("previousPrice", form.previousPrice);
          formData.append("category", form.category);
          formData.append("quantity", form.quantity);
          formData.append("description", form.description);
          formData.append("img_url", form.img_url);
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
              title: "¡Éxito!",
              text: "Producto actualizado correctamente.",
              icon: "success",
              showCancelButton: false,
              confirmButtonText: "Volver",
              background: "#f0f0f0",
              customClass: {
                popup: "custom-popup",
                title: "custom-title",
                content: "custom-content",
                confirmButton: "custom-confirm-button",
              },
            });
            console.log("Product updated successfully", response.data);
          } else {
            console.log("Failed to update product", response.data);
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Hubo un error al intentar actualizar este producto.",
            icon: "error",
            background: "#f0f0f0",
            customClass: {
              popup: "custom-popup",
              title: "custom-title",
              content: "custom-content",
              confirmButton: "custom-confirm-button",
            },
          });
          setLoading(false);
          throw error.response?.data || error.message;
        }
      } else {
        return;
      }
    });
  };

  const handleSubmitProperty = async (e, submitClient = "client") => {
    e.preventDefault();

    const formData = {
      name: form.name,
      city: form.city,
      price: form.price,
      area: form.area,
      district: form.district,
      category: form.category,
      furnished: form.furnished,
      admon: form.admon,
      description: form.description,
      bedRoom: form.bedRoom,
      bathRoom: form.bathRoom,
      diningRoom: form.diningRoom,
      closets: form.closets,
      kitchen: form.kitchen,
      floor: form.floor,
      parking: form.parking,
      stratum: form.stratum,
      clothing: form.clothing,
      action: form.action,
      image: form.image,
      img_url: form.img_url, // Asumiendo que img_url es un array de objetos con una propiedad 'url'
      nameManager: form.nameManager,
      docIdManager: form.docIdManager,
      emailManager: form.emailManager,
      phoneManager: form.phoneManager,
      submitClient: submitClient,
    };

    if (submitClient === "client"){
      if (formData.name === "") return;
      if (formData.city === "") return;
      if (formData.price === "") return;
      if (formData.district === "") return;
      if (formData.category === "") return;
      if (formData.furnished === "") return;
      if (formData.admon === "") return;
      if (formData.description === "") return;
      if (formData.diningRoom === "") return;
      if (formData.bathRoom === "") return;
      if (formData.closets === "") return;
      if (formData.floor === "") return;
      if (formData.parking === "") return;
      if (formData.stratum === "") return;
      if (formData.clothing === "") return;
      if (formData.action === "") return;

        if(hasManager == true){
         if (formData.nameManager === "") return;
         if (formData.docIdManager === "") return;
         if (formData.emailManager === "") return;
         if (formData.phoneManager === "") return;
        }
      
      if (formData.phone === "") return;
      if (formData.lastname === "") return;
      if (formData.dnaId === "") return;
      if (formData.expDate === "") return;
      if (formData.email === "") return;
      if (formData.phone === "") return;
    } 
    
    if (submitClient === "admin") {
      if (formData.name === "") return;
      if (formData.city === "") return;
      if (formData.price === "") return;
      if (formData.area === "") return;
      if (formData.district === "") return;
      if (formData.category === "") return;
      if (formData.furnished === "") return;
      if (formData.admon === "") return;
      if (formData.description === "") return;
      if (formData.diningRoom === "") return;
      if (formData.bathRoom === "") return;
      if (formData.closets === "") return;
      if (formData.floor === "") return;
      if (formData.parking === "") return;
      if (formData.stratum === "") return;
      if (formData.clothing === "") return;
      if (formData.action === "") return;
    }
    
    if (!formData.image) {
      console.error("Selecciona 1 imagen");
      return
    }

    if (!Array.isArray(formData.img_url) || formData.img_url.length === 0) {
      console.error("Selecciona 4 imágenes");
      return;
    }

    

    setLoading(true);

    if (submitClient === "client") {
    Swal.fire({
      title: "Estás agregando un inmueble",
      text: "¿Deseas agregar este inmueble?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Volver",
      background: "#f0f0f0",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
        confirmButton: "custom-confirm-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const response = axios.post(
            import.meta.env.VITE_APP_API_CREATE_PROPERTY_URL,
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
          setForm(initialForm);
         

          Swal.fire({
            title: "¡Éxito!",
            text: "Inmueble agregado correctamente.",
            icon: "success",
            showCancelButton: false,
            confirmButtonText: "Volver",
            background: "#f0f0f0",
            customClass: {
              popup: "custom-popup",
              title: "custom-title",
              content: "custom-content",
              confirmButton: "custom-confirm-button",
            },
          });
          // Manejar acciones adicionales si es necesario
        } catch (error) {
  console.error("Error al enviar el inmueble:", error);
  setLoading(false);
  Swal.fire({
    title: "Error",
    text: error.response?.data?.error || "Ocurrió un error al enviar el formulario",
    icon: "error"
  });
}
      } else return;
    });
  } else if (submitClient === "admin") {
  const token = localStorage.getItem("tokenAdmin");
  
  // Alert de confirmación inicial
  Swal.fire({
    title: "Agregar inmueble",
    text: "¿Confirmas que deseas registrar este inmueble?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sí, registrar",
    cancelButtonText: "Volver para modificar",
    background: "#f0f0f0",
    reverseButtons: true,
    customClass: {
      popup: "custom-popup",
      title: "custom-title",
      content: "custom-content",
      confirmButton: "custom-confirm-button",
      cancelButton: "custom-cancel-button"
    },
    showLoaderOnConfirm: true,
    preConfirm: async () => {
      try {
        const response = await axios.post(
          import.meta.env.VITE_APP_API_CREATE_PROPERTY_URL,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "x-token": token
            }
          }
        );
        
        return response.data;
      } catch (error) {
        Swal.showValidationMessage(
          `Error: ${error.response?.data?.error || error.message}`
        );
        return false;
      }
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      // Respuesta exitosa
      setLoading(false);
      setResponse(true);
      setForm(initialForm);
      
      Swal.fire({
        title: "¡Registro exitoso!",
        html: `
          <div style="text-align: center;">
            <p>El inmueble <strong>${result.value.propertyRef}</strong> fue creado correctamente.</p>
            <p>Tipo: ${result.value.createdBy === 'admin' ? 'Administrador' : 'Usuario'}</p>
            ${result.value.qrCodeGenerated ? '<p>Código QR generado</p>' : ''}
          </div>
        `,
        icon: "success",
        confirmButtonText: "Aceptar",
        background: "#f0f0f0",
        customClass: {
          popup: "custom-popup-success",
          title: "custom-title-success",
          htmlContainer: "custom-html-container"
        },
        willClose: () => {
          // Redirigir o realizar acciones adicionales
          // window.location.href = '/propiedades';
        }
      });
    } else if (result.isDismissed) {
      // Usuario canceló la operación
      Swal.fire({
        title: "Operación cancelada",
        text: "El inmueble no fue registrado",
        icon: "info",
        confirmButtonText: "Entendido",
        background: "#f0f0f0"
      });
    }
  }).catch((error) => {
    // Manejo de errores
    setLoading(false);
    
    let errorMessage = "Ocurrió un error al procesar la solicitud";
    if (error.response) {
      errorMessage = error.response.data.error || 
                    error.response.data.message || 
                    `Error ${error.response.status}: ${error.response.statusText}`;
    } else if (error.request) {
      errorMessage = "No se recibió respuesta del servidor";
    }

    Swal.fire({
      title: "Error",
      html: `
        <div style="text-align: center; color: #721c24;">
          <p>${errorMessage}</p>
          <small>Por favor intente nuevamente</small>
        </div>
      `,
      icon: "error",
      confirmButtonText: "Reintentar",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
      background: "#f0f0f0",
      customClass: {
        popup: "custom-popup-error",
        title: "custom-title-error",
        htmlContainer: "custom-html-container-error"
      }
    }).then((retryResult) => {
      if (retryResult.isConfirmed) {
        handleSubmitProperty(event, "admin");
      }
    });
  });
}
  };

  const deleteProperty = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Vas a eliminar un producto",
        text: "¡Estás seguro que deseas eliminar este producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Volver",
        background: "#f0f0f0",
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          content: "custom-content",
          confirmButton: "custom-confirm-button",
          cancelButton: "custom-cancel-button",
        },
      });

      if (result.isConfirmed) {
        const response = await axios.delete(
          `${import.meta.env.VITE_APP_API_DELETE_PRODUCT_URL}/${id}`
        );
        console.log(response.data); // Mensaje de éxito o información adicional
        Swal.fire({
          title: "Eliminado!",
          text: "El producto ha sido eliminado exitosamente.",
          icon: "success",
          background: "#f0f0f0",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
          },
        });
        return response.data;
      } else {
        return;
      }
    } catch (error) {
      console.error(
        "Error deleting product:",
        error.response?.data || error.message
      );
      Swal.fire({
        title: "Error",
        text: "Hubo un error al intentar eliminar el producto.",
        icon: "error",
        background: "#f0f0f0",
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          content: "custom-content",
          confirmButton: "custom-confirm-button",
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
    navigate("/client/dashboard");
  };

  const handleSubmitAddCart = async (e) => {
    const finalFormAddCart = {
      ...form,
    };
    e.preventDefault();
    setLoading(true);

    try {
      const token = user.token;
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_POST_CART_URL}/${form.product_id}`,
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
      setForm(initialForm);
      // setTimeout(() => setResponse(false, initialForm, ));
      setTimeout(
        () =>
          setResponse(
            false,
            initialForm,
            Swal.fire({
              title: "¡Correcto!",
              text: `Agregaste un producto al carrito!`,
              icon: "success",
              showCancelButton: false,
              confirmButtonText: "Volver",
              cancelButtonText: "Volver",
              background: "#f0f0f0",
              customClass: {
                popup: "custom-popup",
                title: "custom-title",
                content: "custom-content",
                confirmButton: "custom-confirm-button",
              },
            })
          ),
        200
      );
    } catch (error) {
      Swal.fire({
        title: "No se pudo agregar al carrito",
        text: "Regresa al producto e inténtalo de nuevo",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "Volver",
        cancelButtonText: "Volver",
        background: "#f0f0f0",
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          content: "custom-content",
          confirmButton: "custom-confirm-button",
        },
      });
      return;
    }
  };

  const handleSubmitAddWishlist = async (e) => {
    const finalFormAddWishlist = {
      ...form,
    };
    e.preventDefault();
    setLoading(true);

    try {
      const token = user.token;
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_POST_WISHLIST_URL}/${
          form.product_id
        }`,
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
      setForm(initialForm);
      // setTimeout(() => setResponse(false, initialForm, ));
      setTimeout(
        () =>
          setResponse(
            false,
            initialForm,
            Swal.fire({
              title: "¡Correcto!",
              text: `Agregaste un producto en la lista de deseos!`,
              icon: "success",
              showCancelButton: false,
              confirmButtonText: "Volver",
              cancelButtonText: "Volver",
              background: "#f0f0f0",
              customClass: {
                popup: "custom-popup",
                title: "custom-title",
                content: "custom-content",
                confirmButton: "custom-confirm-button",
              },
            })
          ),
        200
      );
    } catch (error) {
      Swal.fire({
        title: "No se pudo agregar al carrito",
        text: "Regresa al producto e inténtalo de nuevo",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "Volver",
        cancelButtonText: "Volver",
        background: "#f0f0f0",
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          content: "custom-content",
          confirmButton: "custom-confirm-button",
        },
      });
      return;
    }
  };

  const handleSubmitsAdmin = async (e, label) => {
    const finalForm = {
      ...form,
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
      setForm(initialForm);
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

  const handleSubmitClient = async (e, label) => {
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
    if (!finalForm.address) return;
    if (!finalForm.password) return;

    e.preventDefault();
    setErrors(validateForm);
    setLoading(true);
    try {
      helpHttp();
      const response = await axios.post(
        import.meta.env.VITE_APP_API_REGISTER_CLIENTS_URL,
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
      setForm(initialForm);
      setTimeout(
        () =>
          setResponse(
            false,
            initialForm,
            Swal.fire({
              title: "¡Hecho!",
              html: `Te has registrado correctamente`,
              icon: "success",
              showCancelButton: false,
              cancelButtonText: "Volver",
              background: "#f0f0f0",
              customClass: {
                popup: "custom-popup",
                title: "custom-title",
                content: "custom-content",
                confirmButton: "custom-confirm-button",
                cancelButton: "custom-cancel-button",
              },
            })
            // (window.location.href =
              // import.meta.env.VITE_APP_API_LOGIN_ADMIN_FRONT)
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

  const handleLoginAdmin = (e) => {
    if (!form.email) return;
    if (!form.password) return;

    e.preventDefault();
    dispatch(startLoginAdmin(form.email, form.password));

    // console.log(form)
    loadingActive();
    navigate("/admin/dashboard");
  };

  const handleLoginAdvisor = (e) => {
    if (!form.email) return;
    if (!form.password) return;

    e.preventDefault();
    dispatch(startLoginAdvisor(form.email, form.password));

    // console.log(form)
    loadingActive();
    navigate("/advisor/dashboard");
  };

  const handleSubmitsAdvisor = async (e) => {

    
    const finalForm = {
      ...form,
    };
    if (finalForm.country == "") return;
    if (finalForm.name == "") return;
    if (finalForm.lastname == "") return;
    if (finalForm.dnaType == "") return;
    if (finalForm.dnaId == "") return;
    if (finalForm.expDate == "") return;
    if (finalForm.state == "") return;
    if (finalForm.city == "") return;
    if (finalForm.phone == "") return;
    if (finalForm.email == "") return;
    if (finalForm.password == "") return;

    e.preventDefault();
    setErrors(validateForm);
    setLoading(true);
    try {
      helpHttp();
      console.log("API URL:", import.meta.env.VITE_APP_API_REGISTER_ADVISORS_URL);
      const response = await axios.post(
        import.meta.env.VITE_APP_API_REGISTER_ADVISORS_URL,
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
              title: "¡Hecho!",
              html: `Te has registrado correctamente`,
              icon: "success",
              showCancelButton: false,
              cancelButtonText: "Volver",
              background: "#f0f0f0",
              customClass: {
                popup: "custom-popup",
                title: "custom-title",
                content: "custom-content",
                confirmButton: "custom-confirm-button",
                cancelButton: "custom-cancel-button",
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
      console.log("API URL:", import.meta.env.VITE_APP_API_REQUEST_RECOVERY_CODE);
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
              title: "¡Hecho!",
              html: `Te has registrado correctamente`,
              icon: "success",
              showCancelButton: false,
              cancelButtonText: "Volver",
              background: "#f0f0f0",
              customClass: {
                popup: "custom-popup",
                title: "custom-title",
                content: "custom-content",
                confirmButton: "custom-confirm-button",
                cancelButton: "custom-cancel-button",
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

   const handleChangePassword = async (e) => {
  e.preventDefault();

  if (!form.password || !form.rePassword) return;

  const finalForm = {
    email: form.email,
    password: form.password,
  };

  debugger;

  setErrors(validateForm);
  setLoading(true);

  try {
    const response = await axios.post(
      import.meta.env.VITE_APP_API_RESET_PASSWORD,
      finalForm,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(response.data);
    setResponse(true);
    setForm(initialForm);
    setLoading(false);

    Swal.fire({
      title: "¡Hecho!",
      html: `Contraseña cambiada correctamente`,
      icon: "success",
      background: "#f0f0f0",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
    }).then(() => {
      navigate("/advisor/auth/login"); // ✅ Redirige después del éxito
    });
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: "¡Error!",
      html: `Error al cambiar la contraseña`,
      icon: "warning",
      background: "#f0f0f0",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
    });
  } finally {
    setLoading(false);
    setModal(true);
  }
};

const handleRequestCode = async (e) => {
  e.preventDefault();

  const finalForm = { ...form };
  if (!finalForm.email) return false;

  setErrors(validateForm);
  setLoading(true);

  try {
    const response = await axios.post(
      import.meta.env.VITE_APP_API_REQUEST_RECOVERY_CODE,
      { email: finalForm.email }, // solo necesitas enviar el email
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

    setTimeout(() => {
      setResponse(false);
      Swal.fire({
        title: "¡Hecho!",
        html: `Código enviado a: <b>${finalForm.email}</b>`,
        icon: "success",
        background: "#f0f0f0",
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          content: "custom-content",
          confirmButton: "custom-confirm-button",
          cancelButton: "custom-cancel-button",
        },
      });
    }, 200);

    return true; // ✅ Éxito
  } catch (error) {
    console.error("Error al solicitar el código:", error);
    setLoading(false);
    return false; // ❌ Fallo
  }
};

const handleVerifyCode = async (e, { email, code }) => {
  if (e?.preventDefault) e.preventDefault();

  setErrors("");
  setMessage("");

  if (!/^\d{6}$/.test(code)) {
    setErrors("El código debe tener 6 dígitos numéricos.");
    return;
  }

  try {
    const res = await fetch(import.meta.env.VITE_APP_API_VERIFY_CODE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });

    const result = await res.json();

    if (!res.ok) {
      Swal.fire({
        title: "¡Error!",
        html: result?.error || "Código inválido o expirado.",
        icon: "warning",
        background: "#f0f0f0",
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          content: "custom-content",
          confirmButton: "custom-confirm-button",
          cancelButton: "custom-cancel-button",
        },
      });
      return;
    }

    Swal.fire({
      title: "¡Hecho!",
      html: "¡Código correcto!",
      icon: "success",
      background: "#f0f0f0",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
    });

    setMessage("Código verificado.");
    return true;
  } catch (err) {
    console.error(err);
    Swal.fire({
      title: "¡Error!",
      html: "Código inválido o expirado.",
      icon: "warning",
      background: "#f0f0f0",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
    });
    return false;
  }
};


  return {
    form,
    errorsCart,
    errors,
    loading,
    response,
    modal,
    filteredCities,
    departamentos,
    cities,
    city,
    hasManager, 
    setHasManager,
    setCities,
    setSector,
    setForm,
    setLoading,
    handleLoginAdmin,
    handleSubmitsAdmin,
    handleCityChange,
    handleSubmitClient,
    handleSubmitsAdvisor,
    handleLoginAdvisor,
    handleSubmitAddCart,
    handleImagesChange,
    handleImageChange,
    handleSubmitProperty,
    handleUpdateProperty,
    deleteProperty,
    handleSetImage,
    handleSetImages,
    handleChecked,
    loadingActive,
    handleChange,
    handleBlur,
    handleSubmit,
    handleSubmits,
    handleLogin,
    handleSubscribeNewsletter,
    handleChangePassword,
    handleRequestCode,
    handleVerifyCode,
    handleClearCountry,
    openModal,
    handleStateChange,
    handleCountryChange,
    handleSubmitAddWishlist,
  };
};
