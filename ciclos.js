/*CICLOS*/
/*¿En que momento voy a utilizar un ciclo? */

/* alert("Hola Mundo");
alert("Hola Mundo");
alert("Hola Mundo");
alert("Hola Mundo");
alert("Hola Mundo"); */

// TRES TIPOS DE CICLOS: for, while, do-while. 

// CICLOS POR CONTEO: 

for(let i = 0; i < 3; i++){
    alert("Hola Mundo");
}

// CICLOS CONDICIONALES. "Mientras", verifico si una condicion es verdadera. 
//"Si sale el sol voy a la playa todos los dias";

let clima = "llueve";

/* while(clima === "soleado") {
    alert("voy a la playa");
    clima = "nublado";
} */

//CUIDADO CON LOS BUCLES INFINITOS. 
// DO-WHILE. Primero realizo la accion y despues verifico si se cumple la condicion. 

do {
    alert("Voy a la playa primero, despues verifico si llueve");
}while( clima === "soleado");



