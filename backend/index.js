const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Product=require("./models/data.model");
const { default: mongoose } = require('mongoose');


app.use(bodyParser.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/e-commerce")
.then(()=>{
    console.log("the data has been connected to the database")
})
.catch((err)=>{
    console.error("failed to connect to the db")

})
app.get('/', (req, res) => {
    res.send('The server is running!');
});

app.post('/AddProduct', async(req, res) => {
    const { id, title, thumbnail, price, rating } = req.body;

    const newProduct = {
        id,
        title,
        thumbnail,
        price,
        rating,
    };
  const Cart= await Product.create(newProduct)

    res.status(200).send('Product added to the cart');
    console.log(newProduct);
});

app.get("/cart", async(req, res) => {
 const CartProducts= await Product.find()
//  if(CartProducts.length==0){
//     res.send("there are no items in the cart")
console.log(CartProducts.length)
//  } 
 try{
    res.status(200).send(CartProducts)
    
    
 }
 catch(err){
    res.status(404).send(err)

 }
 
});


app.delete("/deleteProducts", async (req, res) => {
    const { id } = req.body;

    try {
        const deleteResult = await Product.deleteOne({ id });
        res.status(200).send("Product deleted successfully");
        console.log("the product is deletde",deleteResult)
    } catch (error) {
        res.status(500).send("Failed to delete product");
        console.error("Failed to delete product", error);
    }
});
app.put("/editProduct",async(req,res)=>{
    const {id}=req.params;
    const EditedProduct=req.body
    try{
        const EditPr=await Product.findOneAndUpdate(id,EditedProduct)
        res.status(200).send("the product is edited sucessfuly")

        console.log(EditedProduct)
    }
    catch(err){
        res.status(404).send(err)
        console.log("the product failed to be edited",err)
    }
})


app.listen(5000, () => {
    console.log("The server is running on port 5000");
});
