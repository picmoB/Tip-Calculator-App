const question = {
  text: "What is the capital of France?",
  options: ["Berlin", "Madrid", "Paris", "Rome"],
  correct: 2
};

let selectedOption = null;
let timerNum = 10;
let interval;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");

function updateTimer() {
  timerEl.textContent = timerNum + " seconds";
  timerNum--;

  if (timerNum < 0) {
    clearInterval(interval);
    document.getElementById("quiz-container").innerHTML = "<h2 id='info-txt'>Sorry, you're out of time.</h2>";
  }
}

function loadQuestion() {
  questionEl.textContent = question.text;
  answersEl.innerHTML = "";
  timerNum = 10;
  updateTimer();
  interval = setInterval(updateTimer, 1000);

  question.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;

    li.addEventListener("click", () => {
      document.querySelectorAll("li").forEach((el) => el.classList.remove("selected"));
      li.classList.add("selected");
      selectedOption = index;
    });

    answersEl.appendChild(li);
  });
}

nextBtn.addEventListener("click", () => {
  if (selectedOption === null) {
    alert("Please select an answer!");
    return;
  }

  clearInterval(interval);

  if (selectedOption === question.correct) {
    alert("Correct! 🎉");
    document.getElementById("quiz-container").innerHTML = "<h2 id='info-txt'>You got it right! 🎯</h2>";
  } else {
    alert("Oops, wrong answer.");
    document.getElementById("quiz-container").innerHTML = "<h2 id='info-txt'>Oops! The correct answer was: " + question.options[question.correct] + "</h2>";
  }
});

loadQuestion();
