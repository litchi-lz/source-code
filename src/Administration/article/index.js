// md文件批量引入
import WxRequest from "./WeChat/wx-request.md";
import WxGis from "./WeChat/wx-Gis.md"
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
};

// 注册全部md组件
export const mdArticle = function(Vue, opts = {}) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key].name);
  });
};
