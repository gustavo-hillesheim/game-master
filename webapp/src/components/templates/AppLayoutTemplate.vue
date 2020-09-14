<template>
  <div class="t-layout">
    <div class="t-layout-header">
      <slot name="header"></slot>
    </div>
    <div class="t-layout-body">
      <div class="t-layout-sidebar">
        <slot name="sidebar"></slot>
      </div>
      <div class="t-layout-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppLayoutTemplate extends Vue {}
</script>
<style scoped>
.t-layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.t-layout-header {
  height: fit-content;
}

.t-layout-body {
  flex: 1;
  display: flex;
  flex-direction: row;
}

.t-layout-sidebar {
  width: fit-content;
}

.t-layout-content {
  flex: 1;
}
</style>
