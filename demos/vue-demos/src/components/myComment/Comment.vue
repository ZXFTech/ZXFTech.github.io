<template>
  <div class="comment_main">
    <div class="comment_title">
      <span class="comment_number">{{ comments.commentList.length }}</span>
      评论
    </div>
    <CommentInputArea></CommentInputArea>
    <CommentMain
      v-for="(comment, index) in comments.commentList"
      :key="index"
      :comment="comment.comment"
      :blogId="comments.blogId"
      :commentId="comment.commentListId"
    ></CommentMain>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import CommentMain from "./CommentMain.vue";
import CommentInputArea from "./CommentInputArea.vue";

import { BlogComment, BlogComments } from "../../constant/pageState";

@Component({
  components: {
    CommentMain,
    CommentInputArea,
  },
})
export default class Comment extends Vue {
  @Prop({ default: () => new Object() }) private comments!: BlogComments;
}
</script>
