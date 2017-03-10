function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  
//Show message that there is an error with the username...
{
if (userEntered.length < 6)
    { document.getElementById("usernameError").innerHTML="Username needs to be longer than 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    }

    else if (userEntered.length == passEntered.length)
        { document.getElementById("usernameError").innerHTML="Username cannot be the same as password";
        document.getElementById("usernameError").classList.remove("hidden-message");
        document.getElementById("usernameError").classList.add("shown-message");
        //Turn the username items red
        document.getElementById("usernameGroup").classList.add("has-error");
        }

else
{ document.getElementById("usernameError").innerHTML="Good username.";
document.getElementById("usernameError").classList.remove("hidden-message");
document.getElementById("usernameError").classList.add("shown-message");
//Turn the username items red
document.getElementById("usernameGroup").classList.add("has-success");
     }
}

{
if (passEntered.length < 6)
  //Show message that there is an error with the password...
{
  document.getElementById("passwordError").innerHTML="password needs to be longer than 6 characters";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
else if (passEntered.length > 20) {
  document.getElementById("passwordError").innerHTML="password needs to be shorter than 20 characters";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}

else if (passEntered.length == userEntered.length) {
  document.getElementById("passwordError").innerHTML="password cannot be the same as username";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}

else{
  document.getElementById("passwordError").innerHTML="good password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-success");
}
}
}
