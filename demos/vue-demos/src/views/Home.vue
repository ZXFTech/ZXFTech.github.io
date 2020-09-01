<template>
  <div class="home">
    <BlogSection
      v-for="blogContent in blogList"
      :key="blogContent.title"
      :blogContent="blogContent"
    ></BlogSection>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Prop, Component, Vue } from "vue-property-decorator";

import BlogSection from "../components/myBlog/BlogSection.vue";

import {
  BlogContent,
  blogContentList,
  blogComments,
  BlogComment,
  BlogComments,
} from "../constant/pageState";

@Component({
  components: {
    BlogSection,
  },
})
export default class Home extends Vue {
  private blogList: BlogContent[] = blogContentList;
}
</script>
