<template>
  <div class="grid">
    <div class="row" v-for="y in 3" :key="y">
      <SudokuRegion
        v-for="x in 3"
        :key="x"
        :value="regionValue(x, y)"
        @cell-change="setValueByRegion($event.value, $event.x, $event.y, x, y)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Cell } from "@/model/sudoku.model";
import { Component, Vue } from "vue-property-decorator";

import SudokuRegion from "./SudokuRegion.vue";

import { Square, Sudoku, SudokuVerifier } from "../../service/sudoku";

const sudokuVerifier = new SudokuVerifier();

function defaultGridValue(): Cell[][] {
  return new Array(9)
    .fill(null)
    .map(() =>
      new Array(9).fill(null).map((_) => ({ value: null, modifiers: [] }))
    );
}

@Component({
  components: { SudokuRegion },
})
export default class SudokuGrid extends Vue {
  private sudokuValue: Cell[][] = defaultGridValue();
  private erroredSquares: Square[] = [];
  private cellMargin = "4px";

  getValue(): Cell[][] {
    return this.sudokuValue.map((row) => [...row]);
  }

  getErrors(): Square[] {
    return this.erroredSquares.map((square) => ({ ...square } as Square));
  }

  regionValue(x: number, y: number): Cell[][] {
    const initialX = (x - 1) * 3;
    const finalX = x * 3 - 1;
    const initialY = (y - 1) * 3;
    const finalY = y * 3 - 1;

    const regionValue: Cell[][] = [];
    for (let cellY = initialY; cellY <= finalY; cellY++) {
      const rowValue = [];
      for (let cellX = initialX; cellX <= finalX; cellX++) {
        rowValue.push(
          this.sudokuValue.slice(cellY, cellY + 1)[0].slice(cellX, cellX + 1)[0]
        );
      }
      regionValue.push(rowValue);
    }

    return regionValue;
  }

  private setValueByRegion(
    value: number,
    cellX: number,
    cellY: number,
    regionX: number,
    regionY: number
  ): void {
    cellX += (regionX - 1) * 3;
    cellY += (regionY - 1) * 3;
    this.setCellValue(cellX, cellY, value);
  }

  setCellValue(x: number, y: number, value: number): void {
    this.sudokuValue[y][x].value = value;
    this.verifyValidity();
  }

  setCellError({ x, y }: { x: number; y: number }): void {
    this.sudokuValue[y][x].modifiers.push("error");
  }

  private verifyValidity(): void {
    const sudokuNumbers = this.sudokuValue.map((row) =>
      row.map((cell) => cell.value)
    );
    this.clearErrors();
    this.erroredSquares = sudokuVerifier
      .findErrors(new Sudoku(sudokuNumbers))
      .filter((erroredSquare) => erroredSquare.value);

    this.erroredSquares.forEach(this.setCellError);
  }

  private clearErrors(): void {
    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        const cell = this.sudokuValue[y][x];
        let errorIndex = 0;
        while ((errorIndex = cell.modifiers.indexOf("error")) >= 0) {
          cell.modifiers.splice(errorIndex, 1);
        }
      }
    }
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
