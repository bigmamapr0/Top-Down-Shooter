class MainMenu extends Phaser.Scene {

    play: Phaser.GameObjects.Text;
    settings: Phaser.GameObjects.Text;
    instructions: Phaser.GameObjects.Text;
    quit: Phaser.GameObjects.Text

    constructor() {
        super("mainMenu");
    }

    create() {
        this.play = this.add.text(window.innerWidth / 2, window.innerHeight / 2 - 90, "PLAY", { fontSize: "42px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        this.instructions = this.add.text(window.innerWidth / 2, window.innerHeight / 2 - 30, "INSTRUCTIONS", { fontSize: "42px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        this.settings = this.add.text(window.innerWidth / 2, window.innerHeight / 2 + 30, "SETTINGS", { fontSize: "42px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        this.quit = this.add.text(window.innerWidth / 2, window.innerHeight / 2 + 90, "QUIT", { fontSize: "42px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
    
        this.play.on('pointerdown', () => {
            this.scene.start("difficulty");
        })

        this.instructions.on('pointerdown', () => {
            this.scene.start("instructions");
        })

        this.settings.on('pointerdown', () => {
            this.scene.start("settings");
        })

        this.quit.on('pointerdown', () => {
            this.scene.start("quit");
        })
    }
}

export { MainMenu }
