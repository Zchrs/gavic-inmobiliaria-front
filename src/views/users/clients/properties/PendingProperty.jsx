
import { getImg } from "../../../../../globalActions";
import { leases } from "../../../../../apiEmulated";
import { Empty } from "../../../../components/Empty";

export const PendingProperty = () => {
    const pendingProperty = 0;
  return (
    <div>
                        { pendingProperty == "0" ?
                          <div className="clienhome-empty">
                            <Empty message="Aún no tienes solicitudes pendientes." /> 
                          </div>: 
                          <div className="current-contain">
                            <h2>Mi vivienda actual</h2>
                            <div className="flex-s">
                              <strong>Mi dirección:</strong>
                              <p>{pendingProperty.address}</p>
                            </div>
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
  )
}
