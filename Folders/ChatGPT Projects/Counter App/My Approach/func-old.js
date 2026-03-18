const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnReset = document.getElementById("btn-reset");

let numText = document.querySelector(".number").innerHTML;
let numFunc = parseInt(numText);

console.log(Number.isInteger(numFunc));

function numPlus() {
    console.log("Plus clicked.");
    numFunc = numFunc + 1;

    document.querySelector(".number").innerHTML = "";
    document.querySelector(".number")
        .innerHTML +=
        `<h1>
            ${numFunc}
        </h1>`;
}

function numMinus() {
    console.log("Minus clicked.");
    numFunc = numFunc - 1;

    document.querySelector(".number").innerHTML = "";
    document.querySelector(".number")
        .innerHTML +=
        `<h1>
            ${numFunc}
        </h1>`;
}

function numReset() {
    console.log("Reset clicked.");
    numFunc = 0;

    document.querySelector(".number").innerHTML = "";
    document.querySelector(".number")
        .innerHTML +=
        `<h1>
            ${numFunc}
        </h1>`;
}

btnPlus.addEventListener("click", numPlus);
btnMinus.addEventListener("click", numMinus);
btnReset.addEventListener("click", numReset);
