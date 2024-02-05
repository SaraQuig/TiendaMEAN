let carrito = []
let total = 0
let  productsList = []

function add(productId, price) {
    const product = productsList.find(p => p.id === productId)
    product.stock--;
    console.log(productId, price);
    carrito.push(productId)
    total = total + price
    document.getElementById("checkout").innerHTML = `Pagar $${total}`


}
//funcion para pagar el carrito
async function pay() {
    productsList = await (await fetch("/api/pay",{
        method: "post",
        body: JSON.stringify(carrito),
        headers: {
            "Content-Type": "application/json"
        }
    })).json()

    //window.alert(products.join(", \n"));
}

//itera por todos los productos
function displayProducts() {
    let productsHTML = ''
    productsList.forEach(element => {
        productsHTML += 
        `<div class="product-container">
            <h3>${element.name}</h3>
            <img src="${element.image}">
            <h3>${element.price}</h3>
            <button onclick="add(${element.id},${element.price})">Agregar al carrito</button>
        </div>`
    });
    document.getElementById('page-content').innerHTML = productsHTML 
    displayProducts()
}
//se llama cuando la ventana se termine de cargar


window.onload = async () => {
    productsList = await (await fetch("/api/products")).json()
    console.log(productsList);
    displayProducts()
}