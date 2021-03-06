<template>
  <el-button @click="loadCacheBlog(true)" style="margin-bottom:10px" size="mini">加载草稿</el-button>
  <div id="markdown"></div>
  <el-form ref="form">
    <el-form-item label="标题">
      <el-input v-model="title"></el-input>
    </el-form-item>
    <el-form-item label="类别">
      <el-select v-model="type" placeholder="选择分类">
        <el-option v-for="item in typeList" :key="item.id" :label="item.classify" :value="item.classify"></el-option>
        <el-option label="日记" value="日记"></el-option>
        <el-option label="随笔" value="随笔"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="描述">
      <el-input v-model="desc" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">发布</el-button>
    </el-form-item>
  </el-form>

  <el-dialog v-model="cacheDialogTableVisible" title="操作">
    <el-scrollbar height="400px">
      <el-table :data="cacheBlog">
        <el-table-column property="title" label="标题" width="150"></el-table-column>
        <el-table-column property="address" label="操作">
          <template #default="scope">
            <el-button size="mini" @click="handleCacheEdit(scope.$index, scope.row)">加载</el-button>
            <el-button size="mini" type="danger" @click="handleCacheDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-scrollbar>

  </el-dialog>

</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import Editor from "@toast-ui/editor";
import "../../assets/css/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { ElLoading } from "element-plus";
import { ElMessage } from "element-plus";
import {
  addBlogApi,
  listClassifyApi,
  getMarkdownContentApi,
} from "../../apis/blog";
import router from "../../router/index";

export default {
  mounted() {
    let cache = JSON.parse(localStorage.getItem("cacheblog")) || {};
    var max = 0;
    let cacheArrays = [];
    for (var val of Object.keys(cache)) {
      if (parseInt(val) > max) {
        max = parseInt(val);
      }
      let item = JSON.parse(cache[val]);
      item.key = val;
      cacheArrays.push(item);
    }
    this.cacheBlog = cacheArrays;
    this.currentCacheKey = parseInt(max) + 1;

    setInterval(() => {
      this.autoSave();
    }, 1000);

    let id = router.currentRoute.value.query.id;
    listClassifyApi().then((res) => {
      this.typeList = res.data.data;
    });
    if (id) {
      getMarkdownContentApi({ id: id }).then((res) => {
        console.log(res);
        let blog = res.data.data;
        this.title = blog.blogTitle;
        this.type = blog.classifyId;
        this.desc = blog.blogDescribe;
        this.editor = new Editor({
          el: document.querySelector("#markdown"),
          height: "500px",
          previewStyle: "vertical",
          initialValue: blog.markdownContent,
        });
      });
      return;
    }
    this.editor = new Editor({
      el: document.querySelector("#markdown"),
      height: "500px",
      previewStyle: "vertical",
      initialValue: "## ",
    });
  },

  setup() {
    const state = reactive({
      cacheBlog: [],
      currentCacheKey: 0,
      title: "",
      desc: "",
      type: "",
      typeList: [],
      cacheDialogTableVisible: false,
      editor: null,
    });

    /**
     * 自动保存
     *
     */
    const autoSave = () => {
      let id = router.currentRoute.value.query.id;
      //有id不保存，意思为编辑文章，markdown数量小于10不保存，
      if (id || state.editor.getMarkdown().length < 10) {
        return;
      }
      var cache = JSON.parse(localStorage.getItem("cacheblog")) || {};
      cache[state.currentCacheKey] = JSON.stringify({
        title: state.title,
        content: state.editor.getMarkdown(),
      });
      let str = JSON.stringify(cache);
      localStorage.setItem("cacheblog", str);
    };
    /**
     * 编辑草稿
     */
    const handleCacheEdit = (i, item) => {
      state.title = item.title;
      state.currentCacheKey = item.key;
      state.editor = new Editor({
        el: document.querySelector("#markdown"),
        height: "500px",
        previewStyle: "vertical",
        initialValue: item.content,
      });
      state.cacheDialogTableVisible = false;
    };

    /**
     * 加载草稿
     */
    const loadCacheBlog = (show = false) => {
      let cacheArrays = [];
      let cache = JSON.parse(localStorage.getItem("cacheblog")) || {};
      for (var val of Object.keys(cache)) {
        let item = JSON.parse(cache[val]);
        item.key = val;
        cacheArrays.push(item);
      }
      state.cacheDialogTableVisible = show;
      state.cacheBlog = cacheArrays;
    };
    /**
     * 删除本地草稿，并重新加载草稿列表
     */
    const handleCacheDelete = (i, item) => {
      let cache = JSON.parse(localStorage.getItem("cacheblog")) || {};
      delete cache[item.key];
      localStorage.setItem("cacheblog", JSON.stringify(cache));
      loadCacheBlog(true);
      ElMessage({
          message: "删除成功",
          type: "success",
          duration: 1000,
        });
    };
    const loadCache = () => {};
    const onSubmit = () => {
      let body = {
        id: router.currentRoute.value.query.id,
        blogTitle: state.title,
        markdownContent: state.editor.getMarkdown(),
        classifyId: state.type,
        blogDescribe: state.desc,
      };
      // return
      const loading = ElLoading.service({
        lock: true,
        text: "发布中",
        spinner: "el-icon-loading",
        background: "#ffffffcf",
      });

      addBlogApi(body).then((res) => {
        console.log(res);
        loading.close();
        ElMessage({
          message: "发布成功",
          type: "success",
          duration: 1000,
        });
        setTimeout(() => {
          router.push({
            path: "/article",
          });
        }, 1500);
      });
    };
    return {
      ...toRefs(state),
      handleCacheDelete,
      loadCacheBlog,
      handleCacheEdit,
      loadCache,
      onSubmit,
      autoSave,
    };
  },
};
</script>,

<style lang="less" scoped>
#markdown {
  margin-bottom: 10px;
}
</style>