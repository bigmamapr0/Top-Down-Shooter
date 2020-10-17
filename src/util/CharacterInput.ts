class CharacterInput {

    public w?: Phaser.Input.Keyboard.Key;
    public s?: Phaser.Input.Keyboard.Key;
    public a?: Phaser.Input.Keyboard.Key;
    public d?: Phaser.Input.Keyboard.Key;

    public space?: Phaser.Input.Keyboard.Key;
    public shift?: Phaser.Input.Keyboard.Key;

    constructor(scene: Phaser.Scene) {
        this.w = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.s = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.a = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.d = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.space = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.shift = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
    }
}

export { CharacterInput };