import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { ManufacturerRepository, ProductRepository } from '../../orm/repositories';
import { Product } from '../../orm/entities/Product';
import { ErrorResponse } from '../../utils';
import { Manufacturer } from '../../orm/entities/Manufacturer';

export const seedProducts = async (_request: Request, response: Response, next: NextFunction) => {
  const shouldPopulateDb = await ProductRepository.count() < 1;

  if (shouldPopulateDb) {
    const manufacturersJSON = fs.readFileSync(path.join(__dirname, '../../manufacturers-mock.json')).toString();
    const productsJSON = fs.readFileSync(path.join(__dirname, '../../products-mock.json')).toString();

    try {
      const manufacturersData: Manufacturer[] = JSON.parse(manufacturersJSON);
      const productsData: Product[] = JSON.parse(productsJSON);

      const manufacturers = manufacturersData.map(manufacturer => ManufacturerRepository.create(manufacturer))
      await ManufacturerRepository.save(manufacturers);

      const products = productsData.map(product => {
        const productEntity = ProductRepository.create(product)
        return {
          ...productEntity,
          manufacturer: manufacturers[(Math.floor(Math.random() * manufacturers.length))] //Randomly select manufacturer index as reference id
        }
      });
      await ProductRepository.save(products);

      return response.status(200).send('Mocked products and manufacturers were successfully added to the database');
    } catch (error) {
      return next(ErrorResponse(500, 'Failed to seed DB with mocked data', error));
    }
  } else {
    next();
  }
};
