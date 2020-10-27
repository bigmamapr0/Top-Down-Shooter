import { Gameplay } from "../../scenes/Gameplay/Gameplay";

abstract class EnemyBullet extends Phaser.Physics.Arcade.Sprite {

    protected speed: number;
    private playerPos: Phaser.Math.Vector2;

    constructor(scene: Phaser.Scene, texture: string, frame: string) {
        super(scene, 0, 0, texture, frame);

        this.speed = 0;
    }

    public fire(startX: number, startY: number, velocityY: number = 0): void {

        this.body.reset(startX, startY);

        this.setSize(30, 30);
        
        this.setActive(true);
        this.setVisible(true);
        this.setImmovable(true);

        this.playerPos = (<Gameplay>this.scene.scene.get("gameplay")).playerPosition;
        
        this.angle = Phaser.Math.Angle.Between(this.x, this.y, this.playerPos.x, this.playerPos.y);
        this.setRotation(this.angle+1.5708);

        this.scene.physics.moveTo(this, this.playerPos.x, this.playerPos.y, 150);
    }
}

export { EnemyBullet }
