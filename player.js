class Player {
  constructor(id, token, winCount) {
    this.id = id;
    this.token = token;
    this.winCount = winCount;
  }
  increaseWins(){
    this.winCount++
  }
}
