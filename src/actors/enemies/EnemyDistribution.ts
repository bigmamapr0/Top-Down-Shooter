import { Enemy } from "./Enemy";
import { Soldier } from "./Soldier";
import { Helicopter } from "./Helicopter";
import { Acs } from "./Acs";
import { Bomber } from "./Bomber";
import { SmallBomber } from "./SmallBomber";
import { Difficulty } from "../../scenes/MainMenuScenes/Difficulty";

class EnemyDistribution {

    private scene: Phaser.Scene;
    private enemiesArr: Enemy[];

    private soldier: Soldier;
    private soldier2: Soldier;
    private acs: Acs;
    private helicopter: Helicopter;
    private bomber: Bomber;
    private smallBomber: SmallBomber;

    private difficulty: any;
    public enemyDifficulty: number = 1;
    
    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        
        this.enemiesArr = [];
        
        this.startEnemy();
    }
    
    public startEnemy(): void {

        this.difficulty = (<Difficulty>this.scene.scene.get("difficulty")).hardMode;

        if (this.difficulty) {
            this.enemyDifficulty = 3;
        } else {
            this.enemyDifficulty = 1;
        }

        this.soldier = new Soldier(this.scene, 100, 100, this.enemyDifficulty);
        this.scene.add.existing(this.soldier);
        
        this.soldier2 = new Soldier(this.scene, 400, 100, this.enemyDifficulty);
        this.scene.add.existing(this.soldier2);
        
        this.acs = new Acs(this.scene, 300, 500, this.enemyDifficulty, 180);
        this.scene.add.existing(this.acs);
        
        this.helicopter = new Helicopter(this.scene, 300, 800, this.enemyDifficulty);
        this.helicopter.anims.play("helicopterRotor");
        this.scene.add.existing(this.helicopter);
        
        this.bomber = new Bomber(this.scene, 800, 200, this.enemyDifficulty, 180);
        this.scene.add.existing(this.bomber);
        
        this.smallBomber = new SmallBomber(this.scene, 500, 500, this.enemyDifficulty, 180);
        this.scene.add.existing(this.smallBomber);

        console.log(
            "Hard Mode: " + this.difficulty + "\n",
            "solider hp: " + this.soldier.hitPoints + "\n",
            "acs hp: " + this.acs.hitPoints + "\n",
            "helicopter hp: " + this.helicopter.hitPoints + "\n",
            "bomber hp: " + this.bomber.hitPoints + "\n",
            "smallBomber hp: " + this.smallBomber.hitPoints + "\n"
        );
    }

    public update(): void {
        this.soldier.update();
        this.soldier2.update();
        this.acs.update();
    }
}

export { EnemyDistribution }