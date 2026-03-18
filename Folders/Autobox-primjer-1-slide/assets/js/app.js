let currentSlide = 0;
const slides = document.querySelectorAll(".intro-slide");

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

document.querySelector(".intro-img-right").addEventListener("click", nextSlide);
document.querySelector(".intro-img-left").addEventListener("click", previousSlide);

// =================================================================
// tabs-feature implementation
// =================================================================

const vehicles = document.querySelectorAll(".most-searched-cars-block");
const tabButtonsWrapper = document.getElementsByClassName("most-searched-cars-tabs")[0];
const tabButtons = tabButtonsWrapper.children;

function applyFilter(filter) {
    // prikazati odgovarajuce automobile koji zadovoljavaju filter
    console.log(`Primjeni filter ${filter}`);

    vehicles.forEach((vehicle) => {
        if (vehicle.dataset.type === filter || filter === "all") {
            vehicle.style.display = "flex";
        } else {
            vehicle.style.display = "none";
        }
    });
}

for (let i = 0; i < tabButtons.length; i++) {
    const tabButton = tabButtons[i];
    const filter = tabButton.dataset.type;

    tabButton.addEventListener("click", () => applyFilter(filter));
}
