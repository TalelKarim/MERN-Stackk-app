import mongoose from "mongoose";


const photoSchema = mongoose.Schema({

    _id:{
        type:String,
        required: true
    },

    imageUrl :{
        type:String,
        required: true 
    }
})

export default mongoose.model('Photo', photoSchema)