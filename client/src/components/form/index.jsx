import React, { useState, useEffect } from 'react'
import './form.css'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {createPost, updatedPost} from '../../actions/Cards'
import { useSelector } from 'react-redux';
import axios from 'axios'
import { deletePhoto } from '../../actions/Photos';
import { createPhoto } from '../../actions/Photos';
import { createVideo } from '../../actions/Videos';

const Formulaire = styled.form`
width: 20%;
height:65%;
display:flex;
margin-top:50px;
flex-direction: column;
align-items:flex-start;
padding-left:10px;
padding-right:12px;
padding-top:35px;
padding-bottom: 15px;
justify-content:flex-start;
`

const Buttons = styled.div`
 display:flex;
 flex-direction:column;
 align-items:flex-start;
 justify-content: space-around;
 width: 100%;
 margin-top:20px;
 margin-bottom:20px;

`
export default function Form(props) {
   const [File, setFile] = useState(null);
   const [video, setVideo] = useState(null);
   const [imageUri, setImageUri] = useState(false)
   const [readyToUpload, setReadyToUpload] = useState(false)
   const [uploadImage, setUploadImage] = useState(false)

   const onInputChange = (e) => {
      setFile(e.target.files[0])
   }

   const onInputChange_two = (e) => {
      setVideo(e.target.files[0])

   }



   const [cardData, setCardData] = useState({
      identifier: `${Math.random() * 1000}`,
      Name: "",
      Age: "",
      Email:"",
      Talent:"",
      Something:"",
      imageUrl: "",
      imageLink:"",
      VideoUrl:"",
      VideoLink:"",
      FeedBack: ""

   })

   const posts = useSelector((state) => {
      return state.posts.data
   })


const post = useSelector((state) => {
   return props.currentId ?  state.posts.data.find((p) => p._id === props.currentId) : null
})

   const dispatch =  useDispatch();

// useEffect(() => {
//    if(post) setCardData(post);
// }, [post])  


const Clear = () => { 
   props.setCurrentId(null);
   setCardData({
      identifier: `${Math.random() * 1000}` ,
      Name: "",
      Age :"",
      Email:"",
      Talent:"",
      Something: "",
      imageUrl: "",
      imageLink:"",
      videoUrl:"",
      videoLink:"",
      FeedBack:""
   })
   setReadyToUpload(false)
   setImageUri(false)
}

   function handleSubmit(e){
          e.preventDefault();
          
          const config = {
            headers: {
               'content-type': 'multipart/form-data'
            },
         }
         // create the photo
          const data = new FormData()
          data.append('photo', File)
          data.append('_id', cardData.identifier)
          
          //create the video 
          const video_data = new FormData()
          video_data.append('video', video)
          video_data.append('_id', cardData.identifier)

   


          // post the photo   axios.post('http://localhost:5000/upload', data, config)

          dispatch(createPhoto(data))   
           .then((res) => {
             setCardData(
               prevData => { return {
                  ...prevData,
                  imageUrl: `http://localhost:5000/upload/${cardData.identifier}`,
                  VideoUrl: `http://localhost:5000/upload_video/${cardData.identifier}`
                 }})
                 console.log('Image uploaded successfully')
                 setUploadImage(true)
         })
         .catch((err) => {
            console.log(err)
         })
     

         //post the video            axios.post('http://localhost:5000/upload_video', video_data, config)
         dispatch(createVideo(video_data))
         .then((res) => {
            console.log('video uploaded successfully')
         })
         .catch((err) => {
            console.log(err)
         })






         setTimeout(Clear,1000)
        
      }
    



     useEffect(() => {
           
           if(cardData.imageUrl.length > 5)   
              {                    
                  console.log('first executed')
               setImageUri(false)
               console.log(cardData.imageUrl) 
               fetch(cardData.imageUrl)
               .then(
                  (res) => res.json()
                  .then((data) => {
                      console.log(data)
                      setCardData({
                         ...cardData, imageLink: data.imageUrl
                      })
                      setImageUri(true) 
                  })
                  .catch((error) => console.log(error))
               )  }   
            },[uploadImage])

     useEffect(() => {
     if (cardData.imageUrl.length > 5){
      console.log('second executed')  
      fetch(cardData.VideoUrl)
      .then((res) => res.json()
         .then((data) => {
             setCardData({
                ...cardData, VideoLink: data.videoUrl
             })
             setReadyToUpload(true)
         })
         .catch((error) => console.log(error)))
     }
   
},[imageUri])



useEffect(() => {
   if(props.currentId){
      dispatch(updatedPost(props.currentId,cardData))
      
   }
   else{       
      dispatch(createPost({...cardData}))
      console.log('third executed')
   }
}, [readyToUpload])



  return (
     <Formulaire className='border rounded' onSubmit={handleSubmit}>
        <input  
              className="form-control input-sm"
              placeholder='Full Name'
              type="text"
              onChange={(e) => {    
             setCardData(
               {...cardData, Name: e.target.value})
            }}
              value={cardData.Name}
              

              required/>

        <input   
              className="form-control"
              placeholder='Age' 
              type="number"
              value={cardData.Age}
              onChange={(e) => setCardData(
               prevData => { return {
                  ...prevData,
                  Age : e.target.value
                 }})}
              required/>

        <input   
              className="form-control"
              placeholder='Email'
              type="email"
              value={cardData.Email}
              onChange={(e) => setCardData(
               prevData => { return {
                  ...prevData,
                  Email: e.target.value
                 }})}

              required/>

        <input   
              type="text"
              className="form-control"
              placeholder='Talent'
              value={cardData.Talent}
              onChange={(e) => setCardData(
               prevData => { return {
                  ...prevData,
                  Talent: e.target.value
                 }})}
              required/>

        <textarea 
              className="form-control"
              placeholder='Tell us something about your talent' 
              value={cardData.Something}
              onChange={(e) => setCardData(
               prevData => { return {
                  ...prevData,
                  Something: e.target.value
                 }})}
              required/>

       <Buttons>
           <label>
               Upload your Photo : 
           </label>
           <input
             type='file'
             className='photo2'
             placeholder="upload your photo"
             value={cardData.Photo}
             onChange= {onInputChange}
             accept="image/png, image/gif, image/jpeg"
             />

           <label>
               Upload a video of your talent: 
           </label>
           <input
             type='file'
             className='photo2'
             placeholder="upload your photo"
             value={cardData.Photo}
             onChange={onInputChange_two}
            //  accept="video/mp4,video/x-m4v,video/*"
             accept="image/png, image/gif, image/jpeg"

             />

       </Buttons> 

       <textarea 
            className="form-control"
            placeholder='Give us a feedback'
            value={cardData.FeedBack}
            onChange={(e) => setCardData(
               prevData => { return {
                  ...prevData,
                  FeedBack: e.target.value
                 }})}
        />

         <button className='btn btn-success'
          type='submit'
           id="submit">
            Submit
         </button>
        
     </Formulaire>
  )
}
