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
