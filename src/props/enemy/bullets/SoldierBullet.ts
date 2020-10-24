import { EnemyBullet } from "../EnemyBullet";

class SoldierBullet extends EnemyBullet {
    constructor(scene: Phaser.Scene) {
        super(scene, "enemies", "soldierBullet");

        this.speed = 1000;
    }
}

export { SoldierBullet }