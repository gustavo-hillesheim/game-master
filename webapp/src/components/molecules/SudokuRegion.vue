<template>
  <div class="region">
    <div class="row" v-for="y in 3" :key="y">
      <SudokuCell
        v-for="x in 3"
        :key="x"
        @input="$emit('cell-change', { x: x - 1, y: y - 1, value: $event })"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import SudokuCell from "../atoms/SudokuCell.vue";

@Component({ components: { SudokuCell } })
export default class SudokuRegion extends Vue {}
</script>
<style scoped>
.region {
  border: 1px solid black;
}
</style>
