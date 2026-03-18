const quoteText = document.getElementById("quote-text");
const idNumber = document.getElementById("id-number");
const circleBtn = document.querySelector(".circle-part");

async function fetchQuote() {
    try {
        // Fetch and store quotes to .JSON
        const quoteFecth = await fetch("https://api.adviceslip.com/advice");
        const quoteJSON = await quoteFecth.json();

        // Append string values from .JSON to HTML elements
        quoteText.textContent = `${quoteJSON.slip.advice}`;
        idNumber.textContent = `${quoteJSON.slip.id}`;
    } catch (error) {
        quoteText.textContent = "No internet connection (probably)... it's time to go outside! 🏞️";
        idNumber.textContent = "?!";
        console.error(error);
    }
}

function toggleClass() {
    // Remove class
    quoteText.classList.toggle("fade-out-and-in");

    // Remove "disabled" attribute from this button
    circleBtn.removeAttribute("disabled");
}

// Load quote as soon as page loads
fetchQuote();

// Add event listener for this button
circleBtn.addEventListener("click", function() {
    // Append the following class and attribute
    quoteText.classList.toggle("fade-out-and-in");
    circleBtn.setAttribute("disabled", "");

    // Fetch new quote
    setTimeout(fetchQuote, 2000);

    // Call this function in 5 seconds
    setTimeout(toggleClass, 5000);
});
