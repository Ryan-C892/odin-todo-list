const createToDo =()=> {
    //Global Selectors
    const newTaskForm = document.getElementById("newProjectForm");
    const editTaskForm = document.getElementById("editProjectForm");
    // Create a factory that creates "project" objects.
    // This project object should have at least title adn todos (array od todo items, empty by default).
    // Later add button that will call that function and create new projects.
    // Task Class
    class Task {
        constructor(title, date, priority, done) {
            this.title = title;
            this.date = date;
            this.priority = priority;
            this.done = done;
            return this;
        }
    }
    // Storage Class
    class Storage {
        // Get Tasks
        static getTasks(){
            var tasks;
            if(localStorage.getItem('tasks') === null) {
                tasks = [];
            } else {
                tasks = JSON.parse(localStorage.getItem('tasks'));
                console.log(tasks);
            }
            return tasks;
        }
        // Add Tasks
        static addTasks(task) {
            var taskList = Storage.getTasks();
            taskList.push(task);
            localStorage.setItem('tasks', JSON.stringify(taskList));
        }
        // Remove Tasks from Storage
        static removeTasksFromStorage(item) {
            var taskList = Storage.getTasks();
            taskList.forEach((task, index) => {
                if(task.item === item) {
                    taskList.splice(index, 1);
                } else {
                    localStorage.setItem('tasks', JSON.stringify(taskList));
                }
            });
            // setItem needed to fully remove items from array //
            localStorage.setItem('tasks', JSON.stringify(taskList));
        }
    }
    // EventHandler Class
    class EventHandler {
        // Display Tasks
        static displayTasks() {
            var tasks = Storage.getTasks();
            tasks.forEach((task) => EventHandler.createTasks(task));
        }
        // Create Tasks
        static createTasks(task) {
            var list = document.getElementById("task");
            var row = document.createElement('tr');

            row.innerHTML = `
            <td>${task.title}</td>
            <td>${task.date}</td>
            <td>${task.priority}</td>
            <td><a href="#" class="doneBtn">${task.done}</a></td>
            <td><a href="#" class="remove">Remove</a></td>`;

            list.appendChild(row);
        }
        // Validation
        static showAlert(message, className) {
            var div = document.createElement('div');
            div.className = `${className}`;
            div.appendChild(document.createTextNode(message));
            var newTaskForm = document.getElementById("newProjectForm");
            var editTaskForm = document.getElementById("editTaskForm");
            var label = document.getElementById("form-label");
            newTaskForm.insertBefore(div, label);
            editTaskForm.insertBefore(div, label);
            // Vanish
            setTimeout(() => document.querySelector('.validate').remove(), 5000);
            setTimeout(() => document.querySelector('.success').remove(), 5000);
        }
        // Task Removed Alert
        static showTaskRemoved(message, className) {
            var div = document.createElement('div');
            div.className = `${className}`;
            div.appendChild(document.createTextNode(message));
            var taskContainer = document.getElementById("task-container");
            var todoContainer = document.querySelector('.todo-container');
            taskContainer.insertBefore(div, todoContainer);
            // Vanish
            setTimeout(() => document.querySelector('.task-removed').remove(), 5000);
        }
        // Change Priority from true to false and vise versa
        static changeDone(e) {
            if(e.target.classList.contains('doneBtn')) {
                if(e.target.innerHTML == "true") {
                    e.target.innerHTML = "false";
                } else {
                    e.target.innerHTML = "true";
                }
            }
        }
        // Remove Task from HTML
        static removeTask(e) {
            if(e.target.classList.contains('remove')) {
                e.target.parentElement.parentElement.remove();
                EventHandler.showTaskRemoved('Task Removed', 'task-removed');
            }
        }
        // Clear Form Entry
        static clearForm() {
            document.getElementById("title").value = " ";
            document.getElementById("date").value = " ";
            document.getElementById("priority").value = " ";
            document.getElementById("done").value = false;
        }
    }

    // Display Tasks when the DOM loads
    document.addEventListener('DOMContentLoaded', EventHandler.displayTasks);

    // Add Task via Form 
    newTaskForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        // Input values
        var title = document.getElementById("title").value;
        var date = document.getElementById("date").value;
        var priority = document.getElementById("priority").value;
        var done = document.getElementById("done").value;
        // Validation
        var todaysDate = new Date();
        todaysDate.setHours(0,0,0,0);
        if(title === '' || date === '' || priority === '') {
            EventHandler.showAlert('Please fill in all fields.', 'validate');
        } else if (new Date(date) < todaysDate) {
            EventHandler.showAlert('This date has already passed! Please enter another date.', 'validate');
        } else {
            // Task
            var task = new Task(title, date, priority, done);
            console.log(task);
            // Add Task to EventHandler
            EventHandler.createTasks(task);
            // Add Task to Storage
            Storage.addTasks(task);
            // Validation
            EventHandler.showAlert('Success!', 'success');
            //Clear Form
            EventHandler.clearForm();
        }
    });

    // Edit Task via Form 
    editTaskForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        // Input values
        var title = document.getElementById("title").value;
        var date = document.getElementById("date").value;
        var priority = document.getElementById("priority").value;
        var done = document.getElementById("done").value;
        // Validation
        var todaysDate = new Date();
        todaysDate.setHours(0,0,0,0);
        if(title === '' || date === '' || priority === '') {
            EventHandler.showAlert('Please fill in all fields.', 'validate');
        } else if (new Date(date) < todaysDate) {
            EventHandler.showAlert('This date has already passed! Please enter another date.', 'validate');
        } else {
            // Task
            var task = new Task(title, date, priority, done);
            console.log(task);
            // Add Task to EventHandler
            EventHandler.createTasks(task);
            // Add Task to Storage
            Storage.addTasks(task);
            // Validation
            EventHandler.showAlert('Success!', 'success');
            //Clear Form
            EventHandler.clearForm();
        }
    });

    // Change Done
    document.getElementById("task").addEventListener('click', (e)=> {
        EventHandler.changeDone(e);
    });
    // Remove Task
    document.getElementById("task").addEventListener('click', (event)=> {
        // Remove Task from EventHandler
        EventHandler.removeTask(event);
        // Remove Task from Storage
        Storage.removeTasksFromStorage();
    });
    // Checkbox 
    var checkbox = document.getElementById("done");
    checkbox.addEventListener('change', (event)=> {
        if (event.target.checked) {
            checkbox.value = true;
            console.log("True!");
        } else {
            checkbox.value = false;
            console.log("False!");
        }
    });
    return {Task, Storage, EventHandler}
}

export default createToDo;