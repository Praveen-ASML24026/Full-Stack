function toggleData(){
let user = JSON.parse(localStorage.getItem("user"));
let div = document.getElementById("userData");

if(div.innerHTML === ""){
div.innerHTML = `
<p><strong>Name:</strong> ${user.name}</p>
<p><strong>Email:</strong> ${user.email}</p>
`;
}else{
div.innerHTML = "";
}
}

function logout(){
window.location.href = "login.html";
}