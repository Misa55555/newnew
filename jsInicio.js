const botonAumentar = document.getElementById("boton")

const span = document.getElementById("span")
const spannum = document.getElementById("spanNum")
let cantidad = 1


botonAumentar.addEventListener("click", (e) => {
    const modi = formulario.style.display = "block"
    spannum.textContent = "BRONCE"
    span.textContent = cantidad++
    return modi
})


const botonDisminuir = document.querySelector(".btnDisminuir")
const formulario = document.querySelector(".form")

botonDisminuir.addEventListener("click", (e) => {
    const modi = formulario.style.display = "none"
    cantidad = 1
    return modi
})

// PONER EL .querrySelectorAll no me esta funcionando me tira error, pero me deja hacerlo con getElementById o cualquier otra. La idea es que todo boton que dice compra me indique el "FORMULARIO"(futuro carrito de compra)
