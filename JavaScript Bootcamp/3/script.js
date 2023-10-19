const names = ["Amelia", "Arne", "Kalle", "Ebba", "David", "Eve", "Jacob"];

let nameList = document.getElementById('numberList') //sparar <ul> elementets id i variablen nameList


let buttonElement = document.getElementById('listArrayButton')
buttonElement.addEventListener("click", function() {

    for(i = 0; i < names.length; i++) { 

        let li = document.createElement('li') //skapar ett <li> element och sparar det i variablen li
        li.innerText = names[i] //sätter elementets text till names[i]
        nameList.appendChild(li) //lägger till elementet på listan 
    
    }
    
})

//går att utöka genom att lösa så att varje klick inte startar en ny lista 