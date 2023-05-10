import { BASE_URL } from "../../../common/common";
import { Container } from "pixi.js";
import Far from "./Far";
import Mid from "./Mid";
class Game extends Container {
  constructor() {
    super();
    //初始化游戏页面
    this._init();
  }
  _init() {
    let farImg = `${BASE_URL}parallax/bg-far.png`;
    let midImg = `${BASE_URL}parallax/bg-mid.png`;
    this.Far = new Far(farImg, 512, 256);
    this.Mid = new Mid(midImg, 512, 256);
    this.addChild(this.Far);
    this.addChild(this.Mid);
  }
  update() {
    this.Far.update();
    this.Mid.update();
  }
  setViewportX(viewportX){
    this.Far.setViewportX(viewportX);
    this.Mid.setViewportX(viewportX);
  }
}
export default Game;
