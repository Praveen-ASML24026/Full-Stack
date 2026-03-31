function toggleData(){
let dataDiv = document.getElementById("userData");
let user = JSON.parse(localStorage.getItem("user"));

if(dataDiv.innerHTML === ""){
dataDiv.innerHTML = `
<p><strong>Name:</strong> ${user.name}</p>
<p><strong>Email:</strong> ${user.email}</p>
`;
}else{
dataDiv.innerHTML = "";
}
}

function logout(){
window.location.href = "login.html";
}