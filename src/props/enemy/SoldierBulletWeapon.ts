import { Weapon } from "./Weapon";
import { SoldierBullet } from "./bulets/SoldierBullet";

class SoldierBulletWeapon extends Weapon {

    constructor(scene: Phaser.Scene) {
        super(scene, SoldierBullet);

        this.fireRate = 200;
    }

    public shoot(x: number, y: number): void {
        this.scene.sound.play("gunshot2");

        let bullet: SoldierBullet = this.getFirstDead(true);
        if (bullet) {
            bullet.fire(x, y);
        }
    }
}

export { SoldierBulletWeapon }
