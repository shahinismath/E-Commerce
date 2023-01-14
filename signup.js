function signUp(){
    var username = document.getElementById("username").value;
    var email= document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(username.length != 0 && email.lenght != 0 && password.lenghtm != 0)
    {
        window.alert("Welcome to Zipara  " + username);
        window.location.href = "index.html";

    }else{
        alert("Enter your details properly")
    }

}