<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import { reactive, toRef, onBeforeMount } from "vue";
import { ElLoading } from "element-plus";
export default {
  setup() {
    onBeforeMount(() => {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 500);
    });
    return {};
  },
};
</script>

<style></style>
