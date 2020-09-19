<template>
  <button class="main-button" @click="$emit('click')">{{ label }}</button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MainButton extends Vue {
  @Prop({ required: true }) private label!: string;
}
</script>
<style scoped>
.main-button {
  background-color:#33eb91;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 100, 0.7) 0px 3px 2px;
  outline: none;
  transition: box-shadow 400ms;
}
.main-button:hover {
  box-shadow: rgba(100, 100, 100, 0.7) 0px 5px 3px;
}
.main-button:active {
  box-shadow: rgba(100, 100, 100, 0.7) 0px 1px 2px;
  outline: none;
}
</style>
