<template>
  <div class="comment_comment-reply">
    <div class="comment_detail">
      <span class="comment_detail_author">{{ comment.author }}</span>
      <span class="comment_detail_date">{{ comment.date }}</span>
      <div class="comment_content">{{ comment.content }}</div>
      <div class="comment_control-panel">
        <a class="comment_like" href="#">
          <span class="fa fa-thumbs-up"></span>
          {{ comment.likes }}
        </a>
        <a class="comment_dislike" href="#">
          <span class="fa fa-thumbs-down"></span>
        </a>
        <a class="comment_reply" @click="showInputArea">回复</a>
        <CommentInputArea
          v-show="isShow"
          :placeholderText="placeholderText"
        ></CommentInputArea>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { BlogComment } from "../../constant/pageState";

import CommentInputArea from "./CommentInputArea.vue";

@Component({
  components: {
    CommentInputArea,
  },
})
export default class CommentSub extends Vue {
  @Prop({ default: () => new Object() }) private comment!: BlogComment;

  private isShow = false;
  private showInputArea() {
    this.isShow = !this.isShow;
  }
  private placeholderText = "回复 " + this.comment.author;
}
</script>

<style lang="scss" scoped></style>
