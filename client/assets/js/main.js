$(document).ready(initializeApp)

var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";
var calculationResult = null;

function initializeApp(){

  applyClickHandlers()
}

function numberButtonHandler(event){
  console.log(event);
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
