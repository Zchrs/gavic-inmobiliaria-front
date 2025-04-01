import styled from "styled-components"
import { ItemsCategory } from "../../../../../index"



export const Approved = () => {
  return (
    <Aproved>
    <div>
      <ItemsCategory category={"approved"} title={"No hay propiedades aprobadas en este momento"} />
    </div>
    </Aproved>
  )
}

const Aproved = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  place-content: center;


`