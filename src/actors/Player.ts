import { CharacterInput } from "../util/CharacterInput";

class Player extends Phaser.Physics.Arcade.Sprite {
    
    player: Player;
    
    baseSpeed: number = 250;
    movementSpeed: number = 250;
    sprintSpeedAdded: number = 450;
    
    keys: CharacterInput;

    constructor(scene: Phaser.Scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        this.scene.anims.create({
            key: "idleRifle",
            frameRate: 10,
            frames: this.scene.anims.generateFrameNames("playerIdleRifle", {
                prefix: "survivor-idle_rifle_",
                start: 0,
                end: 19
            }),
            repeat: -1
        });

        this.scene.anims.create({
            key: "walkRifle",
            frameRate: 10,
            frames: this.scene.anims.generateFrameNames("playerWalkRifle", {
                prefix: "survivor-move_rifle_",
                start: 0,
                end: 19
            }),
            repeat: -1
        });
        
        this.keys = new CharacterInput(this.scene);

        this.play("idleRifle");
    }

    public update(): void {
        this.playerMovement();
    }

    public playerMovement(): void {
        this.setVelocity(0, 0);

        if (this.keys.w.isDown) {
            if (this.angle > 0){
                this.setVelocityY(this.rotation * 100);
            } else if (this.angle < 0) {
                this.setVelocityY(this.rotation * 100);
            }

            if(this.angle > -90 && this.angle < 90) {
                this.setVelocityX(this.movementSpeed);
            } else {
                this.setVelocityX(-this.movementSpeed);
            }
        } else if (this.keys.s.isDown) {
            this.setVelocityY(this.angle);
        }

        if (this.keys.a.isDown) {
            this.angle += -1;
        } else if (this.keys.d.isDown) {
            this.angle += 1;
        }

        if (this.keys.shift.isDown) {
            this.movementSpeed = this.sprintSpeedAdded;
        } else if (this.keys.shift.isUp) {
            this.movementSpeed = this.baseSpeed;
        }
    }
}

export { Player }