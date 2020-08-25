<template>
  <ul :class="levelClass[navbarLevel] || 'navbar_secondary_nav_list'">
    <NavbarItem
      v-for="navbarContentItem in navbarContentList"
      :key="navbarContentItem.navName"
      :parentNavbarUrl="parentNavbarUrl"
      :navbarContentItem="navbarContentItem"
      :navbarLevel="navbarLevel + 1"
      @emitSkip="handleSkip"
    ></NavbarItem>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import NavbarItem from "@/components/myNavbar/NavbarItem.vue";

@Component({
  name: "Navbar",
  components: {
    NavbarItem: NavbarItem,
  },
})
export default class Navbar extends Vue {
  // 导航栏内容
  @Prop({ default: () => [] }) private navbarContentList!: Array<unknown>;
  // 导航栏等级
  @Prop({ default: 0 }) private navbarLevel!: number;
  // 导航栏序号
  @Prop({ default: () => [0] }) private navbarIndex!: Array<number>;
  // 父级导航栏序号
  @Prop({ default: () => [0] }) private parentNavbarIndex!: Array<number>;
  // 父级导航栏链接
  @Prop({ default: "" }) private parentNavbarUrl!: string;

  // emit
  @Emit("emitSkip") private emitSkip() {
    return;
  }
  private handleSkip() {
    this.emitSkip();
  }

  private levelClass = [
    "navbar_nav-list",
    "navbar_sub-nav-list",
    "navbar_secondary-nav-list",
  ];

  // 事件
}
</script>
