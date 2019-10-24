$(document).ready(initializeApp);

var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";
var calculationResult = null;

function initializeApp() {
	applyClickHandlers();
}

//this function takes the inputted number and displays in in the display area and updates the display
function numberButtonHandler(event) {
	var inputtedNumber = "";
	inputtedNumber = $(event.currentTarget);
	inputtedNumber = inputtedNumber.find("p").text();
	stringNumberToPush = stringNumberToPush.concat(inputtedNumber);
	displayArray.push(inputtedNumber);
	updateDisplay();
}
//this function is what allows you to add a decimal to the equation and updates hte display
function decimalHandler(event) {
	var inputtedDecimal = "";
	inputtedDecimal = $(event.currentTarget);
	inputtedDecimal = inputtedDecimal.find("p").text();
	displayArray.push(inputtedDecimal);
	stringNumberToPush += inputtedDecimal;

	updateDisplay();
}
//this function allows you to enter the operator button in the display array and also has functionality that allows youto enter multiple operators withotu an error
function operatorButtonHandler(event) {
	var inputtedOperator = "";
	inputtedOperator = $(event.currentTarget);
	inputtedOperator = inputtedOperator.find("p").text();
	//this is where last input is declared and last op is used
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
//this function allows you to use the equals button, calculates math when you push it, and updates the display with the result
function equalsButtonHandler(event) {
	calculationArray.push(stringNumberToPush);
	stringNumberToPush = "";
	displayArray = [];
	var answer = multipleOperators();
	displayArray.push(answer);
	updateDisplay();
}
//this is the function taht applies click handlers to all of the inputs
function applyClickHandlers() {
	$("#number-block > .number").on("click", numberButtonHandler);
	$("#operator-column > .operator").on("click", operatorButtonHandler);
	$("#equals").on("click", equalsButtonHandler);
	$("#ac-button").on("click", allClear);
	$("#decimal").on("click", decimalHandler);
}
//this function displays teh numbers in the display area
function updateDisplay() {
	var displayText = displayArray.join("");
	$("#display-text").text(displayText);
}
//this function does math depending on the operator
function calculate(num1, num2, operator) {
	var number1 = parseFloat(num1);
	var number2 = parseFloat(num2);
	var result = null;
	//switch statement for operators
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
//this function clears the display aray and updates it
function allClear() {
	displayArray = [];
	calculationArray = [];
	updateDisplay();
}
//this function is what allows you to enter 2+2+2 to equal 6
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

//this is a function that checks if  the last inputted item is an operator

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
