$(document).ready(initializeApp);

var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";
var calculationResult = null;

function initializeApp() {
	applyClickHandlers();
}

function numberButtonHandler(event) {
	var inputtedNumber = "";
	inputtedNumber = $(event.currentTarget);
	inputtedNumber = inputtedNumber.find("p").text();
	stringNumberToPush = stringNumberToPush.concat(inputtedNumber);
	displayArray.push(inputtedNumber);
	updateDisplay();
}

function decimalHandler(event) {
	var inputtedDecimal = "";
	inputtedDecimal = $(event.currentTarget);
	inputtedDecimal = inputtedDecimal.find("p").text();
	displayArray.push(inputtedDecimal);
	stringNumberToPush += inputtedDecimal;

	updateDisplay();
}

function operatorButtonHandler(event) {
	var inputtedOperator = "";
	inputtedOperator = $(event.currentTarget);
	inputtedOperator = inputtedOperator.find("p").text();
	// displayArray.push(inputtedOperator);
	// calculationArray.push(stringNumberToPush);
	// calculationArray.push(inputtedOperator);
	// stringNumberToPush = "";
	// updateDisplay();
	var lastInput = "";
	lastInput = displayArray[displayArray.length - 1];
	if (isAnOp(lastInput)) {
		calculationArray.pop();
		calculationArray.push(inputtedOperator);
		displayArray.push(inputtedOperator);
		updateDisplay();
	} else {
		displayArray.push(inputtedOperator);
		calculationArray.push(stringNumberToPush);
		calculationArray.push(inputtedOperator);
		stringNumberToPush = "";
		updateDisplay();
	}
}

function equalsButtonHandler(event) {
	calculationArray.push(stringNumberToPush);
	stringNumberToPush = "";
	displayArray = [];
	var answer = multipleOperators();
	displayArray.push(answer);
	updateDisplay();
}

function applyClickHandlers() {
	$("#number-block > .number").on("click", numberButtonHandler);
	$("#operator-column > .operator").on("click", operatorButtonHandler);
	$("#equals").on("click", equalsButtonHandler);
	$("#ac-button").on("click", allClear);
	$("#decimal").on("click", decimalHandler);
}

function updateDisplay() {
	var displayText = displayArray.join("");
	$("#display-text").text(displayText);
}

function calculate(num1, num2, operator) {
	var number1 = parseFloat(num1);
	var number2 = parseFloat(num2);
	var result = null;

	switch (operator) {
		case "+":
			result = number1 + number2;
			break;
		case "-":
			result = number1 - number2;
			break;
		case "/":
			result = number1 / number2;
			break;
		case "*":
			result = number1 * number2;
			break;
	}
	return result;
}

function allClear() {
	displayArray = [];
	calculationArray = [];
	updateDisplay();
}

function multipleOperators() {
	var number1 = calculationArray[0];
	var operator = calculationArray[1];
	var number2 = calculationArray[2];
	var answer = calculate(number1, number2, operator);
	console.log(answer);
	calculationArray = calculationArray.slice(3);
	while (calculationArray.length >= 2) {
		answer = calculate(answer, calculationArray[1], calculationArray[0]);
		calculationArray = calculationArray.slice(2);
	}
	return answer;
}

function isAnOp(lastInput) {
	if (
		lastInput === "+" ||
		lastInput === "-" ||
		lastInput === "*" ||
		lastInput === "/"
	) {
		return true;
	}
}
