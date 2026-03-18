const modal = document.getElementById("modal");
const picture = document.getElementsByClassName("picture");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalPicture = document.getElementById("modalPicture");

function displayPicture(src) {
    modal.style.display = "block";
    modalPicture.src = src;
}

function closePicture() {
    modal.style.display = "none";
}

// TAKO BLIZU :

//for (let i = 0; i < picture.length; i++) {
//    picture[0].addEventListener("click") () => displayPicture(picture[src])
//}

for (let i = 0; i < picture.length; i++) {
    picture[i].addEventListener("click", () => displayPicture(picture[i].src));
}

closeModalBtn.addEventListener("click", closePicture);