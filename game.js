class Game {
  constructor(player1, player2){
   this.gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   this.turnCount = 0;
   this.player1 = new Player(1, "X");
   this.player2 = new Player(2, "O");
   this.currentPlayer = this.player1;
   this.selectedSquares = [];
  }

  toggleTurn() {
    if (this.currentPlayer === this.player1){
      this.currentPlayer = this.player2;
      document.querySelector(".turn-text2").style.display = "block"
      document.querySelector(".turn-text1").style.display = "none"
    } else {
      document.querySelector(".turn-text1").style.display = "block"
      document.querySelector(".turn-text2").style.display = "none"
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
        this.updateWinner();
        console.log('WINNER!');
        return matches;
      }
    }
  }

  updateWinner() {
    this.currentPlayer.winCount ++;
    this.isWinner = true;
    document.querySelector(`.turn-text${this.currentPlayer.id}`).innerHTML=(`${this.currentPlayer.token} is the victor!!!`)
    document.querySelector(".win-display-1").innerHTML=(`Player 1 win count: ${this.player1.winCount}`)
    document.querySelector(".win-display-2").innerHTML=(`Player 2 win count: ${this.player2.winCount}`)
    this.toggleTurn();
    this.resetGame();
  }

  checkDraw(){
    if (this.turnCount === 9 && this.currentPlayer.isWinner === false) {
      document.querySelector(`.turn-text${this.currentPlayer.id}`).innerHTML=(`IT'S A DRAW!`);
      this.resetGame();
      this.toggleTurn();
      return true;
    }
  }

  resetGame(){
    var resetTimeout = setTimeout(this.resetGameboard.bind(this) , 8000);
  }

  resetGameboard() {
    this.gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.turnCount = 0;
    this.selectedSquares = [];
  }
}
