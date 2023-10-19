const button = document.getElementById('calculateButton')
const resultText = document.getElementById('result')
button.addEventListener("click", calculator)



function calculator() {
    const num1 = getValue()
    const num2 = getValue2()
    const operator = document.getElementById('operator').value

    let result;

    switch(operator) {
        case 'add':
            result = add(num1, num2)
            break;
            
        case 'subtract':
            result = subtract(num1, num2)
            break;

        case 'multiply':
            result = multiply(num1, num2)
            break;

        case 'divide':
            result = divide(num1, num2)
            break;
    }

    resultText.textContent = result
}

function add(num1, num2) {
    return (num1 + num2) 
}

function subtract(num1, num2) {
    return (num1 - num2)
}

function multiply(num1, num2) {
    return (num1 * num2)
}

function divide(num1, num2) {
    return (num1 / num2)
}

function getValue() {
    const num1 = document.getElementById('num1').value
    return (parseInt(num1))
}
function getValue2() {
    const num2 = document.getElementById('num2').value
    return (parseInt(num2))
}