import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// markdown样式
import "github-markdown-css";
// 代码高亮
// import "highlight.js/styles/github.css"; //默认样式
 
import "./assets/css/article.css"
 


// 引入md文章组件列表
import { mdArticle } from "./Administration/article/index";


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


let app =createApp(App).use(ElementPlus).use(store).use(router).use(mdArticle)

app.mount('#app')

