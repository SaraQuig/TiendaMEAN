const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000 //puerto

//accediendo al contenido del body como json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//arreglo de productos
const products = [
    {
        id: 1,
        name: "name",
        price: 50,
        image: "img/i1.jpg",
        stock: 50
    },
    {
        id: 2,
        name: "name",
        price: 50,
        image: "img/i2.jpg",
        stock: 50
    }
]

//con esta linea de codigo obtenemos una lista de productos
app.get('/api/products', (req, res) => {
    res.send(products) //nos manda el listado de los productos
})
app.post('/api/pay', (req, res) => {
    const ids = req.body //mandando una lista de id
    //para descontar del stock
    ids.forEach(id => {
        const product = products.find(p => p.id === id)
        product.stock--;
    });
    res.send(products) //nos manda el listado de los productos
})

//hace que se vaya directamente al index
app.use("/", express.static("frontend"))

app.listen(port, () => {
    console.log(`Puerto escuchando ${port}`);
})