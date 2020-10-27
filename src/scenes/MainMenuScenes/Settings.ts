class Settings extends Phaser.Scene {

    audioText: Phaser.GameObjects.Text;
    backText: Phaser.GameObjects.Text;

    constructor() {
        super("settings");
    }

    create() {
        this.backText = this.add.text(130, 70, "<- BACK", { fontSize: "30px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        this.audioText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, "AUDIO: ON", { fontSize: "38px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        this.audioText.on('pointerup', () => {
            // TODO: add sound
            if (this.audioText.text == "AUDIO: ON") {
                this.audioText.text = "AUDIO: OFF"
            } else {
                this.audioText.text = "AUDIO: ON"
            }
        })
        
        this.backText.on('pointerdown', () => {
            this.scene.start("mainMenu");
        });
    }
}

export { Settings };