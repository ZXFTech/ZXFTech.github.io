<template>
  <div class="navbar_main">
    <NavbarHamburgerBtn
      :class="{ checked: navbarState }"
      @sendToggleState="setNavbarState"
    ></NavbarHamburgerBtn>
    <Navbar
      :class="{ showNavbar: navbarState }"
      :navbarContentList="navbarContentList"
      @emitSkip="handleSkip"
    ></Navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import { navbarContentList } from "../../constant/pageState";

import NavbarHamburgerBtn from "./NavbarHamburgerBtn.vue";
@Component({
  components: {
    NavbarHamburgerBtn,
  },
})
export default class NavbarMain extends Vue {
  private navbarState = false;
  private navbarContentList = navbarContentList;

  private setNavbarState(state: boolean) {
    this.navbarState = !this.navbarState;
  }

  private handleSkip() {
    this.navbarState = false;
    this.$forceUpdate();
  }
}
</script>
