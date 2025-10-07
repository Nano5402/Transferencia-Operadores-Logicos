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

// Pregunta de análisis: ¿Qué operador lógico usarías para verificar que se cumplan  ambas condiciones? Sencillamente utilizo el && ya que ambos deberian de ser true para que este de true