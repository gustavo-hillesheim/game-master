<template>
  <SudokuPageTemplate>
    <template #sudokuGrid>
      <SudokuGrid ref="grid" />
    </template>
    <template #mainButton>
      <MainButton label="Resolver" @click="log" />
    </template>
  </SudokuPageTemplate>
</template>
<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";

import SudokuPageTemplate from "../components/templates/SudokuPageTemplate.vue";
import SudokuGrid from "../components/molecules/SudokuGrid.vue";
import MainButton from "../components/atoms/MainButton.vue";

@Component({ components: { SudokuPageTemplate, SudokuGrid, MainButton } })
export default class SudokuPage extends Vue {
  @Ref("grid") grid!: SudokuGrid;

  log(): void {
    console.log(this.grid.getValue());
  }
}
</script>
