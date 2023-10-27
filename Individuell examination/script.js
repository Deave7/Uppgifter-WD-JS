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
    circumferenceContent.innerHTML = planet.circumference
    distanceContent.innerHTML = planet.distance
    maxTempContent.innerHTML = planet.temp.day
    minTempContent.innerHTML = planet.temp.night

     if(planet.type == 'star' || planet.moons.length === 0) {
        moonSection.style.display = 'none'
     }
     else {
         moonContent.innerHTML = planet.moons.join(', ')
     }

     openModal()
}

//funktion för att öppna modalen
const openModal = () => {
    modal.style.display = 'grid'
    mainContent.style.display = 'none'
}

//funktion för att stänga modalen
const closeModal = () => {
    modal.style.display = 'none'
    mainContent.style.display = 'block'
}

imageContainer.addEventListener('click', function(event) {
    const clickedElement = event.target
    let planetId;

    if(clickedElement.id === 'sun') {
        planetId = 0
        fetchData(planetId)
    }
    else if (clickedElement.id === 'mercury') {
        planetId = 1
        fetchData(planetId)
    }
    else if (clickedElement.id === 'venus') {
        planetId = 2
        fetchData(planetId)
    }
    else if (clickedElement.id === 'earth') {
        planetId = 3
        fetchData(planetId)
    }
    else if (clickedElement.id === 'mars') {
        planetId = 4
        fetchData(planetId)
    }
    else if (clickedElement.id === 'jupiter') {
        planetId = 5
        fetchData(planetId)
    }
    else if (clickedElement.id === 'saturn-ring') {
        planetId = 6
        fetchData(planetId)
    }
    else if (clickedElement.id === 'uranus') {
        planetId = 7
        fetchData(planetId)
    }
    else if (clickedElement.id === 'neptune') {
        planetId = 8
        fetchData(planetId)
    }
    else {
        alert('Klicka på en planet för att få specifik information!')
    }

})

modal.addEventListener('click', function(event) {
    closeModal()
})

