import {
  BlogContent,
  UserStatus,
  blogContentList,
  BlogComments,
  userStatus,
  blogComments,
} from "@/constant/pageState";

export const state: State = {
  blogList: blogContentList,
  blogComments: blogComments,
  profile: userStatus,
};

export interface State {
  blogList: BlogContent[];
  blogComments: BlogComments;
  profile: UserStatus;
}
