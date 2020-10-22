import { Weapon } from "./Weapon";
import { AcsBullet } from "./bulets/AcsBullet";
import { DirectionType } from "../../util/DirectionType";

class AcsBulletWeapon extends Weapon {
    constructor(scene: Phaser.Scene) {
        super(scene, AcsBullet);

        this.fireRate = 200;
    }

    public shoot(x: number, y: number): void {
        let bullet: AcsBullet = this.getFirstDead(true);
        if (bullet) {
            bullet.fire(x, y);
        }
    }
}

export { AcsBulletWeapon }
