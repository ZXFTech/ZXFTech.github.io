import {
  BlogContent,
  UserStatus,
  blogContentList,
  BlogComments,
  userStatus,
  blogCommentList,
} from "@/constant/pageState";

export const pageState: PageState = {
  blogList: blogContentList,
  blogCommentList: blogCommentList,
  profile: userStatus,
};

export interface PageState {
  blogList: BlogContent[];
  blogCommentList: BlogComments[];
  profile: UserStatus;
}
