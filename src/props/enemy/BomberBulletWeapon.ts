import { Weapon } from "./Weapon";
import { BomberBullet } from "./bullets/BomberBullet";

class BomberBulletWeapon extends Weapon {
    constructor(scene: Phaser.Scene) {
        super(scene, BomberBullet);

        this.fireRate = 200;
    }

    public shoot(x: number, y: number): void {
        this.scene.sound.play("acsFire");

        let bullet: BomberBullet = this.getFirstDead(true);
        if (bullet) {
            bullet.fire(x, y);
        }
    }
}

export { BomberBulletWeapon }
