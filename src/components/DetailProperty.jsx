/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from './Slider';
// import { Rating } from './Rating';
import { BaseButton } from '../../index';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatPrice, getImg, scrollTop } from '../../globalActions';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { useEffect } from 'react';
import { clearProperty, selectedProperty } from '../actions/propertyActions';
import { initialForm, useForm } from '../hooks/useForm';

export const DetailProperty = ({
  user_id, 
  property_id, 
  price, 
  quantity
}) => {
  const location = useLocation();
  const showLocation = useLocation();
  const property = useSelector((state) => 
    state.properties.selectedProperty ||
    state.properties.filtered ||
    []
);
  const propertyHover = useSelector((state) => 
    state.properties.selectedProperty ||
    state.properties.filtered ||
    []
);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(property)
  useEffect(() => {
    scrollTop();
  }, [])
  
  const dataFormErrors = (form) =>{
    let user_id = document.getElementById("user_id")
    let property_id = document.getElementById("property_id")
    let price = document.getElementById("price")
    let quantity = document.getElementById("quantity")

    let data = {};
    let errors = {};

    if (!form.user_id && form.user_id ==! form.user_id) {
      user_id.style.cssText = "box-shadow: red 1px 1px 2px, red -1px -1px 2px";
      errors.user_id = "no permitido";
      return
    }  
  
    if (!form.property_id && form.property_id ==! form.property_id) {
      property_id.style.cssText = "box-shadow: red 1px 1px 2px, red -1px -1px 2px";
      errors.property_id = "no permitido";
    }  else {
      property_id.style.cssText = "box-shadow: #34B0BE 1px 1px 2px, #34B0BE -1px -1px 2px;";
    }
  
    if (!form.price && form.price ==! form.price) {
      price.style.cssText = "box-shadow: red 1px 1px 2px, red -1px -1px 2px";
      errors.price = "no permitido.";
    } else {
      price.style.cssText = "box-shadow: #34B0BE 1px 1px 2px, #34B0BE -1px -1px 2px; color: black;";
    }
  
    if (!form.quantity) {
      quantity.style.cssText = "box-shadow: red 1px 1px 2px, red -1px -1px 2px";
      errors.quantity = "no permitido.";
    }else {
      quantity.style.cssText = "box-shadow: #34B0BE 1px 1px 2px, #34B0BE -1px -1px 2px;";
    }
  


    return errors

  }
  
  const {
    form,
    errors,
    handleChangeproperty,
    handleSubmitAddCart,
    handleSubmitAddWishlist,
    setForm
  } = useForm(initialForm, dataFormErrors);


  const handleSetpropertyInfo = () => {
    // console.log(propertyHover, 'propertyo seteado')
    if(!user) return
    
    dispatch(selectedProperty(propertyHover));
    localStorage.setItem("propertiesRecent", propertyHover);
    setForm((prevForm) => ({
      ...prevForm,
      user_id: user.id, // Assuming you want to set the user_id as well
      property_id: propertyHover.id,
      price: propertyHover.price,
      quantity: 1, // You can set a default quantity or manage it as needed
    }));
  };

  const handleCLearProperty = () => {

    // console.log(propertyHover, 'propertyo quitado')
    dispatch(clearProperty(propertyHover));
    localStorage.removeItem("propertiesRecent", propertyHover);
    setForm(initialForm);
  };


  const handleCheckoutClick = () => {
    if (user) {
      navigate(`checkout`);
    } else {
      Swal.fire({
        title: 'Regístrate',
        text: 'Debes ser cliente registrado para comprar',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Quiero registrarme',
        cancelButtonText: 'Volver',
        background: '#f0f0f0',
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          content: 'custom-content',
          confirmButton: 'custom-confirm-button-register',
          cancelButton: 'custom-cancel-button-register',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/users/auth/register');
        }else{
          return
        }
      
       })
  }
  };

  const handleMouseEnter = () => {
    if (user) {
      handleSetpropertyInfo({ user_id, property_id, price, quantity });
    }
  };

  const handleMouseLeave = () => {
    if (user) {
      handleCLearProperty({ user_id, property_id, price, quantity });
    }
  };

  const handleAddToCart = (e) => {
    if (user) {
      handleSubmitAddCart(e);
    } else {
      Swal.fire({
        title: "Aún no eres nuestro cliente",
        text: "Regístrate para agregar propertyos al carrito.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Registrarme",
        cancelButtonText: "Cancelar",
        background: "#f0f0f0",
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          content: "custom-content",
          confirmButton: "custom-confirm-button",
          cancelButton: "custom-cancel-button",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/users/auth/register");
        }
      });
    }
  };
  const handleAddToWishList = (e) => {
    if (user) {
      handleSubmitAddWishlist(e);
    } else {
      Swal.fire({
        title: "Aún no eres nuestro cliente",
        text: "Regístrate para agregar propertyos a la lista de deseos.",
        icon: "warning",
        showCancelButton: true,
        // confirmButtonColor: '#990000',
        // cancelButtonColor: '#a4883e',
        confirmButtonText: "Registrarme",
        cancelButtonText: "Cancelar",
        background: "#f0f0f0",
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          content: "custom-content",
          confirmButton: "custom-confirm-button",
          cancelButton: "custom-cancel-button",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/users/auth/register");
        }
      });
    }
  };

  return (
    <Detailproperty>
      <section className="detailproperty">
        <span>{`home${showLocation.pathname.replace(/\//g, ' > ')}`}</span>
        <div className="detailproperty-containerr">
          <div className="detailproperty-contain">
          <h2>{property.action}</h2>
            <div id='swiper-container'>
                <Slider />
            </div>
          </div>
          <div className="detailproperty-contain scroll">
            <div className="detailproperty-contain-box">
              <h2>{ property.name }</h2>
      
            <h2>{ formatPrice(property.price) }</h2>
              <h3 className='detailproperty__prevprice'>{ formatPrice(property.previousPrice) }</h3>
            </div>
            
            <div className="detailproperty-contain-box">
              <div className="detailproperty-contain-info">
              </div>
              <div className="detailproperty-contain-box">
              <h2>Descripción</h2>
              <p>
              { property.description }
              </p>
            </div>
            <div className="detailproperty-contain-box">
              <div className="detailproperty-contain-flex">
              <h2>Información adicional</h2>
              <h2>Área e interior</h2>
              </div>
              <div className="detailproperty-contain-flex">
                <div>
                  <p>
                    Referencia: <strong>{property.ref}</strong>
                  </p>
                  <p>
                    Sector: <strong>{property.district}</strong>
                  </p>
                  <p>
                    Área: <strong>{property.area} m&sup2; </strong>
                  </p>
                </div>
                <div>
                  <p>
                    Estrato: <strong>{property.stratum}</strong>
                  </p>
                  <p>
                    Administración: <strong>{property.admon}</strong>
                  </p>
                  <p>
                    Amoblado: <strong>{property.furnished}</strong>
                  </p>
                </div>
              </div>
            </div>

            </div>
          </div>
          <div className="detailproperty-contain-box">
            <h2>Características</h2>
            <div className="detailproperty-contain-grid-3-cols">
              <div className={'detailproperty-contain-grid-3-cols-inside'}>
                <h3>Habitaciones</h3>
                <img src={getImg('png', 'cama', 'png')} alt="" />
                <p>{property.bedRoom}</p>
              </div>
              <div className={'detailproperty-contain-grid-3-cols-inside'}>
                <h3>Closets</h3>
                <img src={getImg('png', 'closet', 'png')} alt="" />
                <p>{property.closets}</p>
              </div>
              <div className={'detailproperty-contain-grid-3-cols-inside'}>
                <h3>Cocina</h3>
                <img src={getImg('png', 'cocina', 'png')} alt="" />
                <p>{property.kitchen}</p>
              </div>
              <div className={'detailproperty-contain-grid-3-cols-inside'}>
                <h3>Sala comedor</h3>
                <img src={getImg('png', 'sala', 'png')} alt="" />
                <p>{property.diningRoom}</p>
              </div>
              <div className={'detailproperty-contain-grid-3-cols-inside'}>
                <h3>Parqueadero</h3>
                <img src={getImg('png', 'carro', 'png')} alt="" />
                <p>{property.parking}</p>
              </div>
              <div className={'detailproperty-contain-grid-3-cols-inside'}>
                <h3>Baños</h3>
                <img src={getImg('png', 'shower', 'png')} alt="" />
                <p>{property.bathRoom}</p>
              </div>
              <div className={'detailproperty-contain-grid-3-cols-inside'}>
                <h3>Zona de ropa</h3>
                <img src={getImg('png', 'lavadora', 'png')} alt="" />
                <p>{property.clothing}</p>
              </div>
            </div>
            <form encType="multipart/form-data">
            <div>
              <input id="user_id" name="user_id" type="text" value={form.user_id} onChange={handleChangeproperty} />
              {errors.user_id && <p className="warnings-form">{errors.user_id}</p>}
            </div>
            <div>
              <input id="property_id" name="property_id" type="text" value={form.property_id} onChange={handleChangeproperty} />
              {errors.property_id && <p className="warnings-form">{errors.property_id}</p>}
            </div>
            <div>
              <input id="price" name="price" type="text" value={form.price} onChange={handleChangeproperty} />
              {errors.price && <p className="warnings-form">{errors.price}</p>}
            </div>
            <div>
              <input id="quantity" name="quantity" type="text" value={form.quantity} onChange={handleChangeproperty} />
              {errors.quantity && <p className="warnings-form">{errors.quantity}</p>}
            </div>
            
          </form>
          <div className='detailproperty-contain-qrcode'>
          {property.qr_code && (
    <img
      src={property.qr_code}
      alt="Código QR"
      style={{ width: 200, height: 200 }}
    />
  )}
          </div>
          </div>
        </div>
      </section>
    </Detailproperty>
  )
}




