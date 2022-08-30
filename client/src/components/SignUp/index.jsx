import React from 'react'
import  styled  from 'styled-components'

import { useNavigate } from 'react-router-dom';

const Formulaire = styled.form`
width: 20%;
height:65%;
display:flex;
margin-top:50px;
flex-direction: column;
align-items:center;
padding-left:10px;
padding-right:12px;
padding-top:35px;
padding-bottom: 15px;
justify-content:flex-start;
box-shadow: 0 5px 25px rgba(1 1 1/ 15% );
`

export default function SignUp() {
    let navigate = useNavigate();

    function goToLogin(){
         navigate('/login')
    }


  return (
    <Formulaire className='border rounded'>
    <input  
          className="form-control input-sm"
          placeholder='Full Name'
          type="text"
          required/>

    <input   
          className="form-control"
          placeholder='Email' 
          type="email"
          required/>

    <input   
          className="form-control"
          placeholder='Password'
          type="password"
          required/>

    <input   
          className="form-control"
          placeholder='Confirm Password'
          type="password"
          required/>

     <button
       style={{
           marginRight: '95px'
       }}
       className='btn btn-success'
       type='submit'
       id="submit">
        Submit
     </button>

     <span style ={{
          display: 'inline-block',
          marginTop: '22px',
          fontSize: '14px',
          marginBottom: '-5px'
     }}> Already have an account ?</span>
    
    <button 
      style={{
          backgroundColor: 'transparent',
          color: 'black',
          marginRight: '95px',
      }}
      onClick={goToLogin}
      className='btn btn-success'
      type='submit'
       id="submit">
        Login
     </button>

 </Formulaire>
  )
}
