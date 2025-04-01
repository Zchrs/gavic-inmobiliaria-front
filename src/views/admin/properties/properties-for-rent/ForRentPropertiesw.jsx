import styled from "styled-components"
import { ItemsCategory } from "../../../../components/ItemsCategory"


export const ForRentPropertiesw = () => {
  return (
    <ForRent>
      <div>
        <ItemsCategory category={"for-rent"} title={"No hay propiedades para alquilar en este momento"} />
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
