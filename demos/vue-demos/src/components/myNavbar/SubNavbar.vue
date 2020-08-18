<template>
  <ul class="navbar_sub-nav-list">
    <li class="navbar_sub-nav-list_item" v-for="subNavItem in subNavContent" :key="subNavItem.navName">
      <NavbarItem
        :navbarItemContent="subNavItem"
        :index="index"
        :parentNavUrl="parentNavUrl"
        @sendIndex="sendIndex"
      ></NavbarItem>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

import NavbarItem from "@/components/myNavbar/NavbarItem.vue";

@Component({
  components: {
    NavbarItem,
  },
})
export default class SubNavbar extends Vue {
  @Prop({ default: () => [] }) private subNavContent!: Array<unknown>;
  @Prop({ default: "" }) private parentNavUrl!: string;
  @Prop({ default: 0 }) private index!: number;


  @Emit("sendIndex") private emitClickEvent(index: number) {
    return index;
  }
  private sendIndex() {
    this.emitClickEvent(this.index);
  }
}
</script>

<style lang="scss" scoped>
.subNavbar {
  color: red;
}
</style>
