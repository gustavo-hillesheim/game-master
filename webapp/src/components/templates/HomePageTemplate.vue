<template>
  <div class="page-content">
    <div class="title-container">
      <slot name="title"></slot>
    </div>
    <div class="content-container">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomePageTemplate extends Vue {}
</script>
<style scoped>
.page-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.title-container {
  margin: 16px 0;
}
.content-container {
  margin: 32px auto;
  display: flex;
  flex-direction: column;
}
</style>
