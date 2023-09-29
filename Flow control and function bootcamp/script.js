// 1 -------------------------------------------------------

let width = 100;
let height = 200;

function area(width, height) {
    return width * height
}

console.log(area(width, height))

// 2 -------------------------------------------------------

let str = "";

function isEmpty(str) {
    if (typeof str !== "string") {
        console.log("You have to enter a string")
    }
    else if (str.length === 0) {
        console.log("The string is empty")
    }
    else {
        console.log("The string is not empty")
    }
}

isEmpty(str)

// 3 -------------------------------------------------------

let a = 100;
let b = -200;

function isNegative(number) {
    if (number >= 0) {
        console.log("The number is positive")
    }
    else {
        console.log("The numer is negative")
    }
}

isNegative(a)
isNegative(b)

// 4 -------------------------------------------------------

function factorialSum(number) {
    
    let factorial = 1;

    if (number === 1) {
        factorial = 1;
    }
    else if (number === 2) {
        factorial = 2;
    }
    else {
        for (let i = 1; i <= number; i++ ) {
            factorial *= i;
        }
    }

    console.log(`${number}! equals ${factorial}`)
}

factorialSum(5)

// 5 -------------------------------------------------------

//använd promt() om du vill ta in datan från användare

let d = 100
let e = -200;
let f = 500

function isBiggest(num1, num2, num3) {
    if (d > e && d > f) {
        console.log(`Nummer D ${d} är störst`)
    }
    else if (e > d && e > f) {
        console.log(`Nummer E ${e} är störst`)
    }
    else {
        console.log(`Nummer F ${f} är störst`)
    }
}

isBiggest(d,e,f)

// 6 -------------------------------------------------------

let sentence = "I'm doing a course in javaScript"

function contains(string) {
    console.log(string.includes("javaScript"))
}

contains(sentence)

// 7 -------------------------------------------------------

let celsius = 20

function celsiusToFarenheit(celsius) { 
    console.log((celsius * (9/5)) + 32)
}

celsiusToFarenheit(celsius)

// 8 -------------------------------------------------------

let numOne = 10;
let numTwo = 20;
let operator = "*"


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
        console.log(subtraction(numOne, numTwo)) 
    }
    else if (operator == "*")
    {
        console.log(multiplication(numOne, numTwo)) 
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

// 9 -------------------------------------------------------

function pallidrom(word) {
    reverse = word.split("").reverse().join("");

    if (word === reverse) {
        console.log("The word is a pallidrom")
    }
    else {
        console.log("The word isn't a pallindrom")
    }
}

pallidrom("radar")

// 10 -------------------------------------------------------

let blomma1 = 300;
let blomma2= 600;

function isInLove(num1, num2) {
    if (num1 % 2 === 0 && num2 % 2 !== 0) {
        console.log("They are in love")
    }
    else if (num2 % 2 === 0 && num1 % 2 !== 0) {
        console.log("They are in love")
    }
    else {
        console.log("They are not in love")
    }
}

isInLove(blomma1, blomma2)

// 11 -------------------------------------------------------

let word11 = "test"

function getMiddle(word) {
    wordLength = word11.length

    if (wordLength % 2 === 0) {
        secondLetter = wordLength / 2
        firstLetter = secondLetter - 1

        console.log(`${word11[firstLetter]}${word11[secondLetter]}`)
    }
    else {
        middleLetter = (wordLength / 2) - 0.5

        console.log(`${word11[middleLetter]}`)
    }
}

getMiddle(word11)

// 12 -------------------------------------------------------

let sentence12 = "Seems to work as intended"

function getShortestWord(sentence) {
    const words = sentence.split(' ');
    let shortestLength = Infinity;
    let shortestWord = '';

    for (const word of words) {
        if (word.length < shortestLength) {
            shortestLength = word.length
            shortestWord = word
        }
    }

    console.log(shortestLength)
}

getShortestWord(sentence12)

// 13 -------------------------------------------------------

const tal = 17; //Primtal
const tal2 = 10; //Inte ett primtal 

function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(10))

// 14 -------------------------------------------------------
// 14b använd prompt för att ta in användardata istället =) 

let name = "Kalle"
let city = "Göteborg"
let favoriteColor = "blue"

function welcome(name, city, favoriteColor) {
    console.log(`Welcome ${name} from ${city} with favourtie color ${favoriteColor}`)
}

welcome(name, city, favoriteColor)

// 15 -------------------------------------------------------

let unroundedNumber = 10.345

function roundMyNumber(number) {
    console.log(Math.round(number*100)/100)
}

roundMyNumber(10.345)

// 16 -------------------------------------------------------

let month = "jan"

function whichMonth(string) {
    switch (string) {
        case "jan":
            console.log("31")
            break;
        case "feb":
            console.log("28")
            break;
        case "mar":
            console.log("31")
            break;
        case "apr":
            console.log("30")
            break;
        case "may":
            console.log("31")
            break;
        case "jun":
            console.log("30")
            break;
        case "jul":
            console.log("31")
            break;
        case "aug":
            console.log("31")
            break;
        case "sep":
            console.log("30")
            break;
        case "oct":
            console.log("31")
            break;
        case "nov":
            console.log("30")
            break;
        case "dec":
            console.log("31")
            break;
    }
} 

whichMonth(month)