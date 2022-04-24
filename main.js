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
grid1.addEventListener("click", showToken1);
grid2.addEventListener("click", showToken2);
grid3.addEventListener("click", showToken3);
grid4.addEventListener("click", showToken4);
grid5.addEventListener("click", showToken5);
grid6.addEventListener("click", showToken6);
grid7.addEventListener("click", showToken7);
grid8.addEventListener("click", showToken8);
grid9.addEventListener("click", showToken9);


//Event Handlers
function getInfo(){
  console.log(event.target.id);
}

function showToken1() {
  document.querySelector('.token11').style.display = "block"
  document.querySelector('.token12').style.display = "block"
}
function showToken2() {
  document.querySelector('.token21').style.display = "block"
  document.querySelector('.token22').style.display = "block"
}
function showToken3() {
  document.querySelector('.token31').style.display = "block"
  document.querySelector('.token32').style.display = "block"
}
function showToken4() {
  document.querySelector('.token41').style.display = "block"
  document.querySelector('.token42').style.display = "block"
}
function showToken5() {
  document.querySelector('.token51').style.display = "block"
  document.querySelector('.token52').style.display = "block"
}
function showToken6() {
  document.querySelector('.token61').style.display = "block"
  document.querySelector('.token62').style.display = "block"
}
function showToken7() {
  document.querySelector('.token71').style.display = "block"
  document.querySelector('.token72').style.display = "block"
}
function showToken8() {
  document.querySelector('.token81').style.display = "block"
  document.querySelector('.token82').style.display = "block"
}
function showToken9() {
  document.querySelector('.token91').style.display = "block"
  document.querySelector('.token92').style.display = "block"
}
