const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    url: {
        type:String,
        requried:true
    },
    
      publicId: {
        type:String,
        requried:true
    } ,
    uploadedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        requried:true
    }
    

},{timestamps:true})
module.exports=mongoose.model("Image",ImageSchema)