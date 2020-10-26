import { Enemy } from "./Enemy";
import { BomberBulletWeapon } from "../../props/enemy/BomberBulletWeapon";
import { Gameplay } from "../../scenes/Gameplay/Gameplay";

class Bomber extends Enemy {
    public hitPoints: number = 2;

    private playerPos: Phaser.Math.Vector2;
    public angle: number;

    private readonly shotDelay: number = 1000;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number, rotation?: number) {
        super(scene, x, y, "enemies", "bomberComplete")
        
        this.hitPoints *= hp;

        this.setSize(100, 200);

        this.setWeapon(new BomberBulletWeapon(this.scene));

        this.startAttacking();
        
        this.update();
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
            this.BomberRotation();
        }
    }

    private BomberRotation(): void {
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
    
            this.scene.time.addEvent({
                delay: 150,
                callback: () => {
                    super.destroy();
                }
            });
        }
    }
}

export { Bomber }
