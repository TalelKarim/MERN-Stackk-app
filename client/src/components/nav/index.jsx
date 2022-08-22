import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledLink = styled(Link)`
      padding: 15px;
      color: #8186a0;
      text-decoration: none;
      font-size: 18px;
      transition : 0.7s ease;
    &:hover{
      transform: scale(1.1);
      color: white;
  
    }
   `


const NavBody = styled.div`
 width: 100%;
 background-color:#212121;
 height: 70px;
 display :flex;
 flex-direction: row; 
 justify-content: space-around;
 align-items:center;
 margin-top:.4px;
`

export default function Nav() {
  return (
      <NavBody>
         <StyledLink to='/'>Accueil</StyledLink>
         <StyledLink to='/freelances'> todo</StyledLink>
         <StyledLink to='/freelances'> talents</StyledLink>
         <StyledLink to='/freelances'> sign up</StyledLink>

      </NavBody>
  )
}
