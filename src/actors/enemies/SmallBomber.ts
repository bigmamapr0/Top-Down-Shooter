import { Enemy } from "./Enemy";

class SmallBomber extends Enemy {
    protected hitPoints: number;
    //protected rotationAngle: number;

    constructor(scene: Phaser.Scene, x: number, y: number, rotation: number) {
        super(scene, x, y, "enemies", "bomberMini")
        
        //this.rotationAngle = rotation;

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
