$(function(){

var numlength = 0;
var answer = null;
var oneNum = null;
var twoNum = null;
var opHold = null;


$("button.number").on("click", function(event){      /// grabbing all button element. Adds event listener
  event.preventDefault(); 
                                
  var node = event.currentTarget;                                            /// node clicked  (same as target)
  var elem = $(node);                                                       /// wrap the current target in jquery so it becomes object, we can get text out of it
  var text = elem.data("name");                                             /// now we can use the text method to get the text out of the jquery object
    if(opHold === null) {
      oneNum = oneNum + text;
    } else {
      twoNum = twoNum + text;
    }
    answer = answer + text;

    if(numlength <= 7) {                                                   
      numlength++;
      $(".screen-output").append(text);                                 
    } 
      return(".screen-output");
});


$("button.oprt").on("click", function(event){      /// grabbing all button element. Adds event listener
  event.preventDefault(); 

  var node = event.currentTarget;                                            /// node clicked  (same as target)
  var elem = $(node);                                                       /// wrap the current target in jquery so it becomes object, we can get text out of it
  var text = elem.data("name");                                             /// now we can use the text method to get the text out of the jquery object

  answer = answer + text;
  opHold = text;

});


$("button.equals").on("click", function(event){      /// grabbing all button element. Adds event listener
  event.preventDefault(); 
  var node = event.currentTarget;                                            /// node clicked  (same as target)
  var elem = $(node);                                                       /// wrap the current target in jquery so it becomes object, we can get text out of it
  var text = elem.data("name");                                             /// now we can use the text method to get the text out of the jquery object

  eval(answer); 
  $(".screen-output").text(answer); 
});


$("button.clr").on("click", function(event){      /// grabbing all button element. Adds event listener
  event.preventDefault(); 
                                ///clear out display and my string
  var node = event.currentTarget;                                            /// node clicked  (same as target)
  var elem = $(node);                                                       /// wrap the current target in jquery so it becomes object, we can get text out of it
  var text = elem.data("name");                                             /// now we can use the text method to get the text out of the jquery object

  $(".screen-output").text(0); 
  answer = null;
  oneNum = null;
  twoNum = null;
});


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







//need to clear display and set to 0 when clear selected