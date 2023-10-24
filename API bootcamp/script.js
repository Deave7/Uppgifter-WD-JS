//1
let url = "https://majazocom.github.io/Data/pokemons.json"
const pokemonList = document.querySelector('body > ul')


function fetchPokemonData(url) {
    fetch(url)
    .then((response) => response.json())
    //.then((data) => data.forEach(element => console.log(element.name)))
    .then((data) => data.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = element.name
        pokemonList.appendChild(li)
    }))
    
}

fetchPokemonData(url)

//2
let dogUrl = 'https://majazocom.github.io/Data/dogs.json'
const dogList = document.getElementById("dogList")

function fetchDogData(url) {
    fetch(url)
    .then((response) => response.json())
    //.then((data) => data.forEach(element => console.log(element.name)))
    .then((data) => data.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = element.name
        dogList.appendChild(li)
    }))
}

fetchDogData(dogUrl)

//3
let bookUrl = 'https://majazocom.github.io/Data/books.json'

function fetchBookData(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
       const filteredData = data.filter(element => element.pages > 500 )
       console.log(filteredData)
    })
}

fetchBookData(bookUrl)

//4

let workEventUrl = 'https://majazocom.github.io/Data/attendees.json'

function fetchEventData(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const filteredData = data.filter(element => element.attending === true && element.allergies != 0)
        console.log(filteredData)
    })
}

fetchEventData(workEventUrl)