const Detailproperty = styled.section`
@keyframes fades {
    from{
       opacity: 0;
    }
    to{
        opacity: 1;
    }
}
.detailproperty{
    animation: fades .5s ease backwards;
    display: grid;
    padding: 12px;
    gap: 25px;
    @media (max-width: 720px) {
        overflow-y: scroll;
        padding: 12px;
        gap: 15px;
    }
    &__prevprice{
        color: #EC3337;
        font-weight: 500;
        text-decoration:line-through;
        font-size: 17px;
    }
    &-containerr{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 40% 30% 1fr;
        gap: 13px;
        
        
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
            height: fit-content;
            
        }
    }
    &-contain{
      align-items: start;
      justify-content: start;
        display: grid;
        gap: 6px;
        margin: 0;
        height: fit-content;
        @media (max-width: 720px) {
            height: 100%;
        }

        &-box{
            display: grid;
            align-items: start;
            height: fit-content;
            margin: 0;
            padding: 0;
            gap: 6px;
            p{
              font-size: 16px;
            }
        }
        &-btns{
            display: grid;
            gap: 5px;
        }
        &-group{
            display: grid;
            grid-template-columns: 60% 40%;
            height: 100%;
            gap: 5px;
        }
        &-info{
            display: flex;
            
            h2{
                font-size: 18px;
                font-weight: 600;
            }
        }
        &.scroll{
            
            overflow-y: scroll;
            &::-webkit-scrollbar{
                width: 10px;
                height: 30px;
                margin: 1px;
                background: rgba(128, 128, 128, 0.242);
                border-radius: 10px;
            }
            &::-webkit-scrollbar-track{
                width: 7px;
                height: 50px;
            }
            &::-webkit-scrollbar-thumb{
                background: rgba(22, 21, 21, 0.091);
                width: 5px;
                border-radius: 10px;
                border: rgba(128, 128, 128, 0.295) 1px solid;
                height: 30px;
            }
            &::-webkit-scrollbar-track-piece{
                background: rgba(128, 128, 128, 0.005);
                border-radius: 10px;
                width: 10px;
                height: 10px;
            }
        }
        &-grid-3-cols{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          &-inside{
            display: grid;
            width: 100%;
            height: fit-content;
            place-items: center;
            p{
              font-size: 16px;
            }
            h3{
              font-size: 16px;
            }
            img{
              height: 13px;
            }
          }
        }
        &-flex{
          display: flex;
          width: 100%;
         justify-content: space-between;
         padding-right: 10px;
          p{
            font-size: 16px;
          }
        }
        &-qrcode{
          display: grid;
          width: 100%;
          height: 100%;
          place-items: center;
          background-color: #f0f0f0;
          border-radius: 10px;
          padding: 10px;
          margin-top: 20px;
        
          img{
            width: 150px;
          }
        }
    }
    form{
      display: none;
    }
}
`