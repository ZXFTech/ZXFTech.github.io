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
        :index="index"
        :parentIndex="parentNavbarIndex"
        :gotSubNavbar="navbarItem.subNav !== undefined && navbarItem.subNav.length !== 0"
        @sendIndex="setIndex"
      ></NavbarItem>
      <Navbar
        v-if="navbarItem.subNav !== undefined && navbarItem.subNav.length !== 0"
        :navbarContent="navbarItem.subNav"
        :parentNavbarUrl="navbarItem.navUrl"
        :index="index"
        :parentNavbarIndex="currentIndex"
        :navbarLevel="navbarLevel + 1"
        @sendIndex="setIndex"
      ></Navbar>
    </li>
  </ul>
  <!-- </div> -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SubNavbar from "@/components/myNavbar/SubNavbar.vue";
import NavbarItem from "@/components/myNavbar/NavbarItem.vue";

@Component({
  components: {
    SubNavbar,
    NavbarItem,
  },
})
export default class Navbar extends Vue {
  @Prop({ default: () => [] }) private navbarContent!: Array<unknown>;
  @Prop({ default: 0 }) private navbarLevel!: number;
  @Prop({ default: 0 }) private navbarIndex!: number;
  @Prop({ default: () => [] }) private parentNavbarIndex!: Array<number>;
  @Prop({ default: "" }) private parentNavbarUrl!: string;

  private activeIndex = [0];

  private levelClass = [
    "navbar_nav-list",
    "navbar_sub-nav-list",
    "navbar_secondary-nav-list",
  ];

  private currentIndex = [...this.parentNavbarIndex, this.navbarIndex];

  /**
   * checkIsActive
   */
  public checkIsActive(index: number): boolean {
    return this.activeIndex[this.navbarLevel] === index;
  }

  public setIndex(index: Array<number>): void {
    this.activeIndex = index;
    this.$forceUpdate();
  }
}
</script>
