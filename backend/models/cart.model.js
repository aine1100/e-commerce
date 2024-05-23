const mongoose=require("mongoose")
const cartSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
          type:String,
          required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    }
    ,id:{
        type:String,
        
    }
})
const cart=mongoose.model("CartSchema",cartSchema)
module.exports=cart