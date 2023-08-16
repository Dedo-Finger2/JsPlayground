const NUMBER_TEXT = document.getElementById('number');
let numberValue = 0;

NUMBER_TEXT.innerHTML = numberValue;

function resetNumberValue() {
    numberValue = 0;
    NUMBER_TEXT.innerHTML = numberValue;
}

function increaseNumberValue() {
    numberValue++;
    NUMBER_TEXT.innerHTML = numberValue;
}

function decreaseNumberValue() {
    numberValue--;
    NUMBER_TEXT.innerHTML = numberValue;
}