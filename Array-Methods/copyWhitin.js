"use strict";
//Array.copyWithin()
const fruitsList = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
let copyWithin = fruitsList.copyWithin(2, 0, 2); 
console.log(copyWithin);
//Array.splice()
let afirmation = ["I", "study", "JavaScript"];
afirmation.splice(1, 1); // apartit de index 1 remueve 1 elemento
console.log( afirmation ); // ["I", "JavaScript"]

//ejemplo 2
let dialog = ["I", "study", "JavaScript", "right", "now"];
// remueve 3 primeros elementos y remplaaa  con otros.
dialog.splice(0, 3, "Let's", "dance");
console.log( dialog ) // now ["Let's", "dance", "right", "now"]