$(document).ready(function(){
  $("#numero").submit(function(event){
    var numberEntered = parseInt($("#number").val())
    var outPutnumber = [];
    for(var index = 1; index <= numberEntered; index +=1){
      alert(index);


  };
    event.preventDefault();
  });
});
