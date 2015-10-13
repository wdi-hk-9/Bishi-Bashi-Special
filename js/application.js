$(document).ready(function(){

  //Initialize box colors
  var initializeBlocks = function(column){
    column.sequence.forEach(function(color, idx){
      $(column.columnID + " div").eq(-(idx+1)).css("background-color",color);
    });
  };

  //Handling Keyboard Input
  $(document).on("keydown", function(e){
    var keyColor = getColor(e.keyCode);
    var column = whichC(e.keyCode);
    var player = whichP(e.keyCode);

    if (!game.gameOver()){
      if (player.penalty === true){
        //shake box
      } else {
        if (keyColor && column.dropColumn(keyColor)) {
          $(column.columnID).find("div:last-child").remove();//remove column last div
          player.colPosition = player.colPosition+50;
          $(column.columnID).css("transform",'translateY('+player.colPosition+'px)'); //shift column down
          player.playerColor.push(keyColor); //update Array
          player.score(); //player score++
          game.gameOver();
          $(player.scoreID).html("Current score: "+player.playerScore);
        } else {
          $(column.columnID).find("div:last-child").effect({effect:"shake", duration: 600});
          player.penalty = true;
          setTimeout(function(){player.penalty = false;}, 500);
        }
      }
    } else {
      alert ("Game over! Winner is"+ game.winner);
    }
  });

  var getColor = function(keycode){
    return playerKeysColor[keycode];
  };

  var whichC = function(keycode){
    if (keycode >50) { return game.columnA; }
    else             { return game.columnB; }
  };

  var whichP = function(keycode){
    if (keycode > 50) { return game.playerA; }
    else              { return game.playerB; }
  };

  //Resizing Pikachus
  $(window).on("resize", function () {
    var pikaHeight1 = $('#Pikachu1').width() * 1.44;
    $('#Pikachu1').height(pikaHeight1+"");
  });

  $(window).on("resize", function () {
    var pikaHeight2 = $('#Pikachu2').width() * 1.44;
    $('#Pikachu2').height(pikaHeight2+"");
  });

  ////////////////////////////////////////////////////////////////////
  // GAME LOGIC
  ////////////////////////////////////////////////////////////////////

  game = new Game();



  initializeBlocks(game.columnA);
  initializeBlocks(game.columnB);

});