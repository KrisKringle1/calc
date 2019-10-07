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
  console.log(event);
}

function applyClickHandlers(){
  $('#number-block > .number').on("click", numberButtonHandler);
  $('#operator-column > .operator').on("click", operatorButtonHandler);
  $('#equals').on("click", equalsButtonHandler);
}

function updateDisplay(){
  var displayText = displayArray.join("");
  $('#display-text').text(displayText);
}
