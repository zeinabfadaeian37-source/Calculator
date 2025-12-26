
let expression = "";
const exprDiv = document.getElementById('expr-display');
const resDiv = document.getElementById('res-display');

function pushChar(char) {
    if (expression === "" && ['*', '/', '+'].includes(char)) return;

    if (expression === "0" && !isNaN(char)) {
        expression = char;
    } else {
        expression += char;
    }
    updateDisplay();
}

function clearAll() {
    expression = "";
    updateDisplay();
    resDiv.innerText = "0";
}

function backspace() {
    expression = expression.slice(0, -1);
    updateDisplay();

    resDiv.innerText = "0";
}

function updateDisplay() {
    exprDiv.innerText = expression || "0";
}

function solve() {
    try {
        if (expression === "") return;

        let result = eval(expression);

        if (result !== undefined) {
            resDiv.innerText = "" + result.toLocaleString('en-US');
        }
    } catch (e) {
        resDiv.innerText = "Error";
    }
}