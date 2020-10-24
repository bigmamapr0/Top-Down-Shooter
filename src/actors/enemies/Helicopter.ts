import { Enemy } from "./Enemy";

class Helicopter extends Enemy {
    public hitPoints: number = 2;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number, rotation?: number) {
        super(scene, x, y, "enemies", "helicopterComplete")
        
        this.hitPoints *= hp;

        this.scene.anims.create({
            key: "helicopterRotor",
            frames: this.scene.anims.generateFrameNames("enemies", { prefix: "helicopterMove", start: 1, end: 3 }),
            frameRate: 15,
            repeat: 10
        });

        this.on('animationcomplete', (anim: Phaser.Animations.Animation, frame: Phaser.Animations.AnimationFrame) => {
            this.setFrame("helicopterComplete");
        });

        this.setSize(50, 200);
        //this.setOffset(this.x, -5)
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

export { Helicopter }
