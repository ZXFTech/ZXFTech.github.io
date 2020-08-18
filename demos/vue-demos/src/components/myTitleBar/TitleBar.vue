<template>
  <div class="title-bar">
    <slot name="left"></slot>
    <slot name="middle"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TitleBar extends Vue {}
</script>

<style lange="scss" scoped></style>
