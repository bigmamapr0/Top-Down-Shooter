import { Player } from "../../actors/Player";
import { CharacterInput } from "../../util/CharacterInput";

class Gameplay extends Phaser.Scene {

    keys: CharacterInput;
    player: Player;
    movementSpeed: any = 100;

    constructor() {
        super("gameplay");
    }

    create() {
        this.player = new Player(this, 200, 200, "playerIdleRifle", "survivor-idle_rifle_4");
        this.add.existing(this.player);
        this.physics.add.existing(this.player);

        this.player.setCollideWorldBounds(true);
    }

    update() {
        this.player.update();
    }
}

export { Gameplay };