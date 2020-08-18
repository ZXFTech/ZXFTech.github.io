<template>
  <div class="app">
    <TitleBar>
      <Navbar :navbarContent="navbar" slot="middle"></Navbar>
    </TitleBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleBar from "./components/myTitleBar/TitleBar.vue";
import Navbar from "./components/myNavbar/Navbar.vue";

import { navbarContent } from "./constant/pageState";

@Component({
  components: {
    TitleBar,
    Navbar,
  },
})
export default class App extends Vue {
  private navbar = navbarContent;

}
</script>

<style lang="scss"></style>
