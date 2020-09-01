import { MutationTree } from "vuex";

import { PageState } from "./PageState";
import { BlogComment } from "@/constant/pageState";
const mutations: any = {
  liked(state: PageState, { id, like, userId }: any) {
    state.blogList.forEach((blog) => {
      if (blog.blogId === id) {
        if (like) {
          blog.dislikes.indexOf(userId) !== -1 &&
            blog.dislikes.splice(blog.dislikes.indexOf(userId));
          blog.likes.indexOf(userId) === -1
            ? blog.likes.push(userId)
            : blog.likes.splice(blog.likes.indexOf(userId));
        } else {
          blog.likes.indexOf(userId) !== -1 &&
            blog.likes.splice(blog.likes.indexOf(userId));
          blog.dislikes.indexOf(userId) === -1
            ? blog.dislikes.push(userId)
            : blog.dislikes.splice(blog.likes.indexOf(userId));
        }
      }
    });
  },
  commentLiked(
    state: PageState,
    blogId: number,
    commentListId: number,
    commentId: number,
    like: boolean,
    userId: string
  ) {
    state.blogCommentList.forEach((comment) => {
      if (comment.blogId == blogId) {
        comment.commentList.forEach((comment) => {
          if (comment.commentListId === commentListId) {
            if (like) {
              comment.comment[commentId].dislikes.indexOf(userId) !== -1 &&
                comment.comment[commentId].dislikes.splice(
                  comment.comment[commentId].dislikes.indexOf(userId)
                );
              comment.comment[commentId].likes.indexOf(userId) === -1
                ? comment.comment[commentId].likes.push(userId)
                : comment.comment[commentId].likes.splice(
                    comment.comment[commentId].likes.indexOf(userId)
                  );
            } else {
              comment.comment[commentId].likes.indexOf(userId) !== -1 &&
                comment.comment[commentId].likes.splice(
                  comment.comment[commentId].likes.indexOf(userId)
                );
              comment.comment[commentId].dislikes.indexOf(userId) === -1
                ? comment.comment[commentId].dislikes.push(userId)
                : comment.comment[commentId].dislikes.splice(
                    comment.comment[commentId].likes.indexOf(userId)
                  );
            }
          }
        });
      }
    });
  },
  addComment(
    state: PageState,
    blogId: number,
    commentId: number,
    newComment: BlogComment
  ) {
    state.blogCommentList.forEach((comment) => {
      if (comment.blogId === blogId) {
        comment.commentList.forEach((comment) => {
          if (comment.commentListId === commentId) {
            comment.comment.push(newComment);
            return;
          }
        });
        const newIndex = comment.commentList.length;
        comment.commentList.push({
          commentListId: newIndex,
          comment: [newComment],
        });
      }
    });
  },
};

export default mutations;
