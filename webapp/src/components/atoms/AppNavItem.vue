<template>
  <router-link :to="route" tag="li">{{ label }}</router-link>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AppNavItem extends Vue {
  @Prop() private label!: string;
  @Prop() private route!: string;
}
</script>
