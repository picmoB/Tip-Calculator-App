// =======================================================================================
// Declaring Variables
// =======================================================================================

// HTML elements
const amount = document.getElementById("amount");   /* total amount of money */
const term = document.getElementById("term");       /* total amount of years */
const rate = document.getElementById("rate");       /* yearly ineterest rate */

// Generate Button
const btnCalc = document.getElementById("btn-submit");

// Clear Button
const clearAllBtn = document.querySelector(".clear-all");

// All Number Inputs
const allInputNum = document.querySelectorAll(".all-input-txt");    /* inputs */
const allInputArray = Array.from(allInputNum);

// All Radio Inputs
const radioInputs = document.querySelectorAll(".radio-inputs");     /* radio */
const radioInputsArray = Array.from(radioInputs);

// All Input Hints
const inputHints = document.querySelectorAll(".input-hint");        /* hints */
const inputHintsArray = Array.from(inputHints);

// =======================================================================================
// Clear All Button
// =======================================================================================

function clearAll() {
    // Number Inputs
    const numberInputs = document.querySelectorAll(".all-input-txt");
    const numberInputsArray = Array.from(numberInputs);

    // Radio Inputs
    const radioInputs = document.querySelectorAll("input[type='radio']");
    const radioInputsArray = Array.from(radioInputs);

    // All Input Errors
    const inputError = document.querySelectorAll(".input-error");
    const inputArray = Array.from(inputError);

    // Submit UI
    const beforeSubmit = document.querySelector(".before-submit");
    const afterSubmit = document.querySelector(".after-submit");

    // Clear values and reset default style values for each input
    numberInputsArray.forEach((input) => {
        input.value = "";
        removeProps(input, {"outline-color": "", "border-color": ""});
    });

    // Remove an active class and checked attribute for each radio input
    radioInputsArray.forEach((radio) => {
        radio.classList.remove("active-radio");
        radio.checked = false;
    });

    // Remove all error messages
    inputArray.forEach((error) => {
        error.style.display = "none";
    });

    // Remove style property from hints
    inputHintsArray.forEach((hint) => {
        hint.style.removeProperty("background-color");
    });

    // Reset Submit UI to default settings
    /* set properties */
    beforeSubmit.style.setProperty("display", "flex");
    afterSubmit.style.setProperty("display", "none");

    /* remove classes */
    beforeSubmit.classList.remove("fade-out");
    afterSubmit.classList.remove("fade-in");
}

clearAllBtn.addEventListener("click", () => clearAll());

// =======================================================================================
// Radio Check
// =======================================================================================

function radioCheck(index) {
    radioInputsArray.forEach((radio, num) => {
        radio.classList.remove("active-radio");
        if (num === index) {
            console.log(radio.id);
            radio.classList.add("active-radio");
        }
    });
}

for (let i = 0; i < radioInputsArray.length; i++) {
    const inputRadio = radioInputsArray[i];

    inputRadio.addEventListener("click", () => radioCheck(i));
}

// =======================================================================================
// Input focus/blur
// =======================================================================================

function onSelectedInput(index) {
    inputHintsArray.forEach((input, num) => {
        if (num === index) {
            input.classList.add("active");
        }
    });
}

function onInputBlur(index) {
    inputHintsArray.forEach((input, num) => {
        if (num === index) {
            input.classList.remove("active");
        }
    });
}

for (let i = 0; i < allInputArray.length; i++) {
    const inputSection = allInputArray[i];

    inputSection.addEventListener("focus", () => onSelectedInput(i));
    inputSection.addEventListener("blur", () => onInputBlur(i));
}

// =======================================================================================
// Helper Functions
// =======================================================================================

// Use this helper functions to set/remove multiple properties in one go!
function setProps(el, props) {
    for (var key in props) {
        el.style.setProperty(key, props[key]);
    }
}

function removeProps(el, props) {
    for (var key in props) {
        el.style.removeProperty(key, props[key]);
    }
}

// =======================================================================================
// Input Check + Mortgage Formula
// =======================================================================================

