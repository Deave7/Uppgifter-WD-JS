//globala variabler
const url = 'https://majazocom.github.io/Data/solaris.json'

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


//funktion för att hämta data
const fetchData = async (planetId) => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Failed to load data")
        }

        const data = await response.json()
        populateModal(data[planetId])
        
    }
    catch(error) {
        console.error(error)
    }
}

//funktion för att fylla modalen med rätt information
const populateModal = async (planet) => {
    title.innerHTML = planet.name
    latinName.innerHTML = planet.latinName
    planetDescription.innerHTML = planet.desc
    circumferenceContent.innerHTML = `${formatNumbers(planet.circumference)} km`
    distanceContent.innerHTML = `${formatNumbers(planet.distance)} km`
    maxTempContent.innerHTML = `${planet.temp.day}C` 
    minTempContent.innerHTML = `${planet.temp.night}C`

     if(planet.type == 'star' || planet.moons.length === 0) {
        moonSection.style.display = 'none'
        //gör så att avstånd till solen döljs när man klickar på solen ****
        
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

imageContainer.addEventListener('click', function(event) {
    const clickedElement = event.target
    let planetId;

    if(clickedElement.id === 'sun') {
        planetId = 0
        fetchData(planetId)
        changePlanetColor(planetId)
    }
    else if (clickedElement.id === 'mercury') {
        planetId = 1
        fetchData(planetId)
        changePlanetColor(planetId)
    }
    else if (clickedElement.id === 'venus') {
        planetId = 2
        fetchData(planetId)
        changePlanetColor(planetId)
    }
    else if (clickedElement.id === 'earth') {
        planetId = 3
        fetchData(planetId)
        changePlanetColor(planetId)
    }
    else if (clickedElement.id === 'mars') {
        planetId = 4
        fetchData(planetId)
        changePlanetColor(planetId)
    }
    else if (clickedElement.id === 'jupiter') {
        planetId = 5
        fetchData(planetId)
        changePlanetColor(planetId)
    }
    else if (clickedElement.id === 'saturn-ring') {
        planetId = 6
        fetchData(planetId)
        changePlanetColor(planetId)
    }
    else if (clickedElement.id === 'uranus') {
        planetId = 7
        fetchData(planetId)
        changePlanetColor(planetId)
    }
    else if (clickedElement.id === 'neptune') {
        planetId = 8
        fetchData(planetId)
        changePlanetColor(planetId)
    }
    else {
        alert('Klicka på en planet för att få specifik information!')
    }

})

modal.addEventListener('click', function(event) {
    closeModal()
})

const changePlanetColor = (planetId) => {
    const colors = ['#FFD029', '#888888', '#E7CDCD', '#428ED4', '#EF5F5F', '#E29468', '#C7AA72', '#C9D4F1', '#7A91A7']
    planetItem1.style.backgroundColor = colors[planetId]
    planetItem2.style.backgroundColor = colors[planetId]
    planetItem3.style.backgroundColor = colors[planetId]
}

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
