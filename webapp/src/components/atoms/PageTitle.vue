<template>
  <span class="page-title"><slot></slot></span>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PageTitle extends Vue {}
</script>
<style scoped>
.page-title {
  font-size: 32px;
  font-weight: bolder;
}
</style>
