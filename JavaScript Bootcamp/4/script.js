const cities = ["Stockholm", "Göteborg", "Malmö", "Uppsala", "Lund"];
let cityList = document.getElementById('cityRow')

for (i = 0; i < cities.length; i++) {
    let tr = document.createElement('tr')
    cityList.appendChild(tr)
    let td = document.createElement('td')
    td.innerText = cities[i]
    tr.appendChild(td)
}

//Man kan utöka uppgiften genom att lägga till mer information 