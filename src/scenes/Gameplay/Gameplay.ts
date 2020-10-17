import { Player } from "../../actors/Player";

class Gameplay extends Phaser.Scene {

    player: Player;

    constructor() {
        super("gameplay");
    }

    create() {
        let player = new Player(this, 200, 200, "playerIdleRifle", "survivor-idle_rifle_4");
        this.add.existing(player);
        
        player.anims.play("idleRifle");
        
    }
}

export { Gameplay };