
import { AuthAdminRouter } from "../router/AppRouter";
import { Link, NavLink } from "react-router-dom"

import styled from "styled-components";
import { getImg } from "../../globalActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { startCheckingAdmin } from "../actions/authActions";

export const AuthAdminLayout = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCheckingAdmin());
  }, [dispatch]);

  return (
    <AdminLayOut>
        <Link to={"/"} className="adminlayout-container-group-a">Volver al inicio</Link>
      <section className="adminlayout">
        <div className="adminlayout-container">
        <div className="adminlayout-logo">
            <img src={getImg('svg', 'logo', 'svg')} alt="logo" />
        </div>
        <div className="adminlayout-container-group">
          <NavLink className={ ({isActive}) => ` ${ isActive ? 'active' : 'adminlayout-container-group-a' } ` } to={"/admin/auth/login"}>Iniciar sesión</NavLink>
          <NavLink className={ ({isActive}) => ` ${ isActive ? 'active' : 'adminlayout-container-group-a' } ` } to={"/admin/auth/register"}>Registrarme</NavLink>
        </div>
          <AuthAdminRouter />
        </div>
        <p>Panel admin v 0.1</p>
      </section>
    </AdminLayOut>
  )
}

const AdminLayOut = styled.section`
display: grid;
width: 100%;
height: fit-content;
background: var(--bg-primary);

form{
  display: grid;
  gap: 10px;
}

.adminlayout{
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 97vh;
  place-content: center;
  place-items: center;
  padding: 0 25px;
  gap: 25px;

  &-logo{
    display: grid;
    width: 50%;
    padding-bottom: 24px;
    img{
      width: 100%;
      filter: invert(1) brightness(500%);
    }
  }

  &-container{
    display: grid;
    padding: 25px;
    width: 70%;
    height: fit-content;
    place-content: center;
    place-items: center;
    border: 1px solid white;
    overflow: hidden;
    border-radius: 10px;
    gap: 5px;
    transition: all .5s ease;

    @media (max-width: 680px) {
      width: 100%;
    }

    &-group{
      display: flex;
      gap: 10px;

      &-a{
        display: grid;
        align-items: center;
        color: var(--text-tertiary);
      }
    }
  }

}
.active{
  background: var(--bg-secondary);
  color: var(--text-primary);
  border-radius: 25px;
  padding: 5px 15px;
  align-items: center;
  font-weight: 600;
}
`