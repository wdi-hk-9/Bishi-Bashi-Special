// var Color = ['LEFT-RED','DOWN-GREEN','RIGHT-BLUE'];

var boxColor = ['red','green','blue'];

//Define new Array for P1 & P2 columns
var NewSeq = function (){

  this.sequence = [];
  for (var i=0; i<20; i++){
    this.sequence.push( this.randomColor() );
  };

  this.time_limit = 0;
};

//Define new methods for P1 and P2 Arrays

NewSeq.prototype.randomColor = function(){
  return boxColor[ Math.floor(Math.random()*3) ];
}

NewSeq.prototype.checkAnswer = function(color){
  if (color == this.sequence[0]){
    return this.sequence.shift();
  } else {
    return false;
  }
}
