import { Bullet } from "./Bullet";
import { Gameplay } from "../scenes/Gameplay/Gameplay";

class BulletGroup extends Phaser.Physics.Arcade.Group {

    bullet: Bullet;
    bulletArr: Array<any> = [];

    playerPos: any;
    
    constructor(scene: Phaser.Scene) {
        super(scene.physics.world, scene);
        
        this.createMultiple({
            classType: Bullet,
            frameQuantity: 700,
            active: false,
            visible: false,
            key: "bullet"
        });
    }

    fireBullet(x: number, y: number) {
        this.bullet = this.getFirstDead();
    
        if (this.bullet) {
            this.playerPos = (<Gameplay>this.scene.scene.get("gameplay")).playerPosition;

            this.bullet.setScale(0.05);
            this.bullet.setRotation( Phaser.Math.Angle.Between(this.playerPos.x, this.playerPos.y, this.scene.input.mousePointer.x, this.scene.input.mousePointer.y) + 1.5708)
            
            this.bullet.fire(this.playerPos.x, this.playerPos.y - 20);
        }
    }
}

export { BulletGroup }