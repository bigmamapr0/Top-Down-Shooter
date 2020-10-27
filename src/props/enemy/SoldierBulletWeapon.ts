import { Weapon } from "./Weapon";
import { SoldierBullet } from "./bullets/SoldierBullet";

class SoldierBulletWeapon extends Weapon {

    bullet: SoldierBullet;

    constructor(scene: Phaser.Scene) {
        super(scene, SoldierBullet);

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

export { SoldierBulletWeapon }
