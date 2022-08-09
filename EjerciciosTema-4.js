/* 
*Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
	Pista: Los números inferiores a 0 son negativos y los 	superiores, positivos.
 */

let numero = 0; //cambia el numero
if (numero < 0) {
  console.log(`el numero ${numero} es negativo`);
} else if (numero > 0) {
  console.log(`el numero ${numero} es positivo`);
} else {
  console.log(`0`);
}

/*Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile
 sea inferior a 3, el bloque de código que tendrá el bucle deberá:

	Incrementar el valor de la variable en uno cada vez que se 	ejecute.

	Mostrarlo por pantalla cada vez que se ejecute.*/

numeroWhile = 0;
while (numeroWhile < 3) {
  console.log(numeroWhile);
  numeroWhile++;
}

/*Para el bucle Do While, deberás crear la misma estructura que en el While, pero 
solo se debe ejecutar una vez. */

numeroWhile = 0;
do {
  console.log(numeroWhile++);
} while (numeroWhile < 3);

/* Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición 
será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y
 deberá mostrarse por pantalla.
*/

numeroFor = 0;
for (numeroFor; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

/*Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones 
del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la 
estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación. */

var estacion = 3; //cambia el valor de la estacion

switch (estacion) {
  case 1:
    console.log("La estacion 1 es Verano");
    break;
  case 2:
    console.log("La estacion 2 es Otoño!");
    break;
  case 3:
    console.log("La estacion 3 es Invierno!");
    break;
  case 4:
    console.log("La estacion 4 es Primavera!");
    break;
  default:
    console.log("No es una estacion");
}
