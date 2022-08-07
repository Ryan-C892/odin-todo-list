
// Factory function that creates a project array list
const defaultProject =()=> {
    let projectArray = [];

    let projectTitle = "Default Project";
    projectArray.push(projectTitle);
    // Display project title
    const contentDiv = document.querySelector(".default-project-item");
    contentDiv.textContent = projectTitle;

    return { projectArray, projectTitle };
}

export default defaultProject();