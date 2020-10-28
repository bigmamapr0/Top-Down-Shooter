import { EnemyBullet } from "../enemy/EnemyBullet";

abstract class Weapon extends Phaser.Physics.Arcade.Group {
    protected fireRate: number;
    protected fireTimestamp: number = 0;

    constructor(scene: Phaser.Scene, classType: any) {
        super(scene.physics.world, scene, {
            key: "Top-Down-ShooterUI",
            classType: classType,
            active: false,
            visible: false,
            setXY: {x : 0, y: -100}
        });
    }

    public getFireRate(): number {
        return this.fireRate;
    }

    public abstract shoot(startX: number, startY: number): void;

    public update(): void {
        this.children.iterate((bullet: EnemyBullet) => {
            if (bullet.x < 0 || bullet.y > 1024) {
                this.killAndHide(bullet);
                bullet.body.reset(0, -100);
            }
        });
    }

    public destroy(): void {
        super.destroy();
    }
}

export { Weapon }
