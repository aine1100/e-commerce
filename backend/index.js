const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
let cart = [];

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('The server is running!');
});

app.post('/AddProduct', (req, res) => {
    const { title, thumbnail, price, rating } = req.body;

    const newProduct = {
        title,
        thumbnail,
        price,
        rating
    };
    cart.push(newProduct)

    res.status(200).send('Product added to the cart');
    console.log(newProduct)
});
app.get("/cart", (req, res) => {
    if (cart.length == 0) {
        res.send("no products in the cart");
    } else {
        res.status(200).send(cart)
    }
    then(() => {
        console.log("products are fetched");

    })
        .catch(() => {
            console.log("failed to fetch products")
        })

})

app.delete("/deleteProducts", (req, res) => {
    try {
        cart = []; 

        res.status(200).send("The products are being deleted");
        console.log("The products are deleted successfully");
    } catch (err) {
        res.status(400).send("Products were not deleted");
        console.log("Failed to delete the products", err);
    }
});

app.listen(5000, () => {
    console.log("the port is running at 5000")
})