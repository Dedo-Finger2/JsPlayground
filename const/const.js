import { newTopic,output,showContent } from "../utils/utils.js"; // Importanto funções

/**
 * Constantes são variáveis que não podem ter seu valor alterado 
 * no processamento do código
 * const a = 3.14;
*/

newTopic(1, 'Constantes');

// let pi = 3.14159;
const PI = 3.14159; // ! Constantes devem ser escritas tudo em maiúsculo
let radius;
let circunference;

radius = window.prompt('Enter the radiu of a circle');
radius = Number(radius);

circunference = 2 * PI * radius;

console.log(`The circunference is: ${circunference}`);
output(`The circunference is: ${circunference}`, 'Constantes');


// ------------------------- Código ------------------------- \\
newTopic(2, 'Código')
showContent('const');
