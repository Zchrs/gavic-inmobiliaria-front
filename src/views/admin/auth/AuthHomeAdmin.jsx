import { Link } from "react-router-dom"
import { AuthAdminRouter } from "../../../router/AppRouter"
// import { useTranslation } from 'react-i18next';
// import { useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from "react-redux";
// import { startChecking } from "../../actions/authActions";

const grid = {
    display: 'grid',
}

export const AuthHomeAdmin = () =>{
  // const dispatch = useDispatch();
  //   const lang = useSelector(state => state.langUI.lang);
  //   const { t, i18n } = useTranslation();
  //   useEffect(() => {
  //     dispatch(startChecking());
  //       i18n.changeLanguage(lang);
  //     }, [i18n, lang, dispatch]);



    return (
        <section className="authhome" style={ grid }>
          <h1>Bienvenido</h1>

          <Link to={'/client/register'}>Registrarme</Link>
          <Link to={'/client/login'}>Iniciar sesión</Link>
          <Link to={'/'}>Volver a inicio</Link>

          <AuthAdminRouter />
        </section>
    )
}
