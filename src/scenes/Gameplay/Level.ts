import { CharacterInput } from "../../util/CharacterInput";
import { Soldier } from "../../actors/enemies/Soldier";
import { Helicopter } from "../../actors/enemies/Helicopter";
import { Acs } from "../../actors/enemies/Acs";
import { Bomber } from "../../actors/enemies/Bomber";
import { Player } from "../../actors/Player";

class Level extends Phaser.Scene {


    private helicopter: Helicopter;
    private keys: CharacterInput;

    private player: Player;

    private soldier: Soldier;
    private soldier2: Soldier;
    private soldier3: Soldier;

    private acs: Acs;

    private mouse: Phaser.Input.Pointer;
    public input: Phaser.Input.InputPlugin;

    private bomber: Bomber;
    constructor() {
        super("level");
    }

    create() {
        this.keys = new CharacterInput(this);
        this.mouse = this.input.mousePointer;

        this.player = new Player(this, 200, 200, "playerIdleRifle", "survivor-idle_rifle_4");
        this.add.existing(this.player);
        this.physics.add.existing(this.player);

        this.player.setCollideWorldBounds(true);
        
        this.soldier = new Soldier(this, 100, 100);
        this.add.existing(this.soldier);

        this.soldier2 = new Soldier(this, 100, 300);
        this.add.existing(this.soldier2);

        this.soldier3 = new Soldier(this, 100, 500);
        this.add.existing(this.soldier3);

        this.acs = new Acs(this, 300, 500);
        this.add.existing(this.acs);

        this.helicopter = new Helicopter(this, 300, 100);
        this.helicopter.anims.play("helicopterRotor");
        this.add.existing(this.helicopter);

        // this.bomber = new Bomber(this, 800, 200);
        // this.add.existing(this.bomber);

        this.time.addEvent({
            delay: 1000,
            callback: this.soldier_die,
            callbackScope: this,
        });
    }


    public get playerPosition(): Phaser.Math.Vector2 {
        return new Phaser.Math.Vector2(this.player.x, this.player.y);
    }

    private soldier_die() {
        //this.soldier.anims.play("soldierDeath");
        //this.acs.destroy();
    }

    update() {
        if (this.mouse.isDown) {
            let bullet = this.physics.add.sprite(this.player.x, this.player.y, "enemies", "soldierBullet");

            let angleBullet = Phaser.Math.Angle.Between(this.player.x, this.player.y, this.input.x, this.input.y);
            bullet.setRotation(angleBullet+1.5708);
            this.physics.moveTo(bullet, this.input.x, this.input.y, 100);
        }

        this.player.update();
        this.soldier.update();
        this.soldier2.update();
        this.soldier3.update();
        this.acs.update();
    }
}

export { Level }
