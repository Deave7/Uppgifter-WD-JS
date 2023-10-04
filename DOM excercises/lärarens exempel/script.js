/****** Exempel ett ********************************/

console.log(document); // vårt dom träd
// vi letar upp vår knapp och får tillbaks vårt html element med id button
const clickme = document.querySelector("#btn");
console.log(clickme);
let counter = 1;
clickme.addEventListener("click", () => {
  console.log("du har klickat", counter++);
});
/************  *********************/

/********************************  exempel 2 ändra texten on click ********************************/
// Function to change the text of the <h1> element with id "demo"
function changeText() {
  let element = document.querySelector("p");
  // Change the content of the element using the innerHTML property
  element.innerHTML =
    "“A man steals a $100 bill from a shop. He then uses that $100 bill to buy $70 worth of goods. The shop owner hands him back $30 in change. How much money did the shop owner lose?”";
}
// Add an event listener to the button
document.querySelector("#btn").addEventListener("click", changeText);
/*****************************  *******************************************************/

/**************************** skapa ett HTML Element med javascript *******************/
let paragraph = document.createElement("p");
let text = document.createTextNode("this is my life");
paragraph.appendChild(text);
document.body.appendChild(paragraph);
/**********************************************    ************************************/

/************************** ändra på styling av ett element med on click ******************************/
// Function to change the style of the paragraph
function changeStyle() {
  // Get a reference to the paragraph element by its ID
  /* let paragraph = document.getElementById("myParagraph"); */

  // Change the style of the paragraph
  paragraph.style.color = "red"; // Change text color to red
  paragraph.style.fontWeight = "bold"; // Make text bold
  paragraph.style.backgroundColor = "yellow"; // Change background color to yellow
}
// Add an event listener to the button
document.getElementById("btn3").addEventListener("click", changeStyle);
/***************************  *****************************************/
