import { Empty } from "../../../../components/Empty";
import { leases } from "../../../../../apiEmulated";
import { getImg } from "../../../../../globalActions";

export const RejectedProperty = () => {
    const rejectadProperty = 0;
  return (
    <div>
       { rejectadProperty == "0" ?
                          <div className="clienhome-empty">
                            <Empty message="No tienes solicitudes rechazadas." /> 
                          </div>: 
                          <div className="current-contain">
                            <h2>Mi vivienda actual</h2>
                            <div className="flex-s">
                              <strong>Mi dirección:</strong>
                              <p>{rejectadProperty.address}</p>
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
