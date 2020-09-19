<template>
  <div class="grid">
    <div class="row" v-for="y in 3" :key="y">
      <SudokuRegion
        v-for="x in 3"
        :key="x"
        @cell-change="setCellValue($event, x, y)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import SudokuRegion from "./SudokuRegion.vue";

@Component({
  components: { SudokuRegion },
})
export default class SudokuGrid extends Vue {
  private sudokuValue!: number[][];
  private cellMargin = "4px";

  constructor() {
    super();
    this.createSudokuValue();
  }

  getValue(): number[][] {
    return this.sudokuValue.map(row => [...row]);
  }

  private createSudokuValue(): void {
    this.sudokuValue = new Array(9).fill(null).map((_) => new Array(9));
  }

  setCellValue(
    { x: cellX, y: cellY, value }: { x: number; y: number; value: number },
    regionX: number,
    regionY: number
  ): void {
    const x = cellX + (regionX - 1) * 3;
    const y = cellY + (regionY - 1) * 3;
    this.sudokuValue[y - 1][x - 1] = value;
  }

  cellStyle(x: number, y: number): { [key: string]: number | string | null } {
    if (x % 3 !== 0 && y % 3 !== 0) {
      return {};
    }

    const marginRight = x % 3 === 0 && x !== 9 ? this.cellMargin : null;
    const marginBottom = y % 3 === 0 && y !== 9 ? this.cellMargin : null;
    return {
      marginRight,
      marginBottom,
    };
  }
}
</script>
<style scoped>
.grid {
  background-color: black;
  padding: 2px;
  width: fit-content;
  height: fit-content;
}
</style>
