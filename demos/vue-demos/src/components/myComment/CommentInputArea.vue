<template>
  <div class="comment_input-area">
    <input
      type="text"
      class="comment_input-area_input"
      :placeholder="placeholderText"
    />
    <button class="comment_input-area_submitBtn">提交</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CommentInputArea extends Vue {
  @Prop({ default: () => new Object() }) private commentList!: Comment;
  @Prop({ default: "请输入您的回复..." }) private placeholderText!: string;
}
</script>
