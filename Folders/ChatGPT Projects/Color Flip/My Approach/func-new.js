const colorBtn = document.querySelector(".colorBtn");
const colorArray = document.querySelector(".colorCode");
const colorElements = Array.from(colorArray.children);

function showColor() {
    const colorIndex = Math.floor(Math.random() * colorElements.length);
    const selectedDiv = colorElements[colorIndex];
    const selectedColor = window.getComputedStyle(selectedDiv).backgroundColor;

    document.body.style.backgroundColor = selectedColor;
}

colorBtn.addEventListener("click", showColor);
