// Create Tabs
const createTabs =()=> { 
    // Highlight Tabs
    var list = document.getElementById("project-list");
    list.addEventListener('click', (event) => {
        if(event.target.tagName === 'A') {
            list.querySelectorAll('li').forEach( el => el.classList.remove('active'));
            event.target.parentNode.classList.add('active');
        } else {
            event.target.parentNode.classList.remove('active');
        }
        console.log("clicked.");
    });
    // Display Tabs
        var list = document.getElementById("project-list");
        var row = document.createElement("li");
        row.innerHTML = `
        <a href="#">Default <button class="trash"></button></a>` 
        list.appendChild(row);
        var defaultBtn = document.createElement("a");
        defaultBtn.innerHTML = `Default`
}

const createProject =()=> {
    createTabs();
};

export default createProject;