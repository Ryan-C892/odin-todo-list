import loadWebsite from './home';
import defaultProject from './project.js';
import createToDo from './createToDo.js';
import { loadHeader, loadNewProject } from './loadProjects.js';

loadWebsite();
defaultProject();
createToDo();

let newProject = [];
if (localStorage.getItem('user') == null) {
    createProject("Test Project", "A Test Project");
} else {
    projectLoad = JSON.parse(window.localStorage.getItem('user')) 
    loadNewProject();
    loadHeader();
}

export {newProject};