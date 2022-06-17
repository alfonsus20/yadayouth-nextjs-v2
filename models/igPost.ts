import api from "../api";
import { APIResponsePaginated } from "../types/apiResponse";
import { IGPost } from "../types/entities/igPost";

export const fetchIGPosts = (): APIResponsePaginated<IGPost> => {
  return api.get("/instagramSupabase");
};
