/* eslint-disable no-unused-vars */
import styled from "styled-components"
import { CardLeases } from "../../../components/CardLeases"
import {leases} from "../../../../apiEmulated"
import Loader from "../../../components/Loader"



export const RecentAdded = () => {
  return (
    <AddedRecent className="pd-laterals-mini">
      <h2 className="recently-h2 h2-extra-simple">Añadidos recientemente</h2>
        <div className="recently">
  
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
    
    .recently{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        width: 100%;
        height: 100%;
        padding-bottom: 50px;
        &-h2{
          text-align: center;
          margin: 100px 0;
        }
    }
`
