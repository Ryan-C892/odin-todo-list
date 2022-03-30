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

    // Edit Modal //
    let myEditModal = document.querySelector(".modal2");
    let editButton = document.querySelector(".trigger2");
    let closeEditButton = document.querySelector(".close-btn2");

    editButton.onclick = function() {
        myEditModal.classList.toggle("show-modal2");
    }

    closeEditButton.onclick = function() {
        myEditModal.classList.toggle("show-modal2");
    }
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

function loadWebsite() {
    createModals();
    createBackground();
}

export default loadWebsite;