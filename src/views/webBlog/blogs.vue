<template >
  <div class="blog-content">
    <template v-for="(item, i) in blogs" v-if="blogs">
      <div class="synopsis " @click="goDetails(item)">
        <div class="hvr-float">
          <div class="title">{{ item.blogTitle }}</div>
          <div class="des">{{ item.blogDescribe }}</div>
          <div class="Creation-time">
            <div class="iconfont icon-liulan"></div>
            <div class="text">{{ item.watchCount }}</div>
            <div class="iconfont icon-riqi"></div>
            <div class="text">{{ item.createDate }}</div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="null-empty">
        <el-empty :image-size="200" />
      </div>
    </template> 
  </div>
</template>
<script>
import "hover.css";
import muster from "../../Administration/content/muster";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { reactive, toRefs, onBeforeMount, onMounted, watch, computed, watchEffect, onBeforeUnmount } from "vue";
export default {
  setup(props) {
    const router = useRouter();
    const store = useStore();
    console.log(store,'我是vue文件打印')
    console.log(muster);
    onBeforeMount(() => {
      store.commit("article/labelchang", true);
      let aType = store.state.article.articleType;
      OverviewList.sketchType = aType;
      OverviewList.blogs = muster[aType];
      console.log(store.state.base)
    });
    const OverviewList = reactive({
      blogs: [],
      sketchType: "",
      queryInfo: {
        query: "", //查询参数
        pagenum: 1, //当前页码
        pagesize: 2, //每页显示条数
      },
    });

    // watch(()=>store.state.article.articleType,(newValue,oldValue)=>{
    //OverviewList.blogs = muster[OverviewList.sketchType]
    // })
    watchEffect(() => {
      OverviewList.sketchType = store.state.article.articleType;
      OverviewList.blogs = muster[OverviewList.sketchType];
    });
    const goDetails = (e) => {
      console.log(e);
      store.commit("article/setBloge", e.blogTitle);
      let ListInformation = { blogeTitle: e.blogTitle, mdId: e.mdId };
      localStorage.setItem("articleInfo", JSON.stringify(ListInformation));
      router.push({ path: "/substance", query: { mdId: e.mdId } });
    };
    onBeforeUnmount(() => {
      store.commit("article/labelchang", false);
      console.log("我是BeforeUpdate");
    });
    return {
      ...toRefs(OverviewList),
      goDetails,
    };
  },
  components: {  },
};
</script>
<style lang="less" scoped>
.blog-content {
  box-sizing: border-box;
  padding-left: 40px;
  height: calc(100vh - 100px);
  .synopsis {
    box-sizing: border-box;
    padding: 26px 0;
    border-bottom: 1px solid #dadada;
    cursor: pointer;
    .title {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #323030;
    }
    .des {
      margin-top: 4px;
      font-size: 14px;
      color: #6c6c6c;
      padding: 5px 0;
    }
    .Creation-time {
      font-size: 10px;
      line-height: 20px;
      margin-right: 16px;
      display: flex;
      div {
        margin-right: 4px;
      }
    }
  }
  .null-empty {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
  }
  .box {
    z-index: 10;
    width: 300px;
    height: 100px;
    background-color: antiquewhite;
  }
}
</style>
