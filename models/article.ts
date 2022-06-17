import { AxiosPromise } from "axios";
import api from "../api";
import { APIResponsePaginated } from "../types/apiResponse";
import { Article } from "../types/entities/article";

export const fetchArticles = (): APIResponsePaginated<Article> => {
  return api.get("/article");
};

export const fetchArticlesById = (id : string): AxiosPromise<Article> => {
  return api.get(`/article/${id}`);
};
