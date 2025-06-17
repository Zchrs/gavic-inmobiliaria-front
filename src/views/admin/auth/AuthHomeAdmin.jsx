import { Link } from "react-router-dom"
import { AuthAdminRouter } from "../../../router/AppRouter"


const grid = {
    display: 'grid',
}

export const AuthHomeAdmin = () =>{

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
