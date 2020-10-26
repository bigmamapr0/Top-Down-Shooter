import { EnemyBullet } from "../EnemyBullet";

class BomberBullet extends EnemyBullet {
    constructor(scene: Phaser.Scene) {
        super(scene, "enemies", "acsFire2");

        this.speed = 700;
    }
}

export { BomberBullet }