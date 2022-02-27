import { numberButtons, operationButtons, cleanerButton, backSpaceButton, inputWindow, } from "./view.js";
let memoryCurrentNumber = 0;
let memoryNewNomber = false;
let memoryPandingOperation = "";

numberButtons.forEach((button) => {
    button.addEventListener("click", function(e) { numberButtonClick(e.target.textContent) })
});
operationButtons.forEach((operation) => {
    operation.addEventListener("click", function(e) { operationButtonClick(e.target.textContent) })
});
cleanerButton.addEventListener("click", cleanerButtonClick);
backSpaceButton.addEventListener("click", clickBackSpase);

function numberButtonClick(number) {
    if (memoryNewNomber) {
        inputWindow.value = number;
        memoryNewNomber = false;
    } else {
        if (inputWindow.value === "0") {
            inputWindow.value = number;
        } else {
            inputWindow.value += number;
        }
    }
}

function operationButtonClick(operation) {
    let localOperationMemory = inputWindow.value;
    if (memoryNewNomber && memoryPandingOperation !== "=") {
        inputWindow.value = memoryCurrentNomber;
        return
    } else {
        memoryNewNomber = true;
    }
    if (memoryPandingOperation === "+") {
        memoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (memoryPandingOperation === "/") {
        memoryCurrentNumber /= parseFloat(localOperationMemory);
    } else if (memoryPandingOperation === "*") {
        memoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (memoryPandingOperation === "-") {
        memoryCurrentNumber -= parseFloat(localOperationMemory);
    } else {
        memoryCurrentNumber = parseFloat(localOperationMemory);
    }
    inputWindow.value = memoryCurrentNumber;
    memoryPandingOperation = operation;
}

function clickBackSpase() {
    let localMemory
    let newValue = inputWindow.value.split("");
    newValue.splice(-1, 1);
    localMemory = newValue.join("");
    inputWindow.value = localMemory;

}

function cleanerButtonClick() {
    inputWindow.value = "0";
    memoryNewNomber = false;
    memoryCurrentNumber = 0;
    memoryPandingOperation = "";
}