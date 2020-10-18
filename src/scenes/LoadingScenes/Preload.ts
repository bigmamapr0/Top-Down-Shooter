class Preload extends Phaser.Scene {

    constructor() {
        super("preload");
    }

    preload() {
        this.load.on("complete", this.onComplete, this);

        this.load.atlas("playerIdleRifle", "./assets/player/TexturePacker/rifle/idle_rifle.png", "./assets/player/TexturePacker/rifle/idle_rifle.json");
        this.load.atlas("playerWalkRifle", "./assets/player/TexturePacker/rifle/walk_rifle.png", "./assets/player/TexturePacker/rifle/walk_rifle.json");

        this.load.atlas("enemies", "./assets/enemies/enemies.png", "./assets/enemies/enemies.json");
        //this.load.atlas("helicopterMove", "./assets/objects/helicopterMove.png", "./assets/objects/helicopterMove.json");

        this.load.start();
    }

    private onComplete(): void {
        this.scene.start("mainMenu");
    }
}

export { Preload }