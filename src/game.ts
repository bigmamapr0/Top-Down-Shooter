import 'phaser';
<<<<<<< HEAD
import { Boot } from './scenes/LoadingScenes/Boot';
import { Preload } from './scenes/LoadingScenes/Preload';
import { Gameplay } from './scenes/Gameplay/Gameplay';
=======
import { Boot } from './scenes/Boot';
import { Preload } from './scenes/Preload';
import { MainMenu } from './scenes/MainMenu';
import { Level } from './scenes/Level';
>>>>>>> origin/ultra

class GameApp extends Phaser.Game {
    public static gameConfig: Phaser.Types.Core.GameConfig = null;

    constructor(config: Phaser.Types.Core.GameConfig) {
        GameApp.gameConfig = config;

        if (GameApp.gameConfig == null) {
            GameApp.gameConfig = {
                type: Phaser.AUTO,
                parent: "content",
                backgroundColor: '#385e78',
<<<<<<< HEAD
                width: window.innerWidth,
                height: window.innerHeight,
                physics: {
                    default: "arcade",
=======
                width: 1024,
                height: 512,
                physics: {
                    default: 'arcade',
>>>>>>> origin/ultra
                    arcade: {
                        debug: true
                    }
                },
<<<<<<< HEAD
                scene: [Boot, Preload, Gameplay]
=======
                scene: [Boot, Preload, MainMenu, Level]
>>>>>>> origin/ultra
            };
        }

        super(GameApp.gameConfig);
    }
}

export { GameApp }

new GameApp(null);
