const questions = [
    {
        text: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        text: "What color is banana?",
        options: ["Red", "Yellow", "Purple", "Blue"],
        correct: 1
    },
    {
        text: "How many legs does spider have?",
        options: ["4", "6", "8", "12"],
        correct: 1
    }
];

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

let currentQuestion = 0;
let questionsNum = 0;
let selectedOption = null;
let score = 0;
let timerNum = 10;
let interval;

// Storage variables
let storedScore = 0;
let storedQuestions = 0;

function updateTimer() {
    timerNum --;

    document.getElementById("timer").textContent = `${timerNum} seconds`;

    if(timerNum === 0) {
        alert("Time's over! ⌚");
        clearInterval(interval);
        document.getElementById("quiz-container").innerHTML =
        `
            <h2>Sorry, you're out of time. 😞</h2>
        `;
    }
}

function loadQuestion() {
    selectedOption = null;
    timerNum = 10;
    updateTimer();
    interval = setInterval(updateTimer, 1000);

    const q = questions[currentQuestion];
    questionEl.textContent = q.text;
    answerEl.innerHTML = "";

    q.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => {
            document.querySelectorAll("li").forEach((el) => el.classList.remove("selected"));
            li.classList.add("selected");
            selectedOption = index;
        });
        answerEl.appendChild(li);
    });
}

nextBtn.addEventListener("click", () => {
    if(selectedOption === null) {
        alert("Please select an answer!");
        return;
    }

    clearInterval(interval);

    if(selectedOption === questions[currentQuestion].correct) {
        score++;
    } else {
        let correctAnswer = questions[currentQuestion].correct;
        alert(`Wrong! ❌ The correct answer is ${questions[currentQuestion].options[correctAnswer]}.`);
    }

    currentQuestion++;
    questionsNum++;

    if(currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

restartBtn.addEventListener("click", () => {
    console.log("Clicked");

    // Reset to default values
    score = 0;
    currentQuestion = 0;
    questionsNum = 0;
    timerNum = 10;

    // Reset the timer
    clearInterval(interval);
    loadQuestion();
});

function showResults() {
    storedScore = storedScore + score;
    localStorage.setItem("totalscore", storedScore);
    let totalScore = localStorage.getItem("totalscore");

    storedQuestions = storedQuestions + questionsNum;
    localStorage.setItem("totalquestions", storedQuestions);
    let totalQuestions = localStorage.getItem("totalquestions");

    localStorage.setItem("totalscore", parseInt(totalScore));
    localStorage.setItem("totalquestions", parseInt(totalQuestions));

    document.getElementById("quiz-container").innerHTML = 
    `
        <h2>Quiz Complete! 🙌</h2>
        <p>You scored ${score} out of ${questionsNum}.</p>
        <p>In total: ${totalScore} score / ${totalQuestions} questions</p>
        <button id="play-again">Play Again</button>
        <button id="reset-btn">Reset Score</button>
    `;

    const playAgain = document.getElementById("play-again");
    playAgain.addEventListener("click", () => {
        document.getElementById("quiz-container").innerHTML = "";
        document.getElementById("quiz-container").innerHTML +=
        `
        <h2 id="timer-countdown">Starting Quiz In <span id="quiz-start-time">5</span> Seconds.</h2>
        `;

        let timerNumTxt = document.getElementById("quiz-start-time").textContent;
        let timerNumInt = parseInt(timerNumTxt);

        function startQuiz() {
            timerNumInt--;

            document.getElementById("quiz-start-time").textContent = `${timerNumInt}`;

            if(timerNumInt === 0) {
                location.reload();
            }
        }

        setInterval(startQuiz, 1000);
    });

    const resetBtn = document.getElementById("reset-btn");
    resetBtn.addEventListener("click", () => {
        console.log("Clicked Reset Button");

        totalScore = 0;
        totalQuestions = 0;

        localStorage.setItem("totalscore", 0);
        localStorage.setItem("totalquestions", 0);

        console.log(`Reset: ${totalScore} score, ${totalQuestions} questions.`);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    let storageScore = localStorage.getItem("totalscore");
    let storageQuestions = localStorage.getItem("totalquestions");

    storedScore = parseInt(storageScore);
    storedQuestions = parseInt(storageQuestions);
});

loadQuestion();
