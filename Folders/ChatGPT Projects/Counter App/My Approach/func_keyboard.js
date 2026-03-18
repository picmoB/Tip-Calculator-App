const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnReset = document.getElementById("btn-reset");

const numberEl = document.querySelector(".number");
let num = parseInt(numberEl.textContent);

function updateDisplay() {
    numberEl.textContent = num;

    if (num > 0) {
        numberEl.style.color = "green";
    } else if (num < 0) {
        numberEl.style.color = "red";
    } else {
        numberEl.style.color = "black";
    }
}

function numPlus() {
    num++;
    updateDisplay();
}

function numMinus() {
    num--;
    updateDisplay();
}

function numReset() {
    num = 0;
    updateDisplay();
}

btnPlus.addEventListener("click", numPlus);
btnMinus.addEventListener("click", numMinus);
btnReset.addEventListener("click", numReset);

// Keyboard shortcuts support
document.addEventListener("keydown", function (event) {
    if (event.key === "+" || event.key === "=") {
        numPlus();
    } else if (event.key === "-") {
        numMinus();
    } else if (event.key === "r" || event.key === "0") {
        numReset();
    }
});
