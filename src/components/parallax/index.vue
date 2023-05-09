<template>
  <div id="stage" class="stage"></div>
</template>

<script setup>
import * as PIXI from "pixi.js";
import { onMounted, reactive, ref } from "vue";
let { Application, Assets, Container, Sprite, Graphics, Texture } = PIXI;
import { BASE_URL } from "../../common/common";
let app = null,
  farSprite = null,
  midSprite = null;
onMounted(() => {
  app = new Application({
    width: 512,
    height: 384,
    transparent: true,
  });
  document.getElementById("stage").appendChild(app.view);

  farSprite = new PIXI.TilingSprite(Texture.from(`${BASE_URL}parallax/bg-far.png`),512,256);
  farSprite.position.set(0, 0);
  farSprite.tilePosition.set(0,0);

  midSprite = new PIXI.TilingSprite(Texture.from(`${BASE_URL}parallax/bg-mid.png`),512,256);
  midSprite.position.set(0, 128);
  midSprite.tilePosition.set(0,0);
  app.stage.addChild(farSprite);
  app.stage.addChild(midSprite);

  requestAnimationFrame(update);
});

const update = () => {
  farSprite.tilePosition.x -= 0.128;
  midSprite.tilePosition.x -= 0.64;
  requestAnimationFrame(update);
};
</script>
<style scoped lang="scss">
.stage {
  width: 512px;
  height: 384px;
  margin: 0 auto;
  canvas {
    width: 100%;
  }
}
</style>
