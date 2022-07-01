import { createStore } from 'vuex'
// 全局模块
import global from './modules/global'
// 局部模块
import article from './modules/article'

export default createStore({
  ...global,
  modules:{
    article
  }
})
