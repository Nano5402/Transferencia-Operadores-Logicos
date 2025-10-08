// Le pedimos al usuario que escriba su nombre de usuario
let user = prompt("Ingrese su usuario: ")

// Le pedimos que escriba su contraseña (como número)
let password = parseInt(prompt("Ingrese su contraseña: "))

// Verificamos si el usuario es "admin" y la contraseña es 1234
if (user === "admin" && password == 1234){
    // Si ambas condiciones se cumplen, damos acceso
    alert("Acceso concedido.")
    console.log("Acceso concedido.")
} else {
    // Si alguna falla, no se permite el acceso
    console.log("Acceso denegado.")
    alert("Acceso denegado.")
}


// Pregunta de análisis: ¿Qué operador lógico usarías para verificar que se cumplan  ambas condiciones? Sencillamente utilizo el && ya que ambos deberian de ser true para que este de true