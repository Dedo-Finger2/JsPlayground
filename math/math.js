import { newTopic,output,showContent } from "../utils/utils.js"; // Importanto funções

/**
 * Math é uma biblioteca nativa que contém
 * funções que fazem operações matemáticas complexas
*/

newTopic(1, 'Operações matemáticas complexas');

let x = 3.5;
output(`Valor de x: ${x}`, 'Operações matemáticas complexas');

const ROUND = Math.round(x); // Round
output(`Math.round(x) => ${ROUND}`, 'Operações matemáticas complexas');

const FLOOR = Math.floor(x); // Round para baixo
output(`Math.floor(x) => ${FLOOR}`, 'Operações matemáticas complexas');

const CIEL = Math.ceil(x); // Round para cima
output(`Math.ciel(x) => ${CIEL}`, 'Operações matemáticas complexas');

const POW = Math.pow(x, 2); // Potência
output(`Math.pow(x, 2) => ${POW}`, 'Operações matemáticas complexas');

const SQRT = Math.sqrt(x); // Raiz quadrada
output(`Math.sqrt(x) => ${SQRT}`, 'Operações matemáticas complexas');

const ABS = Math.abs(x); // Distância de 0
output(`Math.abs(x) => ${ABS}`, 'Operações matemáticas complexas');

const PI = Math.PI;
output(`Math.PI => ${PI}`, 'Operações matemáticas complexas');


// ------------------------- Mínimo e máximo ------------------------- \\
newTopic(2, 'Minimo e máximo');

let y = 5;
let z = 9;
let maximum;
let minimum;

maximum = Math.max(x, y, z);
output(`Valor máximo: ${maximum}`, 'Minimo e máximo');

minimum = Math.min(x, y, z);
output(`Valor mínimo: ${minimum}`, 'Minimo e máximo');

// ------------------------- Código ------------------------- \\
newTopic(2, 'Código');
showContent('math');
