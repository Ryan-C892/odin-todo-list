
// Factory function that creates a project array list
const projectLoad =()=> {
    let projectArray = [];

    let projectTitle = "Default Project";
    projectArray.push(projectTitle);
    // Display project title
    const contentDiv = document.querySelector(".project-item");
    contentDiv.textContent = projectTitle;

    return { projectArray, projectTitle };
}

export default projectLoad();