const colorBtn = document.querySelector(".colorBtn");
const colorArray = document.querySelector(".colorCode");
const color = Array.from(colorArray.children);

function showColor() {
    console.log(`Clicked ${color}`);

    document.body.style.backgroundColor = color;
}

colorBtn.addEventListener("click", showColor);
