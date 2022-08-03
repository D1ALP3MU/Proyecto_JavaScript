function imprimirMenuEjercicios() {
    var request, confirmacion;
    request = prompt("Bienvenid@ al taller de JavaScript!! \nSeleccione un ejercicio a realizar: \n1. Indicar el número mayor entre dos números ó si son iguales (números quemados). \n2. Indicar el número mayor entre dos números ó si son iguales (números ingresados por teclado) \n3. Calcular el área de una circunferencia. \n4. Calcular el valor total de una compra. \n5. Mostrar los números pares e impares del 1 al 100. \n6. Indicar si un número es mayor, menor o igual que cero. \n7. Ordenar tres números ingresados por teclado de mayor a menor y de menor a mayor. Y dado el caso que los tres san iguales, indicarlo con un mensaje. \n8. Indicar si un día de la semana es día laboral o día festivo. \n9. Mostrar los números de 2 en 2 hasta N números. \n10. Mostrar un menú con un listado de 10 tecnologías de desarrollo de software. \n11. Calcular el salario total de un empleado. \n12. Realizar una calculadora con las 4 operaciones básicas. \n13. Realizar una calculadora del IMC. \n14. Salir")
    if (request > 0 && request <= 14) {
        confirmacion = prompt("Desea ejecutar el ejercicio? \n1. SI. \n2. NO.")
        if (confirmacion == 1) {
            validarRespuesta(request);  
        } else {
            imprimirMenuEjercicios();
        }
    }else{
        alert("Opcion incorrecta, intenta nuevamente!");
        imprimirMenuEjercicios();
    }
}

function validarRespuesta(resultado){
    switch (resultado) {
        case "1":
            calcularNumeroMayor();
            setTimeout(imprimirMenuEjercicios, 1000);            
            break;
        case "2":
            calNumMayor();
            setTimeout(imprimirMenuEjercicios, 1000);
            break;
        case "3":
            calcularAreaCircunferencia();
            setTimeout(imprimirMenuEjercicios, 1000);
            break;
        case "4":
            calcularValorCompra();
            setTimeout(imprimirMenuEjercicios, 1000);
            break;
        case "5":
            mostrarNumerosParesImpares();
            setTimeout(imprimirMenuEjercicios, 1000);
            break;
        case "6":
            IndicarNumeros();
            setTimeout(imprimirMenuEjercicios, 1000);
            break;
        case "7":
            ordenarNumeros();
            setTimeout(imprimirMenuEjercicios, 1000);
            break;
        case "8":
            diasLaboralesFestivos();
            setTimeout(imprimirMenuEjercicios, 1000);
            break;
        case "9":
            MostrarNumerosDosEnDos();
            setTimeout(imprimirMenuEjercicios, 1000);
            break;
        case "10":
            mostrarMenuTecnologias();
            setTimeout(imprimirMenuEjercicios, 1000);
            break;
        case "11":
            calcularSalarioTotal();
            setTimeout(imprimirMenuEjercicios, 1000);
            break;
        case "12":
            realizarOperacionesBasicas();
            setTimeout(imprimirMenuEjercicios, 1000);
            break;
        case "13":
            calcularIMC();
            setTimeout(imprimirMenuEjercicios, 1000);
        break;
        case "14":
            alert("Gracias, hasta pronto...")
        break;
    default:
        alert("Opción incorrecta, intenta nuevamente!");
        setTimeout(imprimirMenuEjercicios, 1000);
        break;
    }
}

function calcularNumeroMayor() {
    console.log("1. Dados dos números, indicar cual es mayor o si son números iguales (Los números están quemados en código).");
    let numeroUno = 1000, numeroDos = 765, numeroMayor;
    numeroMayor = 0;
   
    if(numeroUno != '' || numeroDos != '' ){
        if (numeroUno > numeroDos) {
            numeroMayor = numeroUno;
            console.log("El número mayor es: " + numeroMayor);            
        } else if (numeroUno == numeroDos) {
            resultado = console.log("Los números son iguales");
        } else {
            numeroMayor = numeroDos;
            console.log("El número mayor es: " + numeroMayor);
        } 
    }else{
        alert("Por favor llene los campos");
    }
}

function calNumMayor() {
    console.log("2. Dados dos números, indicar cual es mayor o si son números iguales, ésta vez ingresando los números por teclado.");
    let numeroUno, numeroDos, numeroMayor;
    numeroUno = prompt("Ingrese el numero uno: ");
    numeroDos = prompt("Ingrese el numero dos: ");
    numeroMayor = 0;

    if(numeroUno != '' || numeroDos != '' ){
        if (numeroUno > numeroDos) {
            numeroMayor = numeroUno;
            console.log("El número mayor es: " + numeroMayor);
        } else if (numeroUno == numeroDos) {
            resultado = console.log("Los números son iguales");
        } else {
            numeroMayor = numeroDos;
            console.log("El número mayor es: " + numeroMayor);
        } 
    }else{
        alert("Por favor llene los campos");
    }
}

