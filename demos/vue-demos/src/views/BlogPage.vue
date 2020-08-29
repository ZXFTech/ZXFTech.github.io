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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { blogContentList, BlogContent } from "../constant/pageState";

@Component
export default class BlogPage extends Vue {
  private blogContent: BlogContent = blogContentList[0];
}
</script>

<style lang="scss" scoped></style>
