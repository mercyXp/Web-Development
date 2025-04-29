//How to accept user input

//1. THE EASY WAY: window prompt
//2. THE PROFESSIONAL WAY: HTML textbox

let username = window.prompt("What is your username?");
console.log(username);



let firstName, lastName;

document.getElementById("mySubmit").onclick = function(){
    firstName = document.getElementById("fname").value; 
    document.getElementById("myH1").textContent = `Hello ${firstName}`
}