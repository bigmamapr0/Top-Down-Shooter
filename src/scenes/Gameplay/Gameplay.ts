import { Player } from "../../actors/Player";
import { CharacterInput } from "../../util/CharacterInput";
import { BulletGroup } from "../../props/BulletGroup";
import { Bullet } from "../../props/Bullet";
import { Soldier } from "../../actors/enemies/Soldier";

class Gameplay extends Phaser.Scene {

    keys: CharacterInput;
    player: Player;
    movementSpeed: any = 100;

    bullet: Bullet;
    bulletGroup: BulletGroup;

    solider: Soldier;

    constructor() {
        super("gameplay");
    }

    public get playerPosition(): Phaser.Math.Vector2 {
        return new Phaser.Math.Vector2(this.player.x, this.player.y);
    }
    
    create() {
        this.keys = new CharacterInput(this);
        this.bulletGroup = new BulletGroup(this);

        this.player = new Player(this, 200, 200, "playerIdleRifle", "survivor-idle_rifle_4");
        this.add.existing(this.player);
        this.physics.add.existing(this.player);

        this.player.setCollideWorldBounds(true);

        this.shooting();

        this.solider = new Soldier(this, 500, 300, 100);
        this.add.existing(this.solider);
    }

    shooting() {
        this.keys.space.on('down', () => {
            this.shootBullets();
            console.log(321);
        })
    }

    shootBullets() {
        this.bulletGroup.fireBullet(this.player.x, this.player.y);
    }

    update() {
        this.player.update();
    }
}

export { Gameplay };