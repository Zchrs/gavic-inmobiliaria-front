/* eslint-disable no-unused-vars */
import styled from "styled-components"
import {services} from "../../../../apiEmulated"
import {Loader, CardServices} from "../../../../index"
import { useState } from "react"



export const Services = () => {
  const [loading, setLoading] = useState(false)
  return (
    <SerVices>
      <h2 className="h2-extra-medium h2">Servicios</h2>
        <div className="services">
          <div className="services-recently">
            {
            loading ? (
              <Loader/>
            ) : services.length === 0 ? (
              <p>Sin datos</p>
            ) : (
              
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
              )
              
            ))
            }
          
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
    .h2{
      margin-top: -30px;
      font-weight: 600;
          text-align: center;
          color: var(--text-dark);
        }
       
    
    .services{
      display: grid;
      width: 100%;
      height: 100%;
      background: var(--bg-primary);
      z-index: 10;
      clip-path: polygon(0 0, 35% 0, 37% 8%, 63% 8%, 65% 0, 100% 0, 100% 100%, 65% 100%, 63% 96%, 37% 96%, 35% 100%, 0 100%);

      
      @media (max-width: 1024px) {
        clip-path: polygon(0 0, 35% 0, 37% 9%, 63% 9%, 65% 0, 100% 0, 100% 100%, 75% 100%, 72% 98.5%, 100% 100%, 25% 100%, 0 100%);
          }
        
      @media (max-width: 920px) {
        clip-path: polygon(0 0, 25% 0, 27% 2.5%, 72% 2.5%, 75% 0, 100% 0, 100% 100%, 75% 100%, 72% 98.5%, 100% 100%, 25% 100%, 0 100%);
          }
        

      &-recently{
        margin-top: -30px;
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
