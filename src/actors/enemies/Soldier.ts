import { Enemy } from "./Enemy";
import { Sounds } from "./Sounds";
import { Gameplay } from "../../scenes/Gameplay/Gameplay";
import { SoldierBulletWeapon } from "../../props/enemy/SoldierBulletWeapon";

class Soldier extends Enemy {
    protected hitPoints: number;

    private playerPos: Phaser.Math.Vector2;
    public angle: number;

    private readonly shotDelay: number = 2000;

    private sound: Sounds;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number = 1) {
        super(scene, x, y, "enemies", "soldierIdle")
        
        this.hitPoints = hp;

        this.scene.anims.create({
            key: "soldierDeath",
            frames: this.scene.anims.generateFrameNames("enemies", { prefix: "soldierDeath", start: 1, end: 5 }),
            frameRate: 10,
        });

        this.setSize(30, 30);

        this.setWeapon(new SoldierBulletWeapon(this.scene));

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

        this.soldierRotation();
    }

    private soldierRotation(): void {
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
}

export { Soldier }
