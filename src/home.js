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

function loadWebsite() {
    createToDoModal();
    createProjectModal();
    createBackground();
}

export default loadWebsite;