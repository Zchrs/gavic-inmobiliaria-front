import { Link } from "react-router-dom"
import styled from "styled-components"


export const HeaderAdmin = () => {
  return (
    <AdminHeader>
        <div className="headeradmin">
            <div className="headeradmin-group"><Link className="headeradmin-group-a">link</Link><Link className="headeradmin-group-a">link</Link></div>
            <div className="headeradmin-group"><Link className="headeradmin-group-a">link</Link><Link className="headeradmin-group-a">link</Link></div>
            <div className="headeradmin-group"><Link className="headeradmin-group-a btnhead">link</Link><Link className="headeradmin-group-a">link</Link></div>
            <div className="headeradmin-group"><Link className="headeradmin-group-a">link</Link><Link className="headeradmin-group-a">link</Link></div>
        </div>
    </AdminHeader>
  )
}

const AdminHeader = styled.header`
    display: grid;
    
    .headeradmin{
        display: grid;
        width: 100%;
        height: fit-content;
        background: transparent;
        grid-template-columns: 10% 30% 30% 30%;
        overflow: hidden;
        border-radius: 50px;
        gap: 5px;
        
        &-group{
            display: flex;
            border-radius: 50px;
            background: var(--bg-secondary);
            &:last-child{
                background: #f5f8ef;
            }
            &:nth-child(2){
                background: #f5f8ef;
            }
            &:nth-child(3){
                background: #50574f;
            }

            &-a{
                padding: 10px;
                align-items: center;
                text-align: center;
            }
        }
        .btnhead{
            background: #9eac93;
            border-radius: 50px 20px 20px 50px; 
        }
    }
`
