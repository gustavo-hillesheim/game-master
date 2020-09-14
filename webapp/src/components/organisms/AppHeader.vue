<template>
  <div class="o-header" :style="headerStyle">
    <AppLogo style="margin: auto 8px" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppLogo from "../atoms/AppLogo.vue";

@Component({
  components: { AppLogo },
})
export default class AppHeader extends Vue {
  private color = "#000";

  get headerStyle(): { [key: string]: string } {
    return {
      backgroundColor: this.color,
    };
  }
}
</script>
<style scoped>
.o-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
}
</style>
