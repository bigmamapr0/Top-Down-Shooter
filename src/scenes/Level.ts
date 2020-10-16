import { CustomKeyboardInput } from "../utils/CustomKeyboardInput";
import { Soldier } from "../enemies/Soldier"

class Level extends Phaser.Scene {
    private soldier: Soldier;
    
    private keys: CustomKeyboardInput;

    constructor() {
        super("level");
    }

    create() {
        this.keys = new CustomKeyboardInput(this);
        
        this.soldier = new Soldier(this, 100, 100);
        this.add.existing(this.soldier);

        this.time.addEvent({
            delay: 1000,
            callback: this.soldier_die,
            callbackScope: this,
            loop: true
        });
    }

    private soldier_die() {
        this.soldier.anims.play("soldier_death");
    }    
}

export { Level }
