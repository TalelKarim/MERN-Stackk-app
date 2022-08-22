import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
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
  
  file:{
      type: Object,
      required: false
  },

  Video:{
      type:String,
      required:false
  },

  FeedBack:{
      type:String,
      required:true
  }


})



export default mongoose.model('Card', cardSchema);