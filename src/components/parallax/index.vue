<template>
  <div id="stage" class="stage"></div>
</template>

<script setup>
import * as PIXI from "pixi.js";
import { onMounted, reactive, ref } from "vue";
let { Application, Assets, Container, Sprite, Graphics, Texture } = PIXI;
import { BASE_URL } from "../../common/common";
import Game from "./game";

let app = null;

onMounted(() => {
  app = new Application({
    width: 512,
    height: 384,
    transparent: true,
  });
  let that = this;
  document.getElementById("stage").appendChild(app.view);
  let game = new Game(); //创建游戏页面
  app.stage.addChild(game);
  requestAnimationFrame(update);

  function update(){
    game.update()
    requestAnimationFrame(update);
  }
});


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
