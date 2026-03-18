const questions = [
  { text: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
  { text: "What color is a banana?", options: ["Red", "Yellow", "Blue", "Purple"], correct: 1 },
  { text: "How many legs does a spider have?", options: ["6", "8", "10", "12"], correct: 1 }
];

let currentQuestion = 0;
let selectedOption = null;
let score = 0;
let timerNum = 10;
let interval;

// Persistent scores
let storedScore = parseInt(localStorage.getItem("totalscore")) || 0;
let storedQuestions = parseInt(localStorage.getItem("totalquestions")) || 0;

// DOM elements
const quizSection = document.getElementById("quiz-section");
const resultsSection = document.getElementById("results-section");
const reviewSection = document.getElementById("review-section");

let questionEl = document.getElementById("question");
let answersEl = document.getElementById("answers");
let nextBtn = document.getElementById("next-btn");
let timerEl = document.getElementById("timer");

const resultTitle = document.getElementById("result-title");
const resultDetails = document.getElementById("result-details");
const totalScoreEl = document.getElementById("total-score");
const restartBtn = document.getElementById("restart-btn");

function updateTimer() {
  timerEl.textContent = timerNum + (timerNum === 1 ? " second" : " seconds");
  timerNum--;

  if (timerNum < 0) {
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
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => {
      document.querySelectorAll("#answers button").forEach(el => el.classList.remove("selected"));
      btn.classList.add("selected");
      selectedOption = index;
    });
    answersEl.appendChild(btn);
  });
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

  // Attempt to put string values to new HTML elements
  if (selectedOption != null) {
    let divDetail = document.createElement("div");
    let questionTxt = document.createElement("h2");
    let selectedAnwer = document.createElement("p");

    questionTxt.textContent = questions[currentQuestion].text;
    selectedAnwer.textContent = questions[currentQuestion].options[selectedOption];

    // Console logging
    console.log(questions[currentQuestion].text);
    console.log(questions[currentQuestion].options[selectedOption]);

    divDetail.appendChild(questionTxt, selectedAnwer);
    reviewSection.appendChild(divDetail);
  }
}

function showAnswer(isCorrect, msg) {
  const q = questions[currentQuestion];
  alert(`${msg}\nCorrect answer: ${q.options[q.correct]}`);

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  // Update totals
  storedScore += score;
  storedQuestions += questions.length;
  localStorage.setItem("totalscore", storedScore);
  localStorage.setItem("totalquestions", storedQuestions);

  // Toggle sections
  quizSection.classList.add("hidden");
  resultsSection.classList.remove("hidden");
  reviewSection.classList.remove("hidden");

  // Populate results
  resultTitle.textContent = "Quiz Complete!";
  resultDetails.textContent = `You scored ${score} out of ${questions.length}.`;
  totalScoreEl.textContent = `Total: ${storedScore} / ${storedQuestions}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quizSection.classList.remove("hidden");
  resultsSection.classList.add("hidden");
  reviewSection.classList.add("hidden");
  loadQuestion();
}

nextBtn.addEventListener("click", handleNext);
restartBtn.addEventListener("click", restartQuiz);

loadQuestion();
