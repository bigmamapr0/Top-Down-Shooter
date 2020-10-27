import { Weapon } from "./Weapon";
import { HelicopterBullet } from "./bullets/HelicopterBullet";

class HelicopterBulletWeapon extends Weapon {

    bullet: HelicopterBullet;

    constructor(scene: Phaser.Scene) {
        super(scene, HelicopterBullet);

        this.fireRate = 200;
    }

    public shoot(x: number, y: number): void {
        this.scene.sound.play("gunshot2");

        this.bullet = this.getFirstDead(true);
        if (this.bullet) {
            this.bullet.fire(x, y);
        }
    }
}

export { HelicopterBulletWeapon }
