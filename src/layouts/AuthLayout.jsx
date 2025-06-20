
import { AuthRouter } from "../router/AppRouter";
import { Link, NavLink } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { startChecking } from "../actions/authActions";
import styled from "styled-components";
import { getImg } from "../../globalActions";

export const AuthLayout = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  return (
    <AuthLayOut>
        <img className="background" loading="lazy" src={getImg('svg', 'auth', 'webp')} alt="" />
        <Link to={"/"} className="backhome">Volver al inicio</Link>
      <section className="authlayout">
        <div className="authlayout-logo">
            <img src={getImg('svg', 'logo', 'svg')} alt="logo" />
        </div>
        <div className="authlayout-container">
        <div className="authlayout-container-group">
          <NavLink className={ ({isActive}) => ` ${ isActive ? 'active' : '' } ` } to={"/auth/client/register"}>Registrarme</NavLink>
          <NavLink className={ ({isActive}) => ` ${ isActive ? 'active' : '' } ` } to={"/auth/client/login"}>Iniciar sesión</NavLink>
        </div>
          <AuthRouter />
        </div>
      </section>
    </AuthLayOut>
  )
}

const AuthLayOut = styled.section`
display: grid;
width: 100%;
height: fit-content;
align-items: start;
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
        @media (max-width: 1024px) {
          width: 100%;
          object-fit: cover;
        }
    }
    
.authlayout{
    display: flex;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: space-between;
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
      background: var(--bg-secondary);
      clip-path: polygon(0 0, 100% 0, 73% 100%, 0% 100%);
    }
    @media (max-width: 1024px) {
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
            filter: invert(11%) sepia(38%) saturate(500%) hue-rotate(180deg) brightness(92%) contrast(98%);
        }
        @media (max-width: 1024px) {
          margin-top: -100px;
          width: fit-content;
          height: fit-content;
          img{
            width:80%;
            margin: auto;
            padding: 0;
            filter: invert(100%) brightness(500%);
          }
        }

        @media (max-width: 480px) {
            font-size: 10px;
            margin-top: 20px;
        }
        
        @media (max-width: 399px) {
            font-size: 10px;
            margin-top: 30px;
        }
        
    }
    
    &-container{
        position: relative;
        align-items: start;
        display: grid;
        width: 80%;
        height: fit-content;
        border-radius: 5px;
        overflow: hidden;
        padding: 10px 0 25px 0;
        
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
          padding: 25px 12px;
          width: 100%;
          height: fit-content;
          }
          
          @media (max-width: 480px) { 
            padding: 15px 12px;
        }
          @media (max-width: 380px) {
            width: 100%;
            padding: 15px 12px;
        }

        &-group{
          width: 80%;
          height: fit-content;
            align-items: start;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            z-index: 20;
            gap: 40px;
    
            a{
              padding-left: 10px;
                font-size: 20px;
                color: var(--text-dark);
                cursor: pointer;

              @media (max-width: 1024px) {
                  width: 100%;
                  font-size: 16px;
                  margin: 0;
              }

              @media (max-width: 480px) {
                  font-size: 14px;
                  margin: 0;
              }
              
              @media (max-width: 399px) {
                    font-size: 11px;
                    gap: 10px;
                    margin:0;
                    padding: 0;
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
            font-size: 12px;
        }
    }
}


.auth{
    animation: smooth .5s ease;
    position: relative;
    margin: auto;
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
        width: 100%;
        margin: 0;
    }
    
    
    .form{
        position: relative;
        display: grid;
        gap: 7px;
        margin: 0;
        width: 100%;

        .a{
          display: grid;
            width: fit-content;
            color: #EC3337;
            &:hover{
                color: #f0abab;
            }
        }

        @media (max-width: 410px) {
            padding: 0 0;
        }

        @media (max-width: 380px) {
          width: 100%;
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
          background: var(--bg-secondary-semi-soft);
        }


        h3{
          display: grid;
          align-items: center;
            z-index: 10;
            margin: auto;
            padding: 0 15px;
            width: fit-content;
            height: fit-content;
            background: var(--primary-semi);
            border-radius: 20px;
            font-size: 14px;
            text-align: center;
            font-weight: 500;
            color: var(--text-black);
            
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
        /* background: var(--bg-tertiary); */
        font-size: 12px;
        text-align: center;
        margin: auto;
        padding: 5px;
        display: grid;
        width: 70%;
        @media (max-width: 399px) {
          font-size: 10px;
          width: 100%;
        }
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