<template>
  <SudokuPageTemplate>
    <template #title>
      <PageTitle>Sudoku</PageTitle>
    </template>
    <template #sudokuGrid>
      <SudokuGrid ref="grid" />
    </template>
    <template #details>
      <div style="height: 32px">
        <LoadingText v-if="isSolving" text="Resolvendo" />
      </div>
    </template>
    <template #mainButton>
      <MainButton label="Resolver" @click="solve" />
    </template>
  </SudokuPageTemplate>
</template>
<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";

import { SudokuService } from "../service/sudoku-service";

import SudokuPageTemplate from "../components/templates/SudokuPageTemplate.vue";
import SudokuGrid from "../components/molecules/SudokuGrid.vue";
import MainButton from "../components/atoms/MainButton.vue";
import PageTitle from "../components/atoms/PageTitle.vue";
import LoadingText from "../components/atoms/LoadingText.vue";

@Component({
  components: {
    SudokuPageTemplate,
    SudokuGrid,
    MainButton,
    PageTitle,
    LoadingText,
  },
})
export default class SudokuPage extends Vue {
  @Ref("grid") grid!: SudokuGrid;
  private isSolving = false;

  solve(): void {
    const sudoku = this.grid.getValue();
    this.isSolving = true;
    SudokuService.getInstance()
      .solve(sudoku)
      .then((solved) => {
        this.isSolving = false;
        solved
          .reduce((row1, row2) => [...row1, ...row2])
          .forEach((value, index) => {
            const x = index % 9;
            const y = (index - x) / 9;
            this.grid.setCellValue(x, y, value);
          });
      });
  }
}
</script>
