<template>
  <div class="tags" :style="{ width: screenW }" v-show="labelBar">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <template v-for="(item, i) in classList">
        <el-tab-pane class="tabPan" :label="item.mold" :name="item.type"></el-tab-pane>
      </template>
    </el-tabs>
  </div>
  <div class="tags bolog-title" :style="{ width: titleW }" v-show="!labelBar">
    <div class="title-box">
      <div class="">{{ blogTitle }}</div>
      <div @click="goBack" class="iconfont icon-fanhui"></div>
    </div>
  </div>
</template>
<script>
// import "../../../assets/font.css";
// import "@assets/font.css";
import "@/assets/font/font-icon/iconfont.css";
import { toRefs, reactive, ref, onBeforeMount, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElLoading } from 'element-plus'
export default {
  name: "TagList",
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const list = reactive({
      activeName: "WeChatList",
      screenW: 0,
      titleW: 0,
      labelBar: null,
      blogTitle: "",
      classList: [
        { id: 1, mold: "微信小程序", type: "WeChatList" },
        { id: 2, mold: "Vue2", type: "Vue2List" },
        { id: 3, mold: "Vue3", type: "Vue3List" },
        { id: 4, mold: "H5", type: "H5List" },
        { id: 5, mold: "App", type: "AppList" },
        { id: 6, mold: "uni-app", type: "uniList" },
        { id: 7, mold: "通用", type: "universal" },
      ],
    });
    onBeforeMount(() => {
      const width = `${document.documentElement.clientWidth}`;
      list.screenW = width - 300 + "px";
      list.titleW = width - 340 + "px";
    });
    watchEffect(() => {
      list.labelBar = store.state.article.tagSwitch;
      list.blogTitle = store.state.article.blogTitle;
      if (!list.blogTitle) {
        list.blogTitle = JSON.parse(localStorage.getItem("articleInfo")).blogeTitle;
      }
    });
    const handleClick = (TabsPaneContext, Event) => {
      list.activeName = TabsPaneContext.props.name;
      store.commit("article/alterType", list.activeName);
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 300);
    };
    const goBack = () => {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
        router.go(-1);
      }, 300);
      
    };
    return {
      ...toRefs(list),
      handleClick,
      goBack,
    };
  },
};
</script>
<style lang="less" scoped>
.tags {
  box-sizing: border-box;
  padding-left: 40px;
  height: 80px;
  .demo-tabs {
    width: 100%;
    :deep(.el-tabs__nav) {
      height: 60px;
      line-height: 60px;
    }
  }
}
.bolog-title {
  padding: 0;
  margin-left: 40px;
  line-height: 60px;
  height: 62px;
  border-bottom: 2px solid #dadada;
  color: #383838;
  font-size: 14px;
  .title-box {
    display: flex;
  }
}
.el-tabs__nav {
  height: 60xp;
  line-height: 60px;
}
</style>
