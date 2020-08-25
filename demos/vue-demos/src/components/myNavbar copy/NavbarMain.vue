<template>
  <div class="navbar_main">
    <NavbarHamburgerBtn @sendToggleState="setNavbarState"></NavbarHamburgerBtn>
    <Navbar
      :class="{ showNavbar: navbarState }"
      :navbarContent="navbarContent"
      :activeIndex="activeIndex"
      @sendActiveIndex="setActiveIndex"
    ></Navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import { navbarContentList } from "../../constant/pageState";

import NavbarHamburgerBtn from "./NavbarHamburgerBtn.vue";
import Navbar from "./Navbar.vue";

@Component({
  components: {
    NavbarHamburgerBtn,
    Navbar,
  },
})
export default class NavbarMain extends Vue {
  private navbarState = false;
  private navbarContent = navbarContentList;
  private activeIndex = [0];

  private setNavbarState(state: boolean) {
    this.navbarState = state;
  }

  private setActiveIndex(index: Array<number>) {
    console.log(index);
    this.activeIndex = index;
    this.$forceUpdate();
  }
}
</script>
