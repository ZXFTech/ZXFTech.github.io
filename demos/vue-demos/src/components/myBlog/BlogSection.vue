<template>
  <div class="blog_section">
    <div class="blog_section_img">
      <img
        src="../../assets/img/blog/blog-img.jpg"
        alt="blog image snap"
        class="blog_section_img"
      />
    </div>
    <div class="blog_section_content">
      <router-link to="/blog">{{ blog.title }}</router-link>
      <p>{{ blogSnaps }}</p>
      <div class="blog_section_details">
        <span class="blog_section_details_date">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"
            ></path>
          </svg>
          {{ blog.createDate }}
        </span>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"
            ></path>
          </svg>
          {{ !blog.comments ? 0 : blog.comments.length }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";

import { PageState } from "../../store/pageState";

import { BlogContent } from "../../constant/pageState";

@Component
export default class BlogSection extends Vue {
  @Prop({ default: () => new Object() }) private blogContent!: BlogContent;

  @State("pageState") pageState!: PageState;
  @Mutation("liked") liked: any;
  private blog: BlogContent = this.blogContent;
  private blogSnaps: string = this.blogContent.content.slice(0, 300);
}
</script>
