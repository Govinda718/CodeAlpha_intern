let resultField = document.getElementById("result");

// Append value to the input field
function appendValue(value) {
    resultField.value += value;
}

// Clear the input field
function clearScreen() {
    resultField.value = "";
}

// Evaluate the result
function calculate() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = "Error";
    }
}
