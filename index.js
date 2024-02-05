const express = require('express')
const app = express()
const port = 3000 //puerto

//arreglo de productos
const products = [
    {
        id: 1,
        name: "name",
        price: 50,
        image: "img/i1.jpg",
    },
    {
        id: 2,
        name: "name",
        price: 50,
        image: "img/i2.jpg",
    }
]

app.get('/api/products',(req,res)=>{
    res.send(products) //nos manda el listado de los productos
})

//hace que se vaya directamente al index
app.use("/",express.static("frontend"))

app.listen(port, () => {
    console.log(`Puerto escuchando ${port}`);
})