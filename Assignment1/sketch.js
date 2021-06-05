let allEquations = document.getElementById("equations");
addNewEquation();

function createEquationValue() {
    let firstNumber = Math.ceil(Math.random() * 100);
    let secondNumber = Math.ceil(Math.random() * 100);
    let equationSigns = ['+', '-', '*', '/', '%'];
    let randomInteger = getRandomInt(0, equationSigns.length - 1);
    
    let equationText = document.createTextNode(`${firstNumber} ${equationSigns[randomInteger]} ${secondNumber} = `);

    return equationText;    
}

function addNewEquation() {
    let newEquation = document.createElement("p");
    let equationText = createEquationValue();
    let userResultInput = document.createElement("input");
    userResultInput.type = "text";
    
    newEquation.appendChild(equationText);
    newEquation.appendChild(userResultInput);
    allEquations.appendChild(newEquation);

    userResultInput.focus();

    addListenerToInput(userResultInput, newEquation);
}

function checkCorrectness(inputField, newEquation) {
    let equation = newEquation.textContent.split(" ");

    let firstNumber = parseInt(equation[0], 10);
    let sign = equation[1];
    let secondNumber = parseInt(equation[2], 10);

    let result = turnSignToMath[sign](firstNumber, secondNumber);

    let inputFieldValue = inputField.value;

    if (result == inputFieldValue) {
        inputField.style.color = '#17E768';
        newEquation.style.color = '#17E768';
    } else {
        inputField.style.color = '#E71717';
        newEquation.style.color = '#E71717';
    }
}

function addListenerToInput(inputField, newEquation) {
    inputField.addEventListener("keyup", function handler(event) {
        if (event.key === 'Enter') {    
            event.preventDefault();
            checkCorrectness(inputField, newEquation);
            event.currentTarget.removeEventListener(event.type, handler);
            inputField.style.border = 'none';   
            inputField.setAttribute('readonly', 'readonly');
            inputField.color="#ffffff"
            addNewEquation();
        }
      });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}   

let turnSignToMath = {
    '+': function (x, y) { return parseInt((x + y), 10) },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y },
    '%': function (x, y) { return x % y }
}