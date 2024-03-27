import { NextFunction, Request, Response } from 'express';
import { ProductRepository } from '../../orm/repositories';
import { ErrorResponse } from '../../utils';

export const updateOneById = async (request: Request, response: Response, next: NextFunction) => {
  try {
    await ProductRepository.update({ id: +request.params.id }, request.body);

    return response.status(200).send();
  } catch (error) {
    return next(ErrorResponse(500, 'Failed to update product', error));
  }
};
