class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
  }

  bindEvents() {
    $("ul").on("click", "li", this.makeMove.bind(this));
  }

  makeMove($square) {
    if (this.game.isOver()) {
      return;
    }

    console.log("just clicked: ", $square);
    // debugger;
    $($square.target).removeClass("unclicked");
    $($square.target).addClass("clicked");
    // this.game.playMove($($square.target).index());
    this.game.playMove([$($square.target).index() % 3,
        Math.floor($($square.target).index() / 3)]);

    $($square.target).append(`<h1>${this.game.currentPlayer}</h1>`);
    $($square.target).addClass(`${this.game.currentPlayer}`);

    if (this.game.isOver()){
      $(this.el).append(`<h1>😂 ~ congratulations, ${this.game.currentPlayer} ~ 😂</h1>`);
      // $square.each (el, ind { 
      // })
    }


  }

  setupBoard() {
    const $board = $(".ttt");
    const $grid = $("<ul> </ul>");
    for (let i = 0; i < 9; i++) {
      $grid.append($("<li class='unclicked'> </li>"));
    }
    $board.append($grid);
  }
}

module.exports = View;
