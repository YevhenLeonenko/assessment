import { http } from '../http';
import { Order } from '@/types';

export const orders = {
  create: (order: Order) => http.post('/orders', order)
};
