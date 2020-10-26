import { Enemy } from "./Enemy";
import { Soldier } from "./Soldier";
import { Helicopter } from "./Helicopter";
import { Acs } from "./Acs";
import { Bomber } from "./Bomber";
import { SmallBomber } from "./SmallBomber";
import { Difficulty } from "../../scenes/MainMenuScenes/Difficulty";

class EnemyDistribution {
    private scene: Phaser.Scene;

    private enemiesSolider: Soldier[];
    private enemiesACS: Acs[];
    private enemiesHelicopter: Helicopter[];
    private enemiesBomber: Bomber[];
    private enemiesSmallBomber: SmallBomber[];

    private difficulty: any;
    public enemyDifficulty: number = 1;
    
    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        
        this.enemiesSolider = [];
        this.enemiesACS = [];
        this.enemiesHelicopter = [];
        this.enemiesBomber = [];
        this.enemiesSmallBomber = [];
        
        this.startEnemy();
    }

    public get getEnemiesSolider(): Soldier[] {
        return this.enemiesSolider;
    }

    public get getEnemiesACS(): Acs[] {
        return this.enemiesACS;
    }

    public get getEnemiesHelicopter(): Helicopter[] {
        return this.enemiesHelicopter;
    }

    public get getEnemiesBomber(): Bomber[] {
        return this.enemiesBomber;
    }

    public get getEnemiesSmallBomber(): SmallBomber[] {
        return this.enemiesSmallBomber;
    }
    
    public startEnemy(): void {
        this.difficulty = (<Difficulty>this.scene.scene.get("difficulty")).hardMode;

        if (this.difficulty) {
            this.enemyDifficulty = 3;
        } else {
            this.enemyDifficulty = 1;
        }

        // WAVE 1
        let spawnWave1 = setInterval(() => {
            this.wave1();
            clearInterval(spawnWave1);
        }, 1000);

        // WAVE 2
        let spawnWave2 = setInterval(() => {
            this.wave2();
            clearInterval(spawnWave2);
        }, 3000);

    }

    private wave1(): void {
        for (let i=0; i < 5; i++) {
            let solider = new Soldier(this.scene, Phaser.Math.Between(50, (<number>window.innerWidth) - 50), Phaser.Math.Between(50, (<number>window.innerHeight) - 50), this.enemyDifficulty);
            this.enemiesSolider.push(solider);
            this.scene.add.existing(solider);
        }
    }

    private wave2(): void {
        for (let i=0; i < 5; i++) {
            let acs = new Acs(this.scene, Phaser.Math.Between(50, (<number>window.innerWidth) - 50), Phaser.Math.Between(50, (<number>window.innerHeight) - 50), this.enemyDifficulty);
            this.enemiesACS.push(acs);
            this.scene.add.existing(acs);
        }
    }

    public update(): void {
        for (let enemy of this.enemiesSolider ) {
            if(enemy.hitPoints > 0) {
                enemy.update();
            }
        }
        
        for (let enemy of this.enemiesACS ) {
            if(enemy.hitPoints > 0) {
                enemy.update();
            }
        }
    }
}

export { EnemyDistribution }