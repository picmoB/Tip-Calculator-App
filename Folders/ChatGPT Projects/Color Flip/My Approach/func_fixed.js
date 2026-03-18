const colorBtn = document.querySelector(".colorBtn");
const colorArray = document.querySelector(".colorCode");
const colorElements = Array.from(colorArray.children);

function showColor() {
    const randomIndex = Math.floor(Math.random() * colorElements.length);
    const selectedDiv = colorElements[randomIndex];
    const selectedColor = window.getComputedStyle(selectedDiv).backgroundColor;

    document.body.style.backgroundColor = selectedColor;
    console.log(`Background changed to: ${selectedColor}`);
}

colorBtn.addEventListener("click", showColor);
