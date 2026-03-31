document.getElementById("registerForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

// Simple validation
if(password.length < 6){
alert("Password must be at least 6 characters");
return;
}

let user = { name, email, password };
localStorage.setItem("user", JSON.stringify(user));

alert("Registered Successfully");
window.location.href = "login.html";
});