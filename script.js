let resultDisplay = document.querySelector(".resultdisplay");
let upperDisplay = document.querySelector(".upperdisplay");
let numbersBtn = document.querySelectorAll(".btn.numbtn");
let opBtn = document.querySelectorAll(".btn.opbtn");
let equalBtn = document.querySelector("#equal");
const allClearBtn = document.querySelector("#allClear");
const clearBtn = document.querySelector("#clear");
const decimalBtn = document.querySelector("#decimal");
let opArray = ["+", "-", "×", "÷"];
let calculationResult = false;

numbersBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (calculationResult) {
            clearAll()
            calculationResult = false;
        }
        resultDisplay.textContent += e.target.textContent;
    })
})

opBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.textContent !== "=" && upperDisplay.textContent === '') {
            upperDisplay.textContent = `${resultDisplay.textContent} ${e.target.textContent} `;
            resultDisplay.textContent = '';
        }
        else if (e.target.textContent !== "=") {
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
    upperDisplay.textContent += resultDisplay.textContent;
    let equationArray = upperDisplay.textContent.split(" ");
    let calculation = {
        firstNumber : equationArray[0],
        operationSymbol : equationArray[1],
        secondNumber : equationArray[2],
    }
    resultDisplay.textContent = operate(calculation.operationSymbol, calculation.firstNumber, calculation.secondNumber);
    calculationResult = true;
})

clearBtn.addEventListener("click", () => {
    // con calculationResult si non cancella, con no cancella
    upperDisplay.textContent = upperDisplay.textContent.slice(0, -1);
})

allClearBtn.addEventListener("click", () => {
    clearAll();
})

function clearAll() {
    upperDisplay.textContent = "";
    resultDisplay.textContent = "";
}

function operate(op, a, b) {
    let result;
    if (b === undefined) {
        return a;
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
    if (b === 0) {
        return "Error: Division by 0";
    }
    return +a / +b;
}

function changesign (a) {
    return a * -1;
}
