import { Enemy } from "./Enemy";
import { Level } from "../../scenes/Gameplay/Level";

class Soldier extends Enemy {
    protected hitPoints: number;

    private playerPos: Phaser.Math.Vector2;
    public angle: number;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number = 1) {
        super(scene, x, y, "enemies", "soldierIdle")
        
        this.hitPoints = hp;

        this.scene.anims.create({
            key: "soldierDeath",
            frames: this.scene.anims.generateFrameNames("enemies", { prefix: "soldierDeath", start: 1, end: 5 }),
            frameRate: 10,
        });
    }

    public update(): void {

        this.soldierRotation();
    }

    private soldierRotation(): void {

        this.playerPos = (<Level>this.scene.scene.get("level")).playerPosition;
        
        this.angle = Phaser.Math.Angle.Between(this.x, this.y, this.playerPos.x, this.playerPos.y);
        this.setRotation(this.angle-1.5708);
    }

    public get isAlive(): boolean {
        return this.hitPoints > 0;
    }

    public get hp(): number {
        return this.hitPoints;
    }
}

export { Soldier }
