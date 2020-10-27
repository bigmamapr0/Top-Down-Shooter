class Instructions extends Phaser.Scene {

    instructions: Phaser.GameObjects.Text;
    backText: Phaser.GameObjects.Text;

    constructor() {
        super("instructions");
    }

    create() {
        this.instructions = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, "SIMPLE! SURVIVE AS LONG AS YOU CAN!", { fontSize: "42px" }).setOrigin(0.5)

        this.backText = this.add.text(130, 70, "<- BACK", { fontSize: "30px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        
        this.backText.on('pointerdown', () => {
            this.scene.start("mainMenu");
        });
    }
}

export { Instructions };