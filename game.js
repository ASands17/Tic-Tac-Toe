class Game {
  constructor(player1, player2){
   this.gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   this.turnCount = 0;
   this.player1 = new Player(1, "X");
   this.player2 = new Player(2, "O");
   this.currentPlayer = this.player1;
   this.selectedSquares = [];
   this.isWon = false;
  }

  toggleTurn() {
    if (this.currentPlayer === this.player1){
      displayP2();
      this.currentPlayer = this.player2;
    } else {
      displayP1();
      this.currentPlayer = this.player1;
    }
  }

  trackGameboard(selectedSquare){
    this.turnCount ++
    for (var i = 0; i < this.gameboard.length; i++) {
      if (this.gameboard[i] === selectedSquare) {
        this.selectedSquares.push(selectedSquare)
        this.currentPlayer.currentSquares.push(selectedSquare)
        this.gameboard.splice(i, 1);
      }
    }
    this.checkWin();
    this.checkDraw();
    this.toggleTurn();
  }

  checkWin(){
   var possibleWins = [/[123]/g, /[456]/g, /[789]/g, /[147]/g, /[258]/g, /[369]/g, /[159]/g, /[357]/g];
   var playerSquares = this.currentPlayer.currentSquares.toString();

    for (var i = 0; i < possibleWins.length; i++) {
      var matches = playerSquares.match(possibleWins[i])
      console.log(matches);
      if (matches !== null && matches.length === 3){
        console.log('1')
        this.updateWinner();
        console.log('WINNER!');
        return true;
      }
    }
  }

  updateWinner() {
    console.log('WTF')
    this.currentPlayer.winCount ++;
    this.currentPlayer.isWinner = true;
    this.isWon = true;
    this.currentPlayer.previousWinner = true;
    displayWinner();
    // this.toggleTurn();
    this.resetGame();
    this.toggleTurn();
  }

  checkDraw(){
    if (this.turnCount === 9 && this.isWon === false) {
      document.querySelector(`.turn-text${this.currentPlayer.id}`).innerHTML=(`IT'S A DRAW!`);
      this.resetGame();
      this.toggleTurn();
      return true;
    }
  }

  resetGame(){
    setTimeout(this.resetGameboard.bind(this) , 4000);
  }

  resetGameboard() {
    this.gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.turnCount = 0;
    this.selectedSquares = [];
    this.player1.currentSquares = [];
    this.player2.currentSquares = [];
    this.player1.isWinner = false;
    this.player2.isWinner = false;
    game.isWon = false;
    this.toggleTurn();
    resetDisplayWinner();
    displayBlankGrid();
    // displayStartingPlayer();
  }
}
