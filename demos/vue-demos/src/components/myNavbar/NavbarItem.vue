<template>
  <router-link
    class="navbar_nav_link"
    :to="parentNavUrl + navbarItemContent.navUrl"
    @click.native="onClick"
  >
    <span class="navbar_link_inner-text">{{ navbarItemContent.navText }}</span>
    <img v-if="gotSubNavbar" src="@/assets/img/arrow.svg" alt="nav arrow" />
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class NavbarItem extends Vue {
  @Prop({ default: () => [0] }) private index!: Array<number>;
  @Prop({ default: () => [] }) private parentIndex!: Array<number>;
  @Prop({ default: "" }) private parentNavUrl!: string;
  @Prop({ default: () => new Object() }) private navbarItemContent!: unknown;
  @Prop({ default: false }) private gotSubNavbar!: boolean;

  private clicked = false;
  private currentIndex = this.index;

  @Emit("sendIndex") private emitClickEvent(currentIndex: Array<number>) {
    return currentIndex;
  }
  private onClick() {
    console.log(this.currentIndex);

    this.emitClickEvent(this.currentIndex);
  }
}
</script>

<style lang="scss"></style>
