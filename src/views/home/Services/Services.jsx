/* eslint-disable no-unused-vars */
import styled from "styled-components"
import { CardLeases } from "../../../components/CardLeases"
import {services} from "../../../../apiEmulated"
import Loader from "../../../components/Loader"
import { CardServices } from "../../../components/CardServices"



export const Services = () => {
  return (
    <SerVices>
      <h2 className="h2-extra-medium h2">Servicios</h2>
        <div className="services">
          <div className="services-recently">
            {
            // Loader ? (
            //   <p>Sin datos</p>
            // ) : leases.length === 0 ? (
            //   <p>Sin datos</p>
            // ) : (
              services.map((itemL) => (
                <CardServices
                  key={itemL.id}
                  productLink={`/products/${itemL.id}`}
                  png={itemL.img}
                  classs={"productservices "}
                  imgn="true"
                  title={true}
                  tittle={itemL.title}
                  // onClick={() => handleSetProductClick(itemL)}
                  // prodHover={() => handleSetProductClick(itemL)}
                />
              // ))
            ))}
          
          </div>
        </div>
    </SerVices>
  )
}

const SerVices = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 100px;
    .h2{
      font-weight: 600;
          text-align: center;
          color: var(--text-dark);
        }
    
    .services{
      display: grid;
      width: 100%;
      height: 100%;
      background: var(--bg-primary);

      &-recently{
        position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
          height: 100%;
          @media (max-width: 800px) {
            grid-template-columns: 1fr;
          }
      }
    }
    
`
