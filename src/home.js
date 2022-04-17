//Global Selectors
const newTaskForm = document.getElementById("newProjectForm");

function createModals() {
    
    // Add Task Modal //
    let myModal = document.querySelector(".modal");
    let addButton = document.querySelector(".trigger");
    let closeButton = document.querySelector(".close-btn");

    addButton.onclick = function() {
        myModal.classList.toggle("show-modal");
    }

    closeButton.onclick = function() {
        myModal.classList.toggle("show-modal");
    }

    //// Edit Modal //
    //let myEditModal = document.querySelector(".modal2");
    //let editButton = document.querySelector(".trigger2");
    //let closeEditButton = document.querySelector(".close-btn2");
//
    //editButton.onclick = function() {
    //    myEditModal.classList.toggle("show-modal2");
    //}
//
    //closeEditButton.onclick = function() {
    //    myEditModal.classList.toggle("show-modal2");
    //}
    //// Add Project Modal //
    //let myProjectModal = document.querySelector(".modal3");
    //let addProjectBtn = document.querySelector(".trigger3");
    //let closeProjectBtn = document.querySelector(".close-btn3");
    //
    //addProjectBtn.onclick = function() {
    //    myProjectModal.classList.toggle(".show-modal3");
    //}
    //closeProjectBtn.onclick = function() {
    //    myProjectModal.classList.toggle(".show-modal3");
    //}
}

function createBackground() {
    // Change Background Image //
    var randomBackground = function() {
        var imgArray = ["/dist/images/ashim-d-silva-WeYamle9fDM-unsplash.jpg",
                        "/dist/images/buzz-andersen-E4944K_4SvI-unsplash.jpg",
                        "/dist/images/daniel-tong-dxYdPSuBr-U-unsplash.jpg",
                        "/dist/images/stephen-leonardi-eSNjFDbw_i4-unsplash.jpg",
                        "/dist/images/maud-bocquillod-bj7EB5my6og-unsplash.jpg",
                        "/dist/images/john-fowler-9qgKQewttVs-unsplash.jpg"];
        var getRandomNum = imgArray[Math.floor(Math.random() * (imgArray.length))];
        document.querySelector("section").style.backgroundImage = 'url('+getRandomNum+')';
    }

    window.onload = function() {
        randomBackground();
    }
}
// Create a factory that creates "project" objects.
// This project object should have at least title adn todos (array od todo items, empty by default).
// Later add button that will call that function and create new projects.
// ToDo Class
class Task {
    constructor(title, date, priority, done){
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.done = done;
    }
}
// EventHandler class: Handle Events
class EventHandler {
    static displayTasks() {
        const tasks = Storage.getTasks();
        tasks.forEach((task)=> EventHandler.addTaskList(task));
    }
    // Add Task List
    static addTaskList(task) {
        const taskList = document.getElementById("task");
        const taskItem = document.createElement('li');

        taskItem.innerHTML = `
        <p>${task.title}</p>
        <p>${task.date}</p>
        <p>${task.priority}</p>
        <p>${task.done}</p>`;

        taskList.appendChild(taskItem);
    }
    // Show Validation
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `${className}`;
        div.appendChild(document.createTextNode(message));
        const newTaskForm = document.getElementById("newProjectForm");
        const label = document.getElementById("form-label");
        newTaskForm.insertBefore(div, label);
        // Vanish
        setTimeout(() => document.querySelector('.validate').remove(), 5000);
        setTimeout(() => document.querySelector('.success').remove(), 5000);
    }
    // Clear Form
    static clearForm() {
        document.getElementById("title").value = '';
        document.getElementById("date").value = '';
        document.getElementById("priority").value = '';
        document.getElementById("done").value = false;
    }
}
// Storage Class: Handles Storage
class Storage {
    static getTasks() {
        let tasks;
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }

    static addTasks(task) {
        const tasks = Storage.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeTasks(taskItems) {
        const tasks = Storage.getTasks();
        tasks.forEach((task, index) => {
            if(task.taskItems === taskItems) {
                tasks.splice(index, 1);
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}
// Display Tasks
document.addEventListener('DOMContentLoaded', EventHandler.displayTasks);

// Add a Task
newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get Form Input Values
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;
    const done = document.getElementById("done").value;
    // Validation
    if(title === '' || date === '' || priority === '' || done === '') {
        EventHandler.showAlert('Please fill in all fields', 'validate');
    } else {
        // Task
        const task = new Task(title, date, priority, done);
        console.log(task);
        // Add Task to EventHandler
        EventHandler.addTaskList(task);
        // Add Task to Storage
        Storage.addTasks(task);
        // Success
        EventHandler.showAlert('Success!', 'success');
        // Clear Form
        EventHandler.clearForm();
    }
});

checkbox = document.getElementById("done");
checkbox.addEventListener('change', (event) => {
    if(event.target.checked) {
        checkbox.value = true;
    } else {
        checkbox.value = false;
    }
});

function loadWebsite() {
    createModals();
    createBackground();
}

export default loadWebsite;