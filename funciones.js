/* FUNCIONES */
/*Una función es un conjunto de instrucciones que se agrupan para realizar una tarea 
concreta */

// ¿ Cómo se declaran las funciones ? 

//DECLARANDO 
function saludar() {
    alert("Hola Alumnos!");
}

//LLAMO LA FUNCIÓN: 

saludar();

//Puedo recibir información externa mediante PARAMETROS. 
//¿Los parametros son variables? Si son variables y se declaran adentro de la función 
//entre sus parentesis. 

let alumno = prompt("Ingrese su nombre");

function saludoAlumno(nombre) {
    alert(`Hola alumno: ${nombre}`);
}

saludoAlumno(alumno);


// Las funciones pueden retornar un valor a traves de la palabra reservada return. 

function suma(a,b){
    return a + b;
}

let resultado = suma(10,10);
alert(resultado);

/*FUNCION ANÓNIMA */

// Se definen sin nombre y se asignan a una variable. Se las puede llamar usando 
//el identificador de la variable.  

const restar = function (a,b) { return a - b};
alert(restar(50,25));

/* FUNCIÓN FLECHA */

const multiplicar = (a,b) => a * b;
alert(`Multiplicación: ${multiplicar(10,10)}`);

//Si le pongo llaver tengo que poner retur, sin llaves no hace falta. 


