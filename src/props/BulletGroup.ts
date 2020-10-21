import { Bullet } from "./Bullet";

class BulletGroup extends Phaser.Physics.Arcade.Group {

    bullet: Bullet;
    
    constructor(scene: Phaser.Scene) {
        super(scene.physics.world, scene);
        
        this.createMultiple({
            classType: Bullet,
            frameQuantity: 30,
            active: true,
            visible: true,
            key: "bullet"
        })
    }

    fireBullet(x: number, y: number) {
        this.bullet = this.getFirstDead();
    
        if (true) {
            console.log(123);
            this.bullet.fire(50, 50);
        }
    }
}

export { BulletGroup }