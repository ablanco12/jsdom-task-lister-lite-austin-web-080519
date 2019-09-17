document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const submitButton = document.querySelector("input[type='submit']");
    submitButton.addEventListener("click", function(event){
        event.preventDefault()
        const textBox = document.querySelector("#new-task-description")
        const selectBox = document.querySelector('select')
        const selectValue = selectBox.value
        let listItem = document.createElement("li")
        const userName = document.querySelector("#user-name")
        const userNameValue = userName.value
        const durationT = document.querySelector('#duration')
        const durationValue = durationT.value
        const dueDate = document.querySelector("#due-date")
        const dueDateValue = dueDate.value
        listItem.innerText = `${textBox.value} - ${userNameValue} - ${durationValue} - ${dueDateValue}  `

        listItem.setAttribute("style", `color: ${selectValue};`);
        let taskList = document.querySelector("#tasks")
        taskList.appendChild(listItem)
        let deleteT = document.createElement("button")
        deleteT.innerText = "delete"
        deleteT.setAttribute("onclick", 'deleteTask(event)');
        listItem.appendChild(deleteT)
    })

});
