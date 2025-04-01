import styled from "styled-components"
import { ItemsCategory } from "../../../../components/ItemsCategory"


// eslint-disable-next-line react/prop-types
export const PropertiesSold = () => {
  return (
    <ReJected>
      <div>
        <ItemsCategory category={"vendidas"} title={"No hay propiedades vendidas en este momento"} />
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
