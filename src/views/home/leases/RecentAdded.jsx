/* eslint-disable no-unused-vars */
import styled from "styled-components"
import { CardLeases } from "../../../components/CardLeases"
import {leases} from "../../../../apiEmulated"
import Loader from "../../../components/Loader"



export const RecentAdded = () => {
  return (
    <AddedRecent>
      <div className="addrecent">
        <h2 className="addrecent-h2 h2-extra-medium">Añadidos recientemente</h2>
        <div className="addrecent-contain">
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
        </div>
      </div>
            </AddedRecent>
  )
}

const AddedRecent = styled.div`
    display: grid;
    width: 100%;
    height: fit-content;
    position: relative;
    
    .addrecent{
      position: relative;
      display: grid;
      align-items: start;
      width: 100%;
      height: 100%;

      &-h2{
        margin: auto;
        left: 0;
        right: 0;
          text-align: center;
          font-weight: 600;
          position: absolute;
          width: fit-content;
          top: -35px;
        }
      
      &-contain{
      display: grid;
      width: 100%;
      height: 100%;
      padding: 25px;
      clip-path: polygon(0 0, 26% 0, 28% 3%, 72% 3%, 74% 0, 100% 0, 100% 100%, 65% 100%, 63% 96%, 37% 96%, 35% 100%, 0 100%);
      background: var(--bg-secondary);
      
      @media (max-width: 1024px) {
          clip-path: polygon(0 0, 20% 0, 23% 1.8%, 77% 1.8%, 80% 0, 100% 0, 100% 100%, 65% 100%, 63% 98%, 37% 98%, 35% 100%, 0 100%);
              
            }
        @media (max-width: 920px) {
              clip-path: polygon(0 0, 8% 0, 12% 1%, 88% 1%, 93% 0, 100% 0, 100% 100%, 75% 100%, 72% 98.5%, 28% 98.5%, 25% 100%, 0 100%);
            }
        @media (max-width: 380px) {
              clip-path: polygon(0 0, 5% 0, 9% 1%, 91% 1%, 95% 0, 100% 0, 100% 100%, 75% 100%, 72% 98.5%, 28% 98.5%, 25% 100%, 0 100%);
            }

      .recently{
      position: relative;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        width: 100%;
        height: 100%;
        
        @media (max-width: 1024px) {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 820px) {
          grid-template-columns: repeat(2, 1fr);
        }
    }
  }}
`
