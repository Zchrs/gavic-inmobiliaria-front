import styled from "styled-components"
import { ItemsCategory } from "../../../../components/ItemsCategory"


export const Rejected = () => {
  return (
        <ReJected>
          <div>
            <ItemsCategory category={"rejected"} title={"No hay propiedades rechazadas en este momento"} />
          </div>
        </ReJected>
  )
}

const ReJected = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  place-content: center;


`
