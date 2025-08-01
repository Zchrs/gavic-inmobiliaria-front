import { useEffect } from "react";
// import { useSelector } from "react-redux";
import styled from "styled-components";
import { leases } from "../../../../apiEmulated";
import { CardLeases } from "../../../components/CardLeases";
import { Empty } from "../../../components/Empty";
import { getImg } from "../../../../globalActions";


export const ClientDashboard = () => {
    // const myProperty = useSelector((state) => state.properties.propertiesInfo);
  const myProperty = leases[0];

    useEffect(() => {
      document.title = "Gavic Inmobiliaria - Panel";
    }, []);

  return (
    <DashboardClient>
      <div className="clienhome">
        <div className="clienhome-content">
          <h2>Mi vivienda actual</h2>
          { myProperty == "0" ?
            <div className="clienhome-empty">
              <Empty message="Aún no tienes una vivienda con nosotros." /> 
            </div>: 
            <div>
                <CardLeases
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
                  showToAddWish={true}
                />
          </div>
          }
        </div>
        <div className="clienhome-content">
          <h2>Pago del alquiler</h2>
          <div className="clienhome-content-info">
          <p>Fecha de inicio:</p>
          <strong>10/10/2025</strong>
          </div>
          <div className="clienhome-content-info">
          <p>Pagar antes de:</p>
          <strong>10/10/2025</strong>
          </div>
          <div className="clienhome-content-info">
          <p>Días de retraso:</p>
          <strong>No</strong>
          </div>
                    <div className="clienhome-content-info">
          <p>Total a pagar:</p>
          <strong>{myProperty.price}</strong>
          </div>
        </div>
      </div>
    </DashboardClient>
  )
}

const DashboardClient = styled.section`
display: grid;
width: 100%;
height: 100%;
align-items: start;
background: var(--bg-tertiary);
border-radius: 0 0 15px 0;
border: 1px solid var(--bg-primary-semi);
.clienhome{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 25px;
  gap: 20px;
  align-items: start;
  width: 100%;
  height: 100%;

  &-content{
    display: grid;
    padding: 14px;
    width: 100%;
    height: 100%;
    border: 1px solid var(--bg-primary-semi);
    background: var(--bg-tertiary);
    border-radius: 15px;
    
    &-info{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      gap: 10px;
      strong{
        font-size: 18px;
        font-weight: 550;
      }
      p{
        font-size: 16px;
      }
    }
}
&-empty{
  display: grid;
  position: relative;
  grid-column: 1 / 8;
  border: 1px solid var(--bg-primary-semi);
  width: 100%;
  height: 100%;
  justify-content: center;
}
}
`