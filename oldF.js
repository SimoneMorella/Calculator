numbersBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (resultDisplay.textContent) {
            allClear();
        }
        if (!opArray.some((operator) => upperDisplay.textContent.includes(operator))) {
            upperDisplay.textContent += e.target.textContent;
        }
        else if (opArray.some((operator) => upperDisplay.textContent.includes(operator))) {
            upperDisplay.textContent += e.target.textContent;
        }
    })
})

opBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        if ((!opArray.some((operator) => upperDisplay.textContent.includes(operator))) && e.target.textContent !== "=") {
            if (upperDisplay.textContent) {
                upperDisplay.textContent += " " + e.target.textContent + " ";
            }
        }
        else if (e.target.textContent !== "=") {
            if (resultDisplay.textContent) {
                upperDisplay.textContent = "";
                upperDisplay.textContent = `${resultDisplay.textContent} ${e.target.textContent} `;
                resultDisplay.textContent = '';

            }
        }
    })
})