class Game {
  constructor(gameboardNew){
   this.gameboard = [1, 2, 3,
                    4, 5, 6,
                    7, 8, 9];

   this.turnCount = 0;
   this.player1 = new Player(1, 'x');
   this.player2 = new Player(2, 'O');
   this.currentPlayer = this.player1;
  }

  toggleTurn() {
    if (this.currentPlayer === this.player1){
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  //I feel really unsure about this part/ how to do this

  trackGameboard(){
    this.turnCount ++

    if (this.gameboard.includes(this.player1.id)){
      this.gameboard.splice([this.player1.id], 1);
      this.playingplayer.currentSquares.push(this.player1.id)
    }

    this.currentPlayer.isTurn = false;
    //how to toggle this??
  }

  checkWin(){
    // var horizontalWin1 = [1, 2, 3];
    // var horizontalWin2 = [4, 5, 6];
    // var horizontalWin3 = [7, 8, 9];

    var horizontalWins = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    // var verticalWin1 = [1, 4, 7];
    // var verticalWin2 = [2, 5, 8];
    // var verticalWin3 = [3, 6, 9];

    var verticalWins = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

    // var diagonalWin1 = [1, 5, 9];
    // var diagonalWin2 = [7, 5, 3];

    var diagonalWins = [[1, 5, 9], [3, 5, 7]]

    var possibleWins = [horizontalWins, verticalWins, diagonalWins];

    for (var i = 0; i < possibleWins.length; i++) {
      if (this.player1.currentSquares.includes(possible.wins[i])) {
        this.player1.winCount ++
        this.player1.isWinner = true;
        this.player1.previousWinner = true;
      }
    }
  }

  //This should work okay-- basically just evaluates to see if there is a
  //winner, and if there isn't, it will return true.

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
