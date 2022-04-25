class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.winCount = 0;
    this.currentSquares = [];
    this.previousWinner;
    this.isTurn;
    this.isWinner = false;
  }
  increaseWins(){
    if (this.isWinner) {
      this.winCount++
    }
  }
}
