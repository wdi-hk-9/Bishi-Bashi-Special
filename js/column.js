//Define new Array for columns
var Column = function (columnID){
  this.columnID = columnID;
  this.sequence = [];
  for (var i=0 ; i<20; i++){
    this.sequence.push( this.randomColor() );
  };
};

Column.prototype.randomColor = function(){
  var boxColor = ['red','green','blue','red','green','blue'];
  return boxColor[ Math.floor(Math.random()*6) ];
};

Column.prototype.dropColumn = function(color){
  if (color == this.sequence[0]){
    return this.sequence.shift();
  } else {
    return false;
  }
};

//create columnA: ("#left-column");
//create columnB: ("#right-column");

