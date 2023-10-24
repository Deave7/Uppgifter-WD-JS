const url1 = 'https://majazocom.github.io/Data/attendees.json'
const attendingList = document.getElementById('attendees')
const fetchButton = document.getElementById('fetch')
const sortButton = document.getElementById('sort')
const addButton = document.getElementById('add')
const inputField = document.getElementById('addInput')
const foodPreferenceButton = document.getElementById('fetchWithPreference')
const generateGameButton = document.getElementById('gameGenerator')

function fetchData(url) {
fetch(url)
.then((response) => response.json())
.then((data) => data.forEach(person => {
    let li = document.createElement('li')
    li.innerHTML = person.name
    if (person.attending === true) {
        li.classList += 'attending'
    }
    else {
        li.classList += 'notAttending'
    }
    attendingList.appendChild(li)
}));
}

fetchButton.addEventListener('click', function() {
    fetchData(url1)
})

function sortList(attendingList) {
    Array.from(attendingList.getElementsByTagName("li"))
    .sort((a,b) => a.textContent.localeCompare(b.textContent))
    .forEach(li => attendingList.appendChild(li))
}

sortButton.addEventListener('click', function() {
    sortList(attendingList)
})

function addAttendee(attendingList) {
    let li = document.createElement('li')
    let input = inputField.value
    inputField.value = ''
    li.innerHTML = input
    li.classList += 'attending'
    attendingList.appendChild(li)
}

addButton.addEventListener('click', function() {
    addAttendee(attendingList)
}) 

function fetchPreference(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const filteredData = data.filter(element => element.allergies != 0)
        filteredData.forEach(person => {
            let li = document.createElement('li')
            li.innerHTML = person.name
            if (person.attending === true) {
                li.classList += 'attending'
            }
            else {
                li.classList += 'notAttending'
            }
            attendingList.appendChild(li)
        })
    })
}

foodPreferenceButton.addEventListener('click', function() {
    fetchPreference(url1)
})

const games = ['Monopoly', 'Chess', 'Jenga', 'Scrabble', 'Checkers', 'Sorry']

function randomGame(games) {
    let game = games[Math.floor(Math.random() * games.length)]
    alert('Time to play: ' + game)
}

generateGameButton.addEventListener('click', function() {
    randomGame(games)
})