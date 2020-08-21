<template>
  <div class="navbar_hamburger-btn">
    <input
      id="navbar_hamburger-btn_input"
      type="checkbox"
      class="navbar_hamburger-btn_input"
      @click="toggle"
    />
    <label for="navbar_hamburger-btn_input" class="navbar_hamburger-btn_label">
      <i></i>
      <i></i>
      <i></i>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class HumburgerBtn extends Vue {
  private open = false;

  @Emit("sendToggleState") private emitToggleState(): boolean {
    return this.open;
  }
  private toggle() {
    this.open = !this.open;
    this.emitToggleState();
  }
}
</script>
