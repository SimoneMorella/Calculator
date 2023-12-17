let resultDisplay = document.querySelector(".resultdisplay");
let upperDisplay = document.querySelector(".upperdisplay");
let numbersBtn = document.querySelectorAll(".btn.numbtn");
let opBtn = document.querySelectorAll(".btn.opbtn");
let equalBtn = document.querySelector("#equal");
const allClearBtn = document.querySelector("#allClear");
const clearBtn = document.querySelector("#clear");
let firstNum = "";
let operator = "";
let secondNum = "";
let opArray = ["+", "-", "×", "÷"];

// cose da fare
// sistemare il risultato operate e farlo uscire in resultDisplay FATTO
// se ci sta un qualcosa in resultDisplay allora se premo un operator mi fa l'operator su quello, e se premo un nuovo numero l'upper display si resetta FATTO
// sistemare decimali
// sistemare il punto
// sistemare il C tasto


numbersBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (resultDisplay.textContent) {
            allClear();
        }
        if (!opArray.some((operator) => upperDisplay.textContent.includes(operator))) {
            firstNum += e.target.textContent;
            upperDisplay.textContent = firstNum;
        }
        else if (opArray.some((operator) => upperDisplay.textContent.includes(operator))) {
            secondNum += e.target.textContent;
            upperDisplay.textContent += e.target.textContent;
        }
    })
})

opBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        if ((!opArray.some((operator) => upperDisplay.textContent.includes(operator))) && e.target.textContent !== "=") {
            if (upperDisplay.textContent) {
                operator = e.target.textContent;
                upperDisplay.textContent += " " + e.target.textContent + " ";
            }
        }
        else if (e.target.textContent !== "=") {
            if (resultDisplay.textContent) {
                upperDisplay.textContent = "";
                firstNum = resultDisplay.textContent;
                operator = e.target.textContent;
                upperDisplay.textContent = `${firstNum} ${e.target.textContent} `;
                resultDisplay.textContent = '';
                secondNum = '';
            }
        }
    })
})

equalBtn.addEventListener("click", () => {
    resultDisplay.textContent = operate(operator, firstNum, secondNum);
})

clearBtn.addEventListener("click", () => {
    
    upperDisplay.textContent = upperDisplay.textContent.slice(0, -1);
})

allClearBtn.addEventListener("click", () => {
    allClear();
})

function allClear() {
    upperDisplay.textContent = "";
    resultDisplay.textContent = "";
    firstNum = '';
    secondNum = '';
    operator = '';
}

function operate(op, a, b) {
    let result;
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
