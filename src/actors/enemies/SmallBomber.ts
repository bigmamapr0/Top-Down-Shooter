import { Enemy } from "./Enemy";

class SmallBomber extends Enemy {
    public hitPoints: number = 2;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number, rotation?: number) {
        super(scene, x, y, "enemies", "bomberMini");

        this.hitPoints *= hp;

        this.setAngle(rotation);
        this.setSize(30, 120);
    }

    public startAttacking(): void {

    }

    public get isAlive(): boolean {
        return this.hitPoints > 0;
    }

    public get hp(): number {
        return this.hitPoints;
    }
}

export { SmallBomber }
