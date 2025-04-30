import styled from "styled-components";
import { ItemsCategory } from "../../../../components/ItemsCategory";

export const Rented = () => {
  return (
    <ReJected>
      <div>
        <ItemsCategory
          action={"Arrendado"}
          title={"No hay propiedades alquiladas en este momento"}
          showRentedText={true}
        />
      </div>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni
        consequuntur accusantium possimus ab, ex eius nemo quibusdam. Architecto
        quis nulla minima provident qui eos aut laudantium perspiciatis dicta
        nam?
      </p> */}
    </ReJected>
  );
};

const ReJected = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  place-content: center;
`;
