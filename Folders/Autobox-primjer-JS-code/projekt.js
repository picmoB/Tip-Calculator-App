let modal = document.getElementById("id01");

// clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//BIG CAR
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

/*let currentSlide = 0;
const slides = document.querySelectorAll(".car-slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}
//Kada se pokrene web stranica prikaži prvu sliku
showSlide(currentSlide);

document.querySelector(".arrowleft").addEventListener("click", nextSlide);
document.querySelector(".arrowright").addEventListener("click", previousSlide);
*/

// Dodano u predavanju
const hamburgerButton = document.getElementsByClassName("hamburger")[0];
const menu = document.getElementsByClassName("hamburger-menu")[0];
const loader = document.getElementsByClassName("loader-wrapper")[0];
const pageContent = document.getElementById("page-content");

function toggleMenu() {
    hamburgerButton.classList.toggle("active");
    menu.classList.toggle("active");
}

function hideLoader() {
    console.log(loader);
    loader.classList.add("hide-loader");
    pageContent.classList.remove("hide-content");
}

hamburgerButton.addEventListener("click", toggleMenu);
document.addEventListener("DOMContentLoaded", () => setTimeout(hideLoader, 1500));
