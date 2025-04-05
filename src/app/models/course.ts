export interface Course {
  id?: number;
  title: string;
  url: string;
  price: number;
  content: string;
  createdAt?: Date;
  publishedAt?: Date;
  active: boolean;
}
