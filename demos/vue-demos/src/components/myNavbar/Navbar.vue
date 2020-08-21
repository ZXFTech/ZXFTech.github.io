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
        @sendIndex="setIndex"
      ></NavbarItem>
      <Navbar
        v-if="navbarItem.subNav !== undefined && navbarItem.subNav.length !== 0"
        :navbarContent="navbarItem.subNav"
        :parentNavbarUrl="navbarItem.navUrl"
        :navbarIndex="[...currentIndex, index]"
        :navbarLevel="navbarLevel + 1"
        :activeIndex1="activeindex[navbarLevel+1]"
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
  @Prop({ default: () => [0] }) private navbarIndex!: Array<number>;
  @Prop({ default: -1 }) private activeIndex1!: number;
  @Prop({ default: () => [0] }) private parentNavbarIndex!: Array<number>;
  @Prop({ default: "" }) private parentNavbarUrl!: string;

  private activeIndex = [0];

  private levelClass = [
    "navbar_nav-list",
    "navbar_sub-nav-list",
    "navbar_secondary-nav-list",
  ];

  private currentIndex = this.navbarIndex;
  private mactiveIndex1 = this.activeIndex1;

  /**
   * checkIsActive
   */
  public checkIsActive(index: number): boolean {
    return this.activeIndex1 === index;
  }

  public setIndex(setIndex: Array<number>): void {
    this.activeIndex = setIndex;
    console.log(this.activeIndex[this.navbarLevel + 1]);
    this.$forceUpdate();
  }
}
</script>
