import styled from "styled-components"
import { getImg } from "../../globalActions"


export const Empty = () => {
  return (
    <EmPty>
    <div>
        <img src={getImg('svg', 'empty', 'svg')} alt="" />
    </div>
    </EmPty>
  )
}

const EmPty = styled.div`
  display: grid;
  width: fit-content;
  height: fit-content;
  margin: auto;

  img{
      width: 300px;
      filter: invert(80%);
  }
`