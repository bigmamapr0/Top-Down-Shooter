abstract class EnemyActor extends Phaser.Physics.Arcade.Sprite {
    protected hitPoints: number;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
        super(scene, x, y, texture, frame);

        this.scene.physics.add.existing(this);
    }

    public get isAlive(): boolean {
        return this.hitPoints > 0;
    }

    public destroy(): void {
        super.destroy(true);
    }
}

export { EnemyActor }
