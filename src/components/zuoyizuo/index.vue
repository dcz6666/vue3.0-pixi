<template>
  <div class="main">
    <!--布置场景  -->
    <div class="wrapper scene_wrapper">
      <div id="stage" class="stage"></div>
      <div class="saveBtn" @click="handleSave"></div>

      <!--二级选项tab  -->
      <div class="subtab">
        <!-- 新郎 -->
        <ul class="dobuleline" v-if="currentFigure == 1">
          <!-- 新郎发式 -->
          <li
            @click="handleSub(1, `bg-hair${item}`)"
            v-for="item in 6"
            v-bind:key="item"
          >
            <img
              :src="
                require(`@/assets/images/zuoyizuo/img/thumb-bg-hair${item}.png`)
              "
            />
          </li>
          <!-- 新郎衣服 -->
          <li
            @click="handleSub(2, `bg-clothes${item}`)"
            v-for="item in 6"
            v-bind:key="item"
          >
            <img
              :src="
                require(`@/assets/images/zuoyizuo/img/thumb-bg-clothes${item}.png`)
              "
            />
          </li>
        </ul>

        <!-- 新娘 -->
        <ul class="dobuleline" v-if="currentFigure == 2">
          <!-- 新娘发式 -->
          <li
            @click="handleSub(3, `b-hair${item}`)"
            v-for="item in 6"
            v-bind:key="item"
          >
            <img
              :src="
                require(`@/assets/images/zuoyizuo/img/thumb-b-hair${item}.png`)
              "
            />
          </li>
          <!-- 新娘衣服 -->
          <li
            @click="handleSub(4, `b-clothes${item}`)"
            v-for="item in 6"
            v-bind:key="item"
          >
            <img
              :src="
                require(`@/assets/images/zuoyizuo/img/thumb-b-clothes${item}.png`)
              "
              alt=""
            />
          </li>
        </ul>

        <!-- 男童 -->
        <ul class="singleline" v-if="currentFigure == 3">
          <li
            @click="handleSub(5, `cm${item}`)"
            v-for="item in 3"
            v-bind:key="item"
          >
            <img
              :src="
                require(`@/assets/images/zuoyizuo/img/thumb-chm${item}.png`)
              "
              alt=""
            />
          </li>
        </ul>

        <!-- 伴郎 -->
        <ul class="singleline" v-if="currentFigure == 4">
          <li
            @click="handleSub(5, `bmm${item}`)"
            v-for="item in 3"
            v-bind:key="item"
          >
            <img
              :src="
                require(`@/assets/images/zuoyizuo/img/thumb-bmm${item}.png`)
              "
              alt=""
            />
          </li>
        </ul>

        <!-- 伴娘 -->
        <ul class="singleline" v-if="currentFigure == 5">
          <li
            @click="handleSub(5, `bm${item}`)"
            v-for="item in 3"
            v-bind:key="item"
          >
            <img
              :src="require(`@/assets/images/zuoyizuo/img/thumb-bm${item}.png`)"
              alt=""
            />
          </li>
        </ul>
        <!-- 女童 -->
        <ul class="singleline" v-if="currentFigure == 6">
          <li
            @click="handleSub(5, `cf${item}`)"
            v-for="item in 3"
            v-bind:key="item"
          >
            <img
              :src="
                require(`@/assets/images/zuoyizuo/img/thumb-chf${item}.png`)
              "
              alt=""
            />
          </li>
        </ul>
      </div>

      <div class="cardContent">
        <div class="tabs">
          <div
            :class="`tab flex-center ${
              index == currentIndex ? 'selected' : ''
            }`"
            v-for="(item, index) in 4"
            v-bind:key="index"
            @click="handleTab(index)"
          >
            <img
              :src="require(`@/assets/images/zuoyizuo/img/nav-${item}.png`)"
            />
          </div>
          <div class="xs">
            <img
              class="nav_arrow"
              :src="require(`@/assets/images/zuoyizuo/img/nav-arrow.png`)"
            />
          </div>
        </div>

        <div class="tabCont">
          <!-- 风景 -->
          <div class="tCont" v-if="currentIndex == 0">
            <div
              class="tCont_list flex-center"
              v-for="(item, index) in 9"
              v-bind:key="index"
              @click="selectScenery(item)"
            >
              <img
                :src="
                  require(`@/assets/images/zuoyizuo/img/thumb-s${item}.jpg`)
                "
                alt=""
              />
            </div>
          </div>

          <!--人物 -->
          <div class="tCont" v-if="currentIndex == 1">
            <div
              class="tCont_list flex-center"
              v-for="(item, index) in 6"
              v-bind:key="index"
              @click="selectFigure(item)"
            >
              <img
                :src="
                  require(`@/assets/images/zuoyizuo/img/thumb-hm${item}.png`)
                "
                alt=""
              />
            </div>
          </div>

          <!-- 修饰 -->
          <div class="tCont" v-if="currentIndex == 2">
            <div
              class="tCont_list flex-center"
              v-for="(item, index) in 12"
              v-bind:key="index"
              @click="selectadorn(item, `dec${item}`)"
            >
              <img
                :src="
                  require(`@/assets/images/zuoyizuo/img/thumb-d${item}.png`)
                "
                alt=""
              />
            </div>
          </div>

          <!-- 宠物 -->
          <div class="tCont" v-if="currentIndex == 3">
            <div
              class="tCont_list flex-center"
              v-for="(item, index) in 6"
              v-bind:key="index"
              @click="selectadorn(item, `pet${item}`)"
            >
              <img
                :src="
                  require(`@/assets/images/zuoyizuo/img/thumb-p${item}.png`)
                "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 保存页面 -->
    <div class="wrapper save_wrapper">
      <div class="save_page">
        <div class="haibao">
          <div class="haibaoInner">
            <img src="" id="myhaibao" alt="" />
            <div class="xiushi2"></div>
          </div>
        </div>
        <div class="xiushi1"></div>
        <div class="btns">
          <div class="btn replayBtn"></div>
          <div class="btn shareBtn"></div>
        </div>
        <div class="xiushi3"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../common/global.scss";

.main {
  position: relative;
  width: 750px;
  height: 100vh;
  .wrapper {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background: #f9ede1;
    &.save_wrapper {
      display: none;
    }
  }
}

//场景布置
.scene_wrapper {
  .stage {
    position: absolute;
    width: 100%;
    height: 100vh;
    canvas {
      width: 100%;
    }
  }
  .saveBtn {
    @include set_background(
      "../../assets/images/zuoyizuo/img/btn-generate.png"
    );
    position: absolute;
    bottom: 4.54rem;
    right: 0.1rem;
    width: 0.8rem;
    height: 0.8rem;
  }
  .cardContent {
    width: 100vw;
    height: 4.44rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #fff;
    .tabs {
      display: flex;
      flex-direction: row;
      justify-items: flex-end;
      height: 0.82rem;
      .tab,
      .xs {
        width: 20vw;
        height: 0.82rem;
        display: flex;
        align-items: center;
        .nav_arrow {
          margin-left: 0.4rem;
        }
        img {
          height: 80%;
        }
        &.selected {
          background-color: #f6f6f6;
        }
      }
    }

    .tabCont {
      position: relative;
      width: 100vw;
      height: 3.6rem;
      background-color: #f6f6f6;
      .tCont {
        height: 3.6rem;
        overflow-y: auto;
        width: 100vw;
        position: absolute;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;

        .tCont_list {
          width: 27%;
          padding: 0.1rem;
          img {
            width: 90%;
          }
        }
      }
    }
  }
  .subtab {
    position: absolute;
    top: 10vh;
    right: 5vw;
    .dobuleline {
      width: 120px;
    }
    .singleline {
      width: 60px;
    }
    ul {
      float: right;
    }
    li {
      width: 40px;
      height: 40px;
      margin: 10px;
      float: left;
      img {
        width: 100%;
      }
    }
  }
}

// 保存页面
.save_wrapper {
  .xiushi1 {
    @include set_background("../../assets/images/zuoyizuo/fn-cloth.png");
    width: 2.6rem;
    height: 3.8rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .xiushi2 {
    @include set_background("../../assets/images/zuoyizuo/fn-sepr-flower.png");
    width: 1.71rem;
    height: 2.12rem;
    position: absolute;
    left: -0.2rem;
    bottom: -0.5rem;
    z-index: 9;
  }
  .xiushi3 {
    @include set_background("../../assets/images/zuoyizuo/fn-b-flower.png");
    width: 100vw;
    height: 1.87rem;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .haibao {
    position: absolute;
    left: 10vw;
    top: 7vh;
    width: 70vw;
    z-index: 1;
    .haibaoInner {
      position: relative;
      img {
        width: 100%;
        border: 0.19rem #fff solid;
      }
    }
  }
  .btns {
    width: 70vw;
    height: 0.77rem;
    position: absolute;
    left: 50%;
    margin-left: -35vw;
    top: 85vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .btn {
      width: 2.14rem;
      height: 0.77rem;
      background-size: cover;
    }
    .replayBtn {
      @include set_background("../../assets/images/zuoyizuo/btn-l.png");
      float: left;
    }
    .shareBtn {
      @include set_background("../../assets/images/zuoyizuo/btn-r.png");
      float: right;
    }
  }
}
</style>

<script setup>
import $ from "jquery";
import * as PIXI from "pixi.js";
import { onMounted, reactive, ref } from "vue";
let { Application, Assets, Container, Sprite, Graphics } = PIXI;
import { BASE_URL } from "../../common/common";
import data from "./data.js";
let { sizeJson, words } = data;
let currentIndex = ref(0);
let currentFigure = ref(-1);
let app = null;

// 选择tab 0：风景 1：人物 2：装饰 3：宠物
const handleTab = (index) => {
  currentIndex.value = index;
};

// 处理场景布置
const handleScene = async () => {
  let resolution = window.innerWidth / 750;
  //创建舞台和默认背景
  app = new Application({
    width: 750,
    height: 1334,
    transparent: true,
    resolution,
  });
  document.getElementById("stage").appendChild(app.view);
  const bgTexTure = await Assets.load(`${BASE_URL}img/bg1.jpg`);
  let bgSpr = Sprite.from(bgTexTure);
  bgSpr.position.set(0, 0);
  bgSpr.width = 750;
  bgSpr.height = 1334;
  bgSpr.name = "bg";
  app.stage.addChild(bgSpr);
};

// 选择风景背景图
const selectScenery = async (idx) => {
  app.stage.getChildByName("bg").texture = await Assets.load(
    `${BASE_URL}img/bg${idx}.jpg`
  );
  // app.stage.getChildByName("bg").texture = PIXI.Texture.from(
  //   `${BASE_URL}img/bg${idx}.jpg`
  // );
};

// 选择人物  1:新郎 2：新娘 3：男童 4：伴郎 5:伴娘 6：女童
const selectFigure = (idx) => {
  if (idx == 1 || idx == 2) {
    addSpr(idx, "");
  }
  currentFigure.value = idx;
};

//选择装饰
const selectadorn = (idx, picname) => {
  addSpr(3, picname);
};

const handleSub = (type, picname) => {
  // type:1 新郎头发  2新郎衣服  3新娘头发 4新娘衣服  5伴郎 伴娘 女童 男童
  console.log("picname", picname);
  if (type == 1) {
    app.stage.getChildByName("xinliangSuper").children[0].children[2].texture =
      PIXI.Texture.from(`${BASE_URL}img/${picname}.png`);
  }
  if (type == 2) {
    app.stage.getChildByName("xinliangSuper").children[0].children[0].texture =
      PIXI.Texture.from(`${BASE_URL}img/${picname}.png`);
  }
  if (type == 3) {
    app.stage.getChildByName("xinniangSuper").children[0].children[2].texture =
      PIXI.Texture.from(`${BASE_URL}img/${picname}.png`);
  }
  if (type == 4) {
    app.stage.getChildByName("xinniangSuper").children[0].children[0].texture =
      PIXI.Texture.from(`${BASE_URL}img/${picname}.png`);
  }
  if (type == 5) {
    addSpr(3, picname);
  }
};

// 添加不同的内容 特别注意
const randomPos = () => {
  return {
    x: 750 / 2 + Math.random() * 40,
    y: 1334 / 2 + Math.random() * 40,
  };
};

//清除选中状态
const clearSelected = () => {
  let appAllchildren = app.stage.children;
  let acNum = appAllchildren.length;
  for (let i = 1; i < acNum; i++) {
    let spr = appAllchildren[i];
    console.log("spr", spr);
    spr.children[1].visible = false;
    spr.children[2].visible = false;
    spr.children[3].visible = false;
  }
};

// 添加精灵
const addSpr = (figureId, picname) => {
  //把二级tab 隐藏
  currentFigure.value = -1;

  let container = new Container();
  let cpos = randomPos();
  container.position.set(cpos.x, cpos.y);

  //边框、缩放按钮 删除按钮
  const space = 20;
  const btnSize = 50;
  let borderline = new Graphics();
  borderline.name = "borderline";
  borderline.lineStyle(1, 0xaaaaaa);

  let resizeBtn = Sprite.from(`${BASE_URL}img/btn-resize.png`);
  console.log("resizeBtn", resizeBtn);
  resizeBtn.name = "resizeBtn";
  resizeBtn.width = btnSize;
  resizeBtn.height = btnSize;
  resizeBtn.interactive = true;

  let delBtn = Sprite.from(`${BASE_URL}img/btn-del.png`);
  delBtn.name = "delBtn";
  delBtn.width = btnSize;
  delBtn.height = btnSize;
  delBtn.interactive = true;

  let imgContainer = new Container();

  imgContainer.position.set(space / 2, space / 2);

  imgContainer.interactive = true;

  let boxSpace = [0, 0];

  //新娘新郎唯一性
  if (figureId == 1 || figureId == 2) {
    let tipsTxt = ["新郎", "新娘"];
    let stageChildren = app.stage.children;
    for (let v = 0; v < stageChildren.length; v++) {
      if (
        (stageChildren[v].name == "xinliangSuper" && figureId == 1) ||
        (stageChildren[v].name == "xinniangSuper" && figureId == 2)
      ) {
        alert(`${tipsTxt[figureId - 1]}只允许添加一个哦`);
        return;
      }
    }
    console.log("stageChildren", stageChildren);
  }

  //清除选中状态
  clearSelected();

  if (figureId == 1) {
    // 新郎
    // const male = [340,681];
    currentFigure.value = 1;
    container.name = "xinliangSuper";
    boxSpace = [340 + space, 681 + space];
    imgContainer.name = "xinlang";
    let mbody = Sprite.from(`${BASE_URL}img/bg-clothes1.png`);
    mbody.position.set(0, 140);
    let mface = Sprite.from(`${BASE_URL}img/bridegroom-face.png`);
    mface.position.set(135, 2);
    let mhair = Sprite.from(`${BASE_URL}img/bg-hair1.png`);
    mhair.position.set(137, 0);
    imgContainer.addChild(mbody);
    imgContainer.addChild(mface);
    imgContainer.addChild(mhair);
  } else if (figureId == 2) {
    currentFigure.value = 2;
    // 新娘
    container.name = "xinniangSuper";
    const female = [460, 806];
    boxSpace = [460 + space, 806 + space];
    imgContainer.name = "xinniang";
    let febody = Sprite.from(`${BASE_URL}img/b-clothes1.png`);
    febody.position.set(0, 200);
    let feface = Sprite.from(`${BASE_URL}img/bride-face.png`);
    feface.position.set(140, 60);
    let fehair = Sprite.from(`${BASE_URL}img/b-hair1.png`);
    fehair.position.set(60, 0);
    imgContainer.addChild(febody);
    imgContainer.addChild(feface);
    imgContainer.addChild(fehair);
  } else {
    //其他
    container.name='sprite'+picname

    let imgsize = sizeJson[picname];
    console.log("imgsize", imgsize);

    let imgSpr = Sprite.from(`${BASE_URL}img/${picname}.png`);
    boxSpace = [imgsize.width, imgsize.height];
    imgContainer.addChild(imgSpr);
  }

  container.width = boxSpace[0];
  container.height = boxSpace[1];
  container.pivot.set(boxSpace[0] / 2, boxSpace[1] / 2);
  borderline.drawRoundedRect(0, 0, boxSpace[0], boxSpace[1], 10);
  resizeBtn.position.set(boxSpace[0] - btnSize / 2, -btnSize / 2);
  delBtn.position.set(-btnSize / 2, boxSpace[1] - btnSize / 2);

  container.addChild(imgContainer);
  container.addChild(borderline);
  container.addChild(resizeBtn);
  container.addChild(delBtn);

  imgContainer
    .on("touchstart", drapTouchStart)
    .on("touchmove", drapTouchMove)
    .on("touchend", clearTouchEnd);

  resizeBtn.on("touchstart", resizeTouchStart);

  delBtn.on("touchend", del);

  app.stage.addChild(container);

  //拖拽
  let startPos = {
    x: 0,
    y: 0,
  };
  let objPos = {
    x: 0,
    y: 0,
  };
  let flag = true; //是否可以执行拖拽操作
  let sprName = ""; //执行拖拽的精灵组别名

  function drapTouchStart(e) {
    //清除选中状态
    clearSelected();
    currentFigure.value = -1;
    //当前精灵组选中状态
    this.parent.children[1].visible = true;
    this.parent.children[2].visible = true;
    this.parent.children[3].visible = true;

    //调整顺序
    app.stage.setChildIndex(this.parent, app.stage.children.length - 1);

    if (flag && this.name != "resizeBtn") {
      flag = false;
      startPos = {
        x: e.data.global.x,
        y: e.data.global.y,
      };
      objPos = {
        x: this.parent.getGlobalPosition().x,
        y: this.parent.getGlobalPosition().y,
      };
      sprName = this.parent.name;

      //新郎新娘展示二级菜单
      if (sprName == "xinniangSuper") {
        currentFigure.value = 2;
      }
      if (sprName == "xinliangSuper") {
        currentFigure.value = 1;
      }
    }
  }
  function drapTouchMove(e) {
    if (this.name != "resizeBtn" && this.parent.name == sprName) {
      let tempPos = {
        x: e.data.global.x,
        y: e.data.global.y,
      };
      this.parent.position.set(
        objPos.x + (tempPos.x - startPos.x),
        objPos.y + (tempPos.y - startPos.y)
      );
    }
  }

  function clearTouchEnd() {
    flag = true;
    sprName = "";
    resizeSprName = "";
    app.stage.getChildByName("bg").off("touchmove");
    app.stage.getChildByName("bg").interactive = false;
  }

  //缩放
  let resizeStartPosX = 0;
  let resizeSprName = "";

  function resizeTouchStart(e) {
    if (flag) {
      resizeStartPosX = e.data.global.x;
      resizeSprName = this.parent.name;
      console.log("resizeSprName===2",resizeSprName)
      app.stage.getChildByName("bg").interactive = true;
      app.stage
        .getChildByName("bg")
        .on("touchmove", resizeTouchMove)
        .on("touchend", clearTouchEnd);
    }
  }

  function resizeTouchMove(e) {
    if (this.name == "bg") {
      let tempPosX = e.data.global.x;
      let dur = tempPosX - resizeStartPosX;
      resizeStartPosX = tempPosX;
      console.log("==resizeSprName==1",resizeSprName);

      if (dur > 0) {
        //放大
        let scaleVal1 = app.stage.getChildByName(resizeSprName).scale.x + 0.01;
        if (app.stage.getChildByName(resizeSprName).scale.x <= 1.5) {
          app.stage
            .getChildByName(resizeSprName)
            .scale.set(scaleVal1, scaleVal1);
        }
      }
      if (dur <= 0) {
        //缩小

        if (app.stage.getChildByName(resizeSprName).scale.x >= 0.4) {
          let scaleVal2 =
            app.stage.getChildByName(resizeSprName).scale.x - 0.01;
          app.stage
            .getChildByName(resizeSprName)
            .scale.set(scaleVal2, scaleVal2);
        }
      }
    }
  }

  function del() {
    currentFigure.value = -1;
    app.stage.removeChild(this.parent);
  }
};

//生成海报

const handleSave = () => {
  //清除选中状态
  clearSelected();

  $(".scene_wrapper").hide();
  $(".save_wrapper").show();
  setTimeout(() => {
    app.render();
    let tupic = app.view.toDataURL("image/png");

    let resolution = window.innerWidth / 750;
    //创建舞台和默认背景
    let app2 = new PIXI.Application({
      width: 750,
      height: 1579,
      transparent: true,
      resolution,
    });
    document.getElementById("stage").appendChild(app2.view);

    let picBase64Textures = PIXI.Texture.from(tupic);
    let picBase64 = new PIXI.Sprite(picBase64Textures);
    picBase64.position.set(0, 0);
    picBase64.width = 750;
    picBase64.height = 1334;
    app2.stage.addChild(picBase64);

    let textTures = PIXI.Texture.from(`${BASE_URL}txt.png`);
    let text = new PIXI.Sprite(textTures);
    text.position.set(0, 1334);
    text.width = 750;
    text.height = 245;
    app2.stage.addChild(text);

    let rand = Math.floor(words.length * Math.random());
    let word = words[rand];
    let wordStyle = {
      fontSize: "22px",
      fill: "#5e7091",
    };
    let myword = new PIXI.Text(word, wordStyle);
    myword.position.set(48, 139 + 1334);
    app2.stage.addChild(myword);

    setTimeout(async () => {
      let myhaibao = await app2.renderer.plugins.extract.base64(app2.stage);
      console.log("myhaibao", myhaibao);
      document.getElementById("myhaibao").src = myhaibao;
    });
  }, 200);
};

onMounted(() => {
  handleScene();
});
</script>
