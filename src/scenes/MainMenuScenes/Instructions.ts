class Instructions extends Phaser.Scene {

    backText: Phaser.GameObjects.Text;

    constructor() {
        super("instructions");
    }

    create() {
        this.backText = this.add.text(130, 70, "<- BACK", { fontSize: "30px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        
        this.backText.on('pointerdown', () => {
            this.scene.start("mainMenu");
        });
    }
}

export { Instructions };