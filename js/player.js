var Player = function (playerColumn, scoreID){
  this.winner = null;
  this.playerColumn = playerColumn;
  this.scoreID = scoreID;
  this.colPosition = 0;
  this.penalty = false;
  this.playerColor = [];
  this.playerScore = 0;
  this.ended = false;
};

Player.prototype.score = function(){
  this.playerScore = this.playerColor.length;
  return this.playerScore;
};

//Player A: "#left-column", "#scoreA"
//Player B: "#right-column", "#scoreB"