const mongoose=require("mongoose")
const ProductSchema= new mongoose.Schema({
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
const Product=mongoose.model("ProductSchema",ProductSchema)
module.exports=Product