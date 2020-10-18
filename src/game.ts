import 'phaser';
import { Boot } from './scenes/LoadingScenes/Boot';
import { Preload } from './scenes/LoadingScenes/Preload';
import { Gameplay } from './scenes/Gameplay/Gameplay';
import { MainMenu } from './scenes/MainMenu';
import { Level } from './scenes/Level';

class GameApp extends Phaser.Game {
    public static gameConfig: Phaser.Types.Core.GameConfig = null;

    constructor(config: Phaser.Types.Core.GameConfig) {
        GameApp.gameConfig = config;

        if (GameApp.gameConfig == null) {
            GameApp.gameConfig = {
                type: Phaser.AUTO,
                parent: "content",
                backgroundColor: '#385e78',
                width: window.innerWidth,
                height: window.innerHeight,
                physics: {
                    default: "arcade",
                    arcade: {
                        debug: true
                    }
                },
                scene: [Boot, Preload, MainMenu, Level]
            };
        }

        super(GameApp.gameConfig);
    }
}

export { GameApp }

new GameApp(null);
