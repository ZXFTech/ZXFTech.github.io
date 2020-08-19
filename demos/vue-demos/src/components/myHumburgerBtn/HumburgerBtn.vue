<template>
  <button class="navbar_humburger-btn" @click="toggle">
    <span>菜</span>
  </button>
</template>


<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class HumburgerBtn extends Vue {

  private open = false;

  @Emit('sendToggleState') private emitToggleState():boolean {
    return this.open
  } 
  private toggle() {    
    this.open = !this.open
    this.emitToggleState()
  }
}
</script>


<style lang="scss">
.navbar_humburger-btn {
  height: 100rem;
  width: 10rem;
  background-color: var(--bg-main-color);
}

</style>