/*
Jag har valt att dela in funktionerna så att varje funktion bara gör en sak. Detta gör att jag lättare kan återanvända min kod. 
Funktionsnamnen har jag försökt skriva så tydligt att det inte ska gå att missta vad den gör.
*/

//globala variabler
const urlOpen = 'https://majazocom.github.io/Data/solaris.json'
const urlClosed = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/'

//element addresser 
const mainContent = document.getElementById('main-content')
const imageContainer = document.getElementById('image-container')
//planeterna
const mercury = document.getElementById('mercury')
const venus = document.getElementById('venus')
const earth = document.getElementById('earth')
const mars = document.getElementById('mars')
const jupiter = document.getElementById('jupiter')
const saturn = document.getElementById('saturn')
const uranus = document.getElementById('uranus')
const neptune = document.getElementById('neptune')
//modal content
const modal = document.getElementById('modal')
const planetItem1 = document.querySelector("#modal > span.circle.planet-item-1")
const planetItem2 = document.querySelector("#modal > span.circle.planet-item-2")
const planetItem3 = document.querySelector("#modal > span.circle.planet-item-3")
const title = document.getElementById('title')
const latinName = document.getElementById('latin-name')
const planetDescription = document.getElementById('desc')
const circumferenceContent = document.getElementById('circumference-content')
const distanceContent = document.getElementById('distance-content')
const maxTempContent = document.getElementById('max-temp-content')
const minTempContent = document.getElementById('min-temp-content')
const moonContent = document.getElementById('moons-content')
const moonSection = document.getElementById('moon-section')


//funktion för att hämta data från Majas öppna API 
/* const fetchData = async (planetId) => {
    try {
        const response = await fetch(urlOpen)

        if (!response.ok) {
            throw new Error("Failed to load data")
        }

        const data = await response.json()
        populateModal(data[planetId])
        
    }
    catch(error) {
        console.error(error)
    }
} */

//funktion för att hämta API nyckel
const fetchApiKey = async (planetId) => {
    try {
        const response = await fetch(`${urlClosed}keys`, {
            method: 'POST'
        })

        if (!response.ok) {
            throw new Error("Failed to fetch key")
        }

        const data = await response.json()
        fetchData(data.key, planetId)
    }
    catch(error) {
        console.error(error)
    }
}

//funktion för att hämta data
const fetchData = async (key, planetId) => {
    try {
        const response = await fetch(`${urlClosed}bodies`, {
            method: 'GET',
            headers: {'x-zocom': `${key}`}
        })

        if (!response.ok) {
            throw new Error("Failed to load data")
        }

        const data = await response.json()
        populateModal(data.bodies[planetId])
    }
    catch(error) {
        console.error(error)
    }
}

//funktion för att fylla modalen med rätt information
const populateModal = (planet) => {
    title.innerHTML = planet.name
    latinName.innerHTML = planet.latinName
    planetDescription.innerHTML = planet.desc
    circumferenceContent.innerHTML = `${formatNumbers(planet.circumference)} km`
    distanceContent.innerHTML = `${formatNumbers(planet.distance)} km`
    maxTempContent.innerHTML = `${planet.temp.day}C` 
    minTempContent.innerHTML = `${planet.temp.night}C`

     if(planet.type == 'star' || planet.moons.length === 0) {
        moonSection.style.display = 'none'
     }

     else {
        moonSection.style.display = 'block'
         moonContent.innerHTML = planet.moons.join(', ')
     }

     openModal()
}

//funktion för att öppna modalen
const openModal = () => {
    mainContent.style.opacity = '0'; 
    mainContent.style.zIndex = 0
    modal.style.opacity = '1';
    modal.style.zIndex = 1;
    
  }

//funktion för att stänga modalen
const closeModal = () => {
    modal.style.opacity = '0'; 
    mainContent.style.opacity = '1'; 
    mainContent.style.zIndex = 1;
  }

//kontrollerar vilket element som användaren trycker på och kallar sedan på funktionerna fetchData, changePlanetColor
imageContainer.addEventListener('click', function(event) {
    const planetIds = {'sun': 0, 'mercury': 1, 'venus': 2, 'earth': 3, 'mars': 4, 'jupiter': 5, 'saturn-ring': 6, 'uranus': 7, 'neptune': 8}
    const clickedElement = event.target
    const planetId = planetIds[clickedElement.id]

    if (planetId !== undefined) {
        fetchApiKey(planetId)
        changePlanetColor(planetId)
    }
    else {
        alert('Klicka på en planet för att få specifik information!')
    }
})

//kallar på funktionen closeModal när användaren klickar någonstans på skärmen
modal.addEventListener('click', function(event) {
    closeModal()
})

//funktion för att ändra färgen på planeten som syns i modalen
const changePlanetColor = (planetId) => {
    const colors = ['#FFD029', '#888888', '#E7CDCD', '#428ED4', '#EF5F5F', '#E29468', '#C7AA72', '#C9D4F1', '#7A91A7']
    planetItem1.style.backgroundColor = colors[planetId]
    planetItem2.style.backgroundColor = colors[planetId]
    planetItem3.style.backgroundColor = colors[planetId]
}

//funktion för att formatera siffrorna man hämtar från API:et
const formatNumbers = (number) => {
    const numberString = number.toString()
    let formattedNumber = '';

    for(i = 0; i < numberString.length; i++) {
        if(i > 0 && (numberString.length - i) % 3 === 0) {
            formattedNumber += ' '
        }
        formattedNumber += numberString[i]
    }
    return formattedNumber
}
