<template>
  <div class="p-layout">
    <AppLayoutTemplate>
      <template #header>
        <AppHeader />
      </template>
      <template #sidebar>
        <AppSideNavBar />
      </template>
      <template #content>
        <router-view></router-view>
      </template>
    </AppLayoutTemplate>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import AppHeader from "@/components/organisms/AppHeader.vue";
import AppSideNavBar from "@/components/organisms/AppSideNavBar.vue";
import AppLayoutTemplate from "@/components/templates/AppLayoutTemplate.vue";

@Component({
  components: { AppHeader, AppSideNavBar, AppLayoutTemplate },
})
export default class PagesLayout extends Vue {}
</script>
<style scoped>
.p-layout {
  width: 100vw;
  height: 100vh;
}
</style>
