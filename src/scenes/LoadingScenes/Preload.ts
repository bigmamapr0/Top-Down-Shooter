class Preload extends Phaser.Scene {

    constructor() {
        super("preload");
    }

    preload() {
        this.load.atlas("playerIdleRifle", "./assets/player/TexturePacker/rifle/idle_rifle.png", "./assets/player/TexturePacker/rifle/idle_rifle.json");
        this.load.atlas("playerWalkRifle", "./assets/player/TexturePacker/rifle/walk_rifle.png", "./assets/player/TexturePacker/rifle/walk_rifle.json");
    }

    create() {
        this.scene.start("gameplay");
    }
}

export { Preload }