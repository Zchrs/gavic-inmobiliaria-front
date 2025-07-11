import styled from "styled-components"

export const Spinner = () =>{
    return (
        <SpiNner>
            <div className="spinner-waves">
                <div></div>
                <div></div>
            </div>
        </SpiNner>
    )
}

const SpiNner = styled.div`
    .spinner-waves {
    display: inline-block;
    position: absolute;
    top: -12px;
    left: -14px;
    width: 35px;
    height: 35px;

    div {
        position: absolute;
        border: 3px solid #fff;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        &:nth-child(2) {
          animation-delay: -0.5s;
        }
      }
  }
 
  @keyframes lds-ripple {
    0% {
      top: 17px;
      left: 17px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 17px;
      left: 17px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 17px;
      left: 17px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 38px;
      height: 38px;
      opacity: 0;
    }
  }
`