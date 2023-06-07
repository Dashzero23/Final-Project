class Menu extends Phaser.Scene {
    constructor() {
        super({key: "Menu"});
    }

    preload() {
        this.load.path = "./assets/";
        //this.load.image("title", "image/title.png");
        this.load.image("card", "image/PokerHandMenu.png");
        //this.load.image("bg", "image/background.png");
    }    

    create() {
        this.cameras.main.fadeIn(1000, 255, 255, 255);
        this.cameras.main.setBackgroundColor('#ffffff');

        //let bg = this.add.image(0, 0, 'bg').setOrigin(0);

        // Set the scale to fit the entire screen
        //bg.setScale(game.config.width / bg.width, game.config.height / bg.height);
        let poker = this.add.image(browserWidth * (750/1080), this.cameras.main.centerY, "card");
        poker.setScale(0.5*(game.config.width / poker.width), game.config.height / poker.height);

        let textConfig = {
            fontSize: Math.round(game.config.width * 0.025) + 'px', // Adjust the scaling factor as needed
            color: '#000000'
        };

        let menu = this.add.text(browserWidth * (735/1080), browserHeight * (100/600), "EXIT   SETTING    PLAY", textConfig).setOrigin(0.5);

        //let title = this.add.sprite(browserWidth * (870/1080), browserHeight * (95/600), "title");
        //title.setScale(game.config.width / bg.width, game.config.height / bg.height);
        let playRect = this.add.rectangle(browserWidth * (890/1080), browserHeight * (110/600), browserWidth* (185/1080), browserHeight * (240/600), 0x000000);
        playRect.setAngle(15);
        playRect.setAlpha(0.001);
        playRect.setInteractive(); // Make the rectangle interactive for input events

        playRect.on('pointerup', function() {
          this.scene.start("Play");
        }, this);

        let setRect = this.add.rectangle(browserWidth * (740/1080), browserHeight * (100/600), browserWidth* (160/1080), browserHeight * (180/600), 0x000000);
        setRect.setAlpha(0.001);
        setRect.setInteractive(); // Make the rectangle interactive for input events

        setRect.on('pointerup', function() {
          this.scene.start('Setting');
        }, this);

        let exitRect = this.add.rectangle(browserWidth * (615/1080), browserHeight * (130/600), browserWidth* (130/1080), browserHeight * (160/600), 0x000000);
        exitRect.setAngle(-20);
        exitRect.setAlpha(0.001);
        exitRect.setInteractive(); // Make the rectangle interactive for input events

        exitRect.on('pointerup', function() {
            window.close();
        });
    }
}

class Play extends Phaser.Scene {
    constructor() {
        super({key: "Play"});
    }

    create() {
        this.cameras.main.setBackgroundColor('#ffffff');
        let textConfig = {
            fontSize: Math.round(game.config.width * 0.025) + 'px', // Adjust the scaling factor as needed
            color: '#000000'
        };
        let tempPlay = this.add.text(browserWidth / 2, browserHeight / 2, "Temp gameplay", textConfig).setOrigin(0.5);
        let back = this.add.rectangle(browserWidth / 2, browserHeight / 2, browserWidth* (200/1080), browserHeight * (100/600), 0x000000);
        back.setAlpha(0.001);
        back.setInteractive(); // Make the rectangle interactive for input events

        back.on('pointerup', function() {
            this.scene.start('Menu');
        }, this);
    }
}

class Setting extends Phaser.Scene {
    constructor() {
        super({key: "Setting"});
    }

    create() {
        this.cameras.main.setBackgroundColor('#ffffff');
        let textConfig = {
            fontSize: Math.round(game.config.width * 0.025) + 'px', // Adjust the scaling factor as needed
            color: '#000000'
        };
        let tempSet = this.add.text(browserWidth / 2, browserHeight / 2, "Temp setting", textConfig).setOrigin(0.5);
        let back = this.add.rectangle(browserWidth / 2, browserHeight / 2, browserWidth* (200/1080), browserHeight * (100/600), 0x000000);
        back.setAlpha(0.001);
        back.setInteractive(); // Make the rectangle interactive for input events

        back.on('pointerup', function() {
            this.scene.start('Menu');
        }, this);
    }
}