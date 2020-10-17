class Preload extends Phaser.Scene {

    constructor() {
        super("preload");
    }

    create() {
        this.load.on("complete", this.onComplete, this);

        this.load.atlas("enemies", "./assets/images/enemies.png", "./assets/images/enemies.json");

        this.load.start();
    }

    private onComplete(): void {
        this.scene.start("mainMenu");
    }
}

export { Preload }