let user = prompt("Ingrese su usuario: ")
let password = parseInt(prompt("Ingrese su contraseña: "))

if (user === "admin" && password == 1234){
    alert("Acceso concedido.")
    console.log("Accesos concedido.")
}
else {
    console.log("Acceso Denegado.")
    alert("Acceso Denegado.")
    
}