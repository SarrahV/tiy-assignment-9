$(function(){

var numlength = 0;
var oneNum = "";
var twoNum = "";
var opHold = "";
var shouldClear = false;



$("button.number").on("click", function(event){      

                                
  var node = event.currentTarget;                                            
  var elem = $(node);                                                       
  var text = elem.data("name").toString();                                             

    if(opHold === "") {
      
      oneNum = oneNum + text;
    } 

    else {
      
      twoNum = twoNum + text;
    }

    if(numlength <= 7) {                                                   
      numlength++;
    
    if(shouldClear) {
        $(".screen-output").text("");
        shouldClear = false;
    }
      $(".screen-output").append(text);                                 
    } 
      return(".screen-output");
  
});


$("button.oprt").on("click", function(event){     

  var node = event.currentTarget;                                            
  var elem = $(node);                                                       
  var text = elem.data("name");
  turnRed(text);                                             
  shouldClear = true;

  // answer = answer + text;
  
  opHold = text;

});


$("button.equals").on("click", function(event){      

  var node = event.currentTarget;                                            
  var elem = $(node);                                                       
  var text = elem.data("name");                                           

  
  var answer = createAns();
  $(".screen-output").text(answer); 
});


$("button.clear-me").on("click", function(event){     
                                
  var node = event.currentTarget;                                            
  var elem = $(node);                                                       
  var text = elem.data("name"); 
 
  numlength = 0;
  oneNum = "";
  twoNum = "";
  opHold = "";                                      

  $(".screen-output").text(""); 
 
}); 

var createAns = function(){
  var numberOne = Number(oneNum);
  var numberTwo = Number(twoNum);

 switch(opHold) {
  case "/":
    return numberOne / numberTwo;
  break;
  case "+":
    return numberOne + numberTwo;
  break;
  case "*":
    return numberOne * numberTwo;
  break;
  case "-":
    return numberOne - numberTwo;
  break;

 }
}


var turnRed = function(text){                                   

  if(text === "/") {
    $(".op1").addClass("chosen");
  };
  if(text === "*") {
    $(".op2").addClass("chosen");
  };
  if(text === "-") {
    $(".op3").addClass("chosen");
  };
  if(text === "+") {
    $(".op4").addClass("chosen");
  };
 
 };

});







