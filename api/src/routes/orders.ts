import { Router } from 'express';
import { createNew } from '../controllers/orders';

const orders: Router = Router();

orders.post('/', createNew);

export default orders;
