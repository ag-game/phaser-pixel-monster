import * as Shared from '../shared';

const PLATFORM_WIDTH = 50;
const PLATFORM_HEIGHT = 50;

// export interface Platform {
//   hasColor: boolean;
//   color: Shared.Color;
//   gameObject: Phaser.GameObjects.Rectangle;
//   physicsBody: Phaser.Physics.Arcade.StaticBody;
// }

export const createPlatform = (scene: Phaser.Scene, x: number, y: number) => {
  const color = { r: 128, g: 128, b: 128 };
  const colorHex = Shared.convertFullColorToHex(color);

  const platform = new Platform(scene, x, y, colorHex);
  return platform;
};

class Platform extends Phaser.GameObjects.Rectangle {
  public body: Phaser.Physics.Arcade.StaticBody;

  private hasColor: boolean;

  constructor(scene: Phaser.Scene, x: number, y: number, colorHex: number) {
    super(scene, x, y, PLATFORM_WIDTH, PLATFORM_HEIGHT, colorHex);

    this.setOrigin(0, 0);
    this.setInteractive();

    scene.add.existing(this);
    scene.physics.add.existing(this, true);

    this.hasColor = true;
  }
}
