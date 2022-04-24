class Game {
  constructor(player1, player2){
   this.gameboard = [1, 2, 3,
                    4, 5, 6,
                    7, 8, 9];

   this.turnCount = 0;
   this.player1 = new Player(1, "x");
   this.player2 = new Player(2, "o");
   this.currentPlayer = this.player1;
   this.selectedSquares = [];
  }

  toggleTurn() {
    if (this.currentPlayer === this.player1){
      this.currentPlayer = this.player2;
    } else {
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
    this.toggleTurn();
  }

  checkWin(){
   var possibleWins = [/[123]/g, /[456]/g, /[789]/g, /[147]/g, /[258]/g, /[369]/g, /[159]/g, /[357]/g];
   var playerSquares = this.currentPlayer.currentSquares.toString();

    for (var i = 0; i < possibleWins.length; i++){
      var matches = playerSquares.match(possibleWins[i])
      console.log(matches, possibleWins[i])
    }
    if (matches.length === 3) {
      return matches;
    }
  }

  checkDraw(){
    if (this.turnCount === 9 && this.currentPlayer.isWinner === false) {
      return true;
    } else {
      return false;
    }
  }

  resetGame(){

  }
}
