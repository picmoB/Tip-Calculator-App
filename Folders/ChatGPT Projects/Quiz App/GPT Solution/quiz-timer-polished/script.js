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
const reviewContainer = document.getElementById("review-container");

let questionEl = document.getElementById("question");
let answersEl = document.getElementById("answers");
let timerEl = document.getElementById("timer");
let nextBtn = document.getElementById("next-btn");

const resultTitle = document.getElementById("result-title");
const resultDetails = document.getElementById("result-details");
const totalScoreEl = document.getElementById("total-score");
const restartBtn = document.getElementById("restart-btn");

function timerColorChange() {
  timerEl.classList.remove("green", "yellow", "red");

  if (timerNum >= 7) {
    timerEl.classList.add("green");
  } else if (timerNum >= 4) {
    timerEl.classList.add("yellow");
  } else if (timerNum >= 0) {
    timerEl.classList.add("red");
  }
}

function updateTimer() {
  timerEl.textContent = timerNum + (timerNum === 1 ? " second" : " seconds");
  timerColorChange();
  timerNum--;

  if (timerNum < 0) {
    clearInterval(interval);
    saveReview("No answer (timed out)");
    showAnswer(false, "Time's up!");
  }
}

function loadQuestion() {
  selectedOption = null;
  timerNum = 10;
  clearInterval(interval);
  updateTimer();

  // Next Button Setup
  nextBtn.setAttribute("disabled", "");
  if (nextBtn.hasAttribute("disabled")) {
    nextBtn.classList.remove("enable-btn");
    nextBtn.classList.add("disable-btn");
  }

  interval = setInterval(updateTimer, 1000);

  const q = questions[currentQuestion];
  questionEl.textContent = q.text;
  answersEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => {
      document.querySelectorAll("#answers button").forEach(el => el.classList.remove("selected"));
      // Next Button Manipulation
      nextBtnColor();

      // Adding Class to Button
      btn.classList.add("selected");
      selectedOption = index;
    });
    answersEl.appendChild(btn);
  });
}

function nextBtnColor() {
  // Attribute Removal
  nextBtn.removeAttribute("disabled");

  // Switch Classes
  nextBtn.classList.remove("disable-btn");
  nextBtn.classList.add("enable-btn");
}

function handleNext() {
  if (selectedOption === null) {
    alert("Please select an answer!");
    return;
  }

  clearInterval(interval);

  // Save review before advancing
  saveReview(questions[currentQuestion].options[selectedOption]);

  if (selectedOption === questions[currentQuestion].correct) {
    score++;
    showAnswer(true, "Correct! 🎉");
  } else {
    showAnswer(false, "Wrong! ❌");
  }
}

function saveReview(answerText) {
  const q = questions[currentQuestion];
  let divDetail = document.createElement("div");
  divDetail.classList.add("review-details");

  let questionTxt = document.createElement("h2");
  questionTxt.textContent = q.text;

  let selectedAnswer = document.createElement("p");
  selectedAnswer.textContent = "Your answer: " + answerText;

  if (answerText === q.options[q.correct]) {
    selectedAnswer.classList.add("correct");
  } else if (answerText !== "No answer (timed out)") {
    selectedAnswer.classList.add("wrong");
  }

  let correctAnswer = document.createElement("p");
  correctAnswer.textContent = "Correct answer: " + q.options[q.correct];
  correctAnswer.classList.add("correct");

  divDetail.append(questionTxt, selectedAnswer, correctAnswer);
  reviewContainer.appendChild(divDetail);
}

function showAnswer(isCorrect, msg) {
  alert(`${msg}\nCorrect answer: ${questions[currentQuestion].options[questions[currentQuestion].correct]}`);

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
  reviewContainer.innerHTML = ""; // clear review section
  quizSection.classList.remove("hidden");
  resultsSection.classList.add("hidden");
  reviewSection.classList.add("hidden");

  // Reset timer colors
  timerEl.classList.remove("green", "yellow", "red");

  loadQuestion();
}

nextBtn.addEventListener("click", handleNext);
restartBtn.addEventListener("click", restartQuiz);

loadQuestion();
