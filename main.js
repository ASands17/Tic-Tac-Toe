//Query Selectors
var grid1 = document.querySelector("#s1");
var grid2 = document.querySelector("#s2");
var grid3 = document.querySelector("#s3");
var grid4 = document.querySelector("#s4");
var grid5 = document.querySelector("#s5");
var grid6 = document.querySelector("#s6");
var grid7 = document.querySelector("#s7");
var grid8 = document.querySelector("#s8");
var grid9 = document.querySelector("#s9");


//Event Listeners
grid1.addEventListener("click", getInfo);

grid2.addEventListener("click", saySup);


//Event Handlers
function sayHowdy(){
  console.log('Howdy!');
}

function saySup(){
  console.log('Sup?');
}

function getInfo(){
  console.log(event.target.id);
}
