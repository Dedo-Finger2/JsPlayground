/**
 * Variáveis podem ser escritas com a palavra
 * * let -> variáveis
 * * const -> constantes
 */

let firstName = "Greg"; // String
let age = 19; // Number
let student = true; // Boolean

// Mostrando no console do navegador
console.log(`Hello ${firstName}!`);
console.log(`You are ${age} years old.`);
console.log(`Enrolled: ${student}.`);

// Mostrando valores no HTML
document.getElementById('p1').innerHTML = `Hello ${firstName}!`;
document.getElementById('p2').innerHTML = `You are ${age} years old.`;
document.getElementById('p3').innerHTML = `Enrolled: ${student}.`;
