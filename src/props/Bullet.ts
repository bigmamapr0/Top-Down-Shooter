class Bullet extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, "playerBullet");
    }

    fire(x, y) {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);
        this.setSize(0.5, 0.5);
        this.setImmovable(true);
        
        this.scene.physics.moveTo(this, this.scene.input.mousePointer.x, this.scene.input.mousePointer.y, 750);
    }
}

export { Bullet }