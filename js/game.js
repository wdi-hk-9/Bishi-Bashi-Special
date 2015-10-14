// var Color = ['LEFT-RED','DOWN-GREEN','RIGHT-BLUE'];

//Declare global variable:
var playerKeysColor = {
  188:'red',
  190:'green',
  191:'blue',
  65:'red',
  83:'green',
  68:'blue'
};

var Game = function (){
  this.playerA = new Player("#left-column","#scoreA");
  this.columnA    = new Column("#left-column");

  this.playerB = new Player("#right-column", "#scoreB");
  this.columnB    = new Column("#right-column");

  this.winner  = null;
  this.time_limit = 0;
};

//check Gameover
Game.prototype.gameOver = function (){
  if (this.playerA.playerScore == 20 && this.playerB.playerScore <20){
    this.winner = "Player A";
    return true;
  } else if (this.playerB.playerScore == 20 && this.playerA.playerScore<20){
    this.winner = "Player B";
    return true
  } else {
    return false;
  }
};