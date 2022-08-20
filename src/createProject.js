const createProject =()=> {
    // Global Selectors
    const projectForm = document.getElementById("projectForm");

    // Project Class
    class Project {
        constructor(title) {
            this.title = title;
        }
    }
    // Storage Class
    class Storage {
        // Get Tasks
        static getProjects(){
            var projects;
            if(localStorage.getItem('projects') === null) {
                projects = [];
            } else {
                projects = JSON.parse(localStorage.getItem('projects'));
                console.log(projects);
            }
            return projects;
        }
        // Add Tasks
        static addProjects(project) {
            var projectList = Storage.getProjects();
            projectList.push(project);
            localStorage.setItem('projects', JSON.stringify(projectList));
        }
        // Remove Tasks from Storage
        static removeProjectsFromStorage(item) {
            var projectList = Storage.getProjects();
            projectList.forEach((project, index) => {
                if(project.item === item) {
                    projectList.splice(index, 1);
                } else {
                    localStorage.setItem('projects', JSON.stringify(projectList));
                }
            });
            localStorage.setItem('projects', JSON.stringify(projectList));
        }
    }
    // EventHandler Class
    class EventHandler {
        // Display Tasks
        static displayProjects() {
            var projects = Storage.getProjects();
            projects.forEach((project) => EventHandler.createProjects(project));
        }
        // Create Tasks
        static createProjects(project) {
            var list = document.getElementById("project");
            var row = document.createElement('tr');

            row.innerHTML = `
            <td>${project.title}</td>
            <td><a href="#" class="remove"><img src="/dist/images/delete-circle-outline.svg" alt="add"></a></td>`;

            list.appendChild(row);
        }
        // Validation
        static showAlert(message, className) {
            var div = document.createElement('div');
            div.className = `${className}`;
            div.appendChild(document.createTextNode(message));
            var projectForm = document.getElementById("projectForm");
            var label = document.getElementById("form-title");
            projectForm.insertBefore(div, label);
            // Vanish
            setTimeout(() => document.querySelector('.validate').remove(), 5000);
            setTimeout(() => document.querySelector('.success').remove(), 5000);
        }
        // Task Removed Alert
        static showTaskRemoved(message, className) {
            var div = document.createElement('div');
            div.className = `${className}`;
            div.appendChild(document.createTextNode(message));
            var sidebar = document.getElementById("sidebar");
            var listContainer = document.querySelector('.new-list-container');
            sidebar.insertBefore(div, listContainer);
            // Vanish
            setTimeout(() => document.querySelector('.task-removed').remove(), 5000);
        }
        // Remove Task from HTML
        static removeProject(e) {
            e.preventDefault();
            if(e.target.classList.contains('remove')) {
                e.target.parentElement.parentElement.remove();
                EventHandler.showTaskRemoved('Task Removed', 'task-removed');
            }
        }
        // Clear Form Entry
        static clearForm() {
            document.getElementById("title").value = " ";
        }
    }

    // Display Projects when the DOM loads
    document.addEventListener('DOMContentLoaded', EventHandler.displayProjects);

    // Add Project via Form 
    projectForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        // Input values
        var title = document.getElementById("title").value;
        // Validation
        if (title === '') {
            EventHandler.showAlert('Please fill in all fields.', 'validate');
        } else {
            // Project
            var project = new Project(title);
            console.log(project);
            // Add Task to EventHandler
            EventHandler.createProjects(project);
            // Add Task to Storage
            Storage.addProjects(project);
            // Validation
            EventHandler.showAlert('Success!', 'success');
            //Clear Form
            EventHandler.clearForm();
        }
    });

    // Remove Project
    document.getElementById("project").addEventListener('click', (e)=> {
        // Remove Task from EventHandler
        EventHandler.removeProject(e);
        // Remove Task from Storage
        Storage.removeProjectsFromStorage();
    });
    return {Project, Storage, EventHandler}
};

//Dom Manipulation//
//const projects = (() => {
//    let projectsList = [];
//
//    if (localStorage.getItem('projects') === null) {
//        projectsList = [
//            {
//                title: "Default Project",
//                tasks: [],
//            },
//        ];
//    } else {
//        const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
//        projectsList = projectsFromStorage;
//    }
//
//    class Project {
//        constructor(title) {
//            this.title = title;
//            this.tasks = [];
//        }
//    }
//
//    function createProject(title) {
//        const newProject = new Project(title);
//        projectsList.push(newProject);
//        loadWebsite.renderProjects();
//        loadWebsite.changeLink(projectsList.length - 1);
//        localStorage.setItem('projects', JSON.stringify(projectsList));
//    }
//
//    function editProject(index, title, link) {
//        projectsList[index].title = title;
//        loadWebsite.renderProjects();
//        if (link === undefined) {
//            loadWebsite.changeLink(index);
//        } else {
//            loadWebsite.changeLink(link);
//        }
//        localStorage.setItem('projects', JSON.stringify(projectsList));
//    }
//
//    function removeProject(index) {
//        projectsList.splice(index, 1);
//        if(e.target.classList.contains('remove')) {
//            e.target.parentElement.parentElement.remove();
//        }
//        loadWebsite.changeLink('inbox');
//        localStorage.setItem('projects', JSON.stringify(projectsList));
//    }
//
//    return {
//        projectsList,
//        createProject,
//        editProject,
//        removeProject,
//    };
//});

export default createProject;