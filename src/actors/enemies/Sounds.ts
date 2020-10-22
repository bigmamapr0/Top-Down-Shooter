class Sounds {
    private scene: Phaser.Scene;

    private soundConfig: {};    

    constructor(scene: Phaser.Scene) {
        this.scene = scene;

        this.soundConfig = { volume: 0.2 };
    }

    public acsExplosion1Sound(): void {
        let acsExplosion1 = this.scene.sound.add("explosion1", this.soundConfig);
        acsExplosion1.play();
    }

    public acsExplosion2Sound(): void {
        let acsExplosion2 = this.scene.sound.add("explosion2", this.soundConfig);
        acsExplosion2.play();
    }

    public playerAttackSound(): void {
        let soldierAttack = this.scene.sound.add("gunshot1", this.soundConfig);
        soldierAttack.play();
    }

    public soldierAttackSound(): void {
        let soldierAttack = this.scene.sound.add("gunshot2", this.soundConfig);
        soldierAttack.play();
    }
}

export { Sounds }
