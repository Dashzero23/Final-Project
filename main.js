let desiredWidth = 1080; // Set desired width for fullscreen mode
let desiredHeight = 600; // Set desired height for fullscreen mode

let config = {
  type: Phaser.AUTO,
  width: desiredWidth,
  height: desiredHeight,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scene: [Guide, Intro, Menu, Play, Instruct, Credit, BadEnd, GoodEnd],
  scale: {
    mode: Phaser.Scale.FIT, // Fit the game within the fullscreen dimensions
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

// Create the Phaser game instance
const game = new Phaser.Game(config);
