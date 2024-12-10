/* eslint-disable no-unused-vars */
import styled from "styled-components"
import { CardLeases } from "../../../components/CardLeases"
import {leases} from "../../../../apiEmulated"
import Loader from "../../../components/Loader"



export const RecentAdded = () => {
  return (
    <AddedRecent className="pd-laterals-mini ">
      <h2 className="recently-h2 h2-extra-medium">Añadidos recientemente</h2>
        <div className="recently pd-top-bottom">
  
          {
          // Loader ? (
          //   <p>Sin datos</p>
          // ) : leases.length === 0 ? (
          //   <p>Sin datos</p>
          // ) : (
            leases.map((itemL) => (
              <CardLeases
                key={itemL.id}
                productLink={`/products/${itemL.id}`}
                addToWish={"addwishlist-red"}
                addTocart={"addcart-red"}
                img={"default"}
                sellingsText={true}
                sellings={"999"}
                priceText={true}
                price={itemL.price}
                productInfo={itemL}
                classs={"productcard background"}
                // onClick={() => handleSetProductClick(itemL)}
                // prodHover={() => handleSetProductClick(itemL)}
                jpg="true"
                description={itemL.description}
                beforePrice={itemL.previousPrice}
                title={itemL.title}
                thumbnails={itemL.thumbnails}
                // products="portatiles"
                // ratingss={true}
                // ratings={ratings}
                product_id={itemL.id}

              />
            // ))
          ))}
        
        </div>
    </AddedRecent>
  )
}

const AddedRecent = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    position: relative;
    &::before{
      clip-path: polygon(0 0, 26% 0, 28% 5%, 72% 5%, 74% 0, 100% 0, 100% 100%, 67% 100%, 65% 96%, 37% 96%, 35% 100%, 0 100%);
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 100%;
      height: 100%;
      background: var(--bg-secondary);
      
      @media (max-width: 1024px) {
            clip-path: polygon(0 0, 8% 0, 12% 2%, 88% 2%, 93% 0, 100% 0, 100% 100%, 75% 100%, 72% 98.5%, 28% 98.5%, 25% 100%, 0 100%);
          }
      @media (max-width: 380px) {
            clip-path: polygon(0 0, 5% 0, 9% 2%, 91% 2%, 95% 0, 100% 0, 100% 100%, 75% 100%, 72% 98.5%, 28% 98.5%, 25% 100%, 0 100%);
          }
        }
    
    .recently{
      position: relative;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        width: 100%;
        height: 100%;
        
        @media (max-width: 1024px) {
          grid-template-columns: repeat(2, 1fr);
        }
        
        &-h2{
          text-align: center;
        }
    }
`
