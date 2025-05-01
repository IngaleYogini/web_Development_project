
let tasks = [];


const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};


const loadTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
        tasks = storedTasks;
        updateTaskList();
        updateProgress();
    }
};


const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();

    if (!text) {
        alert("Task cannot be empty!");
        return;
    }

    
    tasks.push({ text: text, completed: false });
    saveTasks();      
    updateTaskList(); 
    updateProgress();
    taskInput.value = ''; 
};


const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    updateTaskList();
    updateProgress();
};


const deleteTask = (index) => {
    tasks.splice(index, 1); 
    saveTasks();
    updateTaskList();
    updateProgress();
};


const editTask = (index) => {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = tasks[index].text; 
    deleteTask(index); 
};


const updateProgress = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;

    const progressBar = document.getElementById('progress');
    const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    progressBar.style.width = `${progressPercentage}%`;
    document.getElementById('numbers').innerText = `${completedTasks} / ${totalTasks}`;
};


const updateTaskList = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('taskItem');

        listItem.innerHTML = `
            <div class="task ${task.completed ? 'completed' : ''}">
                <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <img src="img/edit.png" alt="Edit" onclick="editTask(${index})">
                <img src="img/bin.png" alt="Delete" onclick="deleteTask(${index})">
            </div>
        `;

       
        listItem.querySelector('.checkbox').addEventListener('change', () => toggleTaskComplete(index));
        taskList.appendChild(listItem);
    });
};


document.getElementById('newtask').addEventListener('click', (e) => {
    e.preventDefault(); 
    addTask();
});


document.addEventListener('DOMContentLoaded', loadTasks);
