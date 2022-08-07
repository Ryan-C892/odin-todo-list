import {newProject} from './index.js';

function loadNewProject() {
    clearProjects();
    newProject,forEach((project, index) => {

    });
}

function clearProjects() {
    projectContainer.innerHTML = "";
}

function loadHeader() {

}

export { loadNewProject, loadHeader };