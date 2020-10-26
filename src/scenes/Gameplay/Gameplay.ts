import { Player } from "../../actors/Player";
import { Enemy } from "../../actors/enemies/Enemy";
import { CharacterInput } from "../../util/CharacterInput";
import { BulletGroup } from "../../props/BulletGroup";
import { Bullet } from "../../props/Bullet";
import { EnemyDistribution } from "../../actors/enemies/EnemyDistribution";

class Gameplay extends Phaser.Scene {

    keys: CharacterInput;
    player: Player;
    movementSpeed: any = 100;

    bullet: Bullet;
    bulletGroup: BulletGroup;

    private enemyDistribution: EnemyDistribution;
   
    constructor() {
        super("gameplay");
    }

    public get playerPosition(): Phaser.Math.Vector2 {
        return new Phaser.Math.Vector2(this.player.x, this.player.y);
    }
 
    create() {
        this.keys = new CharacterInput(this);
        this.bulletGroup = new BulletGroup(this);

        this.player = new Player(this, window.innerWidth / 2, window.innerHeight / 2, "playerIdleRifle", "survivor-idle_rifle_4");
        this.add.existing(this.player);
        this.physics.add.existing(this.player);

        this.player.setCollideWorldBounds(true);

        this.player.emitter.on("escPressed", this.onEscPressed, this);

        this.shooting();

        this.enemyDistribution = new EnemyDistribution(this);

        this.initCollisions();
    }

    private initCollisions(): void {
        this.physics.add.collider(this.bulletGroup, this.enemyDistribution.getEnemiesSolider, this.onPlayerBulletCollision, null, this)
        this.physics.add.collider(this.bulletGroup, this.enemyDistribution.getEnemiesACS, this.onPlayerBulletCollision, null, this)
        this.physics.add.collider(this.bulletGroup, this.enemyDistribution.getEnemiesBomber, this.onPlayerBulletCollision, null, this)
    }

    private onPlayerBulletCollision(enemy: Enemy): void {
        enemy.destroy();
    }

    private onEscPressed(): void {
        this.scene.pause();
        this.scene.launch("pauseMenu");
    }

    shooting() {
        this.keys.space.on('down', () => {
            this.shootBullets();
        })
    }

    shootBullets() {
        this.sound.play("gunshot1");
        this.bulletGroup.fireBullet(this.player.x, this.player.y);
    }

    update() {
        this.player.update();
        this.enemyDistribution.update();
        this.initCollisions();
    }    
}

export { Gameplay };