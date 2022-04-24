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
  // selectSquare(){
  //   this.currentSquares.push();
  // }
}

var newPlayer = new Player(1, 'x');

// module.exports = Player;


//this will be for updating checkTurn
//this will be used for tracking the ID that player selects?
//

// Start with an array corresponding to squares
//[1, 2, 3, 4, 5, 6, 7, 8, 9]

//when a square is selected, it gets pushed into an array of player
// that selected it

//ex- if player 1 selects square three, var player 1 = [3] and
//gameboard = [1, 2, 4, 5, 6, 7, 8, 9]

//once one player has an array.length that is equal to 3, check win
// will need to run.

//for check turn, it needs to determine which player started.
// the player who starts will get the first turn. Basically its
//pretty easy to do the check turn if you just count total turns
//and evaluate if they are even or odd. if the turn count is odd, its
//player 1's turn. If its even, it is player 2's turn.
