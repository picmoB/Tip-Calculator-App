const jokeText = document.getElementById('joke');
const newJokeBtn = document.getElementById('new-joke');
const loadingInfo = document.getElementById('loading-info');

const colors = ['#ff7eb9', '#7afcff', '#feff9c', '#fff740', '#b693fd'];

async function fetchJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    return { setup: data.setup, punchline: data.punchline };
  } catch (error) {
    console.error(error);
    return { setup: 'Oops!', punchline: 'Could not fetch a joke. 😢' };
  }
}

function saveJokeToLocalStorage(joke, color) {
  localStorage.setItem('lastJoke', JSON.stringify({ ...joke, color }));
}

function loadJokeFromLocalStorage() {
  const saved = localStorage.getItem('lastJoke');
  return saved ? JSON.parse(saved) : null;
}

async function showJoke() {
  newJokeBtn.disabled = true;
  loadingInfo.style.display = 'block';
  jokeText.classList.add('fade-out');

  await new Promise(resolve => setTimeout(resolve, 400));

  const joke = await fetchJoke();
  const color = colors[Math.floor(Math.random() * colors.length)];

  jokeText.textContent = `${joke.setup} — ${joke.punchline}`;
  jokeText.style.color = color;

  saveJokeToLocalStorage(joke, color);
  saveJokeToHistory(joke);
  updateHistoryUI();

  loadingInfo.style.display = 'none';
  jokeText.classList.remove('fade-out');
  jokeText.classList.add('fade-in');

  await new Promise(resolve => setTimeout(resolve, 300));
  newJokeBtn.disabled = false;
}

// --- Joke History Management --- //

function saveJokeToHistory(joke) {
  // Get current history or start with empty array
  const history = JSON.parse(localStorage.getItem("jokeHistory")) || [];

  // Add the new joke to the beginning
  history.unshift(joke);

  // Keep only the last 5 jokes
  if (history.length > 5) history.pop();

  // Save updated history back to localStorage
  localStorage.setItem("jokeHistory", JSON.stringify(history));
}

function loadJokeHistory() {
  return JSON.parse(localStorage.getItem("jokeHistory")) || [];
}

function updateHistoryUI() {
  const list = document.getElementById("history-list");
  if (!list) return;  // Skip if the section isn't added yet

  // Clear existing list
  list.innerHTML = "";

  const history = loadJokeHistory();

  history.forEach((joke) => {
    const li = document.createElement("li");
    li.textContent = `${joke.setup} - ${joke.punchline}`;
    list.appendChild(li);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const savedJoke = loadJokeFromLocalStorage();

  if (savedJoke) {
    jokeText.textContent = `${savedJoke.setup} — ${savedJoke.punchline}`;
    jokeText.style.color = savedJoke.color;
  } else {
    showJoke();
  }

  updateHistoryUI();
});

newJokeBtn.addEventListener('click', showJoke);
