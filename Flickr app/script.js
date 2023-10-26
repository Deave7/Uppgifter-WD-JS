const apiKey = 'b673a1f7d7e269de0687473dca6daad4';
const url = 'https://api.flickr.com/services/rest?'
let search = 'banana';

async function fetchPhotos() {
    const response = await fetch(`${url}method=flickr.photos.search&api_key=${apiKey}&text=${search}&per_page=20&format=json&nojsoncallback=true`)
    const data = await response.json()
    console.log(data)

}

fetchPhotos()



