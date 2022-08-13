import projects from './createProject.js';
// Create Modals
function createToDoModal() {
    // Add Task Modal //
    let todoModal = document.querySelector("#modalToDo");
    let addButton = document.querySelector(".trigger");
    let closeButton = document.querySelector(".close-todo");

    addButton.onclick = function() {
        todoModal.classList.toggle("show-modal");
    }

    closeButton.onclick = function() {
        todoModal.classList.toggle("show-modal");
    }
}

function createProjectModal() {
    // Add Project Modal //
    let projectModal = document.querySelector("#modalNewProject");
    let addButton = document.querySelector(".addList");
    let closeButton = document.querySelector(".close-project");

    addButton.onclick = function() {
        projectModal.classList.toggle("show-modal");
    }

    closeButton.onclick = function() {
        projectModal.classList.toggle("show-modal");
    }
}
// Create Background //
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
// Render Projects //
//const projectList = document.getElementById("projects-list");
//
//function renderProjects() {
//    projectList.textContent = '';
//    for (let i = 0; i < projects.projectsList.length; i+=1) {
//        const projectLink = document.createElement('a');
//        projectLink.classList.add('project');
//        projectLink.setAttribute('href', '#');
//        projectLink.setAttribute('data-index', i);
//        projectList.appendChild(projectLink);
//
//        projectLink.innerHTML = `
//        <p>${projects.projectsList[i].title}</p>
//        <a href="#" id="delete-btn" class="delete-btn">
//            <img src="/dist/images/delete-circle-outline.svg" alt="delete">
//        </a>`;
//    }
//}
//
//function createProjectDefault() {
//    projectList.textContent = '';
//    for (let i = 0; i < projects.projectsList.length; i+=1) {
//
//    }
//}

function loadWebsite() {
    createToDoModal();
    createProjectModal();
    createBackground();
    //renderProjects();
}

export default loadWebsite;