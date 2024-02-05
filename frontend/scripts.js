let products = []
let total = 0

function add(product, price) {
    console.log(product, price);
    products.push(product)
    total = total + price
    document.getElementById("checkout").innerHTML = `Pagar $${total}`


}
function pay() {
    const productsList = await (await fetch("/api/products")).json()

    window.alert(products.join(", \n"));
}

//itera por todos los productos
function displayProducts(productsList) {
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
}
//se llama cuando la ventana se termine de cargar


window.onload = async () => {
    const productsList = await (await fetch("/api/products")).json()
    console.log(productsList);
    displayProducts(productsList)
}