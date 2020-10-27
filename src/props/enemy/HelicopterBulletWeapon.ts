import { Weapon } from "./Weapon";
import { HelicopterBullet } from "./bullets/HelicopterBullet";

class HelicopterBulletWeapon extends Weapon {

    constructor(scene: Phaser.Scene) {
        super(scene, HelicopterBullet);

        this.fireRate = 200;
    }

    public shoot(x: number, y: number): void {
        this.scene.sound.play("gunshot2");

        let bullet: HelicopterBullet = this.getFirstDead(true);
        if (bullet) {
            bullet.fire(x, y);
        }
    }
}

export { HelicopterBulletWeapon }
