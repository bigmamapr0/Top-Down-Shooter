class Preload extends Phaser.Scene {

    constructor() {
        super("preload");
    }

    create() {
        this.load.on("complete", this.onComplete, this);

        this.load.atlas("soldier", "./assets/soldier.png", "./assets/soldier.json")

        this.load.start();
    }

    private onComplete(): void {
        this.scene.start("mainMenu");
    }
}

export { Preload }