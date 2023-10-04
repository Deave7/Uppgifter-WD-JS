//1

function changeText() {
    let element = document.querySelector(".art-1 h3");
    element.innerHTML = "Potato"
}

changeText();

//2

function changeHome() {
    let element = document.querySelector("nav > a:nth-child(1)");
    element.innerHTML = "Start"
}

changeHome()

//3

function changeContact() {
    let element = document.querySelector("nav > a:nth-child(3)");
    element.innerHTML = "Mail Us"
}

changeContact()

//4 

function changeInformation() {
    let element = document.querySelector(".art-2 p")
    element.innerHTML = "I changed the information!"
}

changeInformation()

//5

function changeButton() {
    let element = document.querySelector(".art-1 button")
    element.innerHTML = "Press me!"
    element.style.backgroundColor = "green"
}

changeButton()

//6

function changeBackground() {
    let element = document.querySelector(".art-1 figure")
    element.style.backgroundColor = "green"
}

changeBackground()

//7

function changeAdress() {
   let element = document.querySelector("footer > section > article:nth-child(2) > p")
   element.innerHTML = "Rådagatan 32B <br> 53100 <br> Lidköping"
}

changeAdress()

//8

function changeAllP() {
    let elements = document.querySelectorAll("p")
    elements.forEach(function(element) {
        element.style.color = "red";
    });
}

changeAllP()

//9

function changeAllButtons() {
    let elements = document.querySelectorAll("button")
    elements.forEach(function(element) {
        element.innerHTML = "Add to cart"
    })
}

changeAllButtons()

//10 

function addClass() {
    let element = document.querySelector("footer > section > article:nth-child(1) > a:nth-child(2)")
    element.classList.add("active")
}

addClass()

//11

function removeClass() {
    let element = document.querySelector("header > img")
    element.classList.remove("logo")
}


//12 

function addAlternative() {
    let element = document.querySelector("footer > section > article:nth-child(1)")
    element.innerHTML += '<a href="#""> Quit </a>'
}

function addAlternative2() {
    let element = document.querySelector("footer > section > article:nth-child(1)");
    element.insertAdjacentHTML('beforeend', '<a href="#">Quit</a>');
}


addAlternative()
addAlternative2()

//13 

function addProduct() {
    let element = document.querySelector("main")
    element.innerHTML += '<article class="art-4"><figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure><h2>Sinus Hoodie</h2><h3>Forrest</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p><button>Add to cart</button></article>';
}

function addProduct2() {
    let element = document.querySelector("main")
    element.insertAdjacentHTML('beforeend', '<article class="art-4"><figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure><h2>Sinus Hoodie</h2><h3>Forrest</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p></article>')
}

addProduct()


//14 

function logoClick() {
    let logoElement = document.querySelector(".logo")

    logoElement.addEventListener("click", function() {
        console.log("Found you!")
    })
}

logoClick()

//15 

function articleClick() {
    const elements = document.querySelectorAll("main article")

    elements.forEach(function(article){
        article.addEventListener("click", function() {
            const elementClass = article.getAttribute("class")

            if (elementClass.includes("art-1")) {
                console.log("Hi, I'm article Ash")
            }
            else if (elementClass.includes("art-2")) {
                console.log("Hi, I'm article Fire")
            }
            else if (elementClass.includes("art-3")) {
                console.log("Hi, I'm article Water")
            }
            else if (elementClass.includes("art-4")) {
                console.log("Hi, I'm article Forrest")
            }
        })
    })
}

articleClick()
