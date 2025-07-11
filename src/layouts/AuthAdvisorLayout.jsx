
import { AuthAdvisorRouter } from "../router/AppRouter";
import { Link, NavLink } from "react-router-dom"
// import { useTranslation } from 'react-i18next';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useDispatch } from "react-redux";
// import { startChecking } from "../actions/authActions";
import styled from "styled-components";
import { getImg } from "../../globalActions";

export const AuthAdvisorLayout = () => {

  return (
    <AdvisorLayOut>
        <img className="background" loading="lazy" src={getImg('jpg', 'asesores', 'webp')} alt="" />
        <Link to={"/"} className="backhome">Volver al inicio</Link>
      <section className="advisorlayout">
        <div className="advisorlayout-logo">
            <img src={getImg('svg', 'logo', 'svg')} alt="logo" />
        </div>
        <div className="advisorlayout-container">
        <div className="advisorlayout-container-group">
          <NavLink className={ ({isActive}) => ` ${ isActive ? 'active' : '' } ` } to={"/advisor/auth/register"}>Registrarme</NavLink>
          <NavLink className={ ({isActive}) => ` ${ isActive ? 'active' : '' } ` } to={"/advisor/auth/login"}>Iniciar sesión</NavLink>
        </div>
          <AuthAdvisorRouter />
        </div>
      </section>
    </AdvisorLayOut>
  )
}

const AdvisorLayOut = styled.section`
display: grid;
width: 100%;
height: fit-content;
.backhome{
  width: fit-content;
  height: fit-content;
  z-index: 20;
  position: absolute;
  top: 10px;
  left: 10px;
  color: var(--text-tertiary);
}
.background{
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 60%;
        @media (max-width: 720px) {
          width: 100%;
          object-fit: cover;
        }
    }
    
.advisorlayout{
    display: flex;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    min-height: 100vh;
    align-items: start;
    padding: 0 100px;
    gap: 100px;
    overflow: hidden;
    &::before{
        content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 55%;
      height: 100%;
      background: var(--bg-primary);
      clip-path: polygon(0 0, 100% 0, 73% 100%, 0% 100%);
    }
    @media (max-width: 920px) {
      align-items: start;
      display: grid;
      padding: 20px;
      gap: 50px;
      &::before{
          content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        display: none;
      }
    }
    @media (max-width: 480px) {
      display: grid;
      padding: 20px;
      gap: 0px;
      &::before{
          content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        display: none;
      }
    }

    &-logo{
        display: grid;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        z-index: 50;
        img{
            width: 70%;
            filter: invert(100%) brightness(500%);
        }
        @media (max-width: 780px) {
          margin-top: 20px;
          width: fit-content;
          height: fit-content;
          img{
            width:80%;
            padding: 0;
          }
        }
        
    }
    
    &-container{
        position: relative;
        align-items: start;
        display: grid;
        width: 70%;
        height: fit-content;
        padding: 10px;
        border-radius: 5px;
        overflow: hidden;
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-tertiary);
            opacity: 0.7;
            backdrop-filter: blur(10px);
            
        }

     @media (max-width: 1024px) {
      align-items: start;
      display: grid;
      padding: 20px;
    }

        @media (max-width: 480px) {
          margin-top: 20px; 
            padding: 25px 12px;
            width: 100%;
        }

        &-group{
          width: 80%;
            align-self: baseline;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-self: baseline;
            z-index: 20;
            gap: 40px;
    
            a{
              padding-left: 10px;
                font-size: 20px;
                color: var(--text-dark);
                cursor: pointer;

                @media (max-width: 480px) {
                  display: grid;
                  align-items: start;
                  width: 100%;
                    font-size: 16px;
                    margin: 0;
                }
              }
        }
    }
    &-footer{
        display: grid;
        width: 100%;
        height: 70px;
        background: #727376;
    }
    .active{
        border-bottom: var(--bg-primary) 3px solid;
        a{
            color: #EC3337;
        }
    }
}


.auth{
    animation: smooth .5s ease;
    position: relative;
    gap: 25px;
    display: grid;
    width: 80%;
    height: fit-content;
    align-items: center;
    border-radius: 0 0 5px 5px;
    
   
    // border: #EC3337 1px solid;

    @media (max-width: 550px) {
        width: 100%;
    }
    @media (max-width: 300px) {
        padding: 25px 0;
        width: 70%;
        margin: 0;
    }
    
    
    form{
        position: relative;
        display: grid;
        gap: 7px;
        margin: 0;
        align-items: start;
        align-content: start;

        .a{
            width: fit-content;
            color: #EC3337;
            &:hover{
                color: #f0abab;
            }
        }

        @media (max-width: 410px) {
            padding: 0 0;
        }

        
        .span{
            top: -8px;
            left: 21px;
            position: absolute;
            color: #EC3337;
        }

        .svg{
            position: absolute;
            right: 65px;
            top: 15px;
            width: 13px;
            fill: #34353656;
            cursor: pointer;

            &:hover{
               filter: invert(100%);
            }
        }
 
    }
    &-gruop2{
        margin: 0 auto;
        position: relative;
        display: grid;
        place-items: center;
        align-self: baseline;
        gap: 20px;
        
        &::before{
          content: '';
          position: absolute;
          top: 10px;
          width: 300%;
          height: 1px;
          background: var(--bg-secondary);
        }


        h3{
          display: grid;
          align-items: center;
            z-index: 10;
            margin: auto;
            padding: 0 15px;
            width: fit-content;
            height: fit-content;
            background: var(--bg-secondary);
            border-radius: 20px;
            font-size: 14px;
            text-align: center;
            font-weight: 300;
            color: var(--text-tertiary);
            
        }
    }
    &-social{
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        text-align: center;
        justify-content: center;
        img{
            width: 50px;
            cursor: pointer;
        }
       
    }
    &-tyc{
        text-align: center;
        margin: 0 auto;
        display: grid;        
    }
    &-input{
      align-items: start;
      align-content: start;
      display: grid;
      height: 30px;
      width: 100%;
      /* border: #EC3337 1px solid; */
      margin: 0;
      padding: 0;
    }
}


@keyframes smooth {
    0% {
      opacity: 0;
      transform: translateX(50%);
    }
  
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

// fin Country select component
`