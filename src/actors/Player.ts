import { CharacterInput } from "../util/CharacterInput";

class Player extends Phaser.Physics.Arcade.Sprite {
    
    player: Player;
    
    keys: CharacterInput;
    
    angle: number;
    
    baseSpeed: number = 250;
    movementSpeed: number = 250;
    sprintSpeedAdded: number = 450;

    hp: number = 100;
    hpText: Phaser.GameObjects.Text;
    money: number = 280;
    moneyText: Phaser.GameObjects.Text;
    attributesRectangleHP: Phaser.GameObjects.Rectangle;
    attributesRectangleMoney: Phaser.GameObjects.Rectangle;

    public emitter: Phaser.Events.EventEmitter;

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
        this.setScale(0.25);

        this.keys = new CharacterInput(this.scene);

        this.play("idleRifle");
        this.playerAttributesSystem();

        this.emitter = new Phaser.Events.EventEmitter();

        this.keys.escape.on("down", this.onEscPress, this);
    }

    public update(): void {
        this.playerMovement();
        this.playerFacingMouse();
        this.updateHealthSystem();
    }

    private playerAttributesSystem(): void {
        this.hpText = this.scene.add.text(20, 20, `HP: ${this.hp}`, { fontSize: "20px", padding: "5px" }).setDepth(10);
        this.moneyText = this.scene.add.text(145, 20, `MONEY: $${this.money}`, { fontSize: "20px", padding: "5px" }).setDepth(10);
        
        this.hpText.setPadding(10, 10, 10, 10);
        this.moneyText.setPadding(10, 10, 10, 10);

        this.attributesRectangleHP = this.scene.add.rectangle(this.hpText.x, this.hpText.y, this.hpText.width + 5, this.hpText.height, 0xff0000, 0.2).setOrigin(0, 0).setDepth(9);
        this.attributesRectangleMoney = this.scene.add.rectangle(this.moneyText.x, this.moneyText.y, this.moneyText.width + 5, this.moneyText.height, 0xb4cfb4, 0.2).setOrigin(0, 0).setDepth(9);
        
        this.attributesRectangleHP.setStrokeStyle(2, 0x15ff00);
        this.attributesRectangleMoney.setStrokeStyle(2, 0xffffff);
    }

    private updateHealthSystem() {
        if (this.hp > 80) {
            this.attributesRectangleHP.setStrokeStyle(2, 0x15ff00);
        }

        if (this.hp > 60 && this.hp < 80) {
            this.attributesRectangleHP.setStrokeStyle(2, 0xffff6e);
        }

        if (this.hp > 40 && this.hp < 60) {
            this.attributesRectangleHP.setStrokeStyle(2, 0xfcc45b);
        }

        if (this.hp > 20 && this.hp < 40) {
            this.attributesRectangleHP.setStrokeStyle(2, 0xff4a26);
        }

        if (this.hp >= 0 && this.hp < 20) {
            this.attributesRectangleHP.setStrokeStyle(2, 0x8f0101);
        }
    }

    private playerFacingMouse(): void {
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

        if (this.keys.shift.isDown) {	
            this.movementSpeed = this.sprintSpeedAdded;	
        } else if (this.keys.shift.isUp) {	
            this.movementSpeed = this.baseSpeed;	
        }
    }

    private onEscPress(): void {
        this.emitter.emit("escPressed");
    }
}

export { Player }