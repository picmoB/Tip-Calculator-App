const modal = document.getElementById("modal");
const slike = document.getElementsByClassName("slika");
const modalImg = document.getElementById("modalImg");
const closeModalBtn = document.getElementById("closeModalBtn");

function displayPhoto(src) {
    console.log(`Promjeni sliku ${src}`);
    // Otvoriti modal
    // Postaviti svoj src na src slike unutar modala
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    modal.style.display = "none";
}

for (let i = 0; i < slike.length; i++) {
    // console.log(slike[i].src);
    slike[i].addEventListener("click", () => displayPhoto(slike[i].src));
}

closeModalBtn.addEventListener("click", closeModal);
