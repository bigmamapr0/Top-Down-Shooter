import { Player } from "../../actors/Player";
import { Enemy } from "../../actors/enemies/Enemy";
import { CharacterInput } from "../../util/CharacterInput";
import { Bullet } from "../../props/Bullet";
import { EnemyDistribution } from "../../actors/enemies/EnemyDistribution";
import { BulletGroup } from "../../props/BulletGroup";

class Gameplay extends Phaser.Scene {

    keys: CharacterInput;
    player: Player;
    movementSpeed: any = 100;

    bullet: Bullet;
    bulletGroup: BulletGroup;
    enemyBullets;

    score: number;
    scoreText: Phaser.GameObjects.Text;

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

        this.player.setImmovable(true);
        this.player.setSize(150, 150);
        this.player.setCollideWorldBounds(true);

        this.player.emitter.on("escPressed", this.onEscPressed, this);

        this.shooting();

        this.enemyDistribution = new EnemyDistribution(this);

        this.initCollisions();

        this.score = 0;
        this.scoreText = this.add.text(this.cameras.main.centerX, 50, `SCORE: ${this.score}`, { fontSize: "50px" }).setOrigin(0.5, 0.5);
    }

    private initCollisions(): void {
        this.physics.add.collider(this.bulletGroup, this.enemyDistribution.getEnemiesSolider, this.onPlayerBulletCollision, null, this);
        this.physics.add.collider(this.bulletGroup, this.enemyDistribution.getEnemiesACS, this.onPlayerBulletCollision, null, this);
        this.physics.add.collider(this.bulletGroup, this.enemyDistribution.getEnemiesBomber, this.onPlayerBulletCollision, null, this);
        this.physics.add.collider(this.bulletGroup, this.enemyDistribution.getEnemiesHelicopter, this.onPlayerBulletCollision, null, this);
        this.physics.add.collider(this.bulletGroup, this.enemyDistribution.getEnemiesSmallBomber, this.onPlayerBulletCollision, null, this);
    }

    private onPlayerBulletCollision(enemy: Enemy, bullet: Bullet): void {
        enemy.destroy();
        bullet.destroy();

        enemy.setTint(0xfc3632);
        setInterval(() => {
            enemy.setTint(0xffffff);
        }, 150)

        this.score += 10;
        this.scoreText.text = `SCORE: ${this.score}`;
    }

    private onEnemyBulletCollision(player: Player, bullet): void {
        this.player.hp--;
        this.player.hpText.text = `HP: ${this.player.hp}`;
        
        player.setTint(0xfc3632);
        setInterval(() => {
            player.setTint(0xffffff);
        }, 400)

        bullet.destroy();

        if (this.player.hp <= 0) {
            alert("game over");
        }
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
        let allEnemyWeaponGroups: Phaser.Physics.Arcade.Group[] = this.enemyDistribution.allEnemyWeapons

        for (this.enemyBullets of allEnemyWeaponGroups) {
            if (this.enemyBullets) {
                this.physics.add.collider(this.enemyBullets, this.player, this.onEnemyBulletCollision, null, this);
            }
        }

        this.player.update();
        this.enemyDistribution.update();
        this.initCollisions();
    }    
}

export { Gameplay };