$(document).ready(function(){

  //Create columns for P1 & P2
  playerA = new NewSeq();
  // playerB = new NewSeq();
  console.log(playerA.sequence);

  //Initialize box colors
  var initializeBlocks = function(player){
    player.sequence.forEach(function(color, idx){
      $("#right-column div").eq(-(idx+1)).css("background-color",color);
    })
  };

  initializeBlocks(playerA);



  //Handling Keyboard Input
  var colPosition = 0;
  document.onkeydown = function(e){
    // based on keycode:
    // identify which player it corresponds
    // call player.checkAnswer()
      //if right, move column down by 50px
      //if incorrect, console.log the color to pick
    var Color = getColor(e.keyCode)

    if (Color && playerA.checkAnswer(Color)) {

      console.log('got it right!! ' + playerA.sequence.length + ' to go');
      colPosition = colPosition+50;
      console.log(colPosition);
      $("#right-column").css("transform",'translateY('+colPosition+'px)');
      // $("#right-column div").eq(-1).remove();

    } else {
      console.log(playerA.sequence[0]);
    }
  };

    var getColor = function(keycode){
    // LEFT-RED, DOWN-GREEN, RIGHT-BLUE
    var Key = [37,40,39];
    return boxColor[Key.indexOf(keycode)];
  };



});