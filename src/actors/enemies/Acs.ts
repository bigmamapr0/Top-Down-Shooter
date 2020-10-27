import { Enemy } from "./Enemy";
import { Gameplay } from "../../scenes/Gameplay/Gameplay";
import { AcsBulletWeapon } from "../../props/enemy/AcsBulletWeapon";
import { Game } from "phaser";

class Acs extends Enemy {
    public hitPoints: number = 3;

    private readonly shotDelay: number = 1000;

    private playerPos: Phaser.Math.Vector2;
    public angle: number;
    private acsBase: Phaser.GameObjects.Sprite;
    
    constructor(scene: Phaser.Scene, x: number, y: number, hp: number, rotation?: number) {
        super(scene, x, y, "enemies", "acsTower");

        this.hitPoints *= hp;

        this.scene.anims.create({
            key: "acsDestroy",
            frames: this.scene.anims.generateFrameNames("enemies", { prefix: "acsTowerBroken", start: 1, end: 2 }),
            frameRate: 1,
            hideOnComplete: false
        });

        this.setOrigin(0.5, 0.4);
        this.setSize(90, 90);

        this.setWeapon(new AcsBulletWeapon(this.scene));
        this.startAttacking();

        this.acsBase = new Phaser.GameObjects.Sprite(this.scene, this.x, this.y, "enemies", "acsBase").setDepth(-2);
        this.acsBase.angle = this.rotation;
        this.scene.add.existing(this.acsBase);
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

    public stopAttacking(): void {
        if (this.attackTimer != null) {
            this.attackTimer.paused = true;
        }
    }

    public update(): void {
        if(this.hitPoints > 0) {
            this.acsTowerRotation();
        }
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

    public destroy(){
        this.hitPoints--;

        if (this.hitPoints <= 0) {
            this.stopAttacking();
            
            // this.acsBase = new Phaser.GameObjects.Sprite(this.scene, this.x, this.y, "enemies", "acsBaseBroken1").setDepth(-1);
            // this.acsBase.angle = this.rotation;
            // this.scene.add.existing(this.acsBase);
    
            this.anims.play("acsDestroy");
    
            this.scene.time.addEvent({
                delay: 1000,
                callback: () => {
                    this.setVisible(false);
                    this.body.enable = false;
                    this.setActive(false);
                }
            });
        }
    }
}

export { Acs }
