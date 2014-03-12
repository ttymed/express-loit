$(function(){
  
  // lame validation
  $('#submit').click(function(e){
    if($('#name').val().trim() == "" || $('#email').val().trim() == ""){
      alert("You must enter your name and email.");
      e.preventDefault();
    }
  });

});