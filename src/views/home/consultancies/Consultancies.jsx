import styled from "styled-components"
import { getImg } from "../../../../globalActions"


export const Consultancies = () => {
  return (
    <ConSultancies>
      <div className="consultancies">
          <h2>Estamos trabajando en esta sección</h2>
          <img src={getImg('png', 'working', 'gif')} alt="" />
      </div>
    </ConSultancies>
  )
}

const ConSultancies = styled.section`
  display: grid;
  .consultancies{
    display: grid;
    width: 100%;
    height: 100%;
    place-items: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    img{
      width: 30%;
      @media (max-width: 768px){
        width: 80%;
      }
    }
  }
`
