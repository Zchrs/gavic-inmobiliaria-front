/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import { getFile, getImg } from "../../globalActions"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { startChecking, startLogout, startLogoutAdmin, startLogoutAdvisor } from "../actions/authActions";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Avatar = ({
    avtsmall, 
    avtMedium, 
    img, 
    clas, 
    dropData, 
    classWhite, 
    nameSmall, 
    userAdmin, 
    userAdvisor, 
    userClient,
    classs
}) => {
    const user = useSelector((state) => state.auth.user);
    const advisor = useSelector((state) => state.authAdvisor.advisor);
    const admin = useSelector((state) => state.authAdmin.admin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(startChecking());
    }, [dispatch]);

    const handleLogout = () => {
    if (admin) {
        dispatch(startLogoutAdmin());
        navigate("/admin/auth/login");
    } else if (advisor) {
        dispatch(startLogoutAdvisor());
        navigate("/advisor/auth/login");
    } else {
        dispatch(startLogout());
        navigate("/client/auth/login");
    }
    };
    
  return (
    <AvaTar>
      <div className={clas}>
          {avtMedium && (<div className="avatar-default"><img src={getFile('png', `${img}`, 'png')} alt="" /></div>)}
          {avtsmall && (<div className="tumb-default"><img src={getImg('png', `${img}`, 'png')} alt="" /></div>)}
          { userClient && <span className={classWhite}>
            {user ? <strong className={nameSmall}>{user.name} {user.lastname}</strong> : <strong className={nameSmall}>Default name</strong>}
          </span>}
          {userAdmin && <span className={classWhite}>
            {admin ? <strong className={nameSmall}>{admin.fullname}</strong> : <strong className={nameSmall}>Default name</strong>}
          </span>}
          { userAdvisor && <span className={classWhite}>
            {advisor ? <strong className={nameSmall}>{advisor.name} {advisor.lastname}</strong> : <strong className={nameSmall}>Default name</strong>}
          </span>}
          {dropData && (<div className={classs}>
              <button onClick={handleLogout}><i><img src={getFile('svg', 'off', 'svg')} alt="" /></i>Cerrar sesión</button>
          </div>)}
      </div>
    </AvaTar>
  )
}

