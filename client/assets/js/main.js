$(document).ready(initializeApp)

var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";
var calculationResult = null;

function initializeApp(){

  applyClickHandlers()
}

function numberButtonHandler(event){
  var inputtedNumber = "";
  inputtedNumber = $(event.currentTarget);
  inputtedNumber = inputtedNumber.find("p").text();
  stringNumberToPush = stringNumberToPush.concat(inputtedNumber);
  displayArray.push(inputtedNumber);

  updateDisplay();


}
function operatorButtonHandler(event){
  var inputtedOperator = "";
  inputtedOperator = $(event.currentTarget);
  inputtedOperator = inputtedOperator.find("p").text();
  displayArray.push(inputtedOperator);
  calculationArray.push(stringNumberToPush);
  calculationArray.push(inputtedOperator);
  stringNumberToPush = "";
  updateDisplay();
console.log(calculationArray);
}
function equalsButtonHandler(event){
  calculationArray.push(stringNumberToPush);
  stringNumberToPush = "";
  displayArray = [];

  var answer = calculate(calculationArray[0], calculationArray[2], calculationArray[1]);

  displayArray.push(answer);
  updateDisplay();
}

function applyClickHandlers(){
  $('#number-block > .number').on("click", numberButtonHandler);
  $('#operator-column > .operator').on("click", operatorButtonHandler);
  $('#equals').on("click", equalsButtonHandler);
  $('#ac-button').on("click", allClear);
}

function updateDisplay(){
  var displayText = displayArray.join("");
  $('#display-text').text(displayText);
}

function calculate(num1, num2, operator){
  var number1 = parseFloat(num1);
  var number2 = parseFloat(num2);
  var result = null;

  switch(operator){
    case '+':
      result =  number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '/':
      result = number1 / number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    // default:
    //   result = 'not recognized';

  }
  return result;

}

function allClear(){


  displayArray = [];
  calculationArray = [];
  updateDisplay();
}
