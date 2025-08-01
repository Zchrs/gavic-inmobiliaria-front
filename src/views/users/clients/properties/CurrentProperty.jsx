// import { getImg } from "../../../../../globalActions";
import { leases } from "../../../../../apiEmulated";
import { getImg } from "../../../../../globalActions";
// import { CardLeases } from "../../../../components/CardLeases";
import { Empty } from "../../../../components/Empty";
import styled from "styled-components";

export const CurrentProperty = () => {
  const myProperty = leases[0];
  return (
    <CurrEnt>
      <div className="current">
                  { myProperty == "0" ?
                    <div className="clienhome-empty">
                      <Empty message="Aún no tienes una vivienda con nosotros." /> 
                    </div>: 
                    <div>
                        {/* <CardLeases
                          key={myProperty.id}
                          propertyRef={myProperty.ref}
                          area={myProperty.area}
                          quantityCloset={myProperty.closets}
                          quantityRooms={myProperty.quantityBathrooms}
                          location={myProperty.district || "Ubicación no disponible"}
                          addToWish="addwishlist-red"
                          img={myProperty.img || getImg('jpg', `casa`, 'webp')}
                          sellingsText={true}
                          priceText={true}
                          price={myProperty.price || "Consultar"}
                          productInfo={myProperty}
                          boxFlex={true}
                          classs="productcard background"
                          jpg="true"
                          title={myProperty.title || "Propiedad sin título"}
                          thumbnails={myProperty.images || []}
                        /> */}
                        <div className="current-content">
                          {<img src={getImg('jpg', `${leases[0].img}`, 'webp')} alt="" />}
                        </div>
                        <div className="current-flex">
                          <img src={getImg('jpg', `${leases[0].thumbnails[0]}`, 'webp')} alt="" />
                          <img src={getImg('jpg', `${leases[0].thumbnails[1]}`, 'webp')} alt="" />
                          <img src={getImg('jpg', `${leases[0].thumbnails[2]}`, 'webp')} alt="" />
                          <img src={getImg('jpg', `${leases[0].thumbnails[3]}`, 'webp')} alt="" />
                        </div>
                  </div>
                  }
      </div>
    </CurrEnt>
  )
}

const CurrEnt = styled.section`
display: grid;
width: 100%;
height: 100%;

.current{
  display: grid;
  align-items: start;
  width: 100%;
  height: 100%;
  gap: 10px;
  padding: 50px;

&-content{
  display: grid;
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
}
&-flex{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 10px;
  img{
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 15px;
  }
}
}
`
