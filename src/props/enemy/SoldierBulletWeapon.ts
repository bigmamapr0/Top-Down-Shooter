import { Weapon } from "./Weapon";
import { SoldierBullet } from "./bulets/SoldierBullet";
import { Sounds } from "../../actors/enemies/Sounds";

class SoldierBulletWeapon extends Weapon {
    private sound: Sounds;

    constructor(scene: Phaser.Scene) {
        super(scene, SoldierBullet);

        this.fireRate = 200;
    }

    public shoot(x: number, y: number): void {
        let soldierAttack2 = this.scene.sound.add("gunshot2");
        soldierAttack2.play();
        // this.sound.soldierAttackSound();
        let bullet: SoldierBullet = this.getFirstDead(true);
        if (bullet) {
            bullet.fire(x, y);
        }
    }
}

export { SoldierBulletWeapon }
