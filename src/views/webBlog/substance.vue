<template>
  <div class="sub-body" :style="{ width: screenW }">
    <div class="markdown-body" :style="{ height: screenH, width: screenMdW }">
      <div id="md">
        <component :is="parameter"></component>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { reactive, toRefs, onBeforeMount, onMounted, watch, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { ElLoading } from "element-plus";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    console.log(route)
    onBeforeMount(() => {
      console.log("我进来了");
      const height = `${document.documentElement.clientHeight}`;
      const width = `${document.documentElement.clientWidth}`;
      console.log(height);
      detailsArt.screenH = height - 80 + "px";
      detailsArt.screenW = width - 300 + "px";
      detailsArt.screenMdW = (width - 300) / 1.3 + "px";
      detailsArt.screenAW = (width - 300) / 2.1 + "px";
      store.commit("article/labelchang", false);
      detailsArt.parameter = route.query.mdId;
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 500);
    });
    const detailsArt = reactive({
      parameter: "WxRequest",
      screenH: 0, //总高度
      screenW: 0, //总宽度
      screenMdW: 0, //md宽度
      screenAW: 0, //动画宽度
    });
    return {
      ...toRefs(detailsArt),
    };
  },
};
</script>
<style lang="less" scoped>
.sub-body {
  display: flex;
  // background: linear-gradient(to bottom right, #50a3a2, #53e3a6);
  .markdown-body {
    box-sizing: border-box;
    font-weight: normal;
    padding-left: 40px;
    overflow-y: scroll; /*只是y方向*/

  }
  .effect {
    position: relative;
    // background: linear-gradient(to bottom right, #50A3A2, #53E3A6);
    .bg-bubbles {
      position: absolute;
      // 使气泡背景充满整个屏幕；
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // 如果元素内容超出给定的宽度和高度，overflow 属性可以确定是否显示滚动条等行为；
      overflow: hidden;
      li {
        position: absolute;
        // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
        bottom: -160px;
        // 默认的气泡大小；
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.15);
        list-style: none;
        // 使用自定义动画使气泡渐现、上升和翻滚；
        animation: square 15s infinite;
        transition-timing-function: linear;
        // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
        &:nth-child(1) {
          left: 10%;
        }
        &:nth-child(2) {
          left: 20%;
          width: 90px;
          height: 90px;
          animation-delay: 2s;
          animation-duration: 7s;
        }
        &:nth-child(3) {
          left: 25%;
          animation-delay: 4s;
        }
        &:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-duration: 8s;
          background-color: rgba(255, 255, 255, 0.3);
        }
        &:nth-child(5) {
          left: 70%;
        }
        &:nth-child(6) {
          left: 80%;
          width: 120px;
          height: 120px;
          animation-delay: 3s;
          background-color: rgba(255, 255, 255, 0.2);
        }
        &:nth-child(7) {
          left: 32%;
          width: 160px;
          height: 160px;
          animation-delay: 2s;
        }
        &:nth-child(8) {
          left: 55%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
          animation-duration: 15s;
        }
        &:nth-child(9) {
          left: 25%;
          width: 10px;
          height: 10px;
          animation-delay: 2s;
          animation-duration: 12s;
          background-color: rgba(255, 255, 255, 0.3);
        }
        &:nth-child(10) {
          left: 85%;
          width: 160px;
          height: 160px;
          animation-delay: 5s;
        }
      }
      // 自定义 square 动画；
      @keyframes square {
        0% {
          opacity: 0.5;
          transform: translateY(0px) rotate(45deg);
        }
        25% {
          opacity: 0.75;
          transform: translateY(-400px) rotate(90deg);
        }
        50% {
          opacity: 1;
          transform: translateY(-600px) rotate(135deg);
        }
        100% {
          opacity: 0;
          transform: translateY(-1000px) rotate(180deg);
        }
      }
    }
  }
}
</style>
