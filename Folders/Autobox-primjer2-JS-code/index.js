//Pocetni slider
let currentSlide = 0;
const slides = document.querySelectorAll('.intro-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active')
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    sho
    wSlide(currentSlide);
}
//Kada se pokrene web stranica prikaži prvu sliku   
showSlide(currentSlide);
document.querySelector('.intro-img-right').addEventListener('click', nextSlide);
document.querySelector('.intro-img-left').addEventListener('click', previousSlide);

//LOADER
const loader = document.getElementById("loader");
const pageContent = document.getElementById("page-content");

function hideLoader() {
    loader.classList.add("hide-loader");
    pageContent.classList.remove("hide-content");

}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(hideLoader, 1500);
});


// HAMBURGER

const hamburgerButton = document.getElementsByClassName("hamburger")[0];
const menu = document.getElementsByClassName("hamburger-menu")[0];

function toggleMenu() {
    hamburgerButton.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}


hamburgerButton.addEventListener("click", toggleMenu,);
// hamburgerButton.addEventListener('click', toggleScroll);


// function toggleScroll (){
// if (menu.style.display === "none") {

//     document.body.style.overflow = "hidden";  
//   } else {
//     document.body.style.overflow = "auto";   
//   }
// }


// TABS FILTERI

const vehicles = document.querySelectorAll(".msc-java");
// const tabButtonsMsc = document.getElementsByClassName("msc-nav")[0];
// const tabButtons = tabButtonsMsc.children;
const navItems = document.querySelectorAll('.msc-nav p');

function applyFilter(filter) {
    console.log(`Primjeni filter ${filter} na MSC`);

    vehicles.forEach((vehicle) => {
        if (vehicle.dataset.carType === filter || filter === "all") {
            vehicle.style.display = "flex";
        } else {
            vehicle.style.display = "none";
        }
    });
}


navItems.forEach((item) => {
    item.addEventListener('click', () => {
        // brisemo svima klasu
        navItems.forEach((el) => el.classList.remove('msc-nav-crtica'));
        
        // dodajemo klasu na kliknuti p element
        item.classList.add('msc-nav-crtica');
        
        // filter uzima datu od kliknutog p
        const filter = item.getAttribute('data-car-type');
        
        applyFilter(filter);
    });
});
//REVIEWS
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
        text: "I'd suggest Ford Transit - 2021 cause it gets great mileage. Boxcars have cheapest price of all vendors.",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Programmer",
        text: "I must give props to Boxcars customer service. Quick and very helpful.",
    },
]

const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#review-txt");

const prevCustomerBtn = document.querySelector(".leftCustomerBtn");
const nextCustomerBtn = document.querySelector(".rightCustomerBtn");

let currentReview = 0;

window.addEventListener("DOMContentLoaded", function () {
    // const item = reviews[currentReview];
    // author.textContent = item.name;
    // job.textContent = item.job;
    // info.textContent = item.text;
    displayReview(currentReview);
    showReviewImg(currentReview);
});

function displayReview(user) {
    const item = reviews[user];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextCustomerBtn.addEventListener("click", function () {
    currentReview++;
    if (currentReview > reviews.length - 1) {
        currentReview = 0;
    }
    displayReview(currentReview);
    showReviewImg(currentReview);
});

prevCustomerBtn.addEventListener("click", function () {
    currentReview--;
    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }
    displayReview(currentReview);
    showReviewImg(currentReview);
})

// REVIEWS IMAGES
const images = document.querySelectorAll(".review-img");

function showReviewImg(index) {
    const currentImage = reviews[index];
    author.textContent = currentImage.name;
    job.textContent = currentImage.job;
    info.textContent = currentImage.text;

    images.forEach((image) => {
        image.classList.remove("active");
    });

    images[index].classList.add("active");
}


images.forEach((image, index) => {
    image.addEventListener("click", function () {
        showReviewImg(index);
    });
});


//SAVE BUTTONS

// const saveBtns = document.querySelectorAll("#save-btn");

// saveBtns.forEach((saveBtn) => {
//     saveBtn.addEventListener("click", () => {
//         saveBtn.classList.toggle("active");
//         console.log("Save button pressed");
//     });
// });

//save button sa spremljenim podacima

let savedCars = [];

// ako zelimo spremiti na lokalni server
// let savedCars = JSON.parse(localStorage.getItem("savedCars"));

const saveBtns = document.querySelectorAll("#save-btn");

saveBtns.forEach((saveBtn) => {
    saveBtn.addEventListener("click", (event) => {
        // Trazimo najblizi car-java div
        const carElement = event.target.closest("#car-java");

        // Informacije o autu
        const carType = carElement.getAttribute("data-car-type");
        const carID = carElement.getAttribute("data-car-id");
        const carImage = carElement.querySelector(".img-car").src;
        const carName = carElement.querySelector("h4").textContent;
        const carDescription = carElement.querySelector(".car-info p").textContent;
        const carPrice = carElement.querySelector(".price span").textContent;
        const carMileage = carElement.querySelectorAll(".ikone-items p")[0].textContent;
        const carFuel = carElement.querySelectorAll(".ikone-items p")[1].textContent;
        const carTransmission = carElement.querySelectorAll(".ikone-items p")[2].textContent;

        // Objekt auto
        const carInfo = {
            type: carType,
            image: carImage,
            name: carName,
            description: carDescription,
            price: carPrice,
            mileage: carMileage,
            fuel: carFuel,
            transmission: carTransmission,
            id: carID,
        };

        //Gledamo jel postoji auto usporedujuci ime
        const carIndex = savedCars.findIndex((car) => car.name === carName
        );
        //ako ima ikakav index brisi, ako nema dodaj
        if (carIndex > -1) {
            savedCars.splice(carIndex, 1);
            console.log("Car removed:", carInfo);
        } else {
            savedCars.push(carInfo);
            console.log("Car saved:", carInfo);
        }
       

        // saveBtn.classList.toggle("active");
        document.querySelectorAll(`.save[data-car-id="${carID}"]`).forEach((saveBtn) => {
            saveBtn.classList.toggle("active");
        });

        console.log(savedCars);

        // Push saved car to local storage
        // localStorage.setItem("savedCars", JSON.stringify(savedCars));
    });
});