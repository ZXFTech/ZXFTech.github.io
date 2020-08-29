<template>
  <div class="comment_comment">
    <div class="comment_detail">
      <span class="comment_detail_author">{{ comment.author }}</span>
      <span class="comment_detail_date">{{ comment.date }}</span>
    </div>
    <div class="comment_content">{{ comment.content }}</div>
    <div class="comment_control-panel">
      <a class="comment_like" href="#"
        ><span>{{ comment.likes }}</span></a
      >
      <a class="comment_dont-like" href="#"><span></span></a>
      <button class="comment_reply" @click="showInputArea">回复</button>
      <CommentInputArea
        v-show="isShow"
        :placeholderText="placeholderText"
      ></CommentInputArea>
      <div v-if="comment.reply && comment.reply.length" :comment="comment">
        123
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import CommentInputArea from "./CommentInputArea.vue";

import { BlogComment } from "../../constant/pageState";

@Component({
  components: {
    CommentInputArea,
  },
})
export default class CommentTree extends Vue {
  @Prop({ default: () => new Object() }) private comment!: BlogComment;
  private isShow = false;
  private showInputArea() {
    this.isShow != this.isShow;
  }
  private placeholderText = "回复 " + this.comment.author;
}
</script>
