import { Weapon } from "./Weapon";
import { AcsBullet } from "./bullets/AcsBullet";

class AcsBulletWeapon extends Weapon {

    bullet: AcsBullet;

    constructor(scene: Phaser.Scene) {
        super(scene, AcsBullet);

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

export { AcsBulletWeapon }
