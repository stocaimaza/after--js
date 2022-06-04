//VALORES - TIPO DE DATOS
/* 
48 = number

"Hola Mundo" = string

true = booleano
false */


// VARIABLES 

// DECLARO: 

let nombre; 

// INICIALIZAR VARIABLES: 

nombre = "Samuel";

//PUEDO DECLARAR E INICIALIZAR LA VARIABLE AL MISMO TIEMPO: 

let edad = 35; 

const anioNacimiento = 1987;
let anioActual = 2022;

let edadActual = anioActual - anioNacimiento;

// ENTRADA Y SALIDA DE INFORMACIÓN 

/**** SISTEMA DE NOTAS ******/ 

//Podemos capturar información del teclado por medio de la sentencia prompt();

let usuario = prompt("Ingrese el nombre del usuario: ");

let notaPrimerParcial = parseInt(prompt("Ingrese la nota del primer parcial: "));

//console.log(typeof(notaPrimerParcial));

alert(`Hola ${usuario} tu primer nota es ${notaPrimerParcial}`);

let notaSegundoParcial = parseInt(prompt("Ingrese la nota del segundo parcial: "));

// OPERACIÓN MATEMÁTICA Y MOSTRAR POR CONSOLA EL RESULTADO: 

let promedio = (notaPrimerParcial + notaSegundoParcial) / 2;
console.log(`El promedio de tus notas es ${promedio}`);

// PUEDO UTILIZAR LAS BACKSTICKS PARA UNIFICAR STRINGS CON VALORES ALMACENADOS EN VARIABLES. 


