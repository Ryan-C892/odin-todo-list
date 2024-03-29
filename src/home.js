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
}
// Create Default
//function createDefault() {
//    /* Container */
//    const container = document.getElementById("task-container");
//    /* Header */
//    var projectHeader = document.createElement("h2");
//    projectHeader.classList.add("task-title");
//    container.appendChild(projectHeader);
//    var paragraph = document.createElement("p");
//    paragraph.innerHTML = " Default Project ";
//    projectHeader.appendChild(paragraph);
//    var headerImg = document.createElement("img");
//    headerImg.src ="/dist/images/format-list-bulleted.svg";
//    headerImg.alt = "list";
//    projectHeader.appendChild(headerImg);
//    /* Task Display */
//    var todoContainer = document.createElement("table");
//    todoContainer.classList.add("todo-container");
//    todoContainer.innerHTML = `<tbody id="task"></tbody>`
//    container.appendChild(todoContainer);
//    /* Add Tasks */
//    var mostImportant = document.createElement("button");
//    mostImportant.classList.add("add-modal");
//    mostImportant.setAttribute("id", "addToDo");
//    mostImportant.setAttribute("data-modal", "toDoModal");
//    mostImportant.innerHTML = `<span>Add Tasks</span>`
//    container.appendChild(mostImportant);
//    var mostImportantImg = document.createElement("img");
//    /*<img class="trigger" src="/dist/images/plus-circle-outline.svg" alt="add"></img>*/
//    mostImportantImg.classList.add("trigger");
//    mostImportantImg.src = "/dist/images/plus-circle-outline.svg"
//    mostImportantImg.alt = "add"
//    mostImportant.appendChild(mostImportantImg);
//}
// Create Modals
function createModal() {
    // Get every open button //
    let openModal = document.getElementsByClassName("open-modal");
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

//function openDefault() {
//    // Display Tabs
//    var list = document.getElementById("project-list");
//    var row = document.createElement("li");
//    list.appendChild(row);
//    var defaultBtn = document.createElement("a");
//    defaultBtn.innerHTML = `Default`
//    defaultBtn.classList.add("default");
//    row.appendChild(defaultBtn);
//    var trashBtn = document.createElement("button");
//    trashBtn.classList.add("trash");
//    defaultBtn.appendChild(trashBtn);
//    // Default Tab Event Listener
//    defaultBtn.addEventListener("click", (e)=> {
//        if (e.target.classList.contains("default")) {
//            createDefault();
//        } else {
//            return;
//        }
//        
//    });
//}

const loadWebsite =()=> {
    createTabs();
    createModal();
    closeModal();
    createBackground();
}

export default loadWebsite;