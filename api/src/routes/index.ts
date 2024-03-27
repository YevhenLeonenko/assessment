import { Router } from 'express';
import products from './products';
import orders from './orders';

const router: Router = Router();

router.use('/products', products);
router.use('/orders', orders);

export default router;
