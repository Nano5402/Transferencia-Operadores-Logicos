// Le pedimos al usuario que escriba su edad
let edad = parseInt(prompt("Ingrese su edad: "))

// Si tiene menos de 12 años, la entrada cuesta 5000
if (edad < 12){
    console.log("El valor de la entrada es 5000")
    alert("El valor de la entrada es 5000")
}

// Si tiene entre 12 y 18 años, cuesta 8000
else if (edad >= 12 && edad <= 18){
    console.log("El valor de la entrada es de 8000")
    alert("El valor de la entrada es de 8000")    
}

// Si tiene más de 18 años, cuesta 10000
else if (edad > 18){
    console.log("El valor de la entrada sería 10000")
    alert("El valor de la entrada sería 10000")
}


// Pregunta de análisis: ¿Qué estructura condicional usarías para resolver este caso: if else if-else o switch? ¿Por qué? Yo utilizo if-else ya que esto m permite ser mas flexible en los valores que debo dar