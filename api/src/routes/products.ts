import { Router } from 'express';
import { createNew, deleteOneById, getAll, getOneById, updateOneById } from '../controllers/products';
import { seedProducts } from '../controllers/products/seed';

const products: Router = Router();

products.post('/', createNew);
products.get('/', getAll);
products.get('/:id([0-9]+)', getOneById);
products.put('/:id([0-9]+)', updateOneById);
products.delete('/:id([0-9]+)', deleteOneById);

if (process.env.NODE_ENV === 'development') {
  products.get('/seed', seedProducts);
}
export default products;
