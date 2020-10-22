import { EnemyActor } from "../EnemyActor";

abstract class Enemy extends EnemyActor {
    protected attackTimer: Phaser.Time.TimerEvent;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
        super(scene, x, y, texture, frame);
    }

    public abstract startAttacking(): void;
    // public abstract stopAttacking(): void;


    public fire(): void {
        super.shootWeapon(this.x, this.y);
    }

    public destroy(): void {
        super.destroy();
    }
}

export { Enemy }
