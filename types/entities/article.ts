import { Paginated } from "../apiResponse";

export type Article = {
  id: number;
  title: string;
  author?: string;
  timePublised: string;
  articleImage: string;
  topic: string;
  preview: string;
  content: string;
};

export type ArticleDto = {
  previous?: number;
  next?: number;
  result: Article;
};

export type ArticleList = Paginated<Article>;
