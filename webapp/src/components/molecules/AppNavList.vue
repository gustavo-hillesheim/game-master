<template>
  <div class="nav-list">
    <AppNavItem
      v-for="navItem of navItems"
      :label="navItem.label"
      :route="navItem.route"
      :key="navItem.route"
    />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import AppNavItem from "../atoms/AppNavItem.vue";
import { NavItem } from "@/model/navigation.model";

@Component({
  components: { AppNavItem },
})
export default class AppNavList extends Vue {
  @Prop() private navItems!: NavItem[];
}
</script>
<style scoped>
.nav-list {
  display: flex;
  flex-direction: column;
}
</style>
