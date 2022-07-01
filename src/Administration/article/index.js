// md文件批量引入
import WxRequest from "./WeChat/wx-request.md";
import WxGis from "./WeChat/wx-Gis.md";
import WxWatch from "./WeChat/wx-watch.md";
import WxEcharts  from "./WeChat/wx-echarts.md"
import Vue2Animation from "./Vue2/vue2-animation.md";
import Vue3MonitorVuex from "./Vue3/vue3-monitorVuex.md";
import Vue3AlterStyle from "./Vue3/vue3-alterStyle.md";
import Vue3Markdown from "./Vue3/vue3-markdown.md";
import Vue3Scss from "./Vue3/vue3-scss.md";
import Vue3Config from "./Vue3/vue3-config.md";
import WidelyTool from "./Widely/widely-tool.md";

// 创建md组件同时设置文章其他信息，单独导出使用
export const components = {
  WxRequest: {
    id: 1,
    name: WxRequest,
    blogDescribe: "",
    blogTitle: "在 Spring Boot 中多次读取请求正文",
    classifyId: "wxchat",
    createDate: "2021-11-12 20:11:13",
    markdownContent: "",
  },
  WxGis: {
    id: 2,
    name: WxGis,
    blogDescribe: "",
    blogTitle: "",
    classifyId: "wxchat",
    createDate: "2021-11-12 20:11:13",
    markdownContent: "",
  },
  WxWatch: {
    id: 3,
    name: WxWatch,
    blogDescribe: "",
    blogTitle: "",
    classifyId: "wxchat",
    createDate: "2021-11-12 20:11:13",
    markdownContent: "",
  },
  WxEcharts:{
    id: 3,
    name: WxEcharts,
    blogDescribe: "",
    blogTitle: "",
    classifyId: "wxchat",
    createDate: "2021-11-12 20:11:13",
    markdownContent: "",
  },
  Vue2Animation:{
    id: 4,
    name: Vue2Animation,
    blogDescribe: "",
    blogTitle: "",
    classifyId: "vue2",
    createDate: "2022-6-12 20:11:13",
    markdownContent: "",
  },
  Vue3MonitorVuex:{
    id: 5,
    name: Vue3MonitorVuex,
    blogDescribe: "",
    blogTitle: "",
    classifyId: "vue3",
    createDate: "2022-6-17 4:15:13",
    markdownContent: "",
  },
  Vue3AlterStyle:{
    id: 5,
    name: Vue3AlterStyle,
    blogDescribe: "",
    blogTitle: "",
    classifyId: "vue3",
    createDate: "2022-6-18 4:15:13",
    markdownContent: "",
  },
  Vue3Markdown:{
    id: 6,
    name: Vue3Markdown,
    blogDescribe: "",
    blogTitle: "",
    classifyId: "vue3",
    createDate: "2022-6-10 19:16:13",
    markdownContent: "",
  },
  Vue3Scss:{
    id: 6,
    name: Vue3Scss,
    blogDescribe: "",
    blogTitle: "",
    classifyId: "vue3",
    createDate: "2022-6-10 19:16:13",
    markdownContent: "",
  },
  Vue3Config:{
    id: 6,
    name: Vue3Config,
    blogDescribe: "",
    blogTitle: "",
    classifyId: "vue3",
    createDate: "2022-6-10 19:16:13",
    markdownContent: "",
  },
  WidelyTool:{
    id: 6,
    name: WidelyTool,
    blogDescribe: "",
    blogTitle: "",
    classifyId: "vue3",
    createDate: "2022-6-10 19:16:13",
    markdownContent: "",
  },
  
  
};

// 注册全部md组件
export const mdArticle = function(Vue, opts = {}) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key].name);
  });
};
