<template>
  <div>
    <input
      type="number"
      min="1"
      max="9"
      :class="cellClass"
      :value="value.value"
      @input="setValue($event.target.value, true)"
    />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Cell } from "@/model/sudoku.model";

@Component
export default class SudokuCell extends Vue {
  @Prop() private value!: Cell;

  setValue(value: number | string, userInput = false): void {
    if (typeof value === "string") {
      value = parseInt(value[value.length - 1]);
    }
    value = Math.max(value as number, 1);
    value = Math.min(value as number, 9);
    this.value.value = value;
    if (value && userInput) {
      Vue.set(this.value, "modifier", "user-input");
    } else if (!value) {
      Vue.set(this.value, "modifier", null);
    }
    this.$forceUpdate();
    this.$emit("input", value);
  }

  get cellClass(): string[] {
    return this.value.modifiers;
  }
}
</script>
<style scoped>
div {
  background-color: white;
}
input {
  width: 40px;
  height: 40px;
  font-size: 20px;
  padding: 0;
  border: 1px solid black;
  text-align: center;
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input:focus {
  outline: none;
  background: radial-gradient(
    circle,
    rgba(63, 247, 148, 0.5) 0%,
    rgba(117, 255, 204, 0.3) 100%
  );
}
input.user-input {
  background-color: rgba(200, 200, 200, 0.5);
}
input.error {
  background-color: rgba(255, 49, 49, 0.5);
}
</style>
