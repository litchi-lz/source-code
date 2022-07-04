const Vue2List = [
  {
    id: 1,
    blogTitle: "动态修改animation效果无效问题",
    blogDescribe: "动态修改animation效果无效问题(vue2与vue3通用)",
    mdId: "vue2-animation",
    createDate: "2021-11-12 20:11:13",
    addtrss: 'https://blog.csdn.net/qq_38783557/article/details/124061163',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "template标签使用不恰当问题",
    blogDescribe: "template标签使用不恰当导致标签内组件内容等无法正常显示(vue2与vue3通用)",
    mdId: "vue2-template",
    createDate: "2022-7-4 10:40",
    addtrss: 'https://blog.csdn.net/sunhuaqiang1/article/details/111033797',
    watchCount: 51
  },
  {
    id: 2,
    blogTitle: "在单独js中引用vuex,及使用",
    blogDescribe: "单独js引入vuex出现underfind",
    mdId: "微信小程序",
    addtrss: 'https://blog.csdn.net/Hua_explore/article/details/112917665',
    createDate: "2021-11-12 20:11:13",
    watchCount: 51
  },
  {
    id: 2,
    blogTitle: "调试台无法选中该DOM",
    blogDescribe: "层级为一个原因",
    mdId: "微信小程序",
    createDate: "2021-11-12 20:11:13",
    watchCount: 51
  },

];
// import store from '../../store'
import { useStore } from "vuex";
const store = useStore();
// console.log(store, '我是list文件打印')
// let pageSize = store.state.paging.pageSize;
// let total = Vue2List
// store.commit('paging/pageChange',{type:'Vue2list',})
export {
  Vue2List
}