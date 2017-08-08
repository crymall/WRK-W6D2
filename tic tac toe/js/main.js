const View = require("./ttt-view.js"); // require appropriate file
const Game = require("./game.js");// require appropriate file

const theGame = new Game();

$( () => {
  // Your code here
  const theView = new View(theGame, $(".ttt")[0]);
  theView.setupBoard();
  theView.bindEvents();
});
