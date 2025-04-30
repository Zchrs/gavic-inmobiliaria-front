import styled from "styled-components"


export const Lupa = () => {
  return (
    <LuPa>

        <div className="lupa"></div>
    </LuPa>
  )
}

const LuPa = styled.div`
.lupa {
  width: 200px;
  height: 200px;
  border: 15px solid white;
  border-radius: 50%;
  position: relative;
  display: inline-block;
}

.lupa::before {
  content: "";
  width: 60px;
  height: 15px;
  background: white;
  position: absolute;
  
  bottom: -15px;
  right: -15px;
  transform: rotate(50deg);
  transform-origin: center;
}
`