export type ErrorResponse = {
  code: number;
  message?: string;
  error?: any;
};

export const ErrorResponse = (code: number, message?: string, error?: any): ErrorResponse => ({
  code,
  message,
  error
});
