/**
 * Nesse arquivo vão estar funções que fazem alguma coisa
 * e que seria interessante usar em todos os outros arquivos.
*/

/**
 * * output
 * Responsável por mostrar na tela um valor
 * @param {string} value - Valor que será exibido 
 * @param {string} container - A que tópico esse output pertence
*/
export function output(value, container) {
    const outputs = document.getElementById(`${container}-outputs`);
    const output = document.createElement('li');

    output.setAttribute('id', `output${value}`);
    output.setAttribute('class', `mb-3`);
    output.innerHTML = value;

    outputs.appendChild(output);
}

/**
 ** newTopic
 * Responsável por criar um novo container de outputs
 * @param {number} number - Número do tópico desse container
 * @param {string} title - Título desse container de outputs
*/
export function newTopic(number, title) {
    const topicContainer = document.createElement('div');
    const topic = document.createElement('h2');
    const divider = document.createElement('hr');
    const containerGeral = document.getElementById('containerGeral');

    containerGeral.appendChild(divider);

    topicContainer.setAttribute('id', `${title}-outputs`);
    topicContainer.setAttribute('class', `ms-3 text-start`);
    containerGeral.appendChild(topicContainer);

    topic.setAttribute('id', title);
    topic.setAttribute('class', 'text-primary');
    topic.innerHTML = `${number} - ${title}`;
    topicContainer.appendChild(topic);
}

export function showContent(fileName) {
    fetch(`${fileName}.js`)
        .then(response => response.text())
        .then(data => {
            document.querySelector('#file-content').innerHTML = data;
        });
}