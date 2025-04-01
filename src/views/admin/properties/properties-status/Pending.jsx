import styled from "styled-components"
import { ItemsCategory } from "../../../../components/ItemsCategory"


export const Pending = () => {
  return (
    <PenDing>
      <div>
        <ItemsCategory category={"pending"} title={"No hay propiedades pendientes por aprobar en este momento"} />
      </div>
    </PenDing>
)
}

const PenDing = styled.div`
display: grid;
width: 100%;
height: 100%;
place-content: center;


`