function inputCheck() {
    // Input Values
    let amountVal = amount.value;
    let termVal = term.value;
    let rateVal = rate.value;

    // All Number Inputs
    const allInputNum = document.querySelectorAll(".all-input-txt");    /* inputs */
    const allInputArray = Array.from(allInputNum);

    // All Input Errors
    const inputError = document.querySelectorAll(".input-error");       /* errors */
    const inputArray = Array.from(inputError);

    // All Input Hints
    const inputHints = document.querySelectorAll(".input-hint");        /* hints */
    const inputHintsArray = Array.from(inputHints);

    // Console log for debugging purposes
    console.log(Array.isArray(inputArray));     /* true/false */
    console.log(inputArray.length);             /* length */

    /* Amount */
    if (amountVal === '') {
        console.log("'Amount' is empty.");

        // Display an error
        inputArray[0].style.display = "flex";
        inputHintsArray[0].style.backgroundColor = "red";

        // Set style for the specific input
        setProps(allInputArray[0], {"border-color": "red", "outline-color": "red"});
    } else {
        console.log(amountVal);

        // Remove an error
        inputArray[0].style.display = "none";
        inputHintsArray[0].style.removeProperty("background-color");

        // Set style for the specific input
        removeProps(allInputArray[0], {"border-color": "", "outline-color": ""});
    }

    /* Years */
    if (termVal === '') {
        console.log("'Years' is empty.");

        // Display an error
        inputArray[1].style.display = "flex";
        inputHintsArray[1].style.backgroundColor = "red";

        // Set style for the specific input
        setProps(allInputArray[1], {"border-color": "red", "outline-color": "red"});
    } else {
        console.log(termVal);

        // Remove an error
        inputArray[1].style.display = "none";
        inputHintsArray[1].style.removeProperty("background-color");

        // Set style for the specific input
        removeProps(allInputArray[1], {"border-color": "", "outline-color": ""});
    }

    /* Rate */
    if (rateVal === '') {
        console.log("'Rate' is empty.");

        // Display an error
        inputArray[2].style.display = "flex";
        inputHintsArray[2].style.backgroundColor = "red";

        // Set style for the specific input
        setProps(allInputArray[2], {"border-color": "red", "outline-color": "red"});
    } else {
        console.log(rateVal);

        // Remove an error
        inputArray[2].style.display = "none";
        inputHintsArray[2].style.removeProperty("background-color");

        // Set style for the specific input
        removeProps(allInputArray[2], {"border-color": "", "outline-color": ""});
    }

    if (!radioInputsArray[0].classList.contains("active-radio") && !radioInputsArray[1].classList.contains("active-radio")) {
        console.log("Input Radio is not selected.");

        // Display an error
        inputArray[3].style.display = "flex";
    } else {
        // Remove an error
        inputArray[3].style.display = "none";
    }

    // Check if every value is equal to empty string
    for (let i = 0; i < allInputArray.length; i++) {
        if (allInputArray[i].value === '') {
            console.log("Please fill all the input fields.");
            return;
        }
    }

    // Check if both input radios are NOT selected
    if (!radioInputsArray[0].classList.contains("active-radio") && !radioInputsArray[1].classList.contains("active-radio")) {
        console.log("Please select an option.");
        
        return;
    }

    // ... NOT equal to empty string
    if (allInputArray.values !== '') {
        console.log("Success!");
    }

    // ==============================================
    // Mortgage Formula
    // ==============================================

    let M = null;   /* monthly repayment */
    let T = null;   /* total repayment */

    // Total amount
    let P = amountVal;

    // Divide the interest rate by 12
    let i = null;
    rateVal = rateVal / 100;
    i = rateVal / 12;
    console.log(`Interest rate in 12 months: ${(Math.round(i * 100) / 100).toFixed(2)}`);

    // Multiply the total number of years by 12
    let n = null;
    n = termVal * 12;
    console.log(`Total time period (in months): ${n}`);

    // Create the main formula
    M = P*(i*(1+i)**n)/((1+i)**n-1);
    T = M*n
    console.log(`Monthly repayment: ${(Math.round(M * 100) / 100).toFixed(2)}`);
    console.log(`Total repayment: ${(Math.round(T * 100) / 100).toFixed(2)}`);

    // ==============================================
    // Updating UI
    // ==============================================

    /* Before & After */
    const beforeSubmit = document.querySelector(".before-submit");
    const afterSubmit = document.querySelector(".after-submit");

    /* Monthly & Total Repayment */
    let monthlyRepay = document.querySelector(".monthly-p");
    let totalRepayment = document.querySelector(".total-p");

    /* Update Text Content */
    monthlyRepay.textContent = `£ ${(Math.round(M * 100) / 100).toFixed(2)}`;
    totalRepayment.textContent = `£ ${(Math.round(T * 100) / 100).toFixed(2)}`;

    /* Update UI */
    beforeSubmit.classList.add("fade-out");
    afterSubmit.classList.add("fade-in");
    afterSubmit.style.display = "flex";
}

btnCalc.addEventListener("click", function(event) {
    // For submit!
    event.preventDefault();

    // Calling the function
    inputCheck();
});
