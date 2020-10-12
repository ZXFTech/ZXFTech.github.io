<template>
  <div class="comment_comment">
    <div class="comment_detail">
      <span class="comment_detail_author">{{ comment[0].author }}</span>
      <span class="comment_detail_date">{{ comment[0].date }}</span>
    </div>
    <div class="comment_content">{{ comment[0].content }}</div>
    <div class="comment_control-panel">
      <a class="comment_like" @click="handleClick">
        <span class="fa fa-thumbs-up"></span>
        {{ comment[0].likes.length }}
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
      <ul v-if="expand && comment[1]">
        <CommentSub
          v-for="(reply, index) in comment.slice(1)"
          :key="index"
          :comment="reply"
        ></CommentSub>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
// import { State, Mutation } from "vuex-class";

import CommentInputArea from "./CommentInputArea.vue";
import CommentSub from "./CommentSub.vue";

import { PageState } from "../../store/pageState";
import { BlogComment } from "../../constant/pageState";

@Component({
  components: {
    CommentInputArea,
    CommentSub,
  },
})
export default class CommentMain extends Vue {
  @Prop({ default: () => new Object() }) private comment!: BlogComment[];
  @Prop({ default: 0 }) private blogId!: number;
  @Prop({ default: 0 }) private commentListId!: number;

  // @State("state") pageState!: PageState;
  // @Mutation("commentLiked") commentLiked: any;

  private isShow = false;
  private expand = false;
  private placeholderText = "回复 " + this.comment[0].author;

  private showInputArea() {
    this.isShow = !this.isShow;
  }
  private showReply() {
    this.expand = !this.expand;
  }
  private handleClick() {
    // this.commentLiked(this.pageState, {
    //   blogId: this.blogId,
    //   commentListId: this.commentListId,
    //   like: true,
    //   userId: 0,
    // });
  }
}
</script>
