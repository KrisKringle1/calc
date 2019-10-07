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
  inputtedNumber = inputtedNumber.find("p").text()
  stringNumberToPush = stringNumberToPush.concat(inputtedNumber);
  displayArray.push(inputtedNumber);
  updateDisplay();
  console.log(displayArray);


}
function operatorButtonHandler(event){
  console.log(event);
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
