import { AxiosPromise } from "axios";

export type Paginated<TData> = {
  count: number;
  next?: number;
  previous?: number;
  results: Array<TData>;
};

export type SuccessResponse<TData> = {
  success: true;
  data: TData;
};

export type ErrorResponse = {
  success: false;
  data: null;
};

export type APIResponse<TData> = AxiosPromise<
  SuccessResponse<TData> | ErrorResponse
>;
