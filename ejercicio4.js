// Mostramos el menú del cajero y pedimos al usuario que elija una opción
let elegir = parseInt(prompt(`Menú del cajero, ¿Qué desea realizar? 
    1. Consultar Saldo.
    2. Retirar Dinero.
    3. Depositar Dinero.
    4. Salir`))

// Usamos switch para ver qué opción eligió el usuario
switch (elegir) {
    case 1:
        // Si elige 1, mostramos el saldo (en este caso, está en ceros)
        console.log("Elegiste consultar saldo, tu saldo actual es de: $0 :(")
        alert("Elegiste consultar saldo, tu saldo actual es de: $0 :(")
        break;
    case 2:
        // Si elige 2, mostramos mensaje para retirar dinero
        console.log("Elegiste retirar dinero, ¿Cuánto desea retirar?")
        alert("Elegiste retirar dinero, ¿Cuánto desea retirar?")
        break;
    case 3:
        // Si elige 3, mostramos mensaje para depositar dinero
        console.log("Elegiste depositar dinero, ¿Cuánto desea depositar?")
        alert("Elegiste depositar dinero, ¿Cuánto desea depositar?")
        break;
    case 4:
        // Si elige 4, mostramos mensaje de salida
        console.log("Por favor, retire su tarjeta.")
        alert("Por favor, retire su tarjeta.")   
        break;     
    default:
        // Si escribe algo que no está entre 1 y 4, mostramos error
        console.log("Opción inválida, ingrese nuevamente una opción del 1 al 4.");
        alert("Opción inválida, ingrese nuevamente una opción del 1 al 4.")
        break;
}


    // Pregunta de análisis: ¿Qué pasaría si el usuario ingresa un número que no está entre 1  y 4? Sencillamente lo que ocurre es que le saldrá un anuncio diciendo Opción invalida, la cual puse en el default
