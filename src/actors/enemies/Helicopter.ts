class Helicopter extends Phaser.Physics.Arcade.Sprite {
    protected hitPoints: number;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number = 1) {
        super(scene, x, y, "enemies", "helicopterComplete")
        
        this.hitPoints = hp;

        this.scene.physics.add.existing(this);
        

/*         this.scene.anims.create({
            key: "helicopterMove",
            frames: this.scene.anims.generateFrameNames("helicopterMove", { prefix: "helicopter1", start: 1, end: 5 }),
            frameRate: 10,
        });
        this.anims.play("helicopterMove"); */
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
