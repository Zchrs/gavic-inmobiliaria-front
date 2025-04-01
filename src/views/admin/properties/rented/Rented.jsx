import styled from "styled-components"
import { ItemsCategory } from "../../../../components/ItemsCategory"


export const Rented = () => {
  return (
    <ReJected>
      <div>
        <ItemsCategory category={"rented"} title={"No hay propiedades alquiladas en este momento"} />
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
