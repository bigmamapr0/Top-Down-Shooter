class Preload extends Phaser.Scene {

    constructor() {
        super("preload");
    }

    preload() {
        this.load.on("complete", this.onComplete, this);

        this.load.atlas("playerIdleRifle", "./assets/player/TexturePacker/rifle/idle_rifle.png", "./assets/player/TexturePacker/rifle/idle_rifle.json");
        this.load.atlas("playerWalkRifle", "./assets/player/TexturePacker/rifle/walk_rifle.png", "./assets/player/TexturePacker/rifle/walk_rifle.json");

        this.load.atlas("enemies", "./assets/images/enemies.png", "./assets/images/enemies.json");
        this.load.atlas("helicopterMove", "./assets/images/helicopterMove.png", "./assets/images/helicopterMove.json");
        
        this.load.start();
    }

    private onComplete(): void {
        this.scene.start("mainMenu");
    }
}

export { Preload }