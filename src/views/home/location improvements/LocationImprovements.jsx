import styled from "styled-components"
import { getImg } from "../../../../globalActions"


export const LocationImprovements = () => {
  return (
    <Improvements>
      <div className="improvementss">
          <h2>Estamos trabajando en esta sección</h2>
          <img src={getImg('png', 'working', 'gif')} alt="" />
      </div>
    </Improvements>
  )
}

const Improvements = styled.section`
  display: grid;
  .improvementss{
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
