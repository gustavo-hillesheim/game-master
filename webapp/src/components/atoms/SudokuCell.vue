<template>
  <div>
    <input
      type="number"
      min="1"
      max="9"
      :value="value"
      @input="setValue($event.target.value)"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SudokuCell extends Vue {
  private internalValue: number = null;

  setValue(value: number | string): void {
    if (typeof value === "string") {
      value = parseInt(value[value.length - 1]);
    }
    value = Math.max(value as number, 1);
    value = Math.min(value as number, 9);

    this.internalValue = value;
    this.$forceUpdate();
    this.$emit("input", value);
  }

  get value(): number {
    return this.internalValue;
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
</style>
