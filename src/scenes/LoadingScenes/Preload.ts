class Preload extends Phaser.Scene {

    constructor() {
        super("preload");
    }

    preload() {
        this.load.on("complete", this.onComplete, this);

        this.load.image("playerBullet", "./assets/objects/bullet.png")

        this.load.atlas("gui", "./assets/ui/gui.png", "./assets/ui/gui.json");

        this.load.atlas("playerIdleRifle", "./assets/player/TexturePacker/rifle/idle_rifle.png", "./assets/player/TexturePacker/rifle/idle_rifle.json");
        this.load.atlas("playerWalkRifle", "./assets/player/TexturePacker/rifle/walk_rifle.png", "./assets/player/TexturePacker/rifle/walk_rifle.json");

        this.load.atlas("enemies", "./assets/enemies/enemies.png", "./assets/enemies/enemies.json");

        this.load.audio("explosion1", ["assets/audio/explosion1.ogg", "assets/audio/explosion1.mp3", "assets/audio/explosion1.m4a"]);
        this.load.audio("explosion2", ["assets/audio/explosion2.ogg", "assets/audio/explosion2.mp3", "assets/audio/explosion2.m4a"]);
        this.load.audio("gunshot1", ["assets/audio/gunshot1.ogg", "assets/audio/gunshot1.mp3", "assets/audio/gunshot1.m4a"]);
        this.load.audio("gunshot2", ["assets/audio/gunshot2.ogg", "assets/audio/gunshot2.mp3", "assets/audio/gunshot2.m4a"]);
        this.load.audio("acsFire", ["assets/audio/acsFire.ogg", "assets/audio/acsFire.mp3", "assets/audio/acsFire.m4a"]);
0        
        this.load.start();
    }

    private onComplete(): void {
        this.scene.start("mainMenu");
    }
}

export { Preload }