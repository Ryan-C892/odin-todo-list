console.log("Hello World!");

// Modal //
let myModal = document.querySelector(".modal");
let addButton = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-btn");

function toggleModal() {
    myModal.classList.toggle("show-modal");
    console.log("open");
}

function windowOnClick(event) {
    if(event.target == myModal) {
        toggleModal();
    }
}

addButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
// Edit Btn //
let myEdit = document.querySelector(".edit-modal");
let editButton = document.querySelector(".editBtn");
let closeEditButton = document.querySelector(".close-btn");

function toggleEdit() {
    myEdit.classList.toggle("show-edit");
    console.log("open");
}

function editOnClick(event) {
    if(event.target == myEdit) {
        toggleEdit();
    }
}
// Change Background Image //
var randomBackground = function() {
    var imgArray = ["/dist/images/ashim-d-silva-WeYamle9fDM-unsplash.jpg",
                    "/dist/images/buzz-andersen-E4944K_4SvI-unsplash.jpg",
                    "/dist/images/daniel-tong-dxYdPSuBr-U-unsplash.jpg",
                    "/dist/images/stephen-leonardi-eSNjFDbw_i4-unsplash.jpg",
                    "/dist/images/maud-bocquillod-bj7EB5my6og-unsplash.jpg",
                    "/dist/images/john-fowler-9qgKQewttVs-unsplash.jpg"];
    var getRandomNum = imgArray[Math.floor(Math.random() * (imgArray.length))];
    console.log(getRandomNum);
    document.querySelector("section").style.backgroundImage = 'url('+getRandomNum+')';
}

window.onload = function() {
    randomBackground();
}