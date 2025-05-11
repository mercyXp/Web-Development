//D0M = Document Object Model is an
//      Object{} represents the page you see on the web browser
//      and provides you with an API to interact with it.

const username = "Mercy"; //you can add/remove your name to test the code

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

//changing the mode of the document
 let para = document.getElementsByTagName("p");
console.log(para);


