import { CharacterInput } from "../util/CharacterInput";

class Player extends Phaser.Physics.Arcade.Sprite {
    
    player: Player;
    
    baseSpeed: number = 250;
    movementSpeed: number = 250;
    sprintSpeedAdded: number = 450;
    
    keys: CharacterInput;

    angle: any;

    constructor(scene: Phaser.Scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        this.setScale(0.5);

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
            frameRate: 25,
            frames: this.scene.anims.generateFrameNames("playerWalkRifle", {
                prefix: "survivor-move_rifle_",
                start: 0,
                end: 19
            }),
            repeat: -1
        });
        
        this.setOrigin(0.5);

        this.keys = new CharacterInput(this.scene);

        this.play("idleRifle");
    }

    public update(): void {
        this.playerMovement();
        this.playerFacingMouse();
    }

    public playerFacingMouse(): void {
        this.scene.input.on('pointermove', this.playerRotation,this)
    }
    
    private playerRotation(pointer): void {
        this.angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.x, this.y, pointer.x, pointer.y);
        this.setAngle(this.angle);
    }
    
    public playerMovement(): void {
        this.setVelocity(0, 0);
        
        if (this.keys.w.isDown) {
            this.setVelocityY(-this.movementSpeed);
            this.setAngle(this.angle);
        } else if (this.keys.s.isDown) {
            this.setVelocityY(this.movementSpeed);
            this.setAngle(this.angle);
        }

        if (this.keys.a.isDown) {
            this.setVelocityX(-this.movementSpeed);
            this.setAngle(this.angle);
        } else if (this.keys.d.isDown) {
            this.setVelocityX(this.movementSpeed);
            this.setAngle(this.angle);
        }
        if (this.keys.w.isDown || this.keys.s.isDown || this.keys.a.isDown || this.keys.d.isDown) {
            this.play("walkRifle", true);
        } else {
            this.play("idleRifle", true);
        }
    }
}

export { Player }