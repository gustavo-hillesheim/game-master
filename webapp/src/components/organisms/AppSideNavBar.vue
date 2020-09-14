<template>
  <div class="o-side-navbar" :style="sideBarStyle">
    <AppNavList :navItems="navItems" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import AppNavList from "../molecules/AppNavList.vue";
import { NavItem } from "@/model/navigation.model";

@Component({
  components: { AppNavList },
})
export default class AppSideNavBar extends Vue {
  private color = "#787878";
  private navItems: NavItem[] = [
    {
      label: "Sudoku",
      route: "/sudoku",
    },
  ];

  get sideBarStyle(): { [key: string]: string } {
    return {
      backgroundColor: this.color,
    };
  }
}
</script>
<style scoped>
.o-side-navbar {
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
