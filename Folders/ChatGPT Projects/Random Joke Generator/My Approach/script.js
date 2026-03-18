const jokeText = document.getElementById("joke");
const newJokeBtn = document.getElementById("new-joke");
const loadingInfo = document.getElementById("loading-info");

async function fetchJoke() {
    try {
        // Send request to API
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");

        // Convert these to JSON
        const data = await response.json();

        // Display joke on the page
        jokeText.textContent = `${data.setup} - ${data.punchline}`;
    } catch (error) {
        jokeText.textContent = "Oops! Could not fetch a joke. 😢";
        console.error(error);
    }
}

// Fetch a joke immediately on page load
fetchJoke();

function toggleClass() {
    // Remove Classes
    jokeText.classList.toggle("fade-out-and-in");
    loadingInfo.classList.toggle("fade-in-and-out");

    // Display default value for this HTML element
    loadingInfo.style.setProperty("display", "none");

    // Enable Button Again
    newJokeBtn.removeAttribute("disabled");
}

newJokeBtn.addEventListener("click", function() {
    // Add Animation (from these classes)
    jokeText.classList.toggle("fade-out-and-in");
    loadingInfo.classList.toggle("fade-in-and-out");
    loadingInfo.style.removeProperty("display");

    // Disable Button
    newJokeBtn.setAttribute("disabled", "");

    // Call this function (after 5 seconds) to reset classes
    setTimeout(toggleClass, 5000);

    // Load Next Joke
    setTimeout(fetchJoke, 2000);
});
