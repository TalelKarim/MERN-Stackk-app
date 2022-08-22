import React from 'react'
import Head from './components/head'
import Nav from './components/nav'
import Main from './components/main'
import Form from './components/form'
import styled from 'styled-components'
import { BrowserRouter, route, routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {getPosts} from './actions/Cards'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const MainContainer = styled.div`
     width:100%;
     height:auto;
     display: flex;
     flex-direction: row;
     align-items:flex-start;
     justify-content: space-around;
     padding-top:50px;
`


const AppContainer = styled.div`
  height: auto;
  display:flex;
  flex-direction: column;

`


const GlobalStyle = createGlobalStyle`
*{
}
`



export default function App() {
  
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch()
  
  const posts = useSelector((state) => {
    return state.posts.data
 })
 

  useEffect(() => {
       dispatch(getPosts());
  }, [dispatch, posts])
 
 
 
  return (
    <>

     <BrowserRouter>
      <AppContainer>
         <GlobalStyle />
         <Head />
         <Nav />
       <MainContainer>
           <Main currentId={currentId} setCurrentId= {setCurrentId} />
           <Form currentId = {currentId} setCurrentId= {setCurrentId}/>  
       </MainContainer>
        
      </AppContainer>   
     

     </BrowserRouter>
   
    </>
  )
}
