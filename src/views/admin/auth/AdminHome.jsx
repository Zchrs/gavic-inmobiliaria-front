import styled from "styled-components"
import { DonutChart, GradientChart, SimpleChart } from "../../../components/MultiChart"
import { BaseButton } from "../../../components/BaseButton"


export const AdminHome = () => {
  return (
    <HomeAdmin>
      <div className="adminhome">
        <div className="adminhome-left">
          <div className="adminhome-left-container">
            <div className="adminhome-left-container-card">
              <h2>Usuarios nuevos</h2>
              <DonutChart width="100%" height="100%" type="donut" />
              <BaseButton textLabel={true} label={"Ver detalle"} classs={"button mini-primary-soft"} />
            </div>
            <div className="adminhome-left-container-card">
              <div className="adminhome-left-container-card-titles">
                <h2>Propiedades Arrendadas</h2>
                <h3></h3>
              </div>
              <SimpleChart />
              <div className="flex-s">
              <BaseButton textLabel={true} label={"Ver detalle"} classs={"button mini-primary-soft"} />
              <BaseButton textLabel={true} label={"Aprobar"} classs={"button mini-primary-soft"} />
              </div>
            </div>
            <div className="adminhome-left-container-card">
              <h2>Propiedades recientes</h2>
              <GradientChart />
              <BaseButton textLabel={true} label={"Ver detalle"} classs={"button mini-primary-soft"} />
            </div>
          </div>
          <div className="adminhome-left-mediumcontainer">
            <div className="adminhome-left-mediumcontainer-card">
                          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              
            </p>
            </div>
            <div className="adminhome-left-mediumcontainer-card">
                          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis,
            </p>
            </div>
            <div className="adminhome-left-mediumcontainer-card">
                          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis,
            </p>
            </div>
          </div>
          <div className="adminhome-left-footer">
            <div className="adminhome-left-footer-card"></div>
            <div className="adminhome-left-footer-card"></div>
            <div className="adminhome-left-footer-card"></div>
            <div className="adminhome-left-footer-card"></div>
            <div className="adminhome-left-footer-card"></div>
          </div>
        </div>
        <div className="adminhome-right">
          <div className="adminhome-right-card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis, 
              atque voluptate sit sint hic ipsam, obcaecati in.
            </p>
            <div className="flex-s">
            <BaseButton textLabel={true} label={"Ver detalle"} classs={"button mini-primary-soft"} />
            <BaseButton textLabel={true} label={"Ver detalle"} classs={"button mini-primary-soft"} />
            </div>
          </div>
          <div className="adminhome-right-card-medium">
            <div className="adminhome-right-card-medium-card">
              <div className="flex-s">
                <img src="" alt="" />
                <p>title</p>
              </div>
              <div className="flex-s">
                <img src="" alt="" />
                <p>title</p>
              </div>
            </div>
            <div className="adminhome-right-card-medium-card">
              <div className="flex-s">
                <img src="" alt="" />
                <p>title</p>
              </div>
              <div className="flex-s">
                <img src="" alt="" />
                <p>title</p>
              </div>
            </div>
          </div>
          <div className="adminhome-right-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti soluta laboriosam harum ex architecto distinctio! Saepe, 
              inventore culpa cumque minima eveniet debitis,
            </p>
          </div>
          <div className="adminhome-right-footer">
            <div className="adminhome-right-footer-card">

              <div></div>
            </div>
            <div className="adminhome-right-footer-card">

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </HomeAdmin>
  )
}

const HomeAdmin = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  
  .adminhome{
    display: grid;
    grid-template-columns: 70.6% 29%;
    align-items: start;
    height: fit-content;
    gap: 5px;

    &-left{
      display: grid;
      gap: 10px;
      &-container{
        width: 100%;
        height: 100%;
        display: flex;
        gap: 2px;
        
        &-card{
          display: grid;
          height: fit-content;
          padding: 24px;
          background: #50574f;
          align-items: center;
          align-content: center;
          gap: 10px;
          color: white;
          &:nth-child(1){
            /* width: 50%; */
            border-radius: 25px 5px 25px 25px ;
          }
          &:nth-child(2){
            border-radius: 5px 5px 25px 25px ;
            /* width: 100%; */
          }
          &:nth-child(3){
            border-radius: 5px 25px 25px 25px ;
            /* width: 90%; */
          }
          &-titles{
            width: fit-content;
            height: fit-content;
            margin: 0;
            padding: 0;
            h2, h3{
              width: fit-content;
              height: fit-content;
            }
          }
        }
      }
      &-mediumcontainer{
        display: flex;
        width: 100%;
        gap: 10px;
        &-card{
          height: 100%;
          padding: 24px;
          color: white;
          border-radius: 25px;
          align-content: space-between;
          &:nth-child(1){
            background: #cdcfc2;
            width: 60%;
          }
          &:nth-child(2){
            background: #7a8a70;
          }
          &:nth-child(3){
            background: #cdcfc2;
          }
        }
      }
      &-footer{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: fit-content;
        padding: 24px;
        border-radius: 25px;
        background: #50574f;

          &-card{
            display: grid;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: #cdcfc2;
          }
      }
    }
    &-right{
      display: grid;
      gap: 10px;
      align-content: start;

      &-card{
        display: grid;
        height: fit-content;
        background: #d7d8ca;
        align-content: space-between;
        border-radius: 25px;
        padding: 24px;
        gap: 10px;
        
        &-medium{
          display: flex;
          gap: 10px;
          &-card{
            display: grid;
            width: 100%;
            height: 100%;
            background: #50574f;
            gap: 5px;
            padding: 24px;
            border-radius: 25px;
          }
        }
      }
      &-content{
        width: 100%;
        height: 100%;
        padding: 24px;
        display: grid;
        border-radius: 25px;
        background: #d7d8ca;
        gap: 10px;
      }
      &-footer{
        width: 100%;
        height: fit-content;
        gap: 10px;
        display: flex;
        &-card{
          border-radius: 25px;
          display: grid;
          padding: 24px;
          &:nth-child(1){
            background: #d7d8ca;
          }
          &:nth-child(2){
            background: #50574f;
          }
        }
      }
    }
  }
  `
