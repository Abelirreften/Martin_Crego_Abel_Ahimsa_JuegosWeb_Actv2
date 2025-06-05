import GameScene from './Scenes/GameScene.js';

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [GameScene]
};

const game = new Phaser.Game(config);
