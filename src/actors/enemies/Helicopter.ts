class Helicopter extends Phaser.Physics.Arcade.Sprite {
    protected hitPoints: number;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number = 1) {
        super(scene, x, y, "enemies", "helicopterComplete")
        
        this.hitPoints = hp;

        this.scene.physics.add.existing(this);

        this.scene.anims.create({
            key: "helicopterRotor",
            frames: this.scene.anims.generateFrameNames("enemies", { prefix: "helicopterMove", start: 1, end: 3 }),
            frameRate: 15,
            repeat: 10
        });

        this.on('animationcomplete', (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) => {
            this.setFrame("helicopterComplete");
        });
    }

    public get isAlive(): boolean {
        return this.hitPoints > 0;
    }

    public get hp(): number {
        return this.hitPoints;
    }

    // public destroy(): void {
    //     super.destroy();
    // }
}



export { Helicopter }
