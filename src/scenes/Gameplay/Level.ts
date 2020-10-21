import { CharacterInput } from "../../util/CharacterInput";
import { Soldier } from "../../actors/enemies/Soldier";
import { Helicopter } from "../../actors/enemies/Helicopter";
import { Acs } from "../../actors/enemies/Acs";
import { Player } from "../../actors/Player";

class Level extends Phaser.Scene {


    private helicopter: Helicopter;
    private keys: CharacterInput;

    private player: Player;

    private soldier: Soldier;
    private soldier2: Soldier;
    private soldier3: Soldier;

    private acs: Acs;

    constructor() {
        super("level");
    }

    create() {
        this.keys = new CharacterInput(this);

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
        this.acs.destroy();
    }

    update() {
        this.player.update();
        this.soldier.update();
        this.soldier2.update();
        this.soldier3.update();
    }
}

export { Level }
