"use strict";
//Array.findIndex()
// function que evalua si es un numero primo
function isOdd( element ) {
  return element % 2 !== 0;
}
// definicin de un array de numeros
let myNumbers = [2, 8, 13, 23, 54];
// returna el indice de el primer elemento  que es un numero primo  en el array
let firstOdd = myNumbers.findIndex( isOdd );
console.log( firstOdd );
// Output: 2
// funcion que regreasa un numero
function isEven( element ) {
  return element % 2 == 0;
}
// definir un array de numeros interos
let numbers = [1, 45, 8, 98, 7];
// retorna el primer elemento par al evaluar la función con el array
let firstEven = numbers.findIndex( isEven );
console.log(firstEven); // 2
//Ejemplo 2
// retorna el primer  indice de 'Orange' en el array
let fruitsArray = ["Apple", "Orange", "Pear", "Lemon", "Watermelon", "pinaple", "Orange", "Abocado", "Strawberry", "Berry"];
let index = fruitsArray.findIndex((fruit) => fruit === "Orange");
console.log(index); // 1