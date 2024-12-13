
import { AuthRouter } from "../router/AppRouter";
import { NavLink } from "react-router-dom"
// import { useTranslation } from 'react-i18next';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useDispatch } from "react-redux";
// import { startChecking } from "../actions/authActions";
import styled from "styled-components";
import { getImg } from "../../globalActions";

export const AuthLayout = () => {

  // const dispatch = useDispatch();

  // const lang = useSelector(state => state.langUI.lang);
  // const { t, i18n } = useTranslation();

  // useEffect(() => {
  //   i18n.changeLanguage(lang);
  //   dispatch(startChecking());
  // }, [i18n, lang, dispatch]);

  return (
    <AuthLayOut>
        <img className="background" loading="lazy" src={getImg('svg', 'auth', 'webp')} alt="" />
      <section className="authlayout">
        <div className="authlayout-logo">
            <img src={getImg('svg', 'logo', 'svg')} alt="logo" />
        </div>
        <div className="authlayout-container">
        <div className="authlayout-container-group">
          <NavLink className={ ({isActive}) => ` ${ isActive ? 'active' : '' } ` } to={"/auth/register"}>Registrarme</NavLink>
          <NavLink className={ ({isActive}) => ` ${ isActive ? 'active' : '' } ` } to={"/auth/login"}>Iniciar sesión</NavLink>
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

.background{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
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
      background: var(--bg-primary);
      clip-path: polygon(0 0, 100% 0, 73% 100%, 0% 100%);
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
    }
    
    &-container{
        position: relative;
        align-items: center;
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
        
        @media (max-width: 980px) {
          padding: 25px 12px;
          width: 100%;  
        }
        
        @media (max-width: 300px) {
            padding: 25 12px;
            
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

                @media (max-width: 380px) {
                    font-size: 17px;
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
        width: 70%;
        margin: 0;
    }
    
    
    form{
        position: relative;
        display: grid;
        gap: 15px;
        margin: 0;
        align-self: baseline;

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
          right: 0;
          margin: auto;
          top: 12px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--bg-secondary);
        }


        h3{
            z-index: 10;
            margin: 0 auto;
            padding: 0 15px;
            width: fit-content;
            background: var(--bg-secondary);
            border-radius: 20px;
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

  // div contenedor
  .ReactSelectFlags-module_container__SFuNT {
    border-radius: 12px !important;
    width: 100% !important;
    height: 45px !important;
    color: black !important;
    @media (max-width: 550px) {
        height: 70px !important;
        
    }
    input{
        height: 100% !important;
    }
}

// Country select component
.ReactSelectFlags-module_selectWrapper__I7wcI{
    height: 100% !important;
    // border: #727376 1px solid;
    color: black !important;
    outline: 0 !important;
}

// input
.ReactSelectFlags-module_searchSelect__O6Fp2{
    background: transparent !important;
    border-radius: 8px !important;
    padding: 12px 45px !important;
    color: black !important;
    font-weight: 400;
    &::placeholder{
        font-size: 15px !important;
        color: #bdbbbb !important;
    }

    @media (max-width: 550px) {
        font-size: 22px !important;
        padding: 12px 60px !important;
    }
}
.ReactSelectFlags-module_optionsWrapper__ryj1d{
    border-radius: 8px !important;
}
// img up
.ReactSelectFlags-module_closeIcon__t4cEW{
    fill: #bec1c6 !important;
    width: 35px !important;
    height: 35px !important;
}
.ReactSelectFlags-module_openIcon__Bgn1-{
    fill: #505153 !important;
    width: 35px !important;
    height: 35px !important;
}
// img close
.ReactSelectFlags-module_clearIcon__EdJlf{
    width: 15px !important;
    height: 15px !important;
    right: 50px !important;
}

// img bandera 
.ReactSelectFlags-module_selectedFlagIcon__i5u-N{
    width: 30px !important;
    @media (max-width: 550px) {
        height: 50px !important;
        left: 20px !important;
    }
}

// option flag
.ReactSelectFlags-module_optionFlag__4Hybz{
    margin: 5px 0;

    svg{
        width: 50px !important;
        height: 20px !important;
        @media (max-width: 550px) {
            width: 50px !important;
            height: 25px !important;
        }
    }
}

// fin Country select component
`