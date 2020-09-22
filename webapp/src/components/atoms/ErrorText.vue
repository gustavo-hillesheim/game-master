<template>
  <span class="error-text">{{ text }}</span>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ErrorText extends Vue {
  @Prop({ required: true }) private text!: string;
}
</script>
<style scoped>
.error-text {
  color: red;
}
</style>
