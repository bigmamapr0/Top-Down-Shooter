import { Enemy } from "./Enemy";

class Bomber extends Enemy {
    protected hitPoints: number = 2;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number, rotation?: number) {
        super(scene, x, y, "enemies", "bomberComplete")
        
        this.hitPoints *= hp;

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
