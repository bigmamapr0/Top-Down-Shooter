import { Game } from "phaser";
import { Level } from "../../scenes/Gameplay/Level";
//import { Player } from "../Player";

class Soldier extends Phaser.Physics.Arcade.Sprite {
    protected hitPoints: number;

    playerPos: Phaser.Math.Vector2;
    angle: number;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number = 1) {
        super(scene, x, y, "enemies", "soldierIdle")
        
        this.hitPoints = hp;

        this.scene.physics.add.existing(this);

        this.scene.anims.create({
            key: "soldierDeath",
            frames: this.scene.anims.generateFrameNames("enemies", { prefix: "soldierDeath", start: 1, end: 5 }),
            frameRate: 10,
        });


    }

    public update(): void {

        this.soldierRotation();
    }

    private soldierRotation() {

        this.playerPos = (<Level>this.scene.scene.get("level")).playerPosition;
        
        this.angle = Phaser.Math.Angle.Between(this.x, this.y, this.playerPos.x, this.playerPos.y);
        this.setRotation(this.angle);
    }

    public get isAlive(): boolean {
        return this.hitPoints > 0;
    }

    public get hp(): number {
        return this.hitPoints;
    }
}

export { Soldier }
