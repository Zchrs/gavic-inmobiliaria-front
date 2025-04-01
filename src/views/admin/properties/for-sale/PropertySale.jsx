import styled from "styled-components"
import { ItemsCategory } from "../../../../components/ItemsCategory"


export const PropertySale = () => {
  return (
    <ReJected>
      <div>
        <ItemsCategory category={"for-sale"} title={"No hay propiedades para la venta en este momento"} />
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
