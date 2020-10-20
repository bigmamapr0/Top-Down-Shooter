import { Enemy } from "./Enemy";

class Acs extends Enemy {
    protected hitPoints: number;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number = 1) {
        super(scene, x, y, "enemies", "acsComplete")
        
        this.hitPoints = hp;
    }

    public get isAlive(): boolean {
        return this.hitPoints > 0;
    }

    public get hp(): number {
        return this.hitPoints;
    }
}

export { Acs }
