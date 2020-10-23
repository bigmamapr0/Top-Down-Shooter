import { Weapon } from "./Weapon";
import { AcsBullet } from "./bulets/AcsBullet";

class AcsBulletWeapon extends Weapon {
    constructor(scene: Phaser.Scene) {
        super(scene, AcsBullet);

        this.fireRate = 200;
    }

    public shoot(x: number, y: number): void {
        this.scene.sound.play("acsFire");

        let bullet: AcsBullet = this.getFirstDead(true);
        if (bullet) {
            bullet.fire(x, y);
        }
    }
}

export { AcsBulletWeapon }
