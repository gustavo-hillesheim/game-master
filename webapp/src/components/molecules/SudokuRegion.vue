<template>
  <div class="region">
    <div class="row" v-for="y in 3" :key="y">
      <SudokuCell
        v-for="x in 3"
        :key="x"
        :value="cellValue(x, y)"
        @input="$emit('cell-change', { x: x - 1, y: y - 1, value: $event })"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import SudokuCell from "../atoms/SudokuCell.vue";

function defaultRegioNValue(): number[][] {
  return new Array(3).fill(null).map((_) => new Array(3));
}

@Component({ components: { SudokuCell } })
export default class SudokuRegion extends Vue {
  @Prop({ default: defaultRegioNValue() }) private value: number[][];

  cellValue(x: number, y: number): number {
    return this.value.slice(y - 1, y)[0].slice(x - 1, x)[0];
  }
}
</script>
<style scoped>
.region {
  border: 1px solid black;
}
</style>
