import { createStore } from 'vuex'
// 全局模块
import global from './modules/global'
// 局部模块
import article from './modules/article'
import paging from './modules/paging'

export default createStore({
  ...global,
  modules:{
    article,
    paging
  }
})
