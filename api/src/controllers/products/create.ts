import { Request, Response, NextFunction } from 'express';
import { ProductRepository } from '../../orm/repositories';
import { ErrorResponse } from '../../utils';

export const createNew = async (request: Request, response: Response, next: NextFunction) => {
  try {
    await ProductRepository.save({
      ...request.body,
      image: `${process.env.HOST}${process.env.PORT}/assets/images/products/placeholder.jpeg`
    });

    return response.status(200).send();
  } catch (error) {
    return next(ErrorResponse(500, 'Failed to save new product to database', error));
  }
};
