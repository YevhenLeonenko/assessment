import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../utils';

export const errorHandling = (error: ErrorResponse, _request: Request, response: Response, _next: NextFunction) => {
  return response.status(error.code).send(error);
}

