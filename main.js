var game = new Game();

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
  if (game.selectedSquares.includes(squareSelected)) {
    alert('This square has been chosen. Please try again!');
    return 'Try again';
  }
  if (game.isWon) {
    alert(`${game.currentPlayer.token} is the victor!!!`);
    return;
  }
  if (game.currentPlayer === game.player2 && !game.selectedSquares.includes(squareSelected)) {
    document.querySelector(`.s${squareSelected}-o`).style.display = "block"
  } else if (game.currentPlayer === game.player1 && !game.selectedSquares.includes(squareSelected)) {
    document.querySelector(`.s${squareSelected}-x`).style.display = "block"
  }
  game.trackGameboard(squareSelected);
  winnerFunction();
  displayDraw();
  resetGameFunction();
  changePlayerOnDOM();
}

//DOM display functions
function winnerFunction() {
  if (game.isWon === true) {
    console.log('check1');
    displayWinner();
    game.toggleTurn();
  }
}

function changePlayerOnDOM() {
  if(game.currentPlayer === game.player2) {
    displayP2();
  } else {
    displayP1();
  }
}

function resetGameFunction() {
  if (game.isWon === true){
  game.resetGame();
  resetGameDisplay();
  }
}

function displayP2() {
    document.querySelector(".turn-text2").style.display = "block"
    document.querySelector(".turn-text1").style.display = "none"
}

function displayP1() {
    document.querySelector(".turn-text1").style.display = "block"
    document.querySelector(".turn-text2").style.display = "none"
}

function displayWinner() {
  if (game.player1.isWinner === true) {
    document.querySelector(".turn-text-winner1").style.display = "block";
  }
  else if (game.player2.isWinner === true) {
  document.querySelector(".turn-text-winner2").style.display = "block";
  }
  document.querySelector(".player-1-count").innerHTML=(`Player 1 win count: ${game.player1.winCount}`)
  document.querySelector(".player-2-count").innerHTML=(`Player 2 win count: ${game.player2.winCount}`)
}

function displayDraw() {
  if (game.draw === true){
  document.querySelector(".turn-text-draw").style.display = "block";
  resetGameDisplay();
  game.resetGame();
  }
}

function hideWinner1() {
  if (document.querySelector(".turn-text-winner1").style.display = "block") {
    document.querySelector(".turn-text-winner1").style.display = "none";
  }
}

function hideWinner2() {
  if (document.querySelector(".turn-text-winner2").style.display = "block") {
    document.querySelector(".turn-text-winner2").style.display = "none";
  }
}

function hideDraw() {
  if (document.querySelector(".turn-text-draw").style.display = "block") {
    document.querySelector(".turn-text-draw").style.display = "none";
  }
}

function displayBlankGrid(){
  for (var i = 1; i < 10; i++) {
    document.querySelector(`.s${i}-x`).style.display = "none"
    document.querySelector(`.s${i}-o`).style.display = "none"
  }
}

function resetGameDisplay(){
  setTimeout(newGame, 4000);
}

function newGame(){
 hideWinner1();
 hideWinner2();
 hideDraw();
 displayBlankGrid();
}
