let edad = parseInt(prompt("Ingrese su edad: "))

if (edad < 12){
    console.log("El valor de la entrada es 5000")
    alert("El valor de la entrada es 5000")
}

else if (edad >= 12 && edad <=18){
    console.log("El valor de la entrada es de 8000")
    alert("El valor de la entrada es de 8000")    
}

else if (edad > 18){
    console.log("El valor de la entrada sería 10000")
    alert("El valor de la entrada sería 10000")
}

// Pregunta de análisis: ¿Qué estructura condicional usarías para resolver este caso: if else if-else o switch? ¿Por qué? Yo utilizo if-else ya que esto m permite ser mas flexible en los valores que debo dar