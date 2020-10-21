class Bullet extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, "bullet");
    }

    fire(x, y) {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

        // this.setVelocity(750);
        this.scene.physics.moveTo(this, this.scene.input.mousePointer.x, this.scene.input.mousePointer.y, 150);
    }
}

export { Bullet }