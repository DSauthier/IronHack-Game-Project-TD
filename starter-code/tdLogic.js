let theGame;
let player;


document.getElementById('start-game-button').onclick = function () {
  theGame = new Game()
  setInterval(theGame.draw(), 10)
  // theGame.canvas = new Canvas();
  // theGame.drawMap();

  // player = new CreepMinion(30, 30, "red", 0, 110);
  
  //  document.onkeyup

  
  };

