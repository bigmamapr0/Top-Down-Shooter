import 'phaser';
import { Boot } from './scenes/LoadingScenes/Boot';
import { Preload } from './scenes/LoadingScenes/Preload';
import { MainMenu } from './scenes/MainMenuScenes/MainMenu';
import { Gameplay } from './scenes/Gameplay/Gameplay';
import { PauseMenu } from './scenes/Gameplay/PauseMenu';
import { Instructions } from './scenes/MainMenuScenes/Instructions';
import { Settings } from './scenes/MainMenuScenes/Settings';
import { Quit } from './scenes/MainMenuScenes/Quit';
import { Difficulty } from './scenes/MainMenuScenes/Difficulty';

class GameApp extends Phaser.Game {
    public static gameConfig: Phaser.Types.Core.GameConfig = null;

    constructor(config: Phaser.Types.Core.GameConfig) {
        GameApp.gameConfig = config;

        if (GameApp.gameConfig == null) {
            GameApp.gameConfig = {
                type: Phaser.AUTO,
                parent: "content",
                backgroundColor: '#a3afc9',
                width: window.innerWidth,
                height: window.innerHeight,
                physics: {
                    default: "arcade",
                    arcade: {
                        debug: false
                    }
                },
                scene: [Boot, Preload, MainMenu, Instructions, Settings, Quit, Gameplay, Difficulty, PauseMenu]
            };
        }

        super(GameApp.gameConfig);
    }
}

export { GameApp }

new GameApp(null);
