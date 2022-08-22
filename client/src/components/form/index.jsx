import React, { useState, useEffect } from 'react'
import './form.css'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {createPost, updatedPost} from '../../actions/Cards'
import { useSelector } from 'react-redux';
// const FormContent = styled.div`
// width: 20%;
// height:65%;
// display:flex;
// margin-top:70px;
// flex-direction: column;
// align-items:flex-start;
// padding-left:10px;
// padding-right:12px;
// padding-top:35px;
// padding-bottom: 15px;
// justify-content:flex-start;
// `

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
   const [File, setFile] = useState({});
   const [cardData, setCardData] = useState({
      Name: "",
      Age: "",
      Email:"",
      Talent:"",
      Something:"",
      imageUrl: "",
      Video:"",
      FeedBack: ""

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
      Name: "",
      Age :"",
      Email:"",
      Talent:"",
      Something: "",
      imageUrl: "",
      Video:"",
      FeedBack:""
   })
}

   function handleSubmit(e){
          e.preventDefault();
          if(props.currentId){
             dispatch(updatedPost(props.currentId,cardData))
          }
          else{       
             dispatch(createPost({...cardData}))
          }
         Clear()
          // const data = new FormData()
         // data.append('file', File)
         // console.log(data)
   }



  
 


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
              type="text"
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
             onChange={(e) => {
               const file = e.target.files[0] 
               setFile(file) 
               // setCardData(
               // prevData => { return {
               //    ...prevData,
               //    file: File
               //   }})
               }}
             />

           <label>
               Upload a video of your talent: 
           </label>
           <input
             type='file'
             className='photo2'
             placeholder="upload your photo"
             value={cardData.Video}
             onChange={(e) => setCardData(
               prevData => { return {
                  ...prevData,
                  Video : e.target.value
                 }})}
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
