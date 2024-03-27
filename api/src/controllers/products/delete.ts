import { NextFunction, Request, Response } from 'express';
import { ProductRepository } from '../../orm/repositories';
import { ErrorResponse } from '../../utils';

export const deleteOneById = async (request: Request, response: Response, next: NextFunction) => {
  try {
    await ProductRepository.delete({ id: +request.params.id });

    return response.status(200).send();
  } catch (error) {
    return next(ErrorResponse(500, 'Failed to delete product', error));
  }
};
