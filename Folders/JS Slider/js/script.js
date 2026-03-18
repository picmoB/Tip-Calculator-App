const sliderContainer = document.getElementById("slider");
const sliderText = document.getElementById("sliderText");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

const sliderImages = [
    {
        src: "images/food-photo-1.jpg",
        text: "Taste the magic",
    },
    {
        src: "images/food-photo-2.jpg",
        text: "Taste the incredible",
    },
    {
        src: "images/food-photo-3.jpeg",
        text: "Taste the dream",
    },
];

let slideCounter = 0;

function startSlider() {
    sliderContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
      ), url(${sliderImages[0].src})`;
    sliderText.innerHTML = sliderImages[0].text;
}

btnRight.addEventListener("click", function () {
    slideCounter++;
    if (slideCounter == sliderImages.length) {
        slideCounter = 0;
    }
    sliderContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
      ), url(${sliderImages[slideCounter].src})`;
    sliderText.innerHTML = sliderImages[slideCounter].text;
});

btnLeft.addEventListener("click", function () {
    slideCounter--;
    if (slideCounter == -1) {
        slideCounter = sliderImages.length - 1;
    }
    sliderContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
      ), url(${sliderImages[slideCounter].src})`;
    sliderText.innerHTML = sliderImages[slideCounter].text;
});

document.addEventListener("DOMContentLoaded", startSlider);
