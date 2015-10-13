// var Color = ['LEFT-RED','DOWN-GREEN','RIGHT-BLUE'];

//Declare global variable:
var colPosition = 0;

var playerColor = {
  37:'red',
  40:'green',
  39:'blue',
  65:'red',
  83:'green',
  68:'blue'};

//Define new Array for columns
var Seq = function (column){
  this.time_limit = 0;
  this.column = column;
  this.sequence = [];
  for (var i=0; i<20; i++){
    this.sequence.push( this.randomColor() );
  };
};

Seq.prototype.randomColor = function(){
  var boxColor = ['red','green','blue','red','green','blue'];
  return boxColor[ Math.floor(Math.random()*6) ];
}

Seq.prototype.checkAnswer = function(color){
  if (color == this.sequence[0]){
    return this.sequence.shift();
  } else {
    return false;
  }
}

var Player = function (playerCol, colPosition){
  this.playerCol = playerCol;
  this.colPosition = colPosition;
  this.playerColor = [];
}
