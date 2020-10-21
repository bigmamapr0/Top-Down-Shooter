import { Player } from "../../actors/Player";
import { CharacterInput } from "../../util/CharacterInput";
import { BulletGroup } from "../../props/BulletGroup";
import { Bullet } from "../../props/Bullet";

class Gameplay extends Phaser.Scene {

    keys: CharacterInput;
    player: Player;
    movementSpeed: any = 100;

    bullet: Bullet;
    bulletGroup: BulletGroup;

    constructor() {
        super("gameplay");
    }

    public get playerPosition(): Phaser.Math.Vector2 {
        return new Phaser.Math.Vector2(this.player.x, this.player.y);
    }

    public get playerRotation(): Phaser.Math.Vector2 {
        return new Phaser.Math.Vector2(this.player.rotation);
    }
    
    create() {
        this.keys = new CharacterInput(this);
        this.bulletGroup = new BulletGroup(this);

        this.player = new Player(this, 200, 200, "playerIdleRifle", "survivor-idle_rifle_4");
        this.add.existing(this.player);
        this.physics.add.existing(this.player);

        this.player.setCollideWorldBounds(true);

        this.shooting();
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