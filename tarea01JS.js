/*
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
*/

let number1 = parseInt(prompt("escribe un número"));
let number2 = parseInt(prompt("escribe un número"));
let number3 = parseInt(prompt("escribe un número"));

let array = [number1, number2, number3];
let numbers = array.sort((a, b) => a - b);

let mayor = numbers[2];
let centro = numbers[1];
let menor = numbers[0];

console.log(`el número menor es ${menor}`);
console.log(`el número del centro es ${centro}`);
console.log(`el número mayor es ${mayor}`);


if (numbers[0] === numbers[1]) {
    console.log(`${numbers[0]} y ${numbers[1]} son iguales`);
} else if (numbers[1] === numbers[2]) {
    console.log(`${numbers[1]} y ${numbers[2]} son iguales`);
} else if (numbers[0] === numbers[2]) {
    console.log(`${numbers[0]} y ${numbers[2]} son iguales`);
}

console.log(`de menor a mayor= ${numbers.toString()}`);
let numbersreverse = numbers.reverse();
console.log(`de mayor a menor= ${numbersreverse.toString()}`);