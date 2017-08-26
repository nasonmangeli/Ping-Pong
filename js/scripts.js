//Back-end logic
var outPuts = [];

var pingpongFilter = function(numberEntered){
  for(var index = 1; index <= numberEntered; index += 1){
    if (index % 3 === 0 && index % 5 === 0) {
      outPuts.push("pingpong")
    } else if (index % 3 === 0) {
      outPuts.push("ping")
    } else if (index % 5 === 0) {
      outPuts.push("pong")
    } else {
      outPuts.push(index)
    }
  };
return outPuts;
};


//Front-end logic

$(document).ready(function(){
  $("#form").submit(function(event){

    var numberEntered = parseInt($("#number").val());

    pingpongFilter(numberEntered);

    outPuts.forEach(function (number) {
      $('ul.numberOutputs').append('<li>'+number+'</li>');
    });

    event.preventDefault();
  });
});
