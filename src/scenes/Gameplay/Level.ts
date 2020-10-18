import { CharacterInput } from "../../util/CharacterInput";
import { Soldier } from "../../actors/enemies/Soldier";
import { Helicopter } from "../../actors/enemies/Helicopter";

class Level extends Phaser.Scene {
    private soldier: Soldier;
    private helicopter: Helicopter;
    private keys: CharacterInput;

    constructor() {
        super("level");
    }

    create() {
        this.keys = new CharacterInput(this);
        
        this.soldier = new Soldier(this, 100, 100);
        this.add.existing(this.soldier);

                
        this.helicopter = new Helicopter(this, 300, 100);
        this.add.existing(this.helicopter);

        this.time.addEvent({
            delay: 1000,
            callback: this.soldier_die,
            callbackScope: this,
            loop: true
        });
    }

    private soldier_die() {
        this.soldier.anims.play("soldierDeath");
    }    
}

export { Level }
