$(document).ready(function(){

//Buzz -register sounds and error alert
  var bgmusic = new buzz.sound("./sounds/juicy_breakout-theme.mp3");
  var kickBox = new buzz.sound("./sounds/ball-wall.mp3");
  var shakeSound = new buzz.sound("./sounds/pling2.mp3");
  var combo = new buzz.sound("./sounds/ball-paddle.mp3");
  var pika = new buzz.sound("./sounds/pikapika.wav");
  if (!buzz.isMP3Supported()) {
    alert ("Your browser doesn't support MP3 Format.")
  };

//BUZZ -set Volume for sounds
  bgmusic.setVolume(5);
  kickBox.setVolume(100);
  combo.setVolume(100);
  pika.setVolume(100);

  // bgmusic.loop().play();

  //Initialize box colors
  var initializeBlocks = function(column, offset){
    var html = '<div class="blocks col-xs-5 col-xs-offset-' + offset + '">&nbsp</div>';
    for (var i = 0; i < 20; i++){
      $(column.columnID).append(html);
    }
    column.sequence.forEach(function(color, idx){
      $(column.columnID + " div").eq(-(idx+1)).addClass(color);
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
          kickBox.play();//play sound
          $(column.columnID).find("div:last-child").remove();//remove column last div
          player.colPosition = player.colPosition+70;
          // $(column.columnID).css("transform",'translateY('+player.colPosition+'px)'); //shift column down
          $(column.columnID).css("bottom", (1263 - player.colPosition)+'px'); //shift column down
          player.playerColor.push(keyColor); //update Array
          player.score();                    //player score++
          // timerStart();                      //KICK OFF timer for one time
          $(player.scoreID).html("Current score:   "+player.playerScore);
          game.gameOver();                  //check if game over
          if (player.playerScore%20 == 0){   //PLAY SOUND argument
            pika.play();
            $(column.columnID).find("div:last-child").addClass("animated bounce");
          } else if (player.playerScore%5 ==0){
            combo.play();
          }                                 //PLAY SOUND arguement
        } else {
          $(column.columnID).find("div:last-child").addClass("animated flash");
          $(column.columnID).find("div:last-child").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
            $(this).removeClass("animated flash");
          });
          shakeSound.play();               //PLAY SOUND
          player.penalty = true;
          setTimeout(function(){player.penalty = false;}, 500);
        }
      }
    }
  });

  var getColor = function(keycode){
    return playerKeysColor[keycode];
  };

  var whichC = function(keycode){
    if (keycode <100) { return game.columnA; }
    else             { return game.columnB; }
  };

  var whichP = function(keycode){
    if (keycode <100) { return game.playerA; }
    else              { return game.playerB; }
  };

// STOPWATCH
  // var seconds, ms =0;
  // var t;

  // function timerAdd(){
  //   ms++;
  //   if (ms >=1000){
  //     ms = 0;
  //     seconds++;
  //   }
  //   //setTImerA
  //   $("#timerA>time").html(
  //     (seconds > 9? (seconds : "0" + seconds)) + ":" +
  //     (ms > 999? (ms :
  //       (ms > 99? ("0" + ms :
  //         (ms > 9? ("0" +ms :
  //           "00" + ms );
  //         ));
  //       ));
  //   ));
  // };

  // function timer(){
  //   t = setTimeout(timerAdd, 1);
  // }

  // function timerStart(){
  //   if (game.playerA.playerScore + game.playerB.playerScore == 1){
  //     timer();
  //     console.log("timer working")
  //   }
  // }

  ////////////////////////////////////////////////////////////////////
  // GAME LOGIC
  ////////////////////////////////////////////////////////////////////

  var init = function() {
    game = new Game();
    initializeBlocks(game.columnA, 5);
    initializeBlocks(game.columnB, 2);
  };

  var reset = function() {
    console.log("test");
    delete game;
    game = new Game();
    $(".blocks").remove();
    initializeBlocks(game.columnA, 5);
    initializeBlocks(game.columnB, 2);
    $("#left-column, #right-column").css("bottom",'1263px')
    $("#scoreA, #scoreB").html("Current score:   0");
  };

  // Buttons
  $("#mute").on("click", function (){
    bgmusic.toggleMute();
    kickBox.toggleMute();
    shakeSound.toggleMute();
    combo.toggleMute();
  });

  $("#reset").on("click", reset);

  var instruct = function (){
    $("#myModal").show();
  };

  $("#instruct").on("click", instruct);

  $("#myModal").modal("show")
  init();

});