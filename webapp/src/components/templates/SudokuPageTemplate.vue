<template>
  <div class="page-content">
    <div class="sudoku-grid-container">
      <slot name="sudokuGrid"></slot>
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
.sudoku-grid-container {
  flex: 2;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main-button-container {
  flex: 1;
}
</style>
