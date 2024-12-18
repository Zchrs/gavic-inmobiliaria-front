import styled from "styled-components";
import {
  AreaChart,
  CandlesChart,
  GradientChart,
  SimpleChart,
} from "../../../components/MultiChart";
import { BaseButton } from "../../../components/BaseButton";

export const AdminHome = () => {
  return (
    <HomeAdmin>
      <div className="adminhome">
        <div className="adminhome-left">
          <div className="adminhome-left-container">
            <div className="adminhome-left-container-card">
              <h2>Usuarios</h2>
              <AreaChart />
              <div className="adminhome-left-mediumcontainer-card-btn">
                <BaseButton
                  textLabel={true}
                  label={"Ver detalle"}
                  classs={"button little-primary-gradient"}
                />
              </div>
            </div>
            <div className="adminhome-left-container-card">
              <div className="adminhome-left-container-card-titles">
                <h2>Propiedades</h2>
              </div>
              <SimpleChart />
              <div className="flex-s">
                <BaseButton
                  textLabel={true}
                  label={"Ver detalle"}
                  classs={"button button little-primary-gradient"}
                />
              </div>
            </div>
            <div className="adminhome-left-container-card">
              <h2>Ventas</h2>
              <GradientChart />
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button button little-primary-gradient"}
              />
            </div>
          </div>
          <div className="adminhome-left-mediumcontainer">
            <div className="adminhome-left-mediumcontainer-card">
              <h2>Hipotecas</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti soluta laboriosam harum ex architecto distinctio!
                Saepe, inventore culpa cumque minima eveniet debitis, Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                soluta laboriosam harum ex architecto distinctio! Saepe,
              </p>
            </div>
            <div className="adminhome-left-mediumcontainer-card">
              <h2>Servicios</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                corporis vitae placeat ratione incidunt mollitia, aut, earum
                pariatur eos eaque adipisci molestias accusamus iste, quos
                eveniet commodi rem ipsa. Ut.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                corporis vitae placeat ratione incidunt mollitia, aut, earum
                pariatur eos eaque adipisci molestias accusamus iste, quos
                eveniet commodi rem ipsa. Ut. Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="adminhome-left-mediumcontainer-card">
              <h2>Clientes</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti soluta laboriosam harum ex architecto distinctio!
                Saepe, inventore culpa cumque minima eveniet debitis, Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                soluta laboriosam harum ex architecto distinctio! Saepe,
                inventore culpa cumque minima eveniet debitis, Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Corrupti soluta
                laboriosam harum ex architecto distinctio! Saepe, inventore
                culpa cumque minima eveniet debitis,
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
            <h2>Finanzas</h2>
            <CandlesChart />
            <div className="flex-s z-index">
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button little-secondary-gradient"}
              />
              <BaseButton
                textLabel={true}
                label={"Ver detalle"}
                classs={"button little-secondary-gradient"}
              />
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
            <h2>Comunicaciones</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              soluta laboriosam harum ex architecto distinctio! Saepe, inventore
              culpa cumque minima eveniet debitis, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corrupti soluta laboriosam harum ex
              architecto distinctio! Saepe, inventore culpa cumque minima
              eveniet debitis, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Corrupti soluta laboriosam harum ex architecto
              distinctio! Saepe, inventore culpa cumque minima eveniet debitis,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              soluta laboriosam harum ex architecto distinctio! Saepe, inventore
              culpa cumque minima eveniet debitis, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corrupti soluta laboriosam harum ex
              architecto distinctio! Saepe, inventore culpa cumque minima
              eveniet debitis,
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
  );
};

