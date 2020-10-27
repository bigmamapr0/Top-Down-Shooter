class Difficulty extends Phaser.Scene {

    public hardMode: boolean = false;

    backText: Phaser.GameObjects.Text;

    static easyHp: number = 100;
    easyText: Phaser.GameObjects.Text;

    static hardHp: number = 250;
    hardText: Phaser.GameObjects.Text;

    constructor() {
        super("difficulty");
    }

    public get chosenDifficulty(): any {
        return new Boolean(this.hardMode);
    }

    create() {
        this.easyText = this.add.text(window.innerWidth / 2, window.innerHeight / 2 - 50, "EASY MODE", { fontSize: "42px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        this.hardText = this.add.text(window.innerWidth / 2, window.innerHeight / 2 + 50, "HARD MODE", { fontSize: "42px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        this.backText = this.add.text(130, 70, "<- BACK", { fontSize: "30px" }).setOrigin(0.5).setInteractive({ useHandCursor: true });
    
        this.easyText.on('pointerdown', () => {
            this.hardMode = false;
            this.scene.start("gameplay", { hardMode: this.hardMode });
        });
        
        this.hardText.on('pointerdown', () => {
            this.hardMode = true;
            this.scene.start("gameplay", { hardMode: this.hardMode });
        });

        this.backText.on('pointerdown', () => {
            this.scene.start("mainMenu");
        });
    }
}

export { Difficulty };