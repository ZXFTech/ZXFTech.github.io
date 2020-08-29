<template>
  <div class="home">
    <BlogSection
      v-for="blogContent in blogList"
      :key="blogContent.title"
      :blogContent="blogContent"
    ></BlogSection>
    <Comment :commentList="commentList"></Comment>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Prop, Component, Vue } from "vue-property-decorator";

import BlogSection from "../components/myBlog/BlogSection.vue";
import Comment from "../components/myComment/Comment.vue";

import {
  BlogContent,
  blogContentList,
  blogCommentList,
  BlogComment,
} from "../constant/pageState";

@Component({
  components: {
    BlogSection,
    Comment,
  },
})
export default class Home extends Vue {
  private blogList: BlogContent[] = blogContentList;
  private commentList: BlogComment[] = blogCommentList;
}
</script>
