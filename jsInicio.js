alert("SOLO VAS A TENER QUE PRESIONAR EL BOTON COMPRAR Y DESPUES FIJARTE EN EL CARRITO DE COMPRAS (NO SE PUEDE CERRAR EL CARRITO AUN :,C 😪")

const ShopContent = document.getElementById("ShopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML = `
        <p class= "text">${product.descripcion} </p>
        <img class= "img" src="${product.img}"
        <h3 class= "h3">${product.nombre}</h3>
        <p class= "p">${product.precio} $</p>

    `;

    ShopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    content.append(comprar)

    comprar.addEventListener("click", (e) => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio
        })
        console.log(carrito)
    })
})

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-titulo"> Carrito </hi>

    `
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1")
    modalButton.innerText = "X"
    modalButton.className = "modal-button"

    modalHeader.append(modalButton)

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modalContent"
        carritoContent.innerHTML = `
            <img class= "img" src="${product.img}">
            <h3> ${product.nombre} </h3>
            <p> ${product.precio} $</p>
        `;

        modalContainer.append(carritoContent)
    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0)

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-compra"
    totalCompra.innerHTML = `total a pagar: $ ${total}`
    modalContainer.append(totalCompra) 
})