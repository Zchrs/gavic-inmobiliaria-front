/* eslint-disable no-unused-vars */
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { UpdateProperty, DetailProperty  } from "../../index";
import styled from "styled-components";




export const Modal = ({ name, image, img, btn, click, component1, component2, product, children }) => {
  return createPortal(
    <ModalWindow>
      <div className="modal" id="modal">
        <span className="span" onClick={click}></span>
        <div className="modal-container">
          {component1 && <div className="modal-contain">
            <DetailProperty />
          </div>}
          {component2 && (<div className="modal-contain">
            <UpdateProperty />
          </div>)}
          {btn && (<button onClick={click}>Cerrar</button>)}
        </div>
      </div>
    </ModalWindow>,
    document.getElementById("modal-container")
  );
};

Modal.propTypes = {
  component1: PropTypes.bool,
  component2: PropTypes.bool,
  click: PropTypes.func,
  children: PropTypes.node, // Prop type for children
};

const ModalWindow = styled.div`
  @keyframes zoom {
    0%{
       transform: scale(0);
    }
    30%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
}
.modal{
    
    display: grid !important;
    background: rgba(0, 0, 0, 0.397) !important;
    backdrop-filter: blur(5px);
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    place-items: center;
   
    
    .span{
        display: grid;
        position: absolute;
        background: white;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        padding: 10px;
        right: 10px;
        top: 10px;
        font-size: 25px;
        place-items: center;
        cursor: pointer;
        transition: all ease .2s;
        &:hover{
            background-color: #EC3337;
        }

        &::before{
            background: black;
            content: "";
            position: relative;
            width: 20px;
            height: 20px;
            clip-path: polygon(10% 0, 0 10%, 40% 50%, 0 90%, 10% 100%, 50% 60%, 90% 100%, 100% 90%, 59% 50%, 100% 10%, 90% 0, 50% 40%);
        }
        &:hover::before{
            background: white;

        }

    }



    &-container{
        animation: zoom .5s ease .4s backwards;
        position: relative;
        width: 80%;
        max-width: 1366px;
        overflow: hidden;
        height: 95%;
        z-index: 20;
        display: grid !important;
        overflow-y: scroll;
        background: white;
        border: #EC3337 5px solid ;
        border-radius: 15px;
        color: black;
        padding: 12px;
        gap: 20px;

        @media (max-width: 720px) {
            padding: 12px;
            width: 95%;
            height: 85%;
        }
        p{
            font-size: 14px;
        }
    }

    &-contain{
        display: grid !important;
    }
    &-content{
        display: flex;
    }
    &-group{
        display: grid;
   
    }
}
`