/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BaseButton } from "./BaseButton";
import { Modal } from "./Modal";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { formatPrice } from "../../globalActions";
import { UpdateProperty } from "../views/admin/properties/UpdateProperty";
import styled from "styled-components";

export const CardLeasesAdmin = ({
  id,
  title,
  classs,
  description,
  member,
  onDelete,
  onMoveSold,
  onMoveRented,
  onMoveSell,
  onMoveRent,
  sold,
  rented,
  rent,
  sell,
  soldText,
  rentedText,
  img,
  uptBtn,
  delBtn,
  onUpdate,
  pendingSale,
  pendingRent,
  available,
  price,
  selected,
  property,
  propertyRef,
  jpg,
  buy
}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const closeModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  // const openModal = () => {

  //   dispatch(setProduct(product));
  //   setSelectedProduct(product)
  //   console.log(product)
  //   setShowModal(true);
  // };

  return (
    <CardAdmin>
      <section className={classs} onClick={selected}>
      <div className="productcard-ref">
            <p><strong>Código:</strong> {propertyRef} </p>
          </div>
        <div>
          <div className="productcard-contain">
            {jpg && (
              <img loading="lazy" src={img} alt="" />
            )}
          </div>
        </div>
        <div className="productcard-box">
          {buy && (<div className="productcard-btn">
            <BaseButton img={true} icon={"wallet"} classs={"button full-outline"} textLabel={true} label={"Comprar"} />
          </div>)}
          <p className="productcard__p"> {description} </p>
          <p className="productcard__title"> {title} </p>
          { available &&<p className="productcard__quantity"> Disponible </p>}
          { rentedText &&<p className="productcard__quantity"> Arrendado </p>}
          { rent &&<p className="productcard__quantity"> Arrendamiento </p>}
          { sell && <p className="productcard__quantity"> Venta</p>}
          { soldText && <p className="productcard__quantity"> Vendido</p>}
          <h2 className="productcard__h2">COP ${formatPrice(price)} </h2>
          
          <p className="productcard__p3"> {member} </p>
        </div>
        <div className="productcard-btns">
          <div>
            {delBtn && (<BaseButton handleClick={onDelete}  classs={'button delete'} textLabel={true} label={"Borrar producto"} />)}
          </div>
          <div>
            {uptBtn && (<BaseButton handleClick={onUpdate} classs={'button update'} textLabel={true} label={"Actualizar producto"} />)}
          </div>
        </div>
          <div>

         <div>
          <div>
          {sold && <h2 className="productcard__title">¿Vendido?</h2>}
            {sold && (<BaseButton handleClick={onMoveSold} classs={'button full-outline'} textLabel={true} label={"Mover a vendidos"} />)}
          </div>
          <div>
          {rented && <h2 className="productcard__title">¿Arrendado?</h2>}
            {rented && (<BaseButton handleClick={onMoveRented} classs={'button full-outline'} textLabel={true} label={"Mover a arrendadas"} />)}
          </div>
          <div>
          {pendingSale && <h2 className="productcard__title">Pendiente por aprobar</h2>}
            {pendingSale && (<BaseButton handleClick={onMoveSell} classs={'button full-outline'} textLabel={true} label={"Mover a venta"} />)}
          </div>
          <div>
          {pendingRent && <h2 className="productcard__title">Pendiente por aprobar</h2>}
            {pendingRent && (<BaseButton handleClick={onMoveRent} classs={'button full-outline'} textLabel={true} label={"Mover a arrendar"} />)}
          </div>
        </div>
            </div>
        {showModal && (
          <Modal
            title="Título del Modal"
            img="nombre_de_la_imagen"
            component2={true}
            click={closeModal}
          >
            <UpdateProperty property={property} />
          </Modal>
        )}
      </section>
    </CardAdmin>
  );
};

const CardAdmin = styled.div`
display: grid;
  .productcard {
    position: relative;
      display: grid;
      width: 100%;
      height: fit-content;
      border-radius: 8px;
      box-shadow: 
      rgba(215, 213, 213, 0.607) 1px 1px 3px, 
      rgba(215, 213, 213, 0.607) -1px -1px 3px;
      background: white;
      gap: 10px;
      
      padding: 10px 8px;
      transition: all ease .9s;
      &:hover{
        transform: scale(1.12);
        box-shadow:rgba(128, 128, 128, 0.6) 1px 1px 6px, 
        rgba(128, 128, 128, 0.6) -1px -1px 6px;
        z-index: 100;
      }
  
      @media (max-width: 580px) {
        
      }
  
      &-box{
        display: grid;
        // max-height: 200px;
      }
  
      &.background{
        background: #f5f1f1;
  
      }
  
      &-btn{
        margin: 5px 0;
      }
    
      &__p {
        font-size: 13.5px;
        font-weight: 400;
        line-height: 1.1;
        padding-bottom: 5px;
      }
      &__quantity{
        color: rgb(123, 120, 120);
        font-size: 14px;
        margin: 0;
        padding: 0;
      }
      &__title{
        font-size: 15px;
        font-weight: 600;
        margin: 0 0 5px 0;
        padding: 0;
        line-height: 1;
      }
      &__selltext{
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
          color: #EC3337;
          text-decoration: none;
        }
      }
    
      &__p3 {
        font-size: 12px;
        color: #EC3337;
        line-height: 1;
        margin: 0;
  
        @media (max-width: 450px) {
          font-size: 10px;
          color: black;
        }
      }
    
      &__h2 {
        font-size: 15px;
        font-weight: 600;
        line-height: 1;
        margin: 0;
        padding: 2px 0;
      }
    
      &-contain {
        display: grid;
        // place-items: center;
    
        img {
          width: 100%;
          object-fit: contain;
          margin: auto;
          border-radius: 8px;
          @media (max-width: 500px) {
            height: 100%;
          }
        }
      }
      &-group{
        display: flex;
        gap: 5px;
      }
      &-addwishimg{
        background: black;
        cursor: pointer;
        left: 10px;
        top: 12px;
        position: absolute;
        display: grid;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        padding: 10px;
        align-items: center;
        overflow: hidden;
        transition: all ease .3s;
  
        img{
          transition: all ease .3s;
          position: relative;
          width: 100%;
          filter: brightness(500%);
        }
        &:hover{
          background: #EC3337;
          img{
            transform: scale(1.2);
          }
        }
      }


      &-addcartimg{
        background: black;
        cursor: pointer;
        right: 10px;
        top: 12px;
        position: absolute;
        display: grid;
        border-radius: 50%;
        align-items: center;
        padding: 10px;
        width: 40px;
        height: 40px;
        transition: all ease .3s;
  
        img{
          transition: all ease .3s;
          position: relative;
          filter: brightness(500%);
          width: 100%;
        }
        &:hover{
          background: #EC3337;
          img{
            transform: scale(1.2);
          }
        }
      }

      &-btns{
        display: grid;
        gap: 5px;
        margin: 0;
        padding: 0;
        grid-template-columns: repeat(2, 1fr);
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
    .sold-rented{
      display: grid;
    }
    }
`