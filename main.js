// Create the Phaser game configuration
var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const config = {
  type: Phaser.AUTO,
  width: browserWidth,
  height: browserHeight,
  scene: [Menu, Play, Setting],
};

// Create the Phaser game instance
const game = new Phaser.Game(config);
