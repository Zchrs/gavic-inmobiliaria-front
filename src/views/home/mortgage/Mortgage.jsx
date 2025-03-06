import styled from "styled-components"
import { getImg } from "../../../../globalActions"


export const Mortgage = () => {
  return (
    <MortGaje>
      <div className="mortgage">
          <h2>Estamos trabajando en esta sección</h2>
          <img src={getImg('png', 'working', 'gif')} alt="" />
      </div>
    </MortGaje>
  )
}

const MortGaje = styled.section`
  display: grid;
  .mortgage{
    display: grid;
    width: 100%;
    height: 100%;
    place-items: center;
    gap: 2rem;
    padding: 2rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
`
