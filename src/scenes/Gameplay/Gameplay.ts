import { Player } from "../../actors/Player";
import { CharacterInput } from "../../util/CharacterInput";
import { BulletGroup } from "../../props/BulletGroup";
import { Bullet } from "../../props/Bullet";
import { EnemyDistribution } from "../../actors/enemies/EnemyDistribution";

class Gameplay extends Phaser.Scene {

    keys: CharacterInput;
    player: Player;
    movementSpeed: any = 100;

    bullet: Bullet;
    bulletGroup: BulletGroup;

    private enemyDistribution: EnemyDistribution;

    private map: Phaser.Tilemaps.Tilemap;
    
    constructor() {
        super("gameplay");
    }

    public get playerPosition(): Phaser.Math.Vector2 {
        return new Phaser.Math.Vector2(this.player.x, this.player.y);
    }
 
    create() {
        this.keys = new CharacterInput(this);
        this.bulletGroup = new BulletGroup(this);

        this.player = new Player(this, 200, 200, "playerIdleRifle", "survivor-idle_rifle_4");
        this.add.existing(this.player);
        this.physics.add.existing(this.player);

        this.player.setCollideWorldBounds(true);

        // this.map = this.make.tilemap({ key: "map" });

        // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
        // Phaser's cache (i.e. the name you used in preload)
        // let tileset: Phaser.Tilemaps.Tileset = this.map.addTilesetImage("tiles", "tiles");

        // Parameters: layer name (or index) from Tiled, tileset, x, y
        // let backgroudLayer: Phaser.Tilemaps.StaticTilemapLayer = this.map.createStaticLayer("Backgrond", [tileset], 0, 0);

        this.shooting();

        this.enemyDistribution = new EnemyDistribution(this);

    }


    shooting() {
        this.keys.space.on('down', () => {
            this.shootBullets();
        })
    }

    shootBullets() {
        this.bulletGroup.fireBullet(this.player.x, this.player.y);
    }

    update() {
        this.player.update();
        this.enemyDistribution.update();

        this.physics.add.overlap(this.bulletGroup, this.player, this.destroy, null, this);
    }

    
    destroy(): void {

        
    }
}

export { Gameplay };