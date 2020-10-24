import { EnemyBullet } from "../EnemyBullet";

class AcsBullet extends EnemyBullet {
    constructor(scene: Phaser.Scene) {
        super(scene, "enemies", "acsFire1");

        this.speed = 400;
    }
}

export { AcsBullet }