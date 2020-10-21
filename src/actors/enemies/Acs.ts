import { Enemy } from "./Enemy";
import { Sounds } from "./Sounds";


class Acs extends Enemy {
    protected hitPoints: number;
        private achievementSoundP1: Sounds;
        private achievementSoundConfig: {};
        private sound: Sounds;

    constructor(scene: Phaser.Scene, x: number, y: number, hp: number = 3) {
        super(scene, x, y, "enemies", "acsComplete")
        
        this.hitPoints = hp;
        this.sound = new Sounds(scene);

        this.scene.anims.create({
            key: "acsDestroy",
            frames: this.scene.anims.generateFrameNames("enemies", { prefix: "acsBaseBroken", start: 1, end: 2 }),
            frameRate: 2,
            hideOnComplete: true
        });
    }

    public get isAlive(): boolean {
        return this.hitPoints > 0;
    }

    public get hp(): number {
        return this.hitPoints;
    }

    public destroy(): void {
        this.sound.acsExplosion1Sound();
        this.anims.play("acsDestroy");

        //super.destroy();
    }
}

export { Acs }
