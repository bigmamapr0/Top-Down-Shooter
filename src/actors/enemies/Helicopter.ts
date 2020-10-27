import { Enemy } from "./Enemy";
import { Gameplay } from "../../scenes/Gameplay/Gameplay";
import { HelicopterBulletWeapon } from "../../props/enemy/HelicopterBulletWeapon";

class Helicopter extends Enemy {
    public hitPoints: number = 2;

    private playerPos: Phaser.Math.Vector2;
    public angle: number;

    private readonly shotDelay: number = 2000;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number, rotation?: number) {
        super(scene, x, y, "enemies", "helicopterComplete")
        
        this.hitPoints *= hp;

        this.scene.anims.create({
            key: "helicopterRotor",
            frames: this.scene.anims.generateFrameNames("enemies", { prefix: "helicopterMove", start: 1, end: 3 }),
            frameRate: 15,
            repeat: -1
        });

        this.setSize(50, 200);
        this.anims.play("helicopterRotor"); 

        this.setWeapon(new HelicopterBulletWeapon(this.scene));

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

    public stopAttacking(): void {
        if (this.attackTimer != null) {
            this.attackTimer.paused = true;
        }
    }

    public update(): void {
        if(this.hitPoints > 0) {
            this.helicopterRotation();
        }
    }

    private helicopterRotation(): void {
        this.playerPos = (<Gameplay>this.scene.scene.get("gameplay")).playerPosition;
        
        this.angle = Phaser.Math.Angle.Between(this.x, this.y, this.playerPos.x, this.playerPos.y);
        this.setRotation(this.angle-1.5708);
    }

    public destroy(){
        this.hitPoints--;

        if (this.hitPoints <= 0) {
            this.stopAttacking();
    
            this.scene.time.addEvent({
                delay: 50,
                callback: () => {
                    super.destroy();
                }
            });
        }
    }

    public get isAlive(): boolean {
        return this.hitPoints > 0;
    }

    public get hp(): number {
        return this.hitPoints;
    }
}

export { Helicopter }
