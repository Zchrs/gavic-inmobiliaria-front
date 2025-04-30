import styled from "styled-components"
import { ItemsCategory } from "../../../../components/ItemsCategory"


export const ForRentPropertiesw = () => {
  return (
    <ForRent>
      <div>
        <ItemsCategory 
        showRent={true} 
        showRented={true} 
        action={"Arrendamiento"} 
        showToAddWish = {false} />      
      </div>
    </ForRent>
)
}

const ForRent = styled.div`
display: grid;
width: 100%;
height: 100%;
place-content: center;


`
