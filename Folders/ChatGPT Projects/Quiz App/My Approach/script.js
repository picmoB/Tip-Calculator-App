const question = {
    text: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2  // Index of Paris
}

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const timerTxt = document.getElementById("timer").textContent;

let timerNum = parseInt(timerTxt);
let interval = null;

window.addEventListener("DOMContentLoaded", () => {
    interval = setInterval(timerCountdown, 1000);
});

function loadQuestion() {
    questionEl.textContent = question.text;
    answerEl.innerHTML = "";

    question.options.forEach((option, index) => {
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

function timerCountdown() {
    timerNum --;

    document.getElementById("timer").textContent = `${timerNum} seconds`;

    if(timerNum === 0) {
        alert("Time's over! ⌚");
        clearInterval(interval);
        document.getElementById("quiz-container").innerHTML = "";
        document.getElementById("quiz-container").innerHTML +=
        `
            <h2 id="info-txt">Sorry, you're out of time. 😞</h2>
        `;
    }
}

nextBtn.addEventListener("click", () => {
    if(selectedOption === null){
        alert("Please select an answer!");
        return;
    }

    if(selectedOption === question.correct) {
        alert("That's correct! 🎉");
        clearInterval(interval);
        document.getElementById("quiz-container").innerHTML = "";
        document.getElementById("quiz-container").innerHTML +=
        `
            <h2 id="info-txt">Congrats, correct answer! 🥳</h2>
        `;
    } else {
        alert("Oops, wrong answer! 😬");
    }

    // Reset for now
    selectedOption = null;
    loadQuestion();     // Reload the same question again
});

timerCountdown();
loadQuestion();
