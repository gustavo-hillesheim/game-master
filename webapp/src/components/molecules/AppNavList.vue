<template>
  <ul>
    <AppNavItem
      v-for="navItem of navItems"
      :label="navItem.label"
      :route="navItem.route"
      :key="navItem.route"
    />
  </ul>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import AppNavItem from "../atoms/AppNavItem.vue";
import { NavItem } from "@/model/navigation.model";

@Component({
  components: { AppNavItem }
})
export default class AppNavList extends Vue {
  @Prop() private navItems!: NavItem[];
}
</script>
