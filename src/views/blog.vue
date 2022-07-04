<template>
    <div class="box">
      <template>
        <el-empty :image-size="200" />
      </template>
    </div>
</template>


<script>
import diary from "./book.vue";
import { reactive, toRefs } from "vue";
import bus from "../event/event";
import { getListApi, getMarkdownContentApi, listClassifyApi, listDiaryApi, clientWidth, clientHeight } from "../apis/blog";
import { classList } from "../Administration/list";

import muster from "../Administration/content/muster";

export default {};
</script>

<style lang="less" scoped>
.hide-article-list {
  transform: scale(0) !important;
}

.show-blog-viewer {
  transform: scale(1) !important;
}

#md {
  width: 70%;
}

.scale-view {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 0.3s;
  overflow-y: auto;
}

.body {
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;

  .theme {
    position: absolute;
    background: #ffffff;
    top: 5px;
    right: 0px;
    bottom: 5px;
    left: 322px;

    .blog-layout {
      display: flex;
      flex-direction: column;
    }

    .diary-layout {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .layout-item {
      transition: all 0.5s;
      position: absolute;
      bottom: 0px;
      left: 0px;
      top: 0px;
      right: 0px;
    }

    .container {
      position: relative;
      margin-top: 61px;
      flex: 1;

      .el-main {
        height: 100%;
        padding: 0px;
      }

      .article-viewer {
        transform: scale(0);
        background: #ffffff;
        .scale-view;
      }

      .article-list {
        .scale-view;

        button.select {
          background: #424242;
          color: #ffffff;
        }

        .page-button {
          cursor: pointer;
          background: #fff;
          border: none;
          padding: 3px 14px;
          color: #000000;
          border-radius: 4px;
          margin: 0 7px;
          border: 1px #424242 solid;
        }

        .article-item {
          cursor: pointer;
          margin-bottom: 20px;
          border-bottom: 1px #f7f7f7 solid;

          .title {
            color: #383838;
            font-size: 15px;
          }

          .outline {
            margin-top: 6px;
            font-size: 13px;
            color: #464646;
            width: 70%;
            padding: 2px 0px;
          }

          footer {
            text-align: justify;
            align-items: center;
            height: 33px;
            display: flex;

            span.text {
              font-size: 10px;
              margin-left: 3px;
              margin-right: 15px;
            }
          }
        }
      }
    }

    nav {
      padding-bottom: 10px;
      border-bottom: 1px #dadada solid;
      height: 40px;
      position: absolute;
      left: 0px;
      right: 0px;
      align-items: center;
      overflow: hidden;
      display: flex;
      align-items: center;

      .bottom-title {
        transition: all 0.5s;
        transform: translateY(50px);
      }

      .article-title {
        margin-right: 10px;
        color: #383838;
        font-size: 15px;
      }

      .list {
        position: absolute;
        transition: all 0.5s;
        display: flex;
        align-items: center;
        height: 100%;

        li:nth-of-type(1) {
          margin-left: 0px;
        }

        li:nth-last-of-type(1) {
          margin-right: 0px;
        }

        li {
          margin: 0 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        li.select {
          border-bottom: 2px #000000 solid;
          height: 100%;
        }
      }
    }
  }

  aside {
    text-align: center;
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 300px;
    background: #ffffff;
    background-image: url("/background/bck1.jpg");

    .menu-list {
      color: #ffffff;

      .menu-item {
        margin: 20px 0px;
        cursor: pointer;
      }
    }

    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: -1;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        position: absolute;
      }

      div {
        height: 100%;
        width: 100%;
        background: #000000de;
        position: absolute;
        left: 0px;
        top: 0px;
      }
    }

    .bck::before {
      content: "2";
      position: relative;
      left: 0px;
      width: 100%;
      height: 100%;
      background: #ff0000;
    }

    .site {
      margin-top: 20px;
      position: absolute;
      bottom: 10px;
      width: 100%;

      img {
        width: 23px;
        margin: 0px 20px;
        /* border: 2px #dadadd solid; */
        // border-radius: 50%;
        // padding: 5px;
        // background: #ffffff;
      }
    }

    .title {
      display: inline-block;
      margin-top: 20px;
      font-family: "Windsong";
      font-size: 2.8rem;
      color: #ffffff;
    }

    .avatar {
      margin-top: 3rem;
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      border: 4px solid #fff;
      box-shadow: 0 1px 4px #0000004d;
      object-fit: cover;
    }
  }
}
</style>
