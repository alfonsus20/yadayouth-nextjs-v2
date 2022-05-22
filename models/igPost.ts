import { igApi } from "../api";
import { APIResponse } from "../types/apiResponse";
import { IGPost } from "../types/entities/igPost";

export const fetchIGPosts = (): APIResponse<Array<IGPost>> => {
  return igApi.get("/");
};
