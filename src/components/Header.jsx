import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import { getImg } from "../../globalActions"
import { useRoutesHome } from "../routes/routes";
import { useMemo } from "react";


export const Header = () => {

  const routes = useRoutesHome();

  const hdrRoutes = useMemo(() => {
      const selectedNames = ["leases", "immovables", "list your property", "sales", "register"]; // Nombres a incluir
      return routes.filter((route) => selectedNames.includes(route.name));
    }, [routes]);

    const headerRoutes = hdrRoutes;

  return (
    <HeaDer>
      <div className="header">
        <div className="header-logo">
          <Link to={"/"}><img className="header-logo-img" src={getImg('svg', 'logo', 'svg')} alt="logo" /></Link>
        </div>
        <div className="header-links">
        {headerRoutes.map((route, index) => (
            <NavLink className="header-links-a" to={route.route} key={index}>
              {route.text}
            </NavLink>
          ))}
        </div>
      </div>
    </HeaDer>
  )
}

const HeaDer = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  
  .header {
    padding: 24px;
    border-bottom: 1px solid #e5e5e5;
    justify-content: space-between;
    display: flex;
    align-items: center;
    &-links{
      width: fit-content;
      height: fit-content;
      align-items: start;
      display: flex;
      gap: 50px;
      &-a{
        font-size: 18px;
        font-weight: 300;
        width: fit-content;
        color: var(--text-dark);
        &:hover{
          color: var(--text-primary);
        }
      }
    }
    &-logo{
      display: grid;
      width: 200px;
      &-img{
        width: 100%;
      }
    }
  }
`