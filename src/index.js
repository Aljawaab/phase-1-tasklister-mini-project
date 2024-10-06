document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')// your code here
  const toDosList = document.getElementById('tasks')
  console.log(form, toDosList)

  form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const taskDescription = document.getElementById('new-task-description').value
    const toDoListItem = document.createElement('li')
    toDoListItem.textContent = taskDescription

    toDosList.appendChild(toDoListItem)
    
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('delete-button')

    deleteButton.addEventListener('click', (event)=>{
      toDoListItem.remove()
    })

    toDoListItem.appendChild(deleteButton)

    toDosList.appendChild(toDoListItem)
    
    document.getElementById('new-task-description').value = ''
       
    
  })

});
