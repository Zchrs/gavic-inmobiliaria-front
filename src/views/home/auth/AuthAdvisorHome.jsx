import { Link } from "react-router-dom"
import { AuthRouter } from "../../../router/AppRouter"
// import { useTranslation } from 'react-i18next';
// import { useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from "react-redux";
// import { startChecking } from "../../actions/authActions";

const grid = {
    display: 'grid',
}

export const AuthAdvisorHome = () => {
  // const dispatch = useDispatch();
  //   const lang = useSelector(state => state.langUI.lang);
  //   const { t, i18n } = useTranslation();
  //   useEffect(() => {
  //     dispatch(startChecking());
  //       i18n.changeLanguage(lang);
  //     }, [i18n, lang, dispatch]);



    return (
        <section className="advisorlayout" style={ grid }>
          <h1>Bienvenido</h1>

          <Link to={'/advisor/register'}>Registrarme</Link>
          <Link to={'/advisor/login'}>Iniciar sesión</Link>
          <Link to={'/'}>Volver a inicio</Link>

          <AuthRouter />
        </section>
    )
}
