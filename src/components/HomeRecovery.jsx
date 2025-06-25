import styled from "styled-components"
import { RecoveryPasswordRouter } from "../router/AppRouter"
import { getImg } from "../../globalActions"
import { Link } from "react-router-dom"


export const HomeRecovery = () => {
  return (
    <RecoveryHome>
      <Link className="back" to={"/admin/auth/login"}>Volver a login</Link>
        <div className="recovery">
            <div className="recovery-logo">
                <img src={getImg('svg', 'logo', 'svg')} alt="logo" />
            </div>
            <RecoveryPasswordRouter />
        </div>
    </RecoveryHome>
  )
}

const RecoveryHome = styled.div`
display: grid;
width: 100%;
height: 100%;
min-height: 100vh;
max-width: 1920px;
place-items: center;
background: var(--bg-primary);
margin: auto;
    @media (max-width: 860px) {
      padding: 0 12px;
    }
.recovery{
    display: grid;
    border-radius: 10px;
    width: 40%;
    height: fit-content;
    border: 1px solid var(--bg-tertiary);
    align-items: start;
    gap: 25px;
    padding: 70px 100px;
    @media (max-width: 480px) {
      width: 100%;
      padding: 30px 10px;
    }

    &-logo{
    display: grid;
    width: 50%;
    height: fit-content;
    margin  : auto;
    img{
      width: 100%;
      filter: invert(1) brightness(500%);
    }
  }
}
.back{
  position: absolute;
  top: 10px;
  left: 10px;
}
`