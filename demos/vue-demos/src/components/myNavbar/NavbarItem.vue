<template>
  <li class="navbar_list-item" :class="{ active: setActive() }">
    <a class="navbar_nav_link" @click="onClick" href="#">
      <span class="navbar_link_inner-text">{{
        navbarContentItem.navText
      }}</span>
      <img v-if="gotSubNavbar" src="@/assets/img/arrow.svg" alt="nav arrow" />
    </a>
    <Navbar
      v-if="gotSubNavbar"
      :navbarContentList="navbarContentItem.subNav"
      :parentNavbarUrl="navbarUrl"
      :navbarIndex="[...currentIndex, index]"
      :navbarLevel="navbarLevel"
      @emitSkip="handleSkip"
    ></Navbar>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

import { NavbarContent } from "../../constant/pageState";

@Component
export default class NavbarItem extends Vue {
  // 导航栏内容
  @Prop({ default: () => new Object() })
  private navbarContentItem!: NavbarContent;
  // 导航栏等级
  @Prop({ default: 0 }) private navbarLevel!: number;
  // 导航栏序号
  @Prop({ default: () => [0] }) private index!: Array<number>;
  // 父级导航栏序号
  @Prop({ default: () => [] }) private parentIndex!: Array<number>;
  // 父级导航栏url
  @Prop({ default: "" }) private parentNavbarUrl!: string;

  private isActive = false;
  // 是否有子导航栏
  private gotSubNavbar = this.navbarContentItem.subNav ? true : false;
  private currentIndex = this.index;
  private navbarUrl = this.parentNavbarUrl + this.navbarContentItem.navUrl;

  private onClick() {
    if (this.gotSubNavbar) {
      this.isActive = !this.isActive;
    } else {
      this.$router.push(this.parentNavbarUrl + this.navbarContentItem.navUrl);
      this.handleSkip();
    }
  }

  private setActive() {
    const state = this.gotSubNavbar && this.isActive;
    return state;
  }

  @Emit("emitSkip") private emitSkip() {
    this.isActive = false;
    return;
  }
  private handleSkip() {
    this.emitSkip();
  }
}
</script>

<style lang="scss"></style>
