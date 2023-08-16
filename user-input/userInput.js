// * Forma fácil de receber input do usuário
// let username = window.prompt("What's your name?");
// console.log(username);

// * Forma difícil porém mais usada
let username;

document.getElementById('myButton').onclick = function() {
    username = document.getElementById('myInput').value;
    console.log(username);
    document.getElementById('myLabel').innerHTML = `Hello ${username}`;
}
