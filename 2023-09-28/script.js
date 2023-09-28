//bigger

let a = 20;
let b = 10;

if (a > b) {
    console.log("A is bigger than B!");
}
else {
    console.log("B is bigger than A!")
}

//equals or not

let c = "apple"
let d = "apple"

if (c == d) {
    console.log("C equals D")
}

let e = "apple"
let f = "pear"

if (e != f) {
    console.log("C does NOT equals D")
}

//biggest

let num1 = prompt("Please enter your first number:");
let num2 = prompt("Please enter your sedond number:")

if (num1 > num2) {
    console.log("Your first number", num1 ,"was bigger than your second number", num2);
}
else {
    console.log("Your second number", num2, "was bigger than your first number", num1);
}

//even or not 

let num3 = prompt("Please enter a number to check if it's even or odd")

if (num3 % 2 == 0) {
    console.log("The number you inputed", num3, "was even! :)")
}
else {
    console.log("The number you inputed", num3, "was odd! :( ")
}

//Lisebergsvakten

let height = prompt("Please enter your height: ")

if (height >= 150) {
    console.log("True")
}
else {
    console.log("False")
}

//Lisebergsvakten 2

let ridePass = prompt("Please enter what type of ride pass you have:")

if (ridePass.toLocaleLowerCase() == "small") {
    console.log("You do not have the correct ride pass to go on Balder. Please exit the queue.")
}
else if (ridePass.toLocaleLowerCase() == "medium") {
    console.log("You do not have the correct ride pass to go on Balder. Please exit the queue.")
}
else if (ridePass.toLocaleLowerCase() == "large") {
    console.log("You have the correct ride pass to go on Balder. Please proceed.")
}
else if (ridePass.toLocaleLowerCase() == "platinum") {
    console.log("You  have the correct ride pass to go on Balder. Please proceed.")
}

//BMI kalkylator

heightTwo = prompt("Please enter your height in M:")
weightTwo = prompt("Please enter your weight in KG:")

if (weightTwo / (heightTwo * heightTwo) < 18.5) 
{
    console.log("Underweight")
} 
else if  (weightTwo / (heightTwo * heightTwo) > 18.5 && weightTwo / (heightTwo * heightTwo) < 25) 
{
    console.log("Normalweight")
} 
else if (weightTwo / (heightTwo * heightTwo) > 25 && weightTwo / (heightTwo * heightTwo) < 30) 
{
    console.log("Overweight")
} 
else if (weightTwo / (heightTwo * heightTwo) > 30)
{
    console.log("obesity")
} 

//Weekdays

let weekday = prompt("Please enter what day in the week it is using a number 1-7")

switch (weekday) {
    case "1":
        console.log("It's monday")
        break;
    case "2":
        console.log("It's tuesday")
        break;
    case "3":
        console.log("It's wednesday")
        break;
    case "4":
        console.log("It's thursday")
        break;
    case "5":
        console.log("It's friday")
        break;
    case "6":
        console.log("It's saturday")
        break;
    case "7":
        console.log("It's sunday")
        break;
    default:
        console.log("false")
}


