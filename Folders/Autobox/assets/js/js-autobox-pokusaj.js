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
// tabs-feature-implementation - OBAVEZNO PONOVIT!!!
// =================================================================

const vehicles = document.querySelectorAll(".most-searched-cars-block");
const tabButtons = document.getElementsByClassName("most-searched-cars-tabs")[0];
const tabButtonsWrapper = Array.from(tabButtonsWrapper.children);

function applyFilter(filter) {
    // prikazati automoble koji zadovoljavaju trenutni filter
    console.log(`Apply filter ${filter}`);

    vehicles.forEach(vehicle => {
        if (vehicle.dataset.type === filter || filter === "all") {
            vehicle.style.display = "flex";
        } else {
            vehicle.style.display = "none";
        }
    });
}

for (let i = 0; i < tabButtonsWrapper; i++) {
    const tabButton = tabButtons[i];
    const filter = tabButton.dataset.type;

    tabButton.addEventListener("click", () => applyFilter(filter));
}

// =================================================================
// button-feature-implementation
// =================================================================

// Pokusat promijenit '.getElementById' sa '.querySelectorAll'
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

// Moja pretpostavka: umjesto 'vehicles' koristiti 'tabButtons'
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
// save-buttons - OBAVEZNO PONOVIT!
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
            milegae: carMileage,
            fuel: carFuel,
            transmission: carTransmission,
        };

        const carIndex = savedCars.findIndex((car) => car.name === carName);
        if (carIndex > -1) {
            savedCars.splice(carIndex, 1);
            console.log("Car removed: ", carInfo);
        } else {
            savedCars.push(carInfo);
            console.log("Card added: ", carInfo);
        }
    });
});
