import { http } from '../http';
import { Product } from '@/types';
import { AxiosRequestConfig } from 'axios';

export const products = {
  getAll: (config?: AxiosRequestConfig): Promise<Product[]> => http.get('/products', config),
  getOneById: (id: number): Promise<Product> => http.get(`/products/${id}`),
};
