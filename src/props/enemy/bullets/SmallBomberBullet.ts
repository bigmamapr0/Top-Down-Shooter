import { EnemyBullet } from "../EnemyBullet";

class SmallBomberBullet extends EnemyBullet {
    constructor(scene: Phaser.Scene) {
        super(scene, "enemies", "acsFire1");

        this.speed = 700;
    }
}

export { SmallBomberBullet }