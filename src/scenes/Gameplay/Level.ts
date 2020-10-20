import { CharacterInput } from "../../util/CharacterInput";
import { Soldier } from "../../actors/enemies/Soldier";
import { Helicopter } from "../../actors/enemies/Helicopter";
import { Player } from "../../actors/Player";

class Level extends Phaser.Scene {


    private helicopter: Helicopter;
    private keys: CharacterInput;

    private player: Player;
    movementSpeed: any = 100;

    private soldier: Soldier;

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


        this.helicopter = new Helicopter(this, 300, 100);
        this.helicopter.anims.play("helicopterRotor");
        this.add.existing(this.helicopter);

        this.time.addEvent({
            delay: 1000,
            callback: this.soldier_die,
            callbackScope: this,
            loop: true
        });
    }


    public get playerPosition(): Phaser.Math.Vector2 {
        return new Phaser.Math.Vector2(this.player.x, this.player.y);
    }

    private soldier_die() {
        //this.soldier.anims.play("soldierDeath");
    }

    update() {
        this.player.update();
        this.soldier.update();
    }
}

export { Level }
