import { newTopic,output,showContent } from "../utils/utils.js"; // Importanto funções

newTopic(1, "Número aleatório");

// Número aleatório entre 0 e 1
let randomNumber = Math.random();
output(`let x = Math.random() = ${randomNumber}`, 'Número aleatório');

// Número aleatório entre 0 e 6
let randomNumber0to5 = Math.random() * 6;
output(`let x = Math.random() * 6 = ${randomNumber0to5}`, 'Número aleatório');

// Número aleatório entre 0 e 6 porém sem decimais
let randomNumber0to5Floor = Math.floor(Math.random() * 6);
output(`let x = Math.floor(Math.random() * 6) = ${randomNumber0to5Floor}`, 'Número aleatório');

// Número aleatório entre 1 e 7 também arredondado
let randomNumber1to6Floor = Math.floor(Math.random() * 6) + 1;
output(`let x = Math.floor(Math.random() * 6) + 1 = ${randomNumber1to6Floor}`, 'Número aleatório');

// ------------------- Exemplo com dados ------------------- \\
const dado1 = document.getElementById('dado1');
const dado2 = document.getElementById('dado2');
const dado3 = document.getElementById('dado3');
const rollDiceButton = document.getElementById('rollDice');

rollDiceButton.addEventListener('click', () => {
    let dado1Value = Math.floor(Math.random() * 6) + 1;
    let dado2Value = Math.floor(Math.random() * 6) + 1;
    let dado3Value = Math.floor(Math.random() * 6) + 1;

    dado1.innerHTML = dado1Value;
    dado2.innerHTML = dado2Value;
    dado3.innerHTML = dado3Value;
});

// Código
newTopic(2, "Código");
showContent('random-number');