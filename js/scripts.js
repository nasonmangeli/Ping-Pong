$(document).ready(function(){
  $("#numero").submit(function(event){
    var numberEntered = parseInt($("#number").val())
    var outPutnumber = [];
    for(var index = 1; index <= numberEntered; index +=1){
      if (index % 3 === 0) {
        outPutnumber.push("ping")
      } else if (index % 5 === 0) {
        outPutnumber.push("pong")
      } else if (index % 15 === 0) {
        outPutnumber.push(index)
      }

  }

    event.preventDefault();
  });
});

  $(".numberoutputs").append("<li>"+index+"</li>");

