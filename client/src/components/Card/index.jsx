import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import './card.css';
import video from '../../Assets/videos/shutter.mp4'
import image from '../../Assets/images/profile.jpg'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import{deletePost} from '../../actions/Cards'

const CardBody = styled.div`
width: 400px;
height:280px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top:50px;
font-family: 'Poppins' ;
box-shadow: 0 5px 25px rgba(1 1 1/ 15% );
border-radius: 10px;
transition: 0.7s ease;

&:hover{
    transform: scale(1.1);
}


`

const Video = styled.video`
  opacity: ${(props) => 
    props.isItOpen ? '0.4': '1' 
    }
`

const Thumbnail = styled.div`
height:60%;
width:100%
`


const Info = styled.div`
 height:25%;
 width:100%;
 display:flex;
 flex-direction:row;
 align-items: center;
 justify-content:center;
 opacity: ${(props) => 
  props.isItOpen ? '0.3': '1' 
  }

`

const Photo= styled.div`
 height:95%;
 width: 20%;
 display:flex;
 align-items: center;
 justify-content:flex-end;

`
const NameJob=styled.div`
 height:80%;
 display:flex;
 flex-direction:column;
 align-items: center;
 justify-content:center;
 width: auto;
 margin-left:15px;
 padding-top:15px;
`

const Name= styled.h5`
margin-bottom: -1.5px;
font-size:16px;
font-weight:600;
`;
 
const Job = styled.h6`
font-size:14px;
font-weight:550;
`

const LikeDislike = styled.div`
height: 15%;
widh: 100%;
display: flex;
align-items:center;
justify-content:space-between;
padding: 0px 10px;
opacity: ${(props) => 
  props.isItOpen ? '0.3': '1' 
  }
`
const DropDown = styled.div`
transform: translate(366px, -160px) 
`


const Menu = styled.div`
  max-width: 100px;
  min-height:60px;
  border-radius:10px;
  color: #000;
  background-color: #fff;
  z-index:500;
  box-shadow: 0 5px 25px rgba(1 1 1/ 15% );
  transform: translate(286px, -165px) ;
  font-size: 12px;
  padding-top:10px;   
   opacity:inherit ;
  display: ${(props) => 
   props.isItOpen ? 'block' : 'none'
  
  }
`

export default function Card(props) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike ] = useState(0);
  const [isOpen, setOpen] = useState(false)
  const dispatch =  useDispatch();

  function Like(){
      setLike(prevLike => prevLike + 1)
  }

  function disLike(){
    setDislike(prevDisLike => prevDisLike + 1)
  }

  function toggleMenu(){
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <CardBody
      isMenuOpen={isOpen}
    >
        <Thumbnail>
           <Video
            src={video}
            isItOpen = {isOpen}
             controls />
           <DropDown>
            <FontAwesomeIcon 
                      className= "dropicon"
                      icon={faEllipsis}
                      onClick={toggleMenu}

                       />
               
           </DropDown>
           <Menu
            isItOpen={isOpen}
           >
                  <div className='update'
                   onClick={() => {props.setCurrentId(props.id)}
                              }
                  >
                     <FontAwesomeIcon 
                         icon={faPen}
                       />
                     <span> Edit</span>
                  </div>

                  <div className="delete"
                    onClick={() => {
                      dispatch(deletePost(props.id))
                     }}>
                      <FontAwesomeIcon 
                           icon={faTrash}
                       />
                  <span> Delete</span>


                 </div>
           </Menu>
        </Thumbnail>
        <Info
           isItOpen = {isOpen}
        >
             <Photo>
                 <img className='photo'
                      src ={image}
                      alt='photo de profil' />
             </Photo>

             <NameJob>
                <Name>{props.nom}</Name>
                <Job>{props.talent}</Job>
             </NameJob>
        
        </Info>
        <LikeDislike
          isItOpen = {isOpen}
        > 
                  <div className='like'>
                  <FontAwesomeIcon 
                      className= "icon"
                      icon={faThumbsUp}
                      onClick={Like}
                       />
                       <span>{like}</span> 
                  </div>
                  
                  <div className='dislike'>
                    <FontAwesomeIcon 
                        className = 'icon'
                        icon={faThumbsDown}
                        onClick={disLike}
                        />
                       <span>{dislike}</span> 
                  </div>
                  
        </LikeDislike>
    </CardBody>
  )
}
