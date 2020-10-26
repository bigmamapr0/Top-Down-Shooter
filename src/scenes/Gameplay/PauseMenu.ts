class PauseMenu extends Phaser.Scene {
    private btnHeightMargin = 10;

    constructor() {
        super("pauseMenu");
    }

    create() {
        let pauseMenuFrame: Phaser.GameObjects.Sprite;
        pauseMenuFrame = new Phaser.GameObjects.Sprite(this, this.cameras.main.centerX, this.cameras.main.centerY, "gui", "gui_Preset");
        this.add.existing(pauseMenuFrame);

        let resumeBtn: Phaser.GameObjects.Sprite;
        resumeBtn = new Phaser.GameObjects.Sprite(this, this.cameras.main.centerX, this.cameras.main.centerY, "gui", "gui_Back").setInteractive({ useHandCursor: true });
        resumeBtn.on('pointerdown', () => { this.onClose() });
        this.add.existing(resumeBtn);

        let mainMenuBtn: Phaser.GameObjects.Sprite;
        mainMenuBtn = new Phaser.GameObjects.Sprite(this, this.cameras.main.centerX, this.cameras.main.centerY + this.btnHeightMargin + resumeBtn.height, "gui", "gui_Menu").setInteractive({ useHandCursor: true });
        mainMenuBtn.on('pointerdown', () => {
            this.scene.start("mainMenu");
        });
        this.add.existing(mainMenuBtn);

        let esc: Phaser.Input.Keyboard.Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        esc.on("down", this.onClose, this);
    }

    private onClose(): void {
        this.scene.stop();
        this.scene.resume("gameplay");
    }
}

export { PauseMenu }
