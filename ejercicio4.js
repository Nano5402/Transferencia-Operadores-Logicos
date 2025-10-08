let elegir = parseInt(prompt(`Menú del cajero, ¿Que desea realizar? 
    1.Consultar Saldo.
    2.Retirar Dinero.
    3.Depositar Dinero.
    4.Salir`))

    switch (elegir) {
        case 1:
            console.log("Elegiste consultar saldo, tu saldo actual es de: $0 :(")
            alert("Elegite consultar saldo, tu saldo actual es de: $0 :(")
            break;
        case 2:
            console.log("Elegiste retirar dinero, ¿Cuanto desea retirar?")
            alert("Elegiste retirar dinero, ¿Cuanto desea retirar?")
            break;
        case 3:
            console.log("Elegiste depositar dinero, ¿Cuanto desea depositar?")
            alert("Elegiste depositar dinero, ¿Cuanto desea depositar?")
            break;
        case 4:
            console.log("Por favor, retire su tarjeta.")
            alert("Por favor, retire su tarjeta.")   
            break;     
        default:
            console.log("Opción invalida, ingrese nuevamente una opción del 1 al 4.");
            alert("Opción invalida, ingrese nuevamente una opción del 1 al 4.")
            break;
    }

    // Pregunta de análisis: ¿Qué pasaría si el usuario ingresa un número que no está entre 1  y 4? Sencillamente lo que ocurre es que le saldrá un anuncio diciendo Opción invalida, la cual puse en el default
