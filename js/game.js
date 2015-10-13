// var Color = ['LEFT-RED','DOWN-GREEN','RIGHT-BLUE'];

//Declare global variable:
var playerKeysColor = {
  37:'red',
  40:'green',
  39:'blue',
  65:'red',
  83:'green',
  68:'blue'};

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
    alert ("Game over! Winner is"+ game.winner);
    return true;
  } else if (this.playerB.playerScore == 20 && this.playerA.playerScore<20){
    this.winner = "Player B";
    alert ("Game over! Winner is"+ game.winner);
    return true
  } else {
    return false;
  }
};