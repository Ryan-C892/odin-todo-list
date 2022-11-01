// Create Modals
function createModal() {
    // Get every open button //
    let openModal = document.getElementsByClassName("add-modal");
    // Open modal //
    for (let i = 0; i < openModal.length; i++) {
        openModal[i].addEventListener("click", function(){
            let modal = document.getElementById(this.dataset.modal);
            modal.classList.toggle("show-modal");
        }, false);
    }
}
function closeModal() {
    // Get every close button //
    let closeModal = document.getElementsByClassName("close-modal");
    // Close modal //
    for (let i = 0; i < closeModal.length; i++) {
        closeModal[i].addEventListener("click", function(){
            let modal = document.querySelector(".show-modal");
            modal.classList.toggle("show-modal");
        }, false);
    }
}
// Create Background //
function createBackground() {
    // Change Background Image //
    var randomImage = [
        "/dist/images/ashim-d-silva-WeYamle9fDM-unsplash.jpg",
        "/dist/images/buzz-andersen-E4944K_4SvI-unsplash.jpg",
        "/dist/images/daniel-tong-dxYdPSuBr-U-unsplash.jpg",
        "/dist/images/stephen-leonardi-eSNjFDbw_i4-unsplash.jpg",
        "/dist/images/maud-bocquillod-bj7EB5my6og-unsplash.jpg",
        "/dist/images/john-fowler-9qgKQewttVs-unsplash.jpg",
    ];
    var getRandomNum = Math.floor(Math.random() * (randomImage.length));
    return randomImage[getRandomNum];
}
document.querySelector("section").style.backgroundImage = "url('" + createBackground() + "')";
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

const loadWebsite =()=> {
    createModal();
    closeModal();
    createBackground();
}

export default loadWebsite;