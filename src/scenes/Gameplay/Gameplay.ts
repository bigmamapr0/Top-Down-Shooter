import { Player } from "../../actors/Player";
import { CharacterInput } from "../../util/CharacterInput";
import { BulletGroup } from "../../props/BulletGroup";
import { Bullet } from "../../props/Bullet";
import { Soldier } from "../../actors/enemies/Soldier";
import { Helicopter } from "../../actors/enemies/Helicopter";
import { Acs } from "../../actors/enemies/Acs";
import { Bomber } from "../../actors/enemies/Bomber";

class Gameplay extends Phaser.Scene {

    keys: CharacterInput;
    player: Player;
    movementSpeed: any = 100;

    bullet: Bullet;
    bulletGroup: BulletGroup;

    private soldier: Soldier;
    private acs: Acs;
    private helicopter: Helicopter;
    private bomber: Bomber;

    

    
    constructor() {
        super("gameplay");
    }


    
    create() {
        this.keys = new CharacterInput(this);
        this.bulletGroup = new BulletGroup(this);

        this.player = new Player(this, 200, 200, "playerIdleRifle", "survivor-idle_rifle_4");
        this.add.existing(this.player);
        this.physics.add.existing(this.player);

        this.player.setCollideWorldBounds(true);

        this.soldier = new Soldier(this, 100, 100);
        this.add.existing(this.soldier);

        this.acs = new Acs(this, 300, 500);
        this.add.existing(this.acs);

        this.helicopter = new Helicopter(this, 300, 800);
        this.helicopter.anims.play("helicopterRotor");
        this.add.existing(this.helicopter);

        
        this.bomber = new Bomber(this, 800, 200);
        this.add.existing(this.bomber);

        this.shooting();
    }

    public get playerPosition(): Phaser.Math.Vector2 {
        return new Phaser.Math.Vector2(this.player.x, this.player.y);
    }

    shooting() {
        this.keys.space.on('down', () => {
            this.shootBullets();
        })
    }

    shootBullets() {
        this.bulletGroup.fireBullet(this.player.x, this.player.y);
    }

    update() {
        this.player.update();
        this.soldier.update();
        this.acs.update();
    }
}

export { Gameplay };