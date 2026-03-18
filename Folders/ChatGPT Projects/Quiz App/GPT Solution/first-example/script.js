const question = {
    text: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2  // Index of Paris
}

let selectedQuestion = null;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

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

nextBtn.addEventListener("click", () => {
    if(selectedOption === null){
        alert("Please select an answer!");
        return;
    }

    if(selectedOption === question.correct) {
        alert("That's correct! 🎉");
    } else {
        alert("Oops, wrong answer! 😞");
    }

    // Reset for now
    selectedOption = null;
    loadQuestion();     // Reload the same question again
});

loadQuestion();
