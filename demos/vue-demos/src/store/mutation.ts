import { State } from "./state";

export default {
  Liked(state: State, blogId: number, like: boolean, userId: string) {
    state.blogList.forEach((blog) => {
      if (blog.blogId === blogId) {
        if (like) {
          blog.dislikes.indexOf(userId) !== -1 &&
            blog.dislikes.splice(blog.dislikes.indexOf(userId));
          blog.likes.indexOf(userId) === -1
            ? blog.likes.push(userId)
            : blog.likes.splice(blog.likes.indexOf(userId));
        }
      }
    });
  },
};
