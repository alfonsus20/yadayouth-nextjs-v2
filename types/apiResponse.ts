export type Paginated<TData> = {
  count: number;
  next?: number;
  previous?: number;
  results: Array<TData>;
};
