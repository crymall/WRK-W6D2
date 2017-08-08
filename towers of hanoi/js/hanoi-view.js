class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.clicks = [];
    this.setupTowers();
    $($(".hanoi").children()).addClass("unclicked");
  }

  bindEvents() {
    $("ul").on("click", this.clickTower.bind(this));
    this.render.bind(this);
  }

  clickTower($tower) {
    if (this.game.isWon()) {
      return;
    }

    console.log("just clicked: ", $tower.currentTarget);

    if (this.clicks.length > 0) {
      this.clicks.push($($tower.currentTarget).index());
      // debugger;
      this.game.move(this.clicks[0], this.clicks[1]);
      // debugger;
      this.clicks = [];
      $($(".hanoi").children()).removeClass("clicked");
      $($(".hanoi").children()).addClass("unclicked");
      $($(".hanoi").children()).css("background-color", "white");
      this.render();
      return;
    }

    this.clicks.push($($tower.currentTarget).index());
    // debugger;
    $($tower.currentTarget).removeClass("unclicked");
    $($tower.currentTarget).addClass("clicked");
    $($tower.currentTarget).css("background-color", "lavender");
  }

  setupTowers () {
    const $board = $(".hanoi");
    const $firstspace = $("<ul><li class='top'></li><li class='middle'></li><li class='bottom'></li></ul>");
    const $secondspace = $("<ul><li class='hidden'></li><li class='hidden'></li><li class='hidden'></li></ul>");
    const $thirdspace = $("<ul><li class='hidden'></li><li class='hidden'></li><li class='hidden'></li></ul>");
    $board.append($firstspace);
    $board.append($secondspace);
    $board.append($thirdspace);
    // debugger;
  }

  render () {
    const gameState = this.game.towers;
    const $towers = $($(".hanoi").children());
    $towers.children().removeClass("top");
    $towers.children().removeClass("middle");
    $towers.children().removeClass("bottom");
    $towers.children().addClass("hidden");
    for (let i = 0; i < 3; i++) {
      if (gameState[i].includes(3)) {
        $($($towers[i]).children()[2]).removeClass("hidden");
        $($($towers[i]).children()[2]).addClass("bottom");
      }
      if (gameState[i].includes(2)) {
        $($($towers[i]).children()[1]).removeClass("hidden");
        $($($towers[i]).children()[1]).addClass("middle");
      }
      if (gameState[i].includes(1)) {
        $($($towers[i]).children()[0]).removeClass("hidden");
        $($($towers[i]).children()[0]).addClass("top");
      }
    }
    if (this.game.isWon()) {
      $(this.el).append("<finish> Ya did great. </finish>");
    }
  }
}

module.exports = HanoiView;
