<template>
  <div class="page-content">
    <div class="title-container">
      <slot name="title"></slot>
    </div>
    <div class="sudoku-grid-container">
      <slot name="sudokuGrid"></slot>
    </div>
    <div class="details-container">
      <slot name="details"></slot>
    </div>
    <div class="main-button-container">
      <slot name="mainButton"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SudokuPageTemplate extends Vue {}
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
.sudoku-grid-container {
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.details-container {
  margin: 16px 0;
}
.main-button-container {
  margin: 16px 0;
}
</style>
