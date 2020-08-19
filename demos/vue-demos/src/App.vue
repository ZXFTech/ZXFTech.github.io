<template>
  <div class="app">
    <TitleBar>
      <HumburgetBtn @sendToggleState="setNavbarState" slot="left"></HumburgetBtn>
      <Navbar v-if="navbarState" :navbarContent="navbar" slot="middle"></Navbar>
    </TitleBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleBar from "./components/myTitleBar/TitleBar.vue";
import HumburgetBtn from "./components/myHumburgerBtn/HumburgerBtn.vue";
import Navbar from "./components/myNavbar/Navbar.vue";

import { navbarContent } from "./constant/pageState";

@Component({
  components: {
    TitleBar,
    Navbar,
    HumburgetBtn,
  },
})
export default class App extends Vue {
  private navbar = navbarContent;

  private navbarState = false;

  private setNavbarState(state:boolean):void {
    console.log(state);
    this.navbarState = state;
  }
}
</script>

<style lang="scss"></style>
