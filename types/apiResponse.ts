import { AxiosPromise } from 'axios';

export type Paginated<TData> = {
  count: number;
  next: number | null;
  previous: number | null;
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

export type APIResponsePaginated<TData> = AxiosPromise<Paginated<TData>>;
