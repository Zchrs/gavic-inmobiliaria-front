import styled from "styled-components"
import { getImg } from "../../../../globalActions"


export const Appraisals = () => {
  return (
    <AppRaisals>
      <div className="appraisals">
          <h2>Estamos trabajando en esta sección</h2>
          <img src={getImg('png', 'working', 'gif')} alt="" />
      </div>
    </AppRaisals>
  )
}

const AppRaisals = styled.section`
  display: grid;
  .appraisals{
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