const HomeAdmin = styled.section`
  display: grid;
  width: 100%;
  height: 100%;

  .adminhome {
    display: grid;
    grid-template-columns: 70.6% 29%;
    align-items: start;
    height: fit-content;
    gap: 5px;
    @media (max-width: 980px) {
      display: grid;
      grid-template-columns: 1fr;
    }

    &-left {
      align-content: start;
      display: grid;
      gap: 10px;
      &-container {
        width: 100%;
        height: 100%;
        display: flex;
        gap: 2px;

        @media (max-width: 820px) {
          display: grid;
          grid-template-columns: 1fr;
        }
        &-card {
          display: grid;
          height: fit-content;
          padding: 24px;
          background: var(--deg-secondary);
          box-shadow: var(--ds-s);
          align-items: center;
          align-content: start;
          gap: 10px;
          color: white;
          &:nth-child(1) {
            border-radius: 15px 5px 15px 15px;
            @media (max-width: 820px) {
              border-radius: 25px 25px 0px 0px;
            }
          }
          &:nth-child(2) {
            display: grid;
            align-content: center;
            border-radius: 5px 5px 15px 15px;

            @media (max-width: 820px) {
              border-radius: 0;
            }
          }
          &:nth-child(3) {
            border-radius: 5px 15px 15px 15px;
            @media (max-width: 820px) {
              border-radius: 0px 0px 25px 25px;
            }
          }
          &-titles {
            width: fit-content;
            height: fit-content;
            margin: 0;
            padding: 0;
            h2,
            h3 {
              width: fit-content;
              height: fit-content;
            }
          }
        }
      }
      &-mediumcontainer {
        display: flex;
        width: 100%;
        height: 100%;
        gap: 10px;
        @media (max-width: 820px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        &-card {
          height: fit-content;
          padding: 24px;
          color: black;
          border-radius: 15px;
          align-content: space-between;
          background: var(--deg-tertiary);
          box-shadow: var(--ds-s);

          &-btn {
            z-index: 100;
          }
          &:nth-child(1) {
            width: 60%;
            height: fit-content;
            @media (max-width: 820px) {
              width: 100%;
            }
          }
          &:nth-child(2) {
            display: grid;
            gap: 20px;
            color: white;
            background: var(--deg-fourty);
            box-shadow: var(--ds-m);
          }
          &:nth-child(3) {
            @media (max-width: 820px) {
              margin: auto;
              width: 205%;
            }
          }
        }
      }
      &-footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: fit-content;
        padding: 24px;
        border-radius: 15px;
        background: var(--deg-secondary);
        box-shadow: var(--ds-m);

        @media (max-width: 820px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        &-card {
          display: grid;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: var(--deg-tertiary);
          box-shadow: var(--ds-m);
        }
      }
    }
    &-right {
      display: grid;
      gap: 10px;
      align-content: start;

      &-card {
        display: grid;
        height: fit-content;
        background: var(--deg-tertiary);
        box-shadow: var(--ds-s);
        align-content: space-between;
        border-radius: 15px;
        padding: 24px;
        gap: 10px;

        &-medium {
          display: flex;
          gap: 10px;
          @media (max-width: 820px) {
            display: grid;
          }
          &-card {
            display: grid;
            width: 100%;
            height: 100%;
            background: var(--deg-secondary);
            box-shadow: var(--ds-s);
            gap: 5px;
            padding: 24px;
            border-radius: 15px;
          }
        }
      }
      &-content {
        width: 100%;
        height: 100%;
        padding: 24px;
        display: grid;
        border-radius: 15px;
        background: var(--deg-tertiary);
        box-shadow: var(--ds-s);
        gap: 10px;
      }
      &-footer {
        width: 100%;
        height: fit-content;
        gap: 10px;
        display: flex;

        &-card {
          border-radius: 15px;
          display: grid;
          padding: 24px;
          &:nth-child(1) {
            background: var(--deg-tertiary);
            box-shadow: var(--ds-s);
          }
          &:nth-child(2) {
            background: var(--deg-secondary);
            box-shadow: var(--ds-s);
          }
        }
      }
    }
  }
  .z-index{
    z-index: 100;
  }
`;
