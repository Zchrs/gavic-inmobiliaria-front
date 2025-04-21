import styled from "styled-components"
import { ItemsCategory } from "../../../../components/ItemsCategory"


export const PropertySale = () => {
  return (
    <SaLe>
      <div>
        <ItemsCategory action={"Venta"} showToAddWish = {false} />
      </div>
    </SaLe>
)
}

const SaLe = styled.div`
display: grid;
width: 100%;
height: 100%;
place-content: center;


`
