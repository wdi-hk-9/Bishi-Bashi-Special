$(document).ready(function(){

  // var Key = [37,40,39,65,83,68];

  //Initialize box colors
  var initializeBlocks = function(col){
    col.sequence.forEach(function(color, idx){
      $(col.column+" div").eq(-(idx+1)).css("background-color",color);
    });
  };

  //Handling Keyboard Input
  $(document).on("keydown", function(e){
    var keyColor = getColor(e.keyCode);
    var column = whichC(e.keyCode);
    var player = whichP(e.keyCode);
    if (keyColor && column.checkAnswer(keyColor)) {
      console.log('got it right!! ' + column.sequence.length + ' to go'); //remove console.log
      player.colPosition = player.colPosition+50;
      $(column.column).css("transform",'translateY('+player.colPosition+'px)');
      player.playerColor.push(keyColor)
    } else {
      console.log(column.sequence[0]);
    }
  });

  var getColor = function(keycode){
    return playerColor[keycode];
  };

  var whichC = function(keycode){
    if (keycode <50) {
      return colA;
    } else {
      return colB;
    }
  };

  var whichP = function(keycode){
    if (keycode < 50) {
      return playerA;
    } else {
      return playerB;
    }
  };

  //Resizing Pikachus
  $(window).on("resize", function () {
    var pikaHeight1 = $('#Pikachu1').width() * 1.44;
    $('#Pikachu1').height(pikaHeight1+"");
  })

    $(window).on("resize", function () {
    var pikaHeight2 = $('#Pikachu2').width() * 1.44;
    $('#Pikachu2').height(pikaHeight2+"");
  })

  //Init function
  var init = function(){
  colA = new Seq("#right-column");//create column colors
  console.log(colA.sequence);//remove later
  initializeBlocks(colA);//push column colors to css
  colB = new Seq("#left-column");
  initializeBlocks(colB);
  playerA = new Player("#right-column", colPosition)
  playerB = new Player("#left-column", colPosition)
}

  init();

});