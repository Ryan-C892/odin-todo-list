console.log("Hello World!");

// Modal //
let myModal = document.querySelector(".modal");

let addButton = document.querySelector(".trigger");

let closeButton = document.querySelector(".close-btn");

function toggleModal() {
    myModal.classList.toggle(".show-modal");
}

function windowOnClick(event) {
    if(event.target == myModal) {
        toggleModal();
    }
}

addButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

