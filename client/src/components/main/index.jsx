import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from '../../style/Atoms';
const MainContent = styled.div`
width: 70%;
height:auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
padding: 0px 45px;
`
const LoaderWrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:flex-start;
  width :100%;
  height: 100vh;
  padding-top: 160px;
`
const Loading = styled.span`
  color: #5843E4;
  margin-top: 10px;
  font-weight:600
`


export default function Main(props) {
  const posts = useSelector((state) => 
  state.posts.data
   )
  
  return (
     <MainContent>
        {
               ( typeof(posts) == 'undefined') ?
               (<LoaderWrapper>
                  <Loader />
                  <Loading > Loading ...</Loading>
              </LoaderWrapper>)  :
              (
                       posts.map((post) => {
                         return <Card key={post._id} 
                              id= {post._id}
                              nom ={post.Name}
                              talent = {post.Talent}
                              currentId={props.currentId}
                              setCurrentId = {props.setCurrentId}
                         />
                       })

              )
        } 
     </MainContent>
  )
}
