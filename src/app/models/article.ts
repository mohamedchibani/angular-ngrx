export interface Article {
  id?: number;
  title: string;
  body: string;
  views?: number;
  reaction?: Reaction;
  image: string;
  category: Category;
  author?: number;
}

export interface Reaction {
  likes: number;
  dislikes: number;
}

export interface Category {
  id?: number;
  name: string;
  slug: string;
}
