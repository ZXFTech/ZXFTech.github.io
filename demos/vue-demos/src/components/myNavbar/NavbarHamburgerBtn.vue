<template>
  <div class="navbar_hamburger-btn">
    <input
      id="navbar_hamburger-btn_input"
      type="checkbox"
      class="navbar_hamburger-btn_input"
      v-model="open"
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
import { Component, Vue, Emit, Prop } from "vue-property-decorator";

@Component
export default class NavbarHamburgerBtn extends Vue {
  @Prop({ default: false }) private hamburgerState!: boolean;

  private open = this.hamburgerState;

  @Emit("sendToggleState") private emitToggleState(): boolean {
    this.open = !this.open;
    return this.open;
  }
  private toggle() {
    this.emitToggleState();
  }
}
</script>
