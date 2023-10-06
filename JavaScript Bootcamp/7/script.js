const button = document.getElementById('showDayButton')
button.addEventListener("click", function() {
    showDay(getInput())
})

function getInput() {
    return document.getElementById('day').value
}

function showDay(day) {
    const element = document.getElementById('weekday')
    
    switch (day) {
        case '1':
            element.textContent = "Monday"
            break;
            
        case '2':
            element.textContent = "Tuesday"
            break;

        case '3':
            element.textContent = "Wednesday"
            break;

        case '4':
            element.textContent = "Thursday"
            break;

        case '5':
            element.textContent = "Friday"
            break;

        case '6':
            element.textContent = "Saturday"
            break;

        case '7':
            element.textContent = "Sunday"
            break;
        
        default:
            element.textContent = "Invalid input"
    }

}

