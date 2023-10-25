/* const apiKey = 'b673a1f7d7e269de0687473dca6daad4';
const searchUrl = 'https://api.flickr.com/services/rest?'
let search = 'cats';

function fetchPhotos(url, apiKey, search) {
    fetch(`${url}method=flickr.photos.search&api_key=${apiKey}&text=${search}=per_page=20&format=json&nojsoncallback=true`)
    .then((data) => {
        console.log(data)
    })

}

fetchPhotos(searchUrl, apiKey, search) */

const url = 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=b673a1f7d7e269de0687473dca6daad4&text=$cats=per_page=20&format=json&nojsoncallback=true'

async function grabData(url) {
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data.photos.photo)
}

grabData(url)


