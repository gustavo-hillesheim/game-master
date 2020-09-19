<template>
  <span v-if="hasText">{{ displayText }}</span>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LoadingText extends Vue {
  @Prop({ required: true }) private text!: string;
  @Prop() private ellipsisDuration = 1;

  private loadingIntervalId: number;
  private loadingEllipsis = "";

  created(): void {
    this.startLoadingEllipsis();
  }

  destroyed(): void {
    this.stopLoadingEllipsis();
  }

  updated(): void {
    this.stopLoadingEllipsis();
    this.startLoadingEllipsis();
  }

  private startLoadingEllipsis(): void {
    this.loadingIntervalId = setInterval(() => {
      this.loadingEllipsis += ".";
      if (this.loadingEllipsis.length > 3) {
        this.loadingEllipsis = "";
      }
    }, (this.ellipsisDuration / 3) * 1000);
  }

  private stopLoadingEllipsis(): void {
    clearInterval(this.loadingIntervalId);
  }

  get displayText(): string {
    return this.text + this.loadingEllipsis;
  }

  get hasText(): boolean {
    return !!this.text;
  }
}
</script>
