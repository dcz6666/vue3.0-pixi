<script setup>
import zuoyizuo from "./components/zuoyizuo/index";
import parallax from "./components/parallax/index.vue"
import { ref, customRef } from "vue";
function adapter() {
  const clientW = document.documentElement.clientWidth; // 布局视口
  document.documentElement.style.fontSize = (clientW / 750) * 100 + "px";
}
adapter();
</script>
<template>
  <div class="root">
    <zuoyizuo v-if="false"></zuoyizuo>
    <parallax></parallax>
  </div>
</template>
<style scoped lang="scss">
  .root {
    width: 100%;
    height: 100%;
  }
</style>
