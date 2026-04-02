
function changebgColor() {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
}


function togglepsw() {
    let pass = document.getElementById("password");
    pass.type = (pass.type === "password") ? "text" : "password";
}


let images = [
    "images/luffybounty.jpeg",
    "images/luffy.jpeg",
    "images/nami.jpeg",
    "images/chopperbounty.jpeg"
];

let index = 0;

function showImage() {
    document.getElementById("Slider").src = images[index];
}

function next() {
    index = (index + 1) % images.length;
    showImage();
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

let count = 0;

function increment() {
    count++;
    document.getElementById("count").textContent = count;
}

function decrement() {
    count--;
    document.getElementById("count").textContent = count;
}

document.addEventListener("DOMContentLoaded", function () {

   
    document.getElementById("ipbox").addEventListener("input", function () {
        document.getElementById("op").textContent = this.value;
    });

    
    showImage();
});