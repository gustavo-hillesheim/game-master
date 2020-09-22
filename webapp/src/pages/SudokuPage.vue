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
        <ErrorText v-if="!!errorMessage" :text="errorMessage" />
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
import ErrorText from "../components/atoms/ErrorText.vue";

@Component({
  components: {
    SudokuPageTemplate,
    SudokuGrid,
    MainButton,
    PageTitle,
    LoadingText,
    ErrorText,
  },
})
export default class SudokuPage extends Vue {
  @Ref("grid") grid!: SudokuGrid;
  private isSolving = false;
  private errorMessage: string;

  solve(): void {
    const sudoku = this.grid.getValue();
    this.isSolving = true;
    this.errorMessage = null;
    SudokuService.getInstance()
      .solve(sudoku)
      .then((solved) => {
        const solvedSudokuArray = solved.reduce((row1, row2) => [
          ...row1,
          ...row2,
        ]);
        let index = 0;

        const intervalId = setInterval(() => {
          const value = solvedSudokuArray[index];
          const x = index % 9;
          const y = (index - x) / 9;
          this.grid.setCellValue(x, y, value);
          index++;
          if (index >= solvedSudokuArray.length) {
            clearInterval(intervalId);
            this.isSolving = false;
          }
        }, 10);
      })
      .catch(() => {
        this.errorMessage = "Não consegui resolver seu sudoku :c";
        this.isSolving = false;
      });
  }
}
</script>
