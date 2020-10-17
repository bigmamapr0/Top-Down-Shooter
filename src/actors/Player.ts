class Player extends Phaser.GameObjects.Sprite {

    // player: Player;

    constructor(scene: Phaser.Scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // this.scene.anims.create({
        //     key: "idleRifle",
        //     frameRate: 10,
        //     frames: this.scene.anims.generateFrameNames("playerIdleRifle", {
        //         prefix: "survivor-idle_rifle_",
        //         start: 0,
        //         end: 19
        //     }),
        //     repeat: -1
        // });

        // this.scene.anims.create({
        //     key: "walkRifle",
        //     frameRate: 10,
        //     frames: this.scene.anims.generateFrameNames("playerWalkRifle", {
        //         prefix: "survivor-move_rifle_",
        //         start: 0,
        //         end: 19
        //     }),
        //     repeat: -1
        // });
    }

    create() {
        
    }
}

export { Player }