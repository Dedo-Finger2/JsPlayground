// Importanto funções
import { newTopic,output,showContent } from "../../utils/utils.js"; 

// ------------------------- Prompt ------------------------- \\
// newTopic(1, 'User input via prompt');

let a;
let b;
let c;

// a = window.prompt('Enter side A: ');
// a = Number(a);

// b = window.prompt('Enter side B: ');
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log(c);
// output(`Side C = ${c}`, 'User input via prompt');


// ------------------------- HTML input ------------------------- \\

// Pegando conteúdo

const A_TEXT_BOX = document.getElementById('aTextBox');
const B_TEXT_BOX = document.getElementById('bTextBox');
const RESULTADO = document.getElementById('resultado');
const SUBMIT_BUTTON = document.getElementById('submitButton');

SUBMIT_BUTTON.onclick = function() {
    let a = Number(A_TEXT_BOX.value);
    let b = Number(B_TEXT_BOX.value);
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    RESULTADO.innerHTML = `Resultado C = ${c}`;
}