function calcularAreaCircunferencia() {
    console.log("3. Calcular el área de una circunferencia, ingresando el radio por consola.");
    var areaCirculo, radioCirculo, pi;
    pi = 3.1416;
    radioCirculo = prompt("Ingrese el radio de la cicunferencia: ");
    areaCirculo = pi * radioCirculo * radioCirculo;
    console.log("El área de la circunferencia es: " + areaCirculo)
}

function calcularValorCompra() {
    console.log("4. Calcular el valor total de una compra. Debe ingresar cantidad de productos y el valor de productos.");
    let cantidadProductos, valorProducto, valorTotalCompra;
    cantidadProductos = prompt("Ingrese la cantidad de productos: ");
    valorProducto = prompt("Ingrese el valor del producto: ");
    valorTotalCompra = cantidadProductos * valorProducto;
    console.log(`El valor de la compra es: ${valorTotalCompra}`)
}

function mostrarNumerosParesImpares() {
    console.log("5. Mostrar los números pares e impares del 1 al 100.");
    for (let index = 1; index <= 100; index++) {
        if (index % 2 == 0) {
            console.log(`${index} = Número par`);
        } else {
            console.log(`${index} = Número impar`);
        }
    }
}

function IndicarNumeros() {
    console.log("6. Indicar si un número es mayor, menor o igual que cero.");
    let numero 
    numero = prompt("Ingrese un número: ");
    if (numero > 0) {
        console.log("El número ingresado es mayor a cero");
    } else if (numero < 0) {
        console.log("El número ingresado es menor a cero");
    } else {
        console.log("El número ingresado es igual a cero");
    }
}

function ordenarNumeros() {
    console.log("7. Ordenar tres números ingresados por teclado de mayor a menor y de menor a mayor. Y dado el caso que los tres sean iguales, indicarlo con un mensaje.");
    let numeroMayor, numeroMenor, medio;
    numeroUno = prompt("Ingrese el primer número: ");
    numeroDos = prompt("Ingrese el segundo número: ");
    numeroTres = prompt("Ingrese el tercer número: ");
    if (parseInt(numeroUno) == parseInt(numeroDos) && parseInt(numeroUno) == parseInt(numeroTres)) {
        console.log("Los números son iguales");
    } else {
        if (parseInt(numeroUno) >= parseInt(numeroDos) && parseInt(numeroUno) > parseInt(numeroTres)) {
            numeroMayor = parseInt(numeroUno)
        } else if (parseInt(numeroDos) >= parseInt(numeroUno) && parseInt(numeroDos) > parseInt(numeroTres)) {
            numeroMayor = parseInt(numeroDos);
        } else {
            numeroMayor = parseInt(numeroTres);
        }
        if (parseInt(numeroUno) <= parseInt(numeroDos) && parseInt(numeroUno) < parseInt(numeroTres)) {
            numeroMenor = parseInt(numeroUno); 
        } else if (numeroDos <= parseInt(numeroUno) && parseInt(numeroDos) < parseInt(numeroTres)) {
            numeroMenor = parseInt(numeroDos);
        } else {
            numeroMenor = parseInt(numeroTres);
        }
        medio = (parseInt(numeroUno) + parseInt(numeroDos) + parseInt(numeroTres)) - numeroMayor - numeroMenor;+
        console.log("Números en orden ascendente: \n" + numeroMenor + "\n" + medio + "\n" + numeroMayor);
        console.log("Números en orden descendente: \n" + numeroMayor + "\n" + medio + "\n" + numeroMenor);
    }
}

function diasLaboralesFestivos() {
    console.log("8. Indicar si un día de la semana es día laboral o día festivo.");
    let numero;
    numero = prompt("------DIAS DE LA SEMANA------- \n1. Lunes. \n2. Martes. \n3. Miércoles \n4. Jueves \n5. Viernes.   \n6. Sábado. \n7. Domingo. \nElija un día de la semana: ")
    switch (numero) {
        case "1":
            console.log("El lunes es un día laboral.")
            break;
        case "2":
            console.log("El martes es un día laboral.")
        break;
        case "3":
            console.log("El miércoles es un día laboral.")
            break;
        case "4":
            console.log("El jueves es un día laboral.")
            break;
        case "5":
            console.log("El viernes es un día laboral.")
            break;
        case "6":
            console.log("El sábado es un día laboral.")
        break;
        case "7":
            console.log("El domingo es un día festivo.")
        break;
    
    default:
        alert("Error, ingrese una opción correcta.")
        break;
    }
}

function MostrarNumerosDosEnDos() {
    console.log("9. Mostrar los números de 2 en 2 hasta N números.");
    var N;
    N = prompt("Ingrese la cantidad de números: ");
    for (let index = 1; index <= N; index = index + 2) {
        console.log(index);
    }
}

