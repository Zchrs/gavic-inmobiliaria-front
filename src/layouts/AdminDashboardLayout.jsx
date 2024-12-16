import styled from "styled-components"
import { DashboardAdminRouter } from "../router/AppRouter"
import { HeaderAdmin } from "../components/HeaderAdmin"


export const AdminDashboardLayout = () => {
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
      z-index: 60;
    }
    &-content{
      display: grid;
      width: 100%;
      height: 100% ;
    }
  }
`