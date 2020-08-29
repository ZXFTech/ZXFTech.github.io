<template>
  <div class="comment_main">
    <div class="comment_input-area_title">
      <span class="comment_number">{{ commentList.length }}</span>
      评论
    </div>
    <CommentInputArea></CommentInputArea>
    <CommentTree
      v-for="comment in commentList"
      :key="comment"
      :comment="comment"
    ></CommentTree>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import CommentTree from "./CommentTree.vue";
import CommentInputArea from "./CommentInputArea.vue";

import { BlogComment } from "../../constant/pageState";

@Component({
  components: {
    CommentTree,
    CommentInputArea,
  },
})
export default class Comment extends Vue {
  @Prop({ default: () => [] }) private commentList!: Array<BlogComment>;
}
</script>
