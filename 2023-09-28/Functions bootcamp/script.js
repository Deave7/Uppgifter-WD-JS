//Övning 1

let string = "hejdå"

function getLength(string) {
    return string.length
}

console.log(getLength(string))

//Övning 2

let year = "1996-07-20"

function getYear(year) {
    return year.substring(0,4)
}

console.log(getYear(year))

//Övning 3

let numOne = 10;
let numTwo = 20;
let operator = "+"


function simpleMath(numOne, numTwo, operator) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") 
    {
        console.log("You have to input numbers.")
    }
    else if (operator != "+" && operator != "-" && operator != "*" && operator != "/") 
    {
        console.log("You have to input one of the following operators: + - * /")
    }
    else if (operator == "+")
    {
        console.log(addition(numOne, numTwo)) 
    }
    else if (operator == "-")
    {
        console.log(multiplication(numOne, numTwo)) 
    }
    else if (operator == "*")
    {
        console.log(subtraction(numOne, numTwo)) 
    }
    else if (operator == "/")
    {
        console.log(division(numOne, numTwo)) 
    }
  
}

function addition(numOne, numTwo) {
    return (numOne + numTwo)
}
function subtraction(numOne, numTwo) {
    return (numOne - numTwo)
}
function multiplication(numOne, numTwo) {
    return (numOne * numTwo)
}
function division(numOne, numTwo) {
    return (numOne / numTwo)
}

simpleMath(numOne, numTwo, operator)