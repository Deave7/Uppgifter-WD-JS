//1

let data = ['1','2','3','4','5','6','7','8','9','10']
let numberList = document.getElementById("numberList")

for(i = 0; i < data.length; i++) {
    let li = document.createElement('li');
    li.innerText = data[i];
    numberList.appendChild(li);
}

//1b

const names = ["Alice", "Bob", "Charlie", "Anna", "David", "Eve"];
let nameList = document.getElementById("nameList")

for(i = 0; i < names.length; i++) {
    let li = document.createElement('li')

    if (names[i].charAt(0) === 'A') {
        let strongElement = document.createElement('strong')
        strongElement.innerHTML = names[i]
        li.appendChild(strongElement)

    }
    else {
        li.innerText = names[i]

    }
    nameList.appendChild(li)
}

