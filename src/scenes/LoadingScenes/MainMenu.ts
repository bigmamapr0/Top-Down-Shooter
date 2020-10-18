class MainMenu extends Phaser.Scene {
    private gameName: Phaser.GameObjects.Text;
    private level: Phaser.GameObjects.Text;

    constructor() {
        super("mainMenu");
    }

    create() {  
        this.gameName = new Phaser.GameObjects.Text(this, this.cameras.main.centerX, this.cameras.main.centerY, "Top-Down-Shooter", null);
        this.gameName.setPosition(this.cameras.main.centerX - this.gameName.width, this.cameras.main.centerY - this.gameName.height);
        this.gameName.setFontSize(30);
        this.add.existing(this.gameName);

        this.level = new Phaser.GameObjects.Text(this, this.cameras.main.width / 2, (this.cameras.main.height / 2) + this.gameName.height, "Level", null).setInteractive().setOrigin(0.5);
        this.level.on("pointerup", () => {
            this.scene.start("gameplay");
        });
        this.add.existing(this.level);
    }
}

export { MainMenu }
