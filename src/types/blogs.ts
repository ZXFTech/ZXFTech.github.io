export interface FTag {
  content: string;
  color: string;
}

export interface FBlog {
  id?: number;
  title: string;
  author: string;
  gmtCreate?: string;
  content: string;
  likes?: number;
}
