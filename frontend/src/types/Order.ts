import { Product } from '@/types';
import { PaymentDetails, UserDetails } from '@/types';

export type Order = {
  products: Product[]
  userDetails: UserDetails;
  paymentDetails: PaymentDetails;
}
