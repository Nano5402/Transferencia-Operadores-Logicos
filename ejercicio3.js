let numero = parseInt(prompt("Escriba el número que desee consultar: "))

if(numero > 0){
    console.log("Número positivo.")
    alert("Número positivo.")
}

else if (numero < 0){
    console.log("Número negativo.");
    alert("Número negativo.")
}

else if(numero == 0){
    console.log("Cero.");
    alert("Cero.")
}

// Extensión: ¿Cómo cambiaría la solución si quieres que, además, se verifique si el  número es par o impar? Utilizaria && para saber si es par o impar