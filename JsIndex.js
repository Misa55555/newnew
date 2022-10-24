const usuario = document.getElementById("usuario") 
const password = document.getElementById("password") 
const buttom = document.getElementById("buttom") 

buttom.addEventListener("click", (e) => {
    e.preventDefault()
    const datos = {
        usuario: usuario.value,
        password: password.value
    }
    window.location= "inicio.html"
})

// segunda PAGINA

const boton = document.getElementById("boton");

function mostrarForm() {
   const formulario = document.getElementById("formulario").style.visibility="visible"
    console.log(formulario)
}

boton.addEventListener("submit", mostrarForm())

//LO QUE ME QUEDA POR HACER ES QUE EL DISPLAY "NONE" QUE LE PUSE AL FORMULARIO() APAREZCA AL APRETARLE EN EL BOTON

