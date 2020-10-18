import { CustomKeyboardInput } from "../utils/CustomKeyboardInput";
import { Soldier } from "../enemies/Soldier";
import { Helicopter } from "../enemies/Helicopter";

class Level extends Phaser.Scene {
    private soldier: Soldier;
    private helicopter: Helicopter;
    private keys: CustomKeyboardInput;

    constructor() {
        super("level");
    }

    create() {
        this.keys = new CustomKeyboardInput(this);
        
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
