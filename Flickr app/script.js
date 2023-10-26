const apiKey = 'b673a1f7d7e269de0687473dca6daad4';
const url = 'https://api.flickr.com/services/rest?'
const photoContainer = document.getElementById('photoContainer')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

async function fetchPhotos(search) {
    const response = await fetch(`${url}method=flickr.photos.search&api_key=${apiKey}&text=${search}&per_page=20&format=json&nojsoncallback=true`)
    const data = await response.json()
    console.log(data)
    const photoArray = data.photos.photo
    displayPhotos(photoArray)
}

const displayPhotos = (photoArray) => {
    photoArray.forEach(photo => {
        const img = document.createElement('img')
        img.src = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`
        photoContainer.appendChild(img)
    });
}

searchButton.addEventListener('click', () => {
    let search = searchInput.value
    fetchPhotos(search)
})



