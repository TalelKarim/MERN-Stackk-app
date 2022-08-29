import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  identifier:{
      type:String,
      required: true
  },

  Name: {
      type:String,
      required: true
  },

  Age: {
    type:Number,
    required:true,
  },

  Email: {
      type:String,
      required: true
  },

  Talent: {
      type:String,
      required:true 
  },
  
  Something: {
      type:String,
      required: true
  },

  imageUrl:{
      type:String,
      required: false
  },
  
  VideoUrl:{
      type:String,
      required: false
  },

  imageLink: {
      type: String,
      required: false
  },

  VideoLink: {
      type: String,
      required: false
  },

  FeedBack:{
      type:String,
      required:true
  }


})



export default mongoose.model('Card', cardSchema);