let resultDisplay = document.querySelector(".resultdisplay");
let upperDisplay = document.querySelector(".upperdisplay");
let numbersBtn = document.querySelectorAll(".btn.numbtn");
let opBtn = document.querySelectorAll(".btn.opbtn");
const equalBtn = document.querySelector("#equal");
const allClearBtn = document.querySelector("#allClear");
const clearBtn = document.querySelector("#clear");
const decimalBtn = document.querySelector("#decimal");
const zeroBtn = document.querySelector("#zero");
const changeSignBtn = document.querySelector("#changeSign");
let opArray = ["+", "-", "×", "÷"];
let calculationResult = false;

decimalBtn.addEventListener("click", (e) => {
    if (resultDisplay.textContent === '0') {
        resultDisplay.textContent = "0.";
        decimalBtn.disabled = true;
    }
    else if (resultDisplay.textContent.includes(".")) {
        decimalBtn.disabled = true;
    }
    else {
        resultDisplay.textContent += ".";
    }
})

zeroBtn.addEventListener("click", (e) => {
    if (resultDisplay.textContent !== '0' && resultDisplay.textContent.length < 8) {
        resultDisplay.textContent += "0";
    }
})

numbersBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (calculationResult) {
            clearAll()
            calculationResult = false;
        }
        if (e.target.textContent !== "0" && e.target.textContent !== "." && resultDisplay.textContent.length < 8) {
            if (resultDisplay.textContent === "0"){
                resultDisplay.textContent = "";
            }
            resultDisplay.textContent += e.target.textContent;
        }
    })
})

opBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.textContent !== "=" && upperDisplay.textContent === '') {
            decimalBtn.disabled = false;
            upperDisplay.textContent = `${resultDisplay.textContent} ${e.target.textContent} `;
            resultDisplay.textContent = '';
        }
        else if (e.target.textContent !== "=") {
            decimalBtn.disabled = false;
            equalBtn.click();
            upperDisplay.textContent = `${resultDisplay.textContent} ${e.target.textContent} `;
            if (calculationResult) {
                resultDisplay.textContent = '';
                calculationResult = false;
            }
        }
    })
})

equalBtn.addEventListener("click", () => {
    if (!calculationResult) {
        upperDisplay.textContent += resultDisplay.textContent;
        let equationArray = upperDisplay.textContent.split(" ");
        let calculation = {
            firstNumber : equationArray[0],
            operationSymbol : equationArray[1],
            secondNumber : equationArray[2],
        }
        let equationResult = operate(calculation.operationSymbol, calculation.firstNumber, calculation.secondNumber);
        resultDisplay.textContent = Math.round(equationResult * 1000) / 1000; // best way to round at 4th digit decimal
        calculationResult = true;
    }
})

clearBtn.addEventListener("click", () => {
    if (!calculationResult) {
        resultDisplay.textContent = resultDisplay.textContent.slice(0, -1);
    }
})

allClearBtn.addEventListener("click", () => {
    clearAll();
})

function clearAll() {
    upperDisplay.textContent = "";
    resultDisplay.textContent = "0";
    decimalBtn.disabled = false;
}

changeSignBtn.addEventListener("click", () => {
    if (resultDisplay.textContent) {
        resultDisplay.textContent = changesign(resultDisplay.textContent);
    }
})

function operate(op, a, b) {
    let result;
    if (b === undefined) {
        return a;
    }
    if (op === "÷" && b === '0') {
        alert("You can't divide by 0! Please restart the page!");
    }
    switch(op) {
        case "+":
            result = addition(a,b);
            break;
        case "-":
            result = subtraction(a,b);
            break;
        case "×":
            result = multiply(a,b);
            break;
        case "÷":
            result = division(a,b);
            break;
    }

    return result;
}

function addition (a,b) {
    return +a + +b;
}

function subtraction (a ,b) {
    return +a - +b;
}

function multiply (a, b) {
    return +a * +b;
}

function division (a, b) {
    return +a / +b;
}

function changesign (a) {
    return a * -1;
}
