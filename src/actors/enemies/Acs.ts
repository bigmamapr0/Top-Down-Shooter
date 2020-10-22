import { Enemy } from "./Enemy";
import { Sounds } from "./Sounds";
import { Gameplay } from "../../scenes/Gameplay/Gameplay";

class Acs extends Enemy {
    protected hitPoints: number;
    
    private playerPos: Phaser.Math.Vector2;
    public angle: number;
    
    private sound: Sounds;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number = 3) {
        super(scene, x, y, "enemies", "acsTower")

        this.hitPoints = hp;
        this.sound = new Sounds(scene);

        let acsBase: Phaser.GameObjects.Sprite;
        acsBase = new Phaser.GameObjects.Sprite(this.scene, this.x, this.y, "enemies", "acsBase");
        
        this.scene.add.existing(acsBase);

        this.scene.anims.create({
            key: "acsDestroy",
            frames: this.scene.anims.generateFrameNames("enemies", { prefix: "acsBaseBroken", start: 1, end: 2 }),
            frameRate: 2,
            hideOnComplete: true
        });

        this.setOrigin(0.5, 0.4);
        this.setSize(90, 90);
    }

    public update(): void {

        this.acsTowerRotation();
    }

    private acsTowerRotation(): void {

        this.playerPos = (<Gameplay>this.scene.scene.get("gameplay")).playerPosition;
        
        this.angle = Phaser.Math.Angle.Between(this.x, this.y, this.playerPos.x, this.playerPos.y);
        this.setRotation(this.angle-1.5708);
    }

    public get isAlive(): boolean {
        return this.hitPoints > 0;
    }

    public get hp(): number {
        return this.hitPoints;
    }

    public destroy(): void {
        this.sound.acsExplosion1Sound();
        this.anims.play("acsDestroy");

        //super.destroy();
    }
}

export { Acs }
