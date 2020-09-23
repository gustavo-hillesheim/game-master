<template>
  <router-link :to="route" tag="div">{{ label }}</router-link>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AppNavItem extends Vue {
  @Prop() private label!: string;
  @Prop() private route!: string;
}
</script>
<style scoped>
div {
  color: white;
  text-align: start;
  padding: 12px;
  cursor: pointer;
}
div.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
}
</style>
