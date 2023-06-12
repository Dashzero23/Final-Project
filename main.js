let desiredWidth, desiredHeight;
// Create the Phaser game configuration
var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// Check if the device is in portrait mode (height > width)
var isPortrait = browserHeight > browserWidth;

// Calculate the desired width and height based on the aspect ratio
if (isPortrait) {
  desiredWidth = browserHeight;
  desiredHeight = browserHeight;
}

else {
  desiredWidth = browserWidth;
  desiredHeight = browserHeight;
}

let config;

desiredHeight *= 0.95;
desiredWidth *= 0.95;
if (!isPortrait) {
  config = {
    type: Phaser.AUTO,
    width: desiredWidth,
    height: desiredHeight,
    physics: {
      default: 'arcade',
      arcade: {
          debug: false
      }
  },
    scene: [Guide, Intro, Menu, Play, Credit, BadEnd, GoodEnd],
    scale: {autoCenter: Phaser.Scale.CENTER_BOTH}
  };
}

else {
  config = {
    type: Phaser.AUTO,
    width: desiredWidth,
    height: desiredHeight,
    physics: {
      default: 'arcade',
      arcade: {
          debug: false
      }
    },
    scene: [Guide, Intro, Menu, Play, Credit, BadEnd, GoodEnd],
  };
}

// Create the Phaser game instance
const game = new Phaser.Game(config);