const AvaTar = styled.div`
.avatar{
    position: relative;
    cursor: pointer;
    display: grid;
    gap: 2px;
    align-items: start;
    text-align: center;
    position: relative;
    height: fit-content;
    width: 100%;
    height: 100%;
    z-index: 50;
    @media (max-width: 920px) {
        display: flex;
    }
    @media (max-width: 300px) {
        gap: 5px;
        
    }
    &-default{
        
        display: grid;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        @media (max-width: 920px) {
            width: 50px;
            height: 50px;
        }
    }
    .namesmall{
        font-size: 8px;
        font-weight: 700;
        padding: 0;
        position: absolute;
        width: 100%;
        left: 0px;
        bottom: 0;

    }
    .namepanel{
        display: flex;
        text-align: center;
        font-weight: 600;
        width: 150%;
        margin-left: -17px;
    }
    &.white{
        color: white;
        font-size: 11px;
        font-weight: 400;
    }
    &.black{
        color: black;
        font-size: 11px;
        font-weight: 400;
    }

    &-usersession{
        display: grid;
        position: absolute;
        gap: 1px;
        z-index: 999;
        top: 32px;
        left: -145px;
        padding: 0px 0px;
        width: 280px;
        height: fit-content;
        transform: scaleY(0);
        background: white;
        border-radius: 10px;
        transition: all ease .3s;
        box-shadow: gray 1px 1px 4px, gray -1px -1px 4px, ;
        cursor: default;
        overflow: hidden;

        hr{
            margin: 5px 0;
        }

        @media (max-width: 301px) {
            left: -192px;
        }

        button{
            display: flex;
            text-decoration: none;
            font-size: 17px;
            border: none;
            font-weight: 400;
            cursor: pointer;
            gap: 5px;
            margin: 0;
            padding: 0;
            background: transparent;
            place-items: center;
            align-self: center;
            color: rgb(68, 66, 66);
            &:hover{
                color: #EC3337;
                img{
                    filter: grayscale(0%);
                    
                }
            }
            &:focus-visible{
                border: none;
                outline: none;
            }
            &:focus{
                border: none;
                outline: none;
            }

        }

        a, i{
            color: rgb(68, 66, 66);
            text-decoration: none;
            font-size: 17px;
            border: none;
            text-align: left;
            font-weight: 400;

            img{
                top: 0;
                left: 0;
                width: 18px;
                fill: #EC3337;
                filter: grayscale(200%);
            }
        
            &:hover{
                color: #EC3337;
                img{
                    filter: grayscale(0%);
                    
                }
            }
        }


    }
    &-dinamyc{
        display: grid;
        position: absolute;
        gap: 1px;
        z-index: 999;
        top: 0px;
        left: 0;
        padding: 0px 0px;
        width: 100%;
        height: fit-content;
        transform: translateY(-100%);
        background: white;
        border-radius: 10px;
        transition: all ease .3s;
        box-shadow: gray 1px 1px 4px, gray -1px -1px 4px, ;
        cursor: default;
        overflow: hidden;

        hr{
            margin: 5px 0;
        }

        @media (max-width: 301px) {
            left: -192px;
        }

        button{
            display: flex;
            text-decoration: none;
            font-size: 14px;
            border: none;
            font-weight: 400;
            cursor: pointer;
            gap: 5px;
            margin: 0;
            padding: 0;
            background: transparent;
            place-items: center;
            align-self: center;
            color: rgb(68, 66, 66);
            &:hover{
                color: #EC3337;
                img{
                    filter: grayscale(0%);
                    
                }
            }
            &:focus-visible{
                border: none;
                outline: none;
            }
            &:focus{
                border: none;
                outline: none;
            }

        }

        a, i{
            color: rgb(68, 66, 66);
            text-decoration: none;
            font-size: 17px;
            border: none;
            text-align: left;
            font-weight: 400;

            img{
                top: 0;
                left: 0;
                width: 18px;
                fill: #EC3337;
                filter: grayscale(200%);
            }
        
            &:hover{
                color: #EC3337;
                img{
                    filter: grayscale(0%);
                    
                }
            }
        }


    }
    &:hover .avatar-usersession{
        padding:10px 15px;
        transform: scaleY(1);
        transition: all ease .3s;
        left: -145px;
    }
    &:hover .avatar-dinamyc{
        padding:10px 15px;
        transform: translateY(1%);
        transition: all ease .3s;
        left: 0;
    }

    &-box{
        border-top: rgba(128, 128, 128, 0.482) 1px solid; 
        border-bottom: rgba(128, 128, 128, 0.482) 1px solid; 
        padding: 15px 0;
        margin: 15px 0;
        display: grid;
        text-align: left;
        a{
            color: rgb(128, 125, 125);
            font-size: 16px;
        }
    }


    
    span{
        color: black;
        font-size: 18px;

    }

    img{
        width: 100%;
        @media (max-width: 920px) {
            width: 40px;
            height: 40px;
            margin: 0 auto;
        }
    }
}


.tumb{
    display: flex;
    gap: 7px;
    width: fit-content;
    position: relative;

    text-align: center;
    align-items: center;
    // border: yellow 1px solid;
    @media (max-width: 300px) {
        display: grid;
        gap: 1px;
        margin: 0;
    }

    &-default{
        margin: auto;
        display: grid;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        overflow: hidden;
        align-items: center;
        strong{
            margin-top: 20px;
        }
    }
    
    span{
        color: black;
        font-size: 15px;
        strong{
            font-weight: 500;
            font-size: 11px;
        }
        @media (max-width: 500px) {
            
            strong{
                font-weight: 500;
                font-size: 15px;
            }
        }
        @media (max-width: 300px) {
            text-align: left;
            line-height: normal;
            strong{
                font-weight: 500;
                font-size: 10px;
            }
        }
    }

    img{
        width: 30px;
        @media (max-width: 500px) {
            width: 100%;
        }
    }
}
.white{
    color: white;
    p, span{
        color: white;
    }
}
`
