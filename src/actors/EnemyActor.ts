import { Weapon } from "../props/enemy/Weapon";

abstract class EnemyActor extends Phaser.Physics.Arcade.Sprite {
    protected hitPoints: number;

    protected weapon: Weapon;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
        super(scene, x, y, texture, frame);

        this.scene.physics.add.existing(this);
    }

    public get isAlive(): boolean {
        return this.hitPoints > 0;
    }

    public setWeapon(w: Weapon): void {
        this.weapon = w;
    }

    public getWeapon(): Weapon {
        return this.weapon;
    }

    public shootWeapon( x: number = this.x, y: number = this.y): void {
        if (this.weapon) {
            this.weapon.shoot(x, y);
        }
    }

    public updateWeapon(): void {
        if (this.weapon) {
            this.weapon.update();
        }
    }

    public destroy(): void {
        if (this.weapon != null) {
            this.weapon.destroy();
            this.weapon = null;
        }

        super.destroy(true);
    }
}

export { EnemyActor }