function mostrarMenuTecnologias() {
    console.log("10. Mostrar un menú con un listado de 10 tecnologías de desarrollo de software. Este menú solo se dejará de ver si se selecciona la opción de Salir o cerrar.");
   let opcion = true;
    while (true) {
        opcion = prompt("*******10 TECNOLOGIAS DE DESARROLO DE SOFTWARE******* \n1. Angular. \n2. React.js. \n3. React vs Angular. \n4. Java. \n5. Python. \n6. GO. \n7. C++. \n8. Swift. \n9. MongoBD. \n10. NodoJS. \n11. Salir o cerrar.");
        if (opcion == "11") {
            break;
        }
    }
}

function calcularSalarioTotal() {
    console.log("11. Calcular el salario total de un empleado ingresando el valor de la hora, la cantidad de las horas y el nombre del empleado.");
    var nombreEmpleado;
    let valorHora, cantidadHoras, salarioTotal;
    var deducciones, horasExtras, totalPagar, valorHorasExtras, recargo;
    nombreEmpleado = prompt("Ingrese el nombre del empleado: ");
    valorHora = prompt("Ingrese el valor de la hora: ");
    cantidadHoras = prompt("Ingrese la cantidad de horas trabajadas: ");
    salarioTotal = valorHora * cantidadHoras;
    valorHorasExtras = 0;
    recargo = 0;
    deducciones = 113566;
    if (parseInt(cantidadHoras) < 24) {
        console.log("No puede trabajar menos de 24 horas");
    } else {
        if (parseInt(cantidadHoras) > 96) {
            horasExtras = cantidadHoras - 96;
            valorHorasExtras = (parseInt(valorHora) * 25 / 100) + parseInt(valorHora);
            recargo = horasExtras * valorHorasExtras;
        } else {
            salarioTotal = cantidadHoras * valorHora;
            deducciones = 113566;
        }
        totalPagar = salarioTotal - deducciones + recargo
        console.log(`El empleado ${nombreEmpleado} ganó un salario de ${"$" + salarioTotal} trabajando ${cantidadHoras} horas con un valor de ${"$" + valorHora} la hora.`);
        console.log("El valor del recargo por las horas extras es: $" + recargo);
        console.log("El valor de las deducciones por salud y pension es: $" + deducciones);
        console.log("El total a pagar es: $" + totalPagar);
    }
}

function realizarOperacionesBasicas() {
    console.log("12. Realizar una calculadora con las 4 operaciones básica, donde se podrá seleccionar una de las 4 operación o las 4 al mismo tiempo. Los valores con los cuales se realizará la operación matemática serán capturados por pantalla");
    let numeroUno, numeroDos, opcion;
    let suma, resta, multiplicacion, division;
    numeroUno = prompt("Ingrese el primer número: ");
    numeroDos = prompt("Ingrese el segundo número: ");
    opcion = prompt("Elija la operación que desea realizar: \n1. Sumar \n2. Restar \n3. Multiplicar \n4. Dividir \n5. Todas las anteriores: ")
    switch (opcion) {
        case "1":
            suma = parseInt(numeroUno) + parseInt(numeroDos);
            console.log("La Suma es: " + suma);
            break;
        case "2":
            resta = numeroUno - numeroDos;
            console.log("La Resta es: " + resta);
            break;
        case "3":
            multiplicacion = numeroUno * numeroDos;
            console.log("La Multiplicación es: " + multiplicacion);
            break;
        case "4":
            division = numeroUno / numeroDos;
            console.log("La División es: " + division);
            break;
        case "5":
            suma = parseInt(numeroUno) + parseInt(numeroDos);
            resta = numeroUno - numeroDos;
            multiplicacion = numeroUno * numeroDos;
            division = numeroUno / numeroDos;
            console.log("La suma es: " + suma);
            console.log("La Resta es: " + resta);
            console.log("La Multiplicación es: " + multiplicacion);
            console.log("La División es: " + division);
            break;
        default:
            alert("Opción incorrecta, intente nuevamente.")
        break;
    }
}

function calcularIMC() {
    console.log("13. Realizar una calculadora del IMC (índice de masa corporal).");
    var nombre;
    let peso, estatura, imc;
    nombre = prompt("Ingrese el nombre: ");
    peso = prompt("Ingrese el peso en kg: ");   
    estatura = prompt("Ingrese la estatura: ");
    imc = peso / (estatura * estatura);
    if (imc < 18.5) {
        console.log(nombre + ": Tiene bajo peso.");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log(nombre + ": Tiene un peso normal."); 
    } else if (imc >= 25 && imc <= 29.9) {
        console.log(nombre + ": Tiene sobrepeso");
    } else if (imc >= 30 && imc <= 39.9) {
        console.log(nombre + ": Tiene obesidad");
    } else {
        console.log(nombre + ": Tiene obesidad severa");
    }
}

imprimirMenuEjercicios()