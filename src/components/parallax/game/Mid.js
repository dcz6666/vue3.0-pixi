import * as PIXI from "pixi.js";
import { Assets, Container, Sprite, Texture } from "pixi.js";
class Mid extends Container {
  constructor(midImg,width,height) {
    super();
    this.midImg = midImg;
    this.w= width;
    this.h = height;
    this.init();
  }
   init() {
    let that = this;
    // let midTexture = await Assets.load(this.midImg);
    let midTexture = Texture.from(this.midImg);
    this.midSprite = new PIXI.TilingSprite(midTexture, this.w, this.h);
    this.midSprite.position.set(0, 128);
    this.midSprite.tilePosition.set(0, 0);
    this.addChild(this.midSprite);
  }
  update(){
    this.midSprite.tilePosition.x -= 0.64;
  }
}

export default Mid;
