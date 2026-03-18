const questions = [
  {
    text: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
  },
  {
    text: "What color is a banana?",
    options: ["Red", "Yellow", "Blue", "Purple"],
    correct: 1
  },
  {
    text: "How many legs does a spider have?",
    options: ["6", "8", "10", "12"],
    correct: 0
  }
];

let currentQuestion = 0;
let selectedOption = null;
let score = 0;
let timerNum = 10;
let interval;

// LocalStorage defaults
let storedScore = parseInt(localStorage.getItem("totalscore")) || 0;
let storedQuestions = parseInt(localStorage.getItem("totalquestions")) || 0;

let questionEl = document.getElementById("question");
let answersEl = document.getElementById("answers");
let nextBtn = document.getElementById("next-btn");
let timerEl = document.getElementById("timer");

function updateTimer() {
  timerEl.textContent = timerNum + " seconds";
  timerNum--;

  if (timerNum <= 0) {
    clearInterval(interval);
    showAnswer(false, "Time's up!");
  }
}

function loadQuestion() {
  selectedOption = null;
  timerNum = 10;
  clearInterval(interval);
  updateTimer();
  interval = setInterval(updateTimer, 1000);

  const q = questions[currentQuestion];
  questionEl.textContent = q.text;
  answersEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const li = document.createElement("button");
    li.textContent = option;
    li.addEventListener("click", () => {
      document.querySelectorAll("#answers button").forEach((el) => el.classList.remove("selected"));
      li.classList.add("selected");
      selectedOption = index;
    });
    answersEl.appendChild(li);
  });
}

function showAnswer(isCorrect, msg = "") {
  const q = questions[currentQuestion];
  const correctAnswer = q.options[q.correct];

  let html = `<h2>${msg}</h2>`;
  html += `<p>Correct answer: <strong>${correctAnswer}</strong></p>`;

  document.getElementById("quiz-container").innerHTML = html + `<button id="next-btn">Next</button>`;
  document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      restoreUI();
      loadQuestion();
    } else {
      showResults();
    }
  });
}

function showResults() {
  storedScore += score;
  storedQuestions += questions.length;
  localStorage.setItem("totalscore", storedScore);
  localStorage.setItem("totalquestions", storedQuestions);

  document.getElementById("quiz-container").innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>You scored ${score} out of ${questions.length} this round.</p>
    <p>Total: ${storedScore} / ${storedQuestions}</p>
    <button id="restart-btn">Restart Quiz</button>
  `;

  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  restoreUI();
  loadQuestion();
}

function restoreUI() {
  document.getElementById("quiz-container").innerHTML = `
    <div id="timer">10 seconds</div>
    <h2 id="question"></h2>
    <ul id="answers"></ul>
    <button id="next-btn">Next</button>
  `;
  // Re-bind elements
  questionEl = document.getElementById("question");
  answersEl = document.getElementById("answers");
  nextBtn = document.getElementById("next-btn");
  timerEl = document.getElementById("timer");

  nextBtn.addEventListener("click", handleNext);
}

function handleNext() {
  if (selectedOption === null) {
    alert("Please select an answer!");
    return;
  }

  clearInterval(interval);

  if (selectedOption === questions[currentQuestion].correct) {
    score++;
    showAnswer(true, "Correct! 🎉");
  } else {
    showAnswer(false, "Wrong! ❌");
  }
}

nextBtn.addEventListener("click", handleNext);

loadQuestion();
