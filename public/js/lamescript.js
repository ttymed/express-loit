$(function(){
  
  // lame validation
  $('#submit').click(function(e){
    if($('#name').val().trim() == "" || $('#email').val().trim() == ""){
      alert("You must enter your name and email.");
      e.preventDefault();
    }
    function validateComment(){
    var Code = document.getElementById('comment').value;

    if( /[^a-zA-Z0-9\-\/]/.test( TCode ) ) {
        alert('Input is not alphanumeric');
        return false;
    }

    return true;     
}
	function validateName(){
    var NCode = document.getElementById('name').value;

    if( /[^a-zA-Z0-9\-\/]/.test( TCode ) ) {
        alert('Input is not alphanumeric');
        return false;
    }

    return true;     
}
	function validateEmail() {
		var eCode = document.getElementById('email').value;

		if( /[^a-zA-Z0-9\-\/]/.test( TCode ) ) {
        alert('Input is not alphanumeric');
        return false;
    }

    return true;     
}
  });

});