<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
#app {
  // font-family: "楷体";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  // color: #2c3e50;
  .markdown-body .highlight pre,
  .markdown-body pre {
    background-color: rgb(40, 44, 52); // 代码块背景色改变默认
    color: rgb(105, 195, 255); //代码括号颜色
    font-size: 14px;
    text-shadow: none !important;
  }

  .markdown-body code {
    text-shadow: none !important;
  }
}

* {
  padding: 0px;
  margin: 0px;
}

li,
ul {
  list-style: none;

}
</style>
