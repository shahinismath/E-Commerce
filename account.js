function checkCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "admin" && password === "password") {
      window.alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Please try again.");
    }
  }


  