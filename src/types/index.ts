// Shared types go here
export type ApiResponse<T> = {
  data: T;
  error?: string;
};
