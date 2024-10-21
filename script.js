const taskForm = document.querySelector('#taskForm');
const newTaskInput = document.querySelector('#newTask');
const taskList = document.querySelector('#taskList');
taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskText = newTaskInput.value.trim();
    if(taskText !== "") {
        addTask(taskText);
        newTaskInput.value = "";
    }
});

function addTask(taskText) {
    const li = document.createElement("li");
    
    
    li.innerHTML = `
    <input type="checkbox" class="compateTask">
        <span>${taskText}</span>
        <button class="deleteTask">Delete</button>
    `;

    taskList.appendChild(li);

};

taskList.addEventListener('click', function (event) {
    if(event.target.classList.contains('deleteTask')) {
        event.target.parentElement.remove(); 
    }
    if(event.tarhet.classList("complateTask")) {
        const task = event.target.nextElementSibling;
        task.style.textDecoration = event.target.checked ? 'line-through' : 'none';

    }
});