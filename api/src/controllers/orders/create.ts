import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../../utils';

export const createNew = async (_request: Request, response: Response, next: NextFunction) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return response.status(200).send();
  } catch (error) {
    return next(ErrorResponse(500, 'Failed to create new order', error));
  }
};
