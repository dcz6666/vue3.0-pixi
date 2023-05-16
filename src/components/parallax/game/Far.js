import * as PIXI from "pixi.js";
import { Assets, Container, Sprite, Texture } from "pixi.js";
class Far extends Container {
  constructor(farImg, width, height) {
    super();
    this.farImg = farImg;
    this.w = width;
    this.h = height;
    this.init();
  }
   init() {
    let that = this;
    // let farTexture = await Assets.load(this.farImg);
    let farTexture = Texture.from(this.farImg);
    this.farSprite = new PIXI.TilingSprite(farTexture, this.w, this.h);
    this.farSprite.position.set(0, 0);
    this.farSprite.tilePosition.set(0, 0);
    this.addChild(this.farSprite);
  }

  update() {
    this.farSprite.tilePosition.x -= 0.128;
  }
}

export default Far;
