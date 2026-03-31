document.getElementById("loginForm").addEventListener("submit", function(e){
e.preventDefault();

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

let storedUser = JSON.parse(localStorage.getItem("user"));

if(storedUser && storedUser.email === email && storedUser.password === password){
alert("Login Successful");
window.location.href = "dashboard.html";
}else{
alert("Invalid Credentials");
}
});