$(document).ready(function(){
  $("#numero").submit(function(event){
    var numberEntered = parseInt($("#number").val())
    var outPutnumber = [];
    for(var index = 1; index <= numberEntered; index ++){
      if (index % 3 === 0 && index % 5 === 0) {
        outPutnumber.push("pingpong")
      } else if (index % 3 === 0) {
        outPutnumber.push("ping")
      } else if (index % 5 === 0) {
        outPutnumber.push("pong")
      } else {
        outPutnumber.push(index)
      }
    };
    console.log(outPutnumber);
    $('ul.numberOutputs').empty();
    outPutnumber.forEach(function (number) {
      $('ul.numberOutputs').append('<li>'+number+'</li>');
    });
    event.preventDefault();
  });
});
