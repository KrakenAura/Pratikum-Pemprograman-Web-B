let input = "0";

function updateDisplay() {
  document.getElementById("result").value = input;
}

function appendToDisplay(char) {
  if (input === "0") {
    input = char;
  } else {
    input += char;
  }
  updateDisplay();
}

function clearDisplay() {
  input = "0";
  updateDisplay();
}

function deleteCharacter() {
  if (input.length > 0) {
    input = input.slice(0, -1);
    updateDisplay();
  }
}

function calculateResult() {
  try {
    input = eval(input);
  } catch (error) {
    input = "Error";
  }
  updateDisplay();
}

function calculateLog() {
  try {
    input = Math.log(eval(input));
  } catch (error) {
    input = "Error";
  }
  updateDisplay();
}

function calculateSqrt() {
  try {
    input = Math.sqrt(eval(input));
  } catch (error) {
    input = "Error";
  }
  updateDisplay();
}
function calculateSquare() {
  try {
    input = Math.pow(eval(input), 2);
  } catch (error) {
    input = "Error";
  }
  updateDisplay();
}

updateDisplay();
