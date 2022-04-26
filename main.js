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
  addToken(1);
});
grid2.addEventListener("click", function(){
  addToken(2);
});
grid3.addEventListener("click", function(){
  addToken(3);
});
grid4.addEventListener("click", function(){
  addToken(4);
});
grid5.addEventListener("click", function(){
  addToken(5);
});
grid6.addEventListener("click", function(){
  addToken(6);
});
grid7.addEventListener("click", function(){
  addToken(7);
});
grid8.addEventListener("click", function(){
  addToken(8);
});
grid9.addEventListener("click", function(){
  addToken(9);
});


//Event Handlers

function addToken(squareSelected){
  if (game.isWon === true) {
    alert(`${game.currentPlayer.token} is the victor!!!`);
    return 'Game has been won';
  } else if (game.selectedSquares.includes(squareSelected)) {
    alert('This square has been chosen. Please try again!');
    return 'Try again';
  }

  if (game.currentPlayer === game.player2 && !game.selectedSquares.includes(squareSelected)) {
    document.querySelector(`.s${squareSelected}-o`).style.display = "block"
  } else if (game.currentPlayer === game.player1 && !game.selectedSquares.includes(squareSelected)) {
    document.querySelector(`.s${squareSelected}-x`).style.display = "block"
  }
  game.trackGameboard(squareSelected);

  //check draw/win?
}


//DOM display functions

function displayP2() {
  if (game.currentPlayer === game.player1){
    document.querySelector(".turn-text2").style.display = "block"
    document.querySelector(".turn-text1").style.display = "none"
  }
}

function displayP1() {
  if (game.currentPlayer === game.player2){
    document.querySelector(".turn-text1").style.display = "block"
    document.querySelector(".turn-text2").style.display = "none"
  }
}

function displayWinner() {
  document.querySelector(`.turn-text${game.currentPlayer.id}`).innerHTML=(`${game.currentPlayer.token} is the victor!!!`)
  document.querySelector(".player-1-count").innerHTML=(`Player 1 win count: ${game.player1.winCount}`)
  document.querySelector(".player-2-count").innerHTML=(`Player 2 win count: ${game.player2.winCount}`)
}

function displayBlankGrid(){
  for (var i = 1; i < game.gameboard.length + 1; i++) {
    document.querySelector(`.s${i}-x`).style.display = "none"
    document.querySelector(`.s${i}-o`).style.display = "none"
  }
}

function resetDisplayWinner() {
  document.querySelector(".turn-text1").innerHTML=("It's player X's turn!")
  document.querySelector(".turn-text2").innerHTML=("It's player O's turn!")
}
// function displayStartingPlayer(){
//  game.toggleTurn();
// }
