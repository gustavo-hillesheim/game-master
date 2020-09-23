<template>
  <router-link tag="div" to="/home">
    <img src="@/assets/app-logo.svg" height="34" />
  </router-link>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppLogo extends Vue {}
</script>
<style scoped>
div {
  color: white;
  font-size: 32px;
  cursor: pointer;
  padding: 8px;
}
</style>
