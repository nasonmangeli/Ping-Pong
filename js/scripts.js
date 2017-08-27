//Back-end logic

//PingPongfilter function with array as return
var pingpongFilter = function(numberEntered){
  var outPuts =[];
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
    event.preventDefault();

    //Get value of numberEntered
    var numberEntered = parseInt($("#number").val());
    //Clear input field and ul#output before append
    $('#number').val("");
    $('ul').empty();


    //Call the function pingpongFilter and append each element of its resulting array to ul with id="output" tag
    pingpongFilter(numberEntered).forEach(function(number) {
      $('#output').append('<li>'+number+'</li>')
    })

      // $('#number').val("");
      // $('ul').empty();
      // for (var i = 0; i < array.length; i++) {
      //   $('ul').append('<li>'+output+'</li>')
      // }


  });
});
