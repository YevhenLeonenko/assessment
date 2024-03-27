import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../../utils';
import { ProductRepository } from '../../orm/repositories';
import { FindOptionsOrderValue } from 'typeorm';

export const getAll = async (request: Request, response: Response, next: NextFunction) => {
  const { limit, sort, manufacturerId } = request.query;

  if (limit && isNaN(+limit) || +limit < 0) return next(ErrorResponse(400, 'Invalid limit query parameter'));
  if (sort && !['ASC', 'DESC'].includes(sort as string)) return next(ErrorResponse(400, 'Invalid sort query parameter'));

  const options = {
    relations: {
      manufacturer: true
    },
    ...(limit ? { take: +limit } : undefined),
    ...(sort ? { order: { id: sort as FindOptionsOrderValue } } : undefined),
    ...(manufacturerId ? { where: { manufacturer: { id: +manufacturerId } } } : undefined)
  };

  try {
    const products = await ProductRepository.find(options);

    return response.status(200).send(products);
  } catch (error) {
    return next(ErrorResponse(500, 'Failed to get all products', error));
  }
};

export const getOneById = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const product = await ProductRepository.findOne({
      where: { id: +request.params.id },
      relations: { manufacturer: true }
    });

    return response.status(200).send(product);
  } catch (error) {
    return next(ErrorResponse(500, 'Failed to get product by id', error));
  }
};
