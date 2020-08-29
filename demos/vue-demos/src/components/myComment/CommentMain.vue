<template>
  <div class="comment_comment">
    <div class="comment_detail">
      <span class="comment_detail_author">{{ comment.author }}</span>
      <span class="comment_detail_date">{{ comment.date }}</span>
    </div>
    <div class="comment_content">{{ comment.content }}</div>
    <div class="comment_control-panel">
      <a class="comment_like" href="#">
        <span class="fa fa-thumbs-up"></span>
        {{ comment.likes }}
      </a>
      <a class="comment_dislike" href="#">
        <span class="fa fa-thumbs-down"></span>
      </a>
      <a class="comment_toggleBtn" @click="showReply">
        {{ expand ? "收起回复" : "展开回复" }}
      </a>
      <a class="comment_reply" @click="showInputArea">
        {{ isShow ? "取消回复" : "回复" }}
      </a>
      <CommentInputArea
        v-show="isShow"
        :placeholderText="placeholderText"
      ></CommentInputArea>
      <ul v-if="expand && comment.reply && comment.reply.length">
        <CommentSub
          v-for="(reply, index) in comment.reply"
          :key="index"
          :comment="reply"
        ></CommentSub>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import CommentInputArea from "./CommentInputArea.vue";
import CommentSub from "./CommentSub.vue";

import { BlogComment } from "../../constant/pageState";

@Component({
  components: {
    CommentInputArea,
    CommentSub,
  },
})
export default class CommentMain extends Vue {
  @Prop({ default: () => new Object() }) private comment!: BlogComment;
  private isShow = false;
  private expand = false;
  private showInputArea() {
    this.isShow = !this.isShow;
  }
  private showReply() {
    this.expand = !this.expand;
  }
  private placeholderText = "回复 " + this.comment.author;
}
</script>
