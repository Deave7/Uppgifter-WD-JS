const inputField = document.getElementById('userInput')
const inputButton = document.getElementById('inputButton')
const toDoList = document.getElementById('toDoList')
const url = 'https://jsonplaceholder.typicode.com/users/1/todos'

const fetchToDos = async () => {
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error("fail to load");
        }
        const data = await response.json()
        data.slice(0, 5).forEach(element => {
            
        });
    }
    catch(error) {
        console.errror('Error adding a new todo', error)
    }
}

const addToDo = async () => {
    const newToDo = inputField.value
    if(newToDo) {
        try {
            const response = await fetch(url, {
                method:'POST',
                body: JSON.stringify({
                    userId: 1,
                    title: 'test',
                    completed: false,
                }),
                headers: {
                    "content-type": "application/json; charset=utf-8"
                },
            })
            if (!response.ok) {
                throw new Error("Failed to add new todo")
            }
            const data = await response.json()
            addToDoList(data)
        }
        catch(error) {
            console.error('Error adding a new todo', error)
        }
    }
}

const addToDoList = (data) => {
    const li = document.createElement('li')
    const taskSpan = document.createElement('span')
    taskSpan.textContent = data.title;
    
    const updateButton = document.createElement('button')
    updateButton.textContent = 'update'
    updateButton.addEventListener('click', () => {
        const updatedTitle = prompt('updated task', taskSpan.textContent)
        if(updatedTitle) {
            updateToDo(data.id, updatedTitle, taskSpan)
        }
    })
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete'
    deleteButton.addEventListener('click', () => {
        prompt('deleted task', taskSpan.textContent)
        deleteToDo(todo.id, li)
    })
    
    li.append(taskSpan)
    li.append(updateButton)
    li.append(deleteButton)
    toDoList.appendChild(li)

}

const updateToDo = (taskId, updatedTitle, taskSpan) => {

}

const deleteToDo = () => {

}