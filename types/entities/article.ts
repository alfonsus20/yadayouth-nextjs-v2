import { Paginated } from "../apiResponse";

export type Article = {
  id: number;
  title: string;
  author: string | null;
  timePublised: string;
  articleImage: string;
  topic: string;
  preview: string;
  content: string;
};

export type ArticleDto = {
  previous: number | null;
  next: number | null;
  result: Article;
};

export type ArticleList = Paginated<Article>;
