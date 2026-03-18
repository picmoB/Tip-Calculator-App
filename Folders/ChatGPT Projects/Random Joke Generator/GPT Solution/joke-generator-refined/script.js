const jokeText = document.getElementById('joke');
const newJokeBtn = document.getElementById('new-joke');
const loadingInfo = document.getElementById('loading-info');

const colors = ['#22c55e', '#eab308', '#f472b6', '#60a5fa', '#0ea5e9'];

async function fetchJoke() {
  try {
    // Fetching data
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();

    // Setting up localStorage
    localStorage.setItem("dataSetup", data.setup);
    localStorage.setItem("dataPunchline", data.punchline);

    return `${data.setup} — ${data.punchline}`;
  } catch (error) {
    console.error(error);
    return 'Oops! Could not fetch a joke. 😢';
  }
}

async function showJoke() {
  newJokeBtn.disabled = true;
  loadingInfo.style.display = 'block';
  jokeText.classList.add('fade-out');
  
  // Wait for fade-out before fetching
  await new Promise(resolve => setTimeout(resolve, 400));

  const joke = await fetchJoke();

  // Update joke text and random color
  jokeText.textContent = joke;
  jokeText.style.color = colors[Math.floor(Math.random() * colors.length)];

  // Fade-in and hide loading info
  loadingInfo.style.display = 'none';
  jokeText.classList.remove('fade-out');
  jokeText.classList.add('fade-in');

  await new Promise(resolve => setTimeout(resolve, 300));
  newJokeBtn.disabled = false;
}

// Load a joke on page start (disabled)
// showJoke();

window.addEventListener("DOMContentLoaded", function() {
  let dataSetup = localStorage.getItem("dataSetup");
  let dataPunchline = localStorage.getItem("dataPunchline");

  // Display last fetched joke
  jokeText.textContent = `${dataSetup} - ${dataPunchline}`;
});

newJokeBtn.addEventListener('click', showJoke);
