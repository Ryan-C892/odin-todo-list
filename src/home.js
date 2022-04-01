function createModals() {
    
    // Add Task Modal //
    let myModal = document.querySelector(".modal");
    let addButton = document.querySelector(".trigger");
    let closeButton = document.querySelector(".close-btn");

    addButton.onclick = function() {
        myModal.classList.toggle("show-modal");
    }

    closeButton.onclick = function() {
        myModal.classList.toggle("show-modal");
    }

    //// Edit Modal //
    //let myEditModal = document.querySelector(".modal2");
    //let editButton = document.querySelector(".trigger2");
    //let closeEditButton = document.querySelector(".close-btn2");
//
    //editButton.onclick = function() {
    //    myEditModal.classList.toggle("show-modal2");
    //}
//
    //closeEditButton.onclick = function() {
    //    myEditModal.classList.toggle("show-modal2");
    //}
    //// Add Project Modal //
    //let myProjectModal = document.querySelector(".modal3");
    //let addProjectBtn = document.querySelector(".trigger3");
    //let closeProjectBtn = document.querySelector(".close-btn3");
    //
    //addProjectBtn.onclick = function() {
    //    myProjectModal.classList.toggle(".show-modal3");
    //}
    //closeProjectBtn.onclick = function() {
    //    myProjectModal.classList.toggle(".show-modal3");
    //}
}

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
// Create a factory that creates "project" objects.
// This project object should have at least title adn todos (array od todo items, empty by default).
// Later add button that will call that function and create new projects.
// ToDo Class
class Todo {
    constructor(title, date, priority, done){
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.done = done;
    }
}
// Project Class
class Project {
    static displayTodo() {
        const projects = Storage.getLists();
        projects.forEach((project) => Project.addProject(project));
    }
    // Add project
    static addProject(project) {
        const list = document.getElementById("data-list");
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <h3>
                <img src="/dist/images/circle.svg" alt="circle">
                <p>${project.title}</p>            
            </h3>
        `;
        list.appendChild(listItem);
    }
    static addTodo() {

    }
}
// Storage Class: Handles Storage
class Storage {
    static getLists() {
        let lists;
        if(localStorage.getItem('lists') === null) {
            lists = [];
        } else {
            lists = JSON.parsel(localStorage.getItem('lists'));
        }
        return lists;
    }
}

function loadWebsite() {
    createModals();
    createBackground();
}

export default loadWebsite;