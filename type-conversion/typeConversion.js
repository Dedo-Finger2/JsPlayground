import { newTopic,output,showContent } from "../utils/utils.js"; // Importanto funções
/**
 * Resultados do input sempre serão strings
 * Vamos ver como mudar o típo de uma variável
*/

newTopic(1, 'Tópico 1');

let age = window.prompt("How old are you?");

console.log(typeof(age));
output(`${typeof(age)} - age antes`, 'Tópico 1');

age = Number(age); // * Conversão

console.log(typeof(age));
output(`${typeof(age)} - age pós conversão`, 'Tópico 1');

age += 1;

console.log(`Happy birthday, you are ${age} years old!`);
output(`Happy birthday, you are ${age} years old!`, 'Tópico 1');

let x;
let y;
let z;

x = Number("3.14");
// x = Number("pizza"); // NaN (not a number)
y = String(3.14);
// z = Boolean(""); // False
z = Boolean("pizza"); // True

console.log(x, typeof(x));
console.log(y, typeof(y));
console.log(z, typeof(z));

output(`${x} - ${typeof x}`, 'Tópico 1');
output(`${y} - ${typeof y}`, 'Tópico 1');
output(`${z} - ${typeof z}`, 'Tópico 1');

newTopic(2, 'Teste NOVO TÓPICO');

output(x, 'Teste NOVO TÓPICO')

showContent('typeConversion');
