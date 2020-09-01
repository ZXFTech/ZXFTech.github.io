<template>
  <div class="profile-card_main">
    <div class="profile-card_avatar">
      <img src="../../assets/img/blog/blog-img.jpg" alt="用户头像" />
    </div>
    <div class="profile-card_user-detail">
      <span class="profile-card_user-detail_name">{{ user.name }}</span>
      <span class="profile-card_user-detail_occupation">{{
        user.occupation
      }}</span>
      <ul>
        <li v-for="contact in user.contact" :key="contact.way">
          <a :href="contact.url">
            <span :class="'fa fa-' + contact.way"></span>
          </a>
        </li>
      </ul>
      <p class="profile-card_user-detail_introduction">
        {{ user.introduction }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ComponentsVue from "../../views/Components.vue";

import { UserStatus, userStatus } from "../../constant/pageState";

@Component
export default class ProfileCard extends Vue {
  @Prop({ default: new Object() }) private userStatus!: UserStatus;

  private user: UserStatus = userStatus;
}
</script>
