class MainMenu extends Phaser.Scene {

    private title: Phaser.GameObjects.Text;

    private play: Phaser.GameObjects.Text;
    private settings: Phaser.GameObjects.Text;
    private instructions: Phaser.GameObjects.Text;
    private quit: Phaser.GameObjects.Text;

    constructor() {
        super("mainMenu");
    }

    create() {
        this.cameras.main.setBackgroundColor("#a3afc9");

        this.title = this.add.text(window.innerWidth / 2, 125, " ENDLESS SURVIVAL", { fontSize: "105px" }).setOrigin(0.5);

        this.play = this.add.text(window.innerWidth / 2, window.innerHeight / 2 - 90, "PLAY", { fontSize: "42px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        this.play.on('pointerdown', () => {
            this.scene.start("difficulty");
        })
        
        this.instructions = this.add.text(window.innerWidth / 2, window.innerHeight / 2 - 30, "INSTRUCTIONS", { fontSize: "42px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        this.instructions.on('pointerdown', () => {
            this.scene.start("instructions");
        })
        
        this.settings = this.add.text(window.innerWidth / 2, window.innerHeight / 2 + 30, "SETTINGS", { fontSize: "42px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        this.settings.on('pointerdown', () => {
            this.scene.start("settings");
        })
        
        this.quit = this.add.text(window.innerWidth / 2, window.innerHeight / 2 + 90, "QUIT", { fontSize: "42px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        this.quit.on('pointerdown', () => {
            this.scene.start("quit");
        })
    }
}

export { MainMenu }
