<template>
  <div class="blog-page_main">
    <div class="blog-page_title">
      {{ blogContent.title }}
    </div>
    <div class="blog-page_tags">
      <span v-for="tag in blogContent.tags" :key="tag">
        {{ tag }}
      </span>
    </div>
    <div class="blog-page_details">
      <span class="blog-page_author">{{ blogContent.author }}</span>
      <span class="blog-page_createDate">{{ blogContent.createDate }}</span>
      <span class="blog-page_updateDate">
        最后更新于 {{ blogContent.updateDate }}
      </span>
    </div>
    <div class="blog-page_content">
      {{ blogContent.content }}
    </div>
    <div class="blog-page_shares">
      分享：
      <a class="facebook" href="#">
        <span class="fa fa-facebook-f"></span>
      </a>
      <a class="qq" href="#">
        <span class="fa fa-qq"></span>
      </a>
      <a class="weixin" href="#">
        <span class="fa fa-weixin"></span>
      </a>
    </div>
    <Comment :comments="comments"></Comment>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";

import { PageState } from "../store/pageState";

import {
  blogContentList,
  BlogContent,
  blogCommentList,
  BlogComment,
  BlogComments,
} from "../constant/pageState";

import Comment from "../components/myComment/Comment.vue";

@Component({
  components: {
    Comment,
  },
})
export default class BlogPage extends Vue {
  @State("pageState") pageState!: PageState;
  @Mutation("liked") liked: any;

  private blogContent: BlogContent = blogContentList[0];
  private comments: BlogComments = blogCommentList[0];
}
</script>

<style lang="scss" scoped></style>
