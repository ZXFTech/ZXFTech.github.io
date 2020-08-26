<template>
  <div class="app">
    <TitleBar>
      <NavbarMain slot="middle"></NavbarMain>
    </TitleBar>
    <router-view class="main-page"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleBar from "./components/myTitleBar/TitleBar.vue";
import NavbarMain from "./components/myNavbar/NavbarMain.vue";
import Navbar from "./components/myNavbar/Navbar.vue";

import { navbarContentList } from "./constant/pageState";
Vue.component("Navbar", Navbar);

@Component({
  components: {
    TitleBar,
    NavbarMain,
  },
})
export default class App extends Vue {
  private navbarState = false;

  private setNavbarState(state: boolean): void {
    this.navbarState = state;
  }
}
</script>

<style lang="scss"></style>
