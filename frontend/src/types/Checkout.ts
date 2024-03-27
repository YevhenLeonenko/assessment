import { Dispatch, SetStateAction } from 'react';

export type PaymentDetails = {
  cardholder: string;
  cardNumber: string;
  cvv: string;
  cardExpiration: string;
  billingAddress: string;
}

export type UserDetails = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
}

export type CheckoutContextType = {
  userDetails: UserDetails,
  paymentDetails: PaymentDetails
  setUserDetails: Dispatch<SetStateAction<UserDetails>>;
  setPaymentDetails: Dispatch<SetStateAction<PaymentDetails>>;
}
