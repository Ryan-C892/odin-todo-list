const createProject =()=> {

}

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