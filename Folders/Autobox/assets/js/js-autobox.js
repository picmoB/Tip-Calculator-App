// =================================================================
// first-slide
// =================================================================

let currentSlide = 0;
const slides = document.querySelectorAll(".intro-slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if(i == index) {
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

// Kada se web stranica ucita prikazi prvu sliku
showSlide(currentSlide);

document.querySelector(".intro-img-left").addEventListener("click", previousSlide);
document.querySelector(".intro-img-right").addEventListener("click", nextSlide);

// =================================================================
// tabs-feature-implementation
// =================================================================

const vehicles = document.querySelectorAll(".most-searched-cars-block");
const tabButtonsWrapper = document.getElementsByClassName("most-searched-cars-tabs")[0];
const tabButtons = Array.from(tabButtonsWrapper.children);

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

// =================================================================
// button-feature-implementation
// =================================================================

// Pokusat promijenit '.getElementById' sa '.querySelectorAll' (ne radi :/)
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

let currentTab = 0;

function showTab(index) {
    tabButtons.forEach((tab, j) => {
        tab.classList.remove("active");
        if(j == index) {
            tab.classList.add("active");
        }
        // Pomocu getAttribute dohvacamo data-type:
        const tabDataType = tabButtons[index].getAttribute('data-type');
        vehicles.forEach(vehicle => {
            if(vehicle.getAttribute('data-type') === tabDataType || tabDataType === 'all') {
                vehicle.style.display = "block";
            } else {
                vehicle.style.display = "none";
            }
        });
    });
}

// Moja pretpostavka: umjesto 'vehicles' koristiti 'tabButtons' (radi :D)
function nextTab() {
    currentTab = (currentTab + 1) % tabButtons.length;
    showTab(currentTab);
}

function previousTab() {
    currentTab = (currentTab - 1 + tabButtons.length) % tabButtons.length;
    showTab(currentTab);
}

btnLeft.addEventListener("click", previousTab);
btnRight.addEventListener("click", nextTab);

// =================================================================
// save-buttons
// =================================================================

let savedCars = [];
const saveBtn = document.querySelectorAll(".save-icon");

saveBtn.forEach((saveIcon) => {
    saveIcon.addEventListener("click", (event) => {
        // Trazimo najblizi car-block div
        const carBlock = event.target.closest("#car-block");

        const carType = carBlock.getAttribute("data-type");
        const carID = carBlock.getAttribute("data-id");
        const carImage = carBlock.querySelector(".car-img").src;
        const carName = carBlock.querySelector(".car-name").textContent;
        const carDesc = carBlock.querySelector(".car-info").textContent;
        const carPrice = carBlock.querySelector(".price-amount").textContent;
        const carMileage = carBlock.querySelector(".car-mileage").textContent;
        const carFuel = carBlock.querySelector(".car-fuel").textContent;
        const carTransmission = carBlock.querySelector(".car-transmission").textContent;

        const carInfo = {
            type: carType,
            id: carID,
            image: carImage,
            name: carName,
            description: carDesc,
            price: carPrice,
            mileage: carMileage,
            fuel: carFuel,
            transmission: carTransmission,
        };

        const carIndex = savedCars.findIndex((car) => car.name === carName);
        if (carIndex > -1) {
            savedCars.splice(carIndex, 1);
            console.log("Car removed: ", carInfo);
        } else {
            savedCars.push(carInfo);
            console.log("Car added: ", carInfo);
        }
    });
});

// =================================================================
// customers-reviews-button-arrows
// =================================================================

const reviews = [
    {
        id: 1,
        name: "Ali Tufan",
        job: "Designer",
        text: "I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick.",
    },
    {
        id: 2,
        name: "Susan Smith",
        job: "Engineer",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Programmer",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan.",
    },
]

const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".leftBtn");
const nextBtn = document.querySelector(".rightBtn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function displayReview(user) {
    const item = reviews[user];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length-1) {
        currentItem = 0;
    }
    displayReview(currentItem);
    displayReviewImg(currentItem);
});

prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    displayReview(currentItem);
    displayReviewImg(currentItem);
})

// =================================================================
// customers-images
// =================================================================

const images = document.querySelectorAll(".img-review");

function displayReviewImg(index) {
    const currentImg = reviews[index];
    author.textContent = currentImg.name;
    job.textContent = currentImg.job;
    info.textContent = currentImg.text;

    images.forEach((image) => {
        image.classList.remove("active");
    });

    images[index].classList.add("active");
}

images.forEach((image, index) => {
    image.addEventListener("click", function() {
        displayReviewImg(index);
    });
});

// =================================================================
// timer-function
// =================================================================

let reviewNumTxT = document.getElementById("review-num-txt").innerHTML;
let reviewNum = parseInt(reviewNumTxT);
/* PROVJERA */
console.log(Number.isInteger(reviewNum));
console.log(reviewNumTxT);
console.log(reviewNum);
/*----------*/
setInterval(reviewTimer, 10000);

function reviewTimer() {
    reviewNum = reviewNum + 1;
    document.getElementById("review-num-txt").innerHTML = "";
    document.getElementById("review-num-txt")
        .innerHTML +=
        `<p>
            ${reviewNum} reviews
        </p>`;
}

// =================================================================
// modal-function
// =================================================================

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn");
 
//dodaj EL za add i remove nešto s classliste
modalBtn.addEventListener("click", function() {
    modal.classList.add("open-modal")
})
closeBtn.addEventListener("click", function() {
    modal.classList.remove("open-modal")
})
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

window.addEventListener("load", function(){
    setTimeout(function () {
        modal.classList.remove("open-modal");
    },5000);
});

// =================================================================
// pre-loader & hamburger menu
// =================================================================

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
