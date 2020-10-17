class Soldier extends Phaser.Physics.Arcade.Sprite {
    protected hitPoints: number;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number = 1) {
        super(scene, x, y, "enemies", "soldierIdle")
        
        this.hitPoints = hp;

        this.scene.physics.add.existing(this);

        this.scene.anims.create({
            key: "soldier_death",
            frames: this.scene.anims.generateFrameNames("enemies", { prefix: "soldierDeath", start: 1, end: 5 }),
            frameRate: 10,
        });
    }

    public get isAlive(): boolean {
        return this.hitPoints > 0;
    }

    public get hp(): number {
        return this.hitPoints;
    }
}

export { Soldier }
