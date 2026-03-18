import iconDollar from "./assets/images/icon-dollar.svg";
import iconPerson from "./assets/images/icon-person.svg";

import { useState , useRef} from "react";
import "./App.css";

function App() {
  // Refferences
  let btnRef = useRef(null);
  let inputRef = useRef(null);
  let calculateRef = useRef(null);
  let resetRef = useRef(null);

  // Regex
  /* Special characters */
  const SPECIAL_CHARACTERS = /[!@#$%^&*()\-+={}[\]:;"'<>?\/|\\]/;

  /* Front zero check */
  const regZero = /^0[0-9].*$/;

  // Tip button array
  const tipArray = ["5%", "10%", "15%", "25%", "50%"];

  const [activeIndex, setIsActive] = useState(undefined);

  function SelectTipButtons() {
    return tipArray.map((value, index) => (
      <button 
        ref={btnRef}
        className={activeIndex === index ? "btn-tip active" : "btn-tip"}
        type="button"
        key={index}
        onClick={() => setIsActive(index)}
        value={value}
      >
        {value}
      </button>
    ));
  }

  // Append active index to variable
  let activeBtn;

  // Variables for calculation
  let totalCalculate;
  let tipCaluclate;

  // Display these variables after calculation
  let [tipAmount, setTipAmount] = useState("$0.00");
  let [totalAmount, setTotalAmount] = useState("$0.00");

  // Create an array of these buttons
  const btnValue = document.getElementsByClassName("btn-tip");
  const btnValueArray = Array.from(btnValue);

  // Function with formula
  const mathFormula = (bill, people) => {
    /* TOTAL */
    totalCalculate = ((bill * (activeBtn / 100)) + bill) / people;

    // Last 2 numbers after comma
    totalCalculate = totalCalculate.toFixed(2);
    totalCalculate = Number.parseFloat(totalCalculate);

    /* TIP */
    tipCaluclate = ((totalCalculate * people) - bill) / people;

    // Last 2 numbers after comma
    tipCaluclate = tipCaluclate.toFixed(2);
    tipCaluclate = Number.parseFloat(tipCaluclate);

    // Hide the calculate button and show reset button if these values are valid
    if (!Number.isFinite(totalCalculate) || !Number.isFinite(tipCaluclate)) {
      alert("Invalid values.");
      return;
    } else {
      resetRef.current.style.display = "flex";
      calculateRef.current.style.display = "none";
    }

    // Append new values
    setTotalAmount((prev) => prev = `$${totalCalculate}`);
    setTipAmount((prev) => prev = `$${tipCaluclate}`);
  }

  // Main function (calculate)
  const getValueFromActiveBtn = () => {
    // Get the value from 'bill' input
    let currentBill = document.getElementById("bill").value;
    let currentBillNum = Number.parseFloat(currentBill);

    // Check if input contains invalid type of values
    if (currentBillNum === 0) {
      document.getElementsByClassName("error-msg")[0].textContent = "Can't be zero!";
      document.getElementsByClassName("error-msg")[0].style.display = "block";
    } else if (!currentBillNum) {
      document.getElementsByClassName("error-msg")[0].textContent = "Fix the input value!";
      document.getElementsByClassName("error-msg")[0].style.display = "block";
    } else if (regZero.test(currentBill)) {
      document.getElementsByClassName("error-msg")[0].textContent = "Can't start with 0!";
      document.getElementsByClassName("error-msg")[0].style.display = "block";
    } else {
      document.getElementsByClassName("error-msg")[0].style.display = "none";
    }

    // Get the value from 'people' input
    let people = document.getElementById("people-num").value;
    let peopleNum = Number.parseInt(people);

    // Check if input contains invalid type of values
    if (peopleNum === 0) {
      document.getElementsByClassName("error-msg")[1].textContent = "Can't be zero!";
      document.getElementsByClassName("error-msg")[1].style.display = "block";
    } else if (!peopleNum) {
      document.getElementsByClassName("error-msg")[1].textContent = "Fix the input value!";
      document.getElementsByClassName("error-msg")[1].style.display = "block";
    } else if (regZero.test(people)) {
      document.getElementsByClassName("error-msg")[1].textContent = "Can't start with 0!";
      document.getElementsByClassName("error-msg")[1].style.display = "block";
    } else {
      document.getElementsByClassName("error-msg")[1].style.display = "none";
    }

    // Check whether custom input OR button tip contain class "active"
    if (activeIndex !== null && activeIndex !== undefined) {
      // Get the value from active button
      activeBtn = btnValueArray[activeIndex].value;
      activeBtn = parseInt(activeBtn);

      // Console log!!!!
      console.log(activeBtn);
      console.log(Number.isInteger(activeBtn));   // true

      // ==================================================
      // Start the calculation
      // ==================================================

      mathFormula(currentBillNum, peopleNum);

    } else if (inputRef.current.className.includes("active")) {
      // Get the current value from custom tip input
      activeBtn = document.getElementById("custom-tip").value;
      activeBtn = parseInt(activeBtn);

      // Check if input contains invalid type of values
      if (activeBtn < 5) {
        alert("Custom input must be larger than five (5).");
        return;
      } else if (!activeBtn) {
        alert("Enter a valid number.");
        return;
      }

      // ==================================================
      // Start the calculation
      // ==================================================

      mathFormula(currentBillNum, peopleNum);

    } else {
      // Alert the user if it's not selected
      alert("No active button or custom input.");
      return;
    }
  }

  // Reset button function
  const resetBtn = () => {
    // Bill
    let currentBill = document.getElementById("bill");
    currentBill.value = "";

    // Custom tip
    let customTip = document.getElementById("custom-tip");
    customTip.value = "";

    // People
    let people = document.getElementById("people-num");
    people.value = "";

    // Remove active class from buttons
    setIsActive(null);

    // Reset to default values
    setTipAmount((prev) => prev = "$0.00");
    setTotalAmount((prev) => prev = "$0.00");

    // Hide this button and show the other one
    resetRef.current.style.display = "none";
    calculateRef.current.style.display = "flex";
  }

  return (
    <>
      <h1>SPLI<br />TTER</h1>
      <div className="calculator-container">
        <div className="calculator-left-part">
          <div className="calculator-left-top">
            <h1>Bill</h1>
            <div className="input-holder">
              <img src={iconDollar} alt="icon-img" />
              <input className="case-input" id="bill" type="number" placeholder="0" />
            </div>
            <p className="error-msg">Some text</p>
          </div>
          <div className="calculator-tip-holder">
            <h1>Select Tip %</h1>
            <div className="calculator-left-mid">
              <SelectTipButtons></SelectTipButtons>
              <input 
                ref={inputRef}
                id="custom-tip"
                className={activeIndex === null && document.activeElement === inputRef.current ? "custom-input active" : "custom-input"}
                type="number"
                placeholder="Custom"
                onFocus={() => setIsActive(null)}
              />
            </div>
          </div>
          <div className="calculator-left-bottom">
            <h1>Number of People</h1>
            <div className="input-holder">
              <img src={iconPerson} alt="icon-img" />
              <input className="case-input" id="people-num" type="number" placeholder="0" />
            </div>
            <p className="error-msg">Some text</p>
          </div>
        </div>
        <div className="calculator-right-part">
          <div className="calculator-info-holder">
            <div className="amount-holder">
              <div className="tip-txt">
                <p>Tip Amount</p>
                <p>/ person</p>
              </div>
              <h1 className="tip-amount-number">{tipAmount}</h1>
            </div>
            <div className="amount-holder">
              <div className="tip-txt">
                <p>Total</p>
                <p>/ person</p>
              </div>
              <h1 className="total-amount-number">{totalAmount}</h1>
            </div>
          </div>

          <div className="btn-holder">
            <button ref={resetRef} id="resetBtn" className="btn-action" type="button" onClick={resetBtn}>RESET</button>
            <button ref={calculateRef} id="calculateBtn" className="btn-action" type="submit" onClick={getValueFromActiveBtn} onSubmit={(event) => event.preventDefault()}>CALCULATE</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App;
