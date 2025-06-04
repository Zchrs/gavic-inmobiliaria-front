/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { formatPrice, getImg, scrollTop } from "../../globalActions";
import defaultImage from "../assets/img/jpg/default.jpg";
import { BaseButton } from "./BaseButton";
import { useDispatch, useSelector } from "react-redux";
import { clearProperty, selectedProperty } from "../actions/propertyActions";
import { AddCartWishlist } from "./AddCartWishlist";
import { useNavigate } from "react-router-dom";
import { useForm, initialForm } from "../hooks/useForm";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

export const CardLeases = ({
  propertyRef,
  name,
  classs,
  description,
  member,
  img,
  boxGrid,
  onClick,
  boxFlex,
  location,
  user_id,
  property_id,
  prodHover,
  prodLeave,
  quantityRooms,
  area,
  showToAddWish,
  quantityCloset,
  preview,
  price,
  previousPrice,
  discount,
  productLink,
  thumbnails,
  quantity,
  jpg,
  buyCr,
  buy,
}) => {
  const user = useSelector((state) => state.auth.user);
  const propertyHover = useSelector((state) => state.properties.selectedProperty);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    handleSubmitAddWishlist,
    setForm
  } = useForm(initialForm, dataFormErrors);
  

  // Cuando quieras establecer el estado del producto

  const handleSetProductInfo = (e) => {
    // console.log(propertyHover, 'producto seteado')
    
    // if(!user) return
    
    dispatch(selectedProperty(propertyHover));
    localStorage.setItem("property", propertyHover);
    setForm((prevForm) => ({
      ...prevForm,
      user_id: user.id, // Assuming you want to set the user_id as well
      property_id: propertyHover.id,
      price: propertyHover.price,
    }));
  };
  
  const handleCLearProperty = () => {
    dispatch(clearProperty(propertyHover));
    localStorage.removeItem("property", propertyHover);
    setForm(initialForm);
  };

  const handleMouseEnter = () => {
    if (!user) {
      handleSetProductInfo({ user_id, property_id, price });
    }
  };

  const handleMouseLeave = () => {
    if (!user) {
      handleCLearProperty({ user_id, property_id, price });
    }
  };

  const handleAddToWishList = (e) => {
    if (!user) {
      handleSubmitAddWishlist(e);
    } else {
      Swal.fire({
        title: "Aún no eres nuestro cliente",
        text: "Regístrate para agregar productos a la lista de deseos.",
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

  // const whatsapp = () => {
  //    window.open(`https://wa.me/message/WUYQ32XZFQ7TG1`, '_blank')
  // } 


  return (
    <ProductCard onMouseEnter={prodHover}>
      <section className={classs}>
        <div>
          <div className="productcard-ref">
            <p><strong>Código:</strong> {propertyRef} </p>
          </div>
        <div className="productcard-addcart">
            {showToAddWish && 
            <AddCartWishlist
              addWish={true}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              onclick={handleAddToWishList}
              onSubmit={handleAddToWishList}
            />}
          </div>

          <Link onClick={onClick} to={productLink} className="productcard-contain">
            {/* {jpg && <img loading="lazy" src={getImg('jpg', `${img}`, 'webp') || defaultImage} alt="" />} */}
            {jpg && <img loading="lazy" src={img} alt="" />}
          </Link>
        </div>
        {boxGrid && 
        <div className="productcard-box">
          {buy && (
            <div className="productcard-btn">
              <BaseButton
                img={true}
                icon={"whatsapp-grey"}
                classs={"button full-blue"}
                textLabel={true}
                label={"Lo quiero!"}
                // handleClick={whatsapp}
              />
            </div>
          )}
          {buyCr && (<div className="productcard-btn">
            <BaseButton img={true} icon={"wallet"} classs={"button full-outline"} textLabel={true} label={"Comprar"} />
          </div>)}

          <p className="productcard__p"> {description} </p>
          <p className="productcard__quantity"> {name} </p>
          <p className="productcard__quantity"> {quantity} Disponibles</p>
          <h2 className="productcard__h2">
            {formatPrice(price)} <span className="productcard-span"> {discount} </span>
          </h2>
          <div className="productcard-group">
            <p className="productcard__p2">{formatPrice(price)}</p>
          </div>
          <p className="productcard__p3"> {member} </p>
          {/* {ratingss && <Rating ratings={ratings} productID={property_id} userID={user ? user.id : null} />} */}
          {preview && (
            <div className="productcard-btn">
              <BaseButton
                img={true}
                classs={"button short-black"}
                link={productLink}
                label={'Previsualizar'}
              />
            </div>
          )}
        </div>}
        {boxFlex &&
        <div className="productcard-grid">
          <div className="productcard-flex">
            <div className="productcard-flex-location">
              <p><img src={getImg('svg', 'location', 'svg')} alt="" /><strong>Ubicación:</strong> {location}</p>
            </div>
            <div className="productcard-flex-location">
              <b>{formatPrice(price)}</b>
            </div>
          </div>
          <div className="productcard-flex">
            <div className="productcard-flex-details">
              <img src={getImg('svg', 'area', 'svg')} alt="" />
              <strong>Área</strong>
              <p>{area} m&sup2;</p>
            </div>
            <div className="productcard-flex-details">
              <img src={getImg('png', 'cama', 'png')} alt="" />
              <strong>Habitaciones</strong>
              <p>{quantityRooms}</p>
            </div>
            <div className="productcard-flex-details">
              <img src={getImg('png', 'closet', 'png')} alt="" />
              <strong>Closets</strong>
              <p>{quantityCloset}</p>
            </div>
          </div>
        </div>
        }
      </section>
    </ProductCard>
  );
};


const ProductCard = styled.div`
display: grid;

  .productcard {
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    align-content: space-between;
    overflow: hidden;
    gap: 2px;
    padding: 0;
    transition: all ease 0.9s;
    &:hover {
      transform: scale(1.12);
      box-shadow: rgba(128, 128, 128, 0.6) 1px 1px 6px,
        rgba(128, 128, 128, 0.6) -1px -1px 6px;
      z-index: 100;
    }

    &-form{
      display: none;
    }

    &-span {
      color: #990000;
      font-weight: 400;
    }

    &-box {
    position: relative;
      display: grid;
      padding: 10px;
      gap: 2px;
      // max-height: 200px;
    }

    &.background {
      background: #efefef;
    }

    &-btn {
      display: grid;
      width: 100%;
      // border: #660000 1px solid;
      margin: 5px 0;

      @media (max-width: 680px) {
        justify-content: center;
      }
    }

    &__p {
      grid-column: 1 / 2;
      font-size: 15px;
      font-weight: 500;
      padding: 0;
      line-height: 1.1;
      padding-bottom: 5px;
    }
    &__quantity {
      color: rgb(123, 120, 120);
      font-size: 14px;
      margin: 0;
      padding: 0;
    }
    &__selltext {
      color: rgb(190, 188, 188);
      font-size: 14px;
      margin: 0;
      padding: 0;
    }

    &__p2 {
      grid-column: 2 / 3;
      text-decoration: line-through;
      line-height: 1;
      span {
        color: #990000;
        text-decoration: none;
      }
    }

    &__p3 {
      font-size: 12px;
      color: #ec3337;
      line-height: 1.1;

      @media (max-width: 450px) {
        font-size: 10px;
        color: black;
      }
    }

    &__h2 {
      font-size: 15px;
      font-weight: 600;
      line-height: 1.3;
      margin: 0;
      padding: 2px 0;
    }

    &-contain {
      display: grid;
      margin: 0;
      padding: 0;
      align-items: start;
      overflow: hidden;
      border-radius: 15px 15px 0px 0px;
      
      img {
        border-radius: 0px;
        width: 100%;
        
        object-fit: cover;
        margin: 0;
        padding: 0;
        transition: all ease 0.4s;
        min-height: 220px;
        &:hover {
          transform: scale(1.2);
        }

        @media (max-width: 500px) {
          max-height: 250px;
        }
      }
    }
    &-group {
      display: flex;
      gap: 5px;
    }
    &-addwish {
      left: 10px;
      top: 12px;
      position: absolute;
      display: grid;
      width: 40px;
      height: 40px;
      align-items: center;
      transition: all ease 0.3s;
      background: transparent;
    }
    &-addcart {
      right: 10px;
      top: 12px;
      background: transparent;
      position: absolute;
      display: grid;
      width: 40px;
      height: 40px;
      align-items: center;
      transition: all ease 0.3s;
    }
    &:hover .productcard-grid{
      transition: all ease 0.3s;
      transform: translateY(0);
    }

    &-flex{
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 100%;
      

      strong{
        font-weight: 500;
        font-size: 12px;
      }
      p{
        font-size: 12px;
      }
      
      &-details{
        position: relative;
        width: 100%;
        padding-top: 5px;
        border-top: 1px solid var(--primary-semi);
        place-items: center;
        text-align: center;
        display: grid;
        img{
          height: 15px;
        }
      }
      &-location{
        display: grid;
        width: fit-content;
        align-items: center;
        height: 100%;

        img{
          height: 15px;
        }
      }
    }
    &-grid{
      transition: all ease 0.3s;
      width: 100%;
      gap: 5px;
      padding: 5px 10px;
      display: grid;
      position: absolute;
      bottom: 0;
      height: fit-content;
      background: #ffffffc8;
      transform: translateY(100%);
    }

    &-ref{
      display: grid;
      position: absolute;
      background: var(--trans-secondary-md);
      text-shadow: var(--ds-sm);
      transition: all ease 0.3s;
      align-items: center;
      padding: 0 10px;
      overflow: hidden;
      width: fit-content;
      height: fit-content;
      border-radius: 5px;
      font-size: 12px;
      color: black;
      top: 15px;
      left: 15px;
      z-index: 10;
    }
  }
`;
