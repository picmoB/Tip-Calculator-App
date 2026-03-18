let count = 0;

const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const action = e.currentTarget.classList;

    if (action.contains("decrease")) {
      count--;
    } else if (action.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    value.textContent = count;

    // Color change based on value
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
});
