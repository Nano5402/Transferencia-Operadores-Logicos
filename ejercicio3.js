// Le pedimos al usuario que escriba un número
let numero = parseInt(prompt("Escriba el número que desee consultar: "))

// Si el número es mayor que cero, decimos que es positivo
if(numero > 0){
    console.log("Número positivo.")
    alert("Número positivo.")
}

// Si el número es menor que cero, decimos que es negativo
else if (numero < 0){
    console.log("Número negativo.");
    alert("Número negativo.")
}

// Si no es mayor ni menor, entonces es cero
else if(numero == 0){
    console.log("Cero.");
    alert("Cero.")
}

// Extensión: ¿Cómo cambiaría la solución si quieres que, además, se verifique si el  número es par o impar? Utilizaria && para saber si es par o impar