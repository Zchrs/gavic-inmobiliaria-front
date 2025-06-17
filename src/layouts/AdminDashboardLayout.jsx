import styled from "styled-components"
import { DashboardAdminRouter } from "../router/AppRouter"
import { HeaderAdmin } from "../components/HeaderAdmin"
import { useDispatch } from "react-redux";
import { startCheckingAdmin } from "../actions/authActions";
import { useEffect } from "react";


export const AdminDashboardLayout = () => {

      const dispatch = useDispatch();

    useEffect(() => {
      dispatch(startCheckingAdmin());
    }, [dispatch]);

  return (
    <DashboardAdmin>
      <div className="admindashboard">
        <div className="admindashboard-header">
          <HeaderAdmin />
        </div>
        <div className="admindashboard-content">
          <DashboardAdminRouter />
        </div>
      </div>
    </DashboardAdmin>
  )
}
 
const DashboardAdmin = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin: auto;
  padding: 20px;
  align-items: start;
  background: var(--bg-primary);

  
  .admindashboard{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    align-items: start;
    gap: 5px;

    &-header{
      display: grid;
      width: 100%;
      height: 50px;
      /* background: black; */
      z-index: 1000;
    }
    &-content{
      display: grid;
      width: 100%;
      height: 100% ;
    }
  }
`