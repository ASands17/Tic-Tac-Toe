var player1 = new Player;
var player2 = new Player;


class Game {
  constructor(gameboardNew){
   this.gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   this.turnCount = 0;
   this.player1 = new Player(player1.id, player1.token, player1.winCount);
   this.player2 = new Player(player2.id, player2.token, player2.winCount);
  }

  checkTurn(){
    if (this.turnCount % 2 === 0 || this.player1.previousWinner === false) {
      return player1
    } else {
      return player2
    }
  }

  trackGameboard(){
    this.turnCount ++

    if (this.gameboard.includes(this.playingplayer.id)){
      this.gameboard.splice([this.playingplayer.id], 1);
      this.playingplayer.currentSquares.push(this.playingPlayer.id)
    }

    this.playingPlayer.isTurn = false;
    this.nonplayingplayer.isTurn = true;
    //how to toggle this??
  }

  checkWin(){
    this.winningplayer.previousWinner = true;
  }

  checkDraw(){

  }

  resetGame(){

  }
}
