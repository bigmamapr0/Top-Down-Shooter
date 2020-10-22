import { Enemy } from "./Enemy";

class Bomber extends Enemy {
    protected hitPoints: number;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number = 1) {
        super(scene, x, y, "enemies", "bomberComplete")
        
        this.hitPoints = hp;

        this.setSize(50, 200);
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

export { Bomber }
