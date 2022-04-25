var game = new Game();


//Query Selectors
var player1Win = document.querySelector(".turn-text");
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
grid1.addEventListener("click", function(){
  addToken(1, "s1");
});
grid2.addEventListener("click", function(){
  addToken(2, "s2");
});
grid3.addEventListener("click", function(){
  addToken(3, "s3");
});
grid4.addEventListener("click", function(){
  addToken(4, "s4");
});
grid5.addEventListener("click", function(){
  addToken(5, "s5");
});
grid6.addEventListener("click", function(){
  addToken(6, "s6");
});
grid7.addEventListener("click", function(){
  addToken(7, "s7");
});
grid8.addEventListener("click", function(){
  addToken(8, "s8");
});
grid9.addEventListener("click", function(){
  addToken(9, "s9");
});


//Event Handlers

function addToken(squareSelected, selector){
  if (game.isWon === true) {
    alert(`${game.currentPlayer.token} is the victor!!!`);
    return 'Game has been won';
  }
  else if (game.currentPlayer === game.player2) {
    document.querySelector(`.${selector}-o`).style.display = "block"
  } else if (game.currentPlayer === game.player1) {
    document.querySelector(`.${selector}-x`).style.display = "block"
  }
  game.trackGameboard(squareSelected);
}

//DOM display functions

function displayP2() {
  if (this.currentPlayer === this.player1){
    document.querySelector(".turn-text2").style.display = "block"
    document.querySelector(".turn-text1").style.display = "none"
  }
}

function displayP1() {
  if (this.currentPlayer === this.player2){
    document.querySelector(".turn-text1").style.display = "block"
    document.querySelector(".turn-text2").style.display = "none"
  }
}

function displayWinner() {
  document.querySelector(`.turn-text${game.currentPlayer.id}`).innerHTML=(`${game.currentPlayer.token} is the victor!!!`)
  document.querySelector(".player-1-count").innerHTML=(`Player 1 win count: ${game.player1.winCount}`)
  document.querySelector(".player-2-count").innerHTML=(`Player 2 win count: ${game.player2.winCount}`)
}
