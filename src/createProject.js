// Create Tabs
const createTabs =()=> { 
    // Highlight Tabs
    var list = document.getElementById("project-list");
    list.addEventListener('click', (event) => {
        if(event.target.tagName === 'A') {
            list.querySelectorAll('li').forEach( el => el.classList.remove('active'));
            event.target.parentNode.classList.add('active');
        }
        console.log("clicked.");
    });
    // Display Tabs
        var list = document.getElementById("project-list");
        var row = document.createElement("li");
        row.innerHTML = `
        <a href="#">Default <button class="trash"></button></a>` 
        list.appendChild(row);
}

function projectTitle() {
    var taskTitle = document.getElementById("task-title");
    var paragraph = document.createElement("p");
    paragraph.innerHTML = " Default Project ";
    taskTitle.appendChild(paragraph);
}

const createProject =()=> {
    projectTitle();
    createTabs();
};

export default createProject;