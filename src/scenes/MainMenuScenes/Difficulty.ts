class Difficulty extends Phaser.Scene {

    easy: any;
    hard: any;

    static easyHp: number = 100;
    static easyEnemyFireRate: number;

    static hardHp: number = 250;
    static hardEnemyFireRate: number;

    constructor() {
        super("difficulty");
    }

    create() {
        
    }
}

export { Difficulty };