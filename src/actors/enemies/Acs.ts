import { Enemy } from "./Enemy";
import { Sounds } from "./Sounds";
import { Gameplay } from "../../scenes/Gameplay/Gameplay";
import { AcsBulletWeapon } from "../../props/enemy/AcsBulletWeapon";

class Acs extends Enemy {
    protected hitPoints: number;

    private readonly shotDelay: number = 4000;

    private playerPos: Phaser.Math.Vector2;
    public angle: number;
    
    private sound: Sounds;

    constructor(scene: Phaser.Scene, x: number, y: number, rotation?: number) {
        super(scene, x, y, "enemies", "acsTower")

        this.sound = new Sounds(scene);

        let acsBase: Phaser.GameObjects.Sprite;
        acsBase = new Phaser.GameObjects.Sprite(this.scene, this.x, this.y, "enemies", "acsBase");
        acsBase.angle = rotation;
        
        this.scene.add.existing(acsBase);

        this.scene.anims.create({
            key: "acsDestroy",
            frames: this.scene.anims.generateFrameNames("enemies", { prefix: "acsBaseBroken", start: 1, end: 2 }),
            frameRate: 2,
            hideOnComplete: true
        });

        this.setOrigin(0.5, 0.4);
        this.setSize(90, 90);

        this.setWeapon(new AcsBulletWeapon(this.scene));
        this.startAttacking();
    }

    public startAttacking(): void {
        let maxDelay: number = 700;
        let minDelay: number = 200;

        if (this.attackTimer == null) {
            this.attackTimer = this.scene.time.addEvent({
                delay: this.shotDelay,
                loop: true,
                callback: this.fire,
                callbackScope: this,
                startAt: Math.random() * (maxDelay - minDelay) + minDelay
            });
        }

        this.attackTimer.paused = false;
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
