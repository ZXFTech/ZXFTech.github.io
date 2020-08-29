<template>
  <div class="comment_main">
    <div class="comment_title">
      <span class="comment_number">{{ commentList.length }}</span>
      评论
    </div>
    <CommentInputArea></CommentInputArea>
    <CommentMain
      v-for="comment in commentList"
      :key="comment.author"
      :comment="comment"
    ></CommentMain>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import CommentMain from "./CommentMain.vue";
import CommentInputArea from "./CommentInputArea.vue";

import { BlogComment } from "../../constant/pageState";

@Component({
  components: {
    CommentMain,
    CommentInputArea,
  },
})
export default class Comment extends Vue {
  @Prop({ default: () => [] }) private commentList!: Array<BlogComment>;
}
</script>
