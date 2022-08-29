import mongoose from "mongoose";


const videoSchema = mongoose.Schema({


    _id:{
        type:String,
        required: true
    },

    videoUrl :{
        type:String,
        required: true 
    }
})

export default mongoose.model('Video', videoSchema)