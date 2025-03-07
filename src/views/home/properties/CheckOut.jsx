/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-debugger */
// import { useLocation } from 'react-router-dom';
import { BaseButton } from "../../../../index";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatPrice } from "../../../../globalActions";

export const CheckOut = () => {
  const user = useSelector((state) => state.auth.user);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  console.log(user);

  return (
    <Chekout>
      <section className="checkout">
        <div className="checkout-left">
          <div>
            <h2>dirección de entrega</h2>
          </div>
          <div className="checkout-flex">
            <strong>Nombre:</strong>
            <p>
              {user.name} {user.lastname}
            </p>
          </div>
          <div className="checkout-flex">
            <strong>Dirección:</strong>
            <p>(Próximamente)</p>
          </div>
          <div className="checkout-flex">
            <strong>País, departamento, ciudad, postal:</strong>
            <p>(Próximamente)</p>
          </div>
          <div className="checkout-left">
            <div className="checkout-flex">
              <h2>Métodos de pago:</h2>
            </div>
            <div className="checkout-flex">
              <strong>Tarjetas:</strong>
              <p>(Próximamente)</p>
            </div>
            <div className="checkout-flex">
              <strong>Cuentas bancarias:</strong>
              <p>(Próximamente)</p>
            </div>
            <div className="checkout-flex">
              <strong>Moneybrokers:</strong>
              <p>(Próximamente)</p>
            </div>
          </div>
          <div className="checkout-left-img">
            <img
              loading="lazy"
              src={`${selectedProduct.images[0].img_url}`}
              alt=""
            />
            <div>
              <h3>{selectedProduct.name}</h3>
              <strong>${formatPrice(selectedProduct.price)}</strong>
            </div>
          </div>
        </div>
        <div className="checkout-right">
          <h2>Resumen</h2>
          <div className="checkout-left-info">
            <h4>Coste total de los artículos</h4>
            <p>COP ${formatPrice(selectedProduct.price)}</p>
          </div>
          <div className="checkout-left-info">
            <h4>Código promocional</h4>
            <p>Escribe el código aquí</p>
          </div>
          <div className="checkout-left-info">
            <h4>Total de envío</h4>
            <p>Gratis</p>
          </div>
          <div className="checkout-left-info">
            <h4>Total</h4>
            <strong>COP ${formatPrice(selectedProduct.price)}</strong>
          </div>
          <BaseButton
            classs={"button full-red"}
            label={"Realizar compra"}
            link={"https://wa.me/message/WUYQ32XZFQ7TG1"}
            target="_blank"
          />
          <p>
            Al hacer click en 'Realizar compra', confirmo haber leído y aceptado
            los términos y condiciones.
          </p>
        </div>
      </section>
    </Chekout>
  );
};

const Chekout = styled.section`
  display: grid;
  .checkout {
    display: grid;
    padding: 25px;
    grid-template-columns: 1fr 30%;
    @media (max-width: 680px) {
      grid-template-columns: 1fr;
    }

    &-flex {
      display: flex;
      justify-content: space-between;
      padding-right: 15px;

      strong {
        font-weight: 500;
      }
    }

    &-left {
      display: grid;
      gap: 10px;
      border-right: #80808061 1px solid;

      &-info {
        display: flex;
        justify-content: space-between;
      }
      &-img {
        display: flex;
        gap: 10px;
        img {
          width: 25%;
        }
        strong {
          font-weight: 500;
        }
      }
    }
    &-right {
      gap: 10px;
      display: grid;
      align-items: start;
      height: fit-content;
      padding: 0 15px;
      &-info {
        display: flex;
        justify-content: space-between;
        align-items: start;
      }
    }
  }
`;