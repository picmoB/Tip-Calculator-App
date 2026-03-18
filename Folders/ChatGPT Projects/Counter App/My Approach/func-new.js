const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnReset = document.getElementById("btn-reset");

const numText = document.querySelector(".number");
let numFunc = parseInt(numText.textContent);

console.log(Number.isInteger(numFunc));

function updateDisplay() {
    numText.textContent = numFunc;

    if(numFunc < 0) {
        numText.style.color = 'red';
    } else if(numFunc > 0) {
        numText.style.color = 'green';
    } else {
        numText.style.color = 'black';
    }
}

function numPlus() {
    console.log("Plus clicked.");
    
    numFunc++;
    updateDisplay();
}

function numMinus() {
    console.log("Minus clicked.");
    
    numFunc--;
    updateDisplay();
}

function numReset() {
    console.log("Reset clicked.");
    
    numFunc = 0;
    updateDisplay();
}

btnPlus.addEventListener("click", numPlus);
btnMinus.addEventListener("click", numMinus);
btnReset.addEventListener("click", numReset);

// Keyboard Support
document.addEventListener("keydown", function(event) {
    if(event.key === "+") {
        numPlus();
    } else if(event.key === "-") {
        numMinus();
    } else if(event.key === "r" || event.key === "0") {
        numReset();
    }
});
