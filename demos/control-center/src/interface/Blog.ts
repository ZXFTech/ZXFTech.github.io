export interface Blog {
  id?: string;
  title: string;
  author: string;
  content: string;
  keywords: string[];
  series: string;
  // comments: Comment[];
  comments: string;
  date: string;
  updateDate: string;
  likes: string[];
  removed?: boolean;
}

export interface Comment {
  id?: string;
  name?: string;
  content?: string;
  date?: string;
  reply?: Comment[];
}
