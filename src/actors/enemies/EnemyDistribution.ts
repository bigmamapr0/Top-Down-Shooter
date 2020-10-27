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

    public get allEnemyWeapons(): Phaser.Physics.Arcade.Group[] {
        let result: Phaser.Physics.Arcade.Group[] = [];
        for (let e of this.enemiesSolider) {
            result.push(e.getWeapon())
        }

        for (let e of this.enemiesACS) {
            result.push(e.getWeapon())
        }

        for (let e of this.enemiesHelicopter) {
            result.push(e.getWeapon())
        }

        for (let e of this.enemiesBomber) {
            result.push(e.getWeapon())
        }

        for (let e of this.enemiesSmallBomber) {
            result.push(e.getWeapon())
        }

        return result;
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
            this.spawnSoliders(1);
            this.spawnAcs(1);
            this.spawnBomber(1);
            this.spawnHelicopter(1);
            this.spawnSmallBomber(1);
            clearInterval(spawnWave1);
        }, 150);

    }

    private spawnSoliders(spawnEnemyNumber): void {
        for (let i=0; i < spawnEnemyNumber; i++) {
            let solider = new Soldier(this.scene, Phaser.Math.Between(50, (<number>window.innerWidth) - 50), Phaser.Math.Between(50, (<number>window.innerHeight) - 50), this.enemyDifficulty);
            this.enemiesSolider.push(solider);
            this.scene.add.existing(solider);
        }
    }

    private spawnAcs(spawnEnemyNumber): void {
        for (let i=0; i < spawnEnemyNumber; i++) {
            let acs = new Acs(this.scene, Phaser.Math.Between(50, (<number>window.innerWidth) - 50), Phaser.Math.Between(50, (<number>window.innerHeight) - 50), this.enemyDifficulty);
            this.enemiesACS.push(acs);
            this.scene.add.existing(acs);
        }
    }

    private spawnBomber(spawnEnemyNumber): void {
        for (let i=0; i < spawnEnemyNumber; i++) {
            let bomber = new Bomber(this.scene, Phaser.Math.Between(50, (<number>window.innerWidth) - 50), Phaser.Math.Between(50, (<number>window.innerHeight) - 50), this.enemyDifficulty);
            this.enemiesBomber.push(bomber);
            this.scene.add.existing(bomber);
        }
    }

    private spawnHelicopter(spawnEnemyNumber): void {
        for (let i=0; i < spawnEnemyNumber; i++) {
            let helicopter = new Helicopter(this.scene, Phaser.Math.Between(50, (<number>window.innerWidth) - 50), Phaser.Math.Between(50, (<number>window.innerHeight) - 50), this.enemyDifficulty);
            this.enemiesHelicopter.push(helicopter);
            this.scene.add.existing(helicopter);
        }
    }

    private spawnSmallBomber(spawnEnemyNumber): void {
        for (let i=0; i < spawnEnemyNumber; i++) {
            let smallBomber = new SmallBomber(this.scene, Phaser.Math.Between(50, (<number>window.innerWidth) - 50), Phaser.Math.Between(50, (<number>window.innerHeight) - 50), this.enemyDifficulty);
            this.enemiesSmallBomber.push(smallBomber);
            this.scene.add.existing(smallBomber);
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

        for (let enemy of this.enemiesBomber ) {
            if(enemy.hitPoints > 0) {
                enemy.update();
            }
        }

        for (let enemy of this.enemiesHelicopter ) {
            if(enemy.hitPoints > 0) {
                enemy.update();
            }
        }

        for (let enemy of this.enemiesSmallBomber ) {
            if(enemy.hitPoints > 0) {
                enemy.update();
            }
        }
    }
}

export { EnemyDistribution }