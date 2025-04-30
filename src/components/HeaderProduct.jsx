/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { getImg } from '../../globalActions'
import { Avatar } from './Avatar';
import styled from 'styled-components';

export const HeaderProduct = ({headClass, avatar, dropData, homeClick }) => {

    

  return (
    <HeAd>
      <div className={headClass}>
          <div className='headproducts-logo'>
              { homeClick ? <Link to={"/"}><img src={getImg('svg', 'logo', 'svg')} alt="" /></Link> : <img src={getImg('svg', 'logo', 'svg')} alt="" />}
          </div>
          <div className="headproducts-group">
            <div className='headproducts-useravatar'>
                    <Avatar img={"default-avatar"} avtsmall={avatar} dropData={dropData} classWhite={"avatar white"} clas={"avatar tumb"} />
            </div>
          </div>
      </div>
    </HeAd>
  )
}

const HeAd = styled.div`
.headproducts{
   
   height: fit-content;
   width: 100%;
   @media (max-width: 920px) {
       padding: 10px 20px;
   }
   @media (max-width: 450px) {
       padding: 10px;
   }
   &.blackhead{
       display: flex;
       justify-content: space-between;
       background: black;
       align-items: center;
       padding: 0 25px;
       height: 100px;
   }
   &.whitehead{
       background: white;
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 0 25px;

   }
   &-logo{
       display: grid;
       align-items: center;
       width: 150px;
       height: fit-content;
       // border: white 1px solid;

       img{
               width: 100%;
               filter: invert(100%) brightness(500%);
               @media (max-width: 920px) {
                   height: 20%;
                }
           }
       a{
           align-items: center;
           display: grid;
           width: 100%;
           height: fit-content;

           img{
               width: 100%;
               filter: invert(100%) brightness(500%);
               @media (max-width: 920px) {
                   height: 20%;
                }
           }
       }
   }
   &-info{
       img{
           width: 70%;
       }
   }

   &-group{
       display: flex;
       align-items: center;
       // border: black 1px solid;
       gap: 20px;
       @media (max-width: 920px) {
           flex-direction: row-reverse;
           flex-direction: none;
       }
   }

   &-useravatar{
       position: relative;
       display: flex;
       width: fit-content;
       height: 50px;
   }

}
`
