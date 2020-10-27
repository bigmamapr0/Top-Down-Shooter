import { Weapon } from "./Weapon";
import { BomberBullet } from "./bullets/BomberBullet";

class BomberBulletWeapon extends Weapon {
    
    bullet: BomberBullet;

    constructor(scene: Phaser.Scene) {
        super(scene, BomberBullet);

        this.fireRate = 200;
    }

    public shoot(x: number, y: number): void {
        this.scene.sound.play("acsFire");

        this.bullet = this.getFirstDead(true);
        if (this.bullet) {
            this.bullet.fire(x, y);
        }
    }
}

export { BomberBulletWeapon }
