<template>
  <!-- <ul v-if="navbarContent !== undefined && navbarContent.length !== 0"> -->
  <!-- <div class="navbar_main"> -->
  <ul :class="levelClass[navbarLevel]">
    <li
      class="navbar_list-item"
      v-for="(navbarItem, index) in navbarContent"
      :key="navbarItem.navName"
      :class="{ active: checkIsActive(index) }"
    >
      <NavbarItem
        :navbarItemContent="navbarItem"
        :index="[...currentIndex, index]"
        :gotSubNavbar="
          navbarItem.subNav !== undefined && navbarItem.subNav.length !== 0
        "
        @sendActiveIndex="sendActiveIndex"
      ></NavbarItem>
      <Navbar
        v-if="navbarItem.subNav !== undefined && navbarItem.subNav.length !== 0"
        :navbarContent="navbarItem.subNav"
        :parentNavbarUrl="navbarItem.navUrl"
        :navbarIndex="[...currentIndex, index]"
        :navbarLevel="navbarLevel + 1"
        @sendActiveIndex="sendActiveIndex"
      ></Navbar>
    </li>
  </ul>
  <!-- </div> -->
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import NavbarItem from "@/components/myNavbar/NavbarItem.vue";

@Component({
  components: {
    NavbarItem,
  },
})
export default class Navbar extends Vue {
  // 导航栏内容
  @Prop({ default: () => [] }) private navbarContent!: Array<unknown>;
  // 导航栏等级
  @Prop({ default: 0 }) private navbarLevel!: number;
  // 导航栏序号
  @Prop({ default: () => [0] }) private navbarIndex!: Array<number>;
  // 父级导航栏序号
  @Prop({ default: () => [0] }) private parentNavbarIndex!: Array<number>;
  // 父级导航栏链接
  @Prop({ default: "" }) private parentNavbarUrl!: string;
  // 当前激活菜单序号
  @Prop({ default: () => [0] }) private activeIndex!: Array<number>;

  // emit
  @Emit("sendActiveIndex") private emitActiveIndex(index: Array<number>) {
    return index;
  }

  private levelClass = [
    "navbar_nav-list",
    "navbar_sub-nav-list",
    "navbar_secondary-nav-list",
  ];

  private currentIndex = this.navbarIndex;

  public checkIsActive(index: number): boolean {
    return this.currentIndex[this.navbarLevel] === index;
  }

  // 事件
  private sendActiveIndex(index: Array<number>) {
    this.emitActiveIndex(index);
  }
}
</script>